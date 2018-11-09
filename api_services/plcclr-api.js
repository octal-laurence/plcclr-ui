class Plcclr {
  constructor(opts) {
    this._baseURL = "http://localhost:8000/PoliceClearanceCertification";
    this._apiKey = "Wwdg29Kvf2SE7Jb7aN3tXIkh9caXFCSZ7RQ7eqrnG7Gh6/DqxNayAc9jFFBEh7SuOZ2p0MH3DC8o1eWSvW9SmcpW1+Arq4Ims9Fon+AIL/i9Zp1eFkWrOiMche5D2t8Ur8+z5LYt5xME/ynPlXUDonww2tISFsEOoBVCSURaeCE=";
  }
  request(path, data = {}) {
    return [
      `${this._baseURL}/${path}`, {
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': this._apiKey
        }  
      }
    ];
  }
  post([url, opts]) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        ...opts,
        method: 'POST'
      })
      .then(response => response.json())
      .then(({data}) => resolve(data))
      .catch(err => reject(err));
    });
  }
  newApplicantEntry(applicant) {
    return this.post(
      this.request('new', {
        ...applicant,
        machineId: 'DDDDD',
        postalCode: 'DDDDD',
        station: 'DDDDD',
        stationName: 'DDDDD'
      })
    );
  }
  getApplicantEntry(id) {
    return this.post(
      this.request('getRecord', {id})
    );
  }
  list(filter = {}) {
    return this.post(
      this.request('list', {
        ...filter,
        pgLimit: 20,
      })
    );
  }
}

export default Plcclr;