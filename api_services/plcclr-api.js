const config = require('config');
const rp = require('request-promise');

class Plcclr {
  constructor(opts) {
    // this._baseURL = "http://localhost:8000/PoliceClearanceCertification";
    this._baseURL = config.get('plcclr.baseURL');
    this._apiKey = config.get('plcclr.apiKey');
  }
  request(path, data = {}) {
    return [
      `${this._baseURL}/${path}`, {
        json: true,
        body: data,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': this._apiKey
        }  
      }
    ];
  }
  post([url, opts]) {
    return rp({
      method: 'POST',
      uri: url,
      ...opts,
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

module.exports = Plcclr;