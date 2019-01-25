import router from '../middleware/router';

const action = 'police-clearance-certification';

function newApplicantionEntry(applicant) {
  return router(`/${action}/new`, applicant)
}

function listCertificationEntries(filter = {}) {
  return router(`/${action}/list-entries`, filter)
}

function getApplicationEntry(id) {
  return router(`/${action}/get-application-entry`, {id})
}

export {
  newApplicantionEntry,
  listCertificationEntries,
  getApplicationEntry,
}