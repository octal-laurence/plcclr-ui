const config = require('config');
const rp = require('request-promise');

class Plcclr {
  constructor(opts) {
    this._baseURL = config.get('plcclr.baseURL');
    this._apiKey = config.get('plcclr.apiKey');
  }
  request(path, data = {}) {
    return [
      `${this._baseURL}/certification/${path}`, {
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
  newApplicantionEntry(applicant) {
    return this.post(
      this.request('newApplicationEntry', {
        ...applicant,
        machineId: 'DDDDD',
        postalCode: 'DDDDD',
        station: 'DDDDD',
        stationName: 'DDDDD'
      })
    );
  }
  editApplicationEntry(applicant) {
    return this.post(
      this.request('editApplicationEntry', {
        ...applicant,
        machineId: 'DDDDD',
        postalCode: 'DDDDD',
        station: 'DDDDD',
        stationName: 'DDDDD'
      })
    );
  }
  deleteApplicationEntry(ref) {
    return this.post(
      this.request('deleteApplicationEntry', ref)
    );
  }
  getApplicationEntry(id) {
    return this.post(
      this.request('getApplicationEntry', {id})
    );
  }
  listApplicationEntry(filter = {}) {
    return this.post(
      this.request('listApplicationEntries', {
        ...filter,
        pgLimit: 20,
      })
    );
  }
  grantCertificate(application) {
    return this.post(
      this.request('grantCertificate', application)
    );
  }
  getCertificate(id) {
    return this.post(
      this.request('getCertificate', {id})
    );
  }
  listCertificates(filter={}) {
    return this.post(
      this.request('listCertificates', filter)
    );
  }
}

module.exports = Plcclr;