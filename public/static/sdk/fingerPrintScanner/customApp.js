var test = null;

var state = document.getElementById('content-capture');

var myVal = ""; // Drop down selected value of reader 
var disabled = true;
var startEnroll = false;

var currentFormat = Fingerprint.SampleFormat.PngImage;
var deviceTechn = {
               0: "Unknown",
               1: "Optical",
               2: "Capacitive",
               3: "Thermal",
               4: "Pressure"
            }

var deviceModality = {
               0: "Unknown",
               1: "Swipe",
               2: "Area",
               3: "AreaMultifinger"
            }

var deviceUidType = {
               0: "Persistent",
               1: "Volatile"
            }

var FingerprintSdkTest = (function () {
    function FingerprintSdkTest() {
        var _instance = this;
        this.operationToRestart = null;
        this.acquisitionStarted = false;
        this.sdk = new Fingerprint.WebApi;
        this.sdk.onDeviceConnected = function (e) {
            // Detects if the deveice is connected for which acquisition started
            showMessage("Scan your finger");
        };
        this.sdk.onDeviceDisconnected = function (e) {
            // Detects if device gets disconnected - provides deviceUid of disconnected device
            showMessage("Device disconnected");
        };
        this.sdk.onCommunicationFailed = function (e) {
            // Detects if there is a failure in communicating with U.R.U web SDK
            showMessage("Communinication Failed")
        };
        this.sdk.onSamplesAcquired = function (s) {
            // Sample acquired event triggers this function
            sampleAcquired(s);
        };
        this.sdk.onQualityReported = function (e) {
            // Quality of sample aquired - Function triggered on every sample acquired
            const qualityInputBox = document.getElementById("qualityInputBox");
            qualityInputBox.value = Fingerprint.QualityCode[(e.quality)];
        }

    }

    FingerprintSdkTest.prototype.startCapture = function () {
        if (this.acquisitionStarted) // Monitoring if already started capturing
            return;
        var _instance = this;
        showMessage("");
        this.operationToRestart = this.startCapture;
        this.sdk.startAcquisition(currentFormat, myVal).then(function () {
            _instance.acquisitionStarted = true;
        }, function (error) {
            showMessage(error.message);
        });
    };
    FingerprintSdkTest.prototype.stopCapture = function () {
        if (!this.acquisitionStarted) //Monitor if already stopped capturing
            return;
        var _instance = this;
        showMessage("");
        this.sdk.stopAcquisition().then(function () {
            _instance.acquisitionStarted = false;
        }, function (error) {
            showMessage(error.message);
        });
    };

    FingerprintSdkTest.prototype.getInfo = function () {
        var _instance = this;
        return this.sdk.enumerateDevices();
    };

    FingerprintSdkTest.prototype.getDeviceInfoWithID = function (uid) {
        var _instance = this;
        return  this.sdk.getDeviceInfo(uid);
    };

    
    return FingerprintSdkTest;
})();

function sampleAcquired(s){   
   if(currentFormat == Fingerprint.SampleFormat.PngImage){   
   // If sample acquired format is PNG- perform following call on object recieved 
   // Get samples from the object - get 0th element of samples as base 64 encoded PNG image         
     localStorage.setItem("imageSrc", "");                
     var samples = JSON.parse(s.samples);            
     localStorage.setItem("imageSrc", "data:image/png;base64," + Fingerprint.b64UrlTo64(samples[0]));
 
     if(document.getElementById("content-capture")){ 
         var vDiv = document.getElementById('imagediv');
         var image = document.createElement("img");

         image.id = "image";
         image.src = localStorage.getItem("imageSrc");
         image.height = vDiv.clientHeight;
         image.width = vDiv.clientWidth;

         vDiv.innerHTML = "";
         vDiv.appendChild(image);
     }

   }

   else if(currentFormat == Fingerprint.SampleFormat.Raw){  
     // If sample acquired format is RAW- perform following call on object recieved 
     // Get samples from the object - get 0th element of samples and then get Data from it.
     // Returned data is Base 64 encoded, which needs to get decoded to UTF8,
     // after decoding get Data key from it, it returns Base64 encoded raw image data
     localStorage.setItem("raw", "");
     var samples = JSON.parse(s.samples);
     var sampleData = Fingerprint.b64UrlTo64(samples[0].Data);
     var decodedData = JSON.parse(Fingerprint.b64UrlToUtf8(sampleData));
     localStorage.setItem("raw", Fingerprint.b64UrlTo64(decodedData.Data));

     var vDiv = document.getElementById('imagediv').innerHTML = '<div id="animateText" style="display:none">RAW Sample Acquired <br>'+Date()+'</div>';
     setTimeout('delayAnimate("animateText","table-cell")',100); 

   }

   else if(currentFormat == Fingerprint.SampleFormat.Compressed){  
     // If sample acquired format is Compressed- perform following call on object recieved 
     // Get samples from the object - get 0th element of samples and then get Data from it.
     // Returned data is Base 64 encoded, which needs to get decoded to UTF8,
     // after decoding get Data key from it, it returns Base64 encoded wsq image
     localStorage.setItem("wsq", "");
     var samples = JSON.parse(s.samples);
     var sampleData = Fingerprint.b64UrlTo64(samples[0].Data);
     var decodedData = JSON.parse(Fingerprint.b64UrlToUtf8(sampleData));
     localStorage.setItem("wsq","data:application/octet-stream;base64," + Fingerprint.b64UrlTo64(decodedData.Data));

     var vDiv = document.getElementById('imagediv').innerHTML = '<div id="animateText" style="display:none">WSQ Sample Acquired <br>'+Date()+'</div>';
     setTimeout('delayAnimate("animateText","table-cell")',100);   

   }

   else if(currentFormat == Fingerprint.SampleFormat.Intermediate){  
     // If sample acquired format is Intermediate- perform following call on object recieved 
     // Get samples from the object - get 0th element of samples and then get Data from it.
     // It returns Base64 encoded feature set
     localStorage.setItem("intermediate", "");
     var samples = JSON.parse(s.samples);
     var sampleData = Fingerprint.b64UrlTo64(samples[0].Data);
     localStorage.setItem("intermediate", sampleData);

     var vDiv = document.getElementById('imagediv').innerHTML = '<div id="animateText" style="display:none">Intermediate Sample Acquired <br>'+Date()+'</div>';
     setTimeout('delayAnimate("animateText","table-cell")',100); 

   }

   else{
     alert("Format Error");
   }    
}

function assignFormat(){
   currentFormat = "";
   with(document.myForm){
      for(i = 0; i < elements.length; i++) {
         if(elements[i].checked == true){
            if(elements[i].name == "Raw"){
              currentFormat = Fingerprint.SampleFormat.Raw;
            }
            if(elements[i].name == "Intermediate"){
              currentFormat = Fingerprint.SampleFormat.Intermediate;
            }
            if(elements[i].name == "Compressed"){
              currentFormat = Fingerprint.SampleFormat.Compressed;
            }
            if(elements[i].name == "PngImage"){
              currentFormat = Fingerprint.SampleFormat.PngImage;
            }
         }
      }
   }
}

function showMessage(message){
    var _instance = this;
    //var statusWindow = document.getElementById("status");
    // x = state.querySelectorAll("#status");
    // if(x.length != 0){
    //     x[0].innerHTML = message;
    // }
    console.log(message);
}

(function getDeviceRunning() {
   localStorage.clear();
   test = new FingerprintSdkTest();
   test.getInfo()
   // .then(devices => test.startCapture())
   .then(result => console.log(result))
   .catch(err => {
      console.log(err);
   });
})();

function onStart() {
   if(currentFormat == ""){
     alert("Please select a format.")
   }else{        
     test.startCapture();
   }
}

function onStop() {
   test.stopCapture();
}

window.REGIONFINGERPRINT = {
   onStart,
   onStop,
   startEnroll,

   currentFormat,
   deviceTechn,
   deviceModality,
   deviceUidType,

   localStorage,
   FingerprintSdkTest,
}