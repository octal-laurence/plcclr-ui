import router from '../middleware/router';

const action = 'police-clearance-certification';

function newApplicationEntry(applicant) {
  return router(`/${action}/new`, applicant)
}

function editApplicationEntry(applicant) {
  return router(`/${action}/edit-application-entry`, applicant)
}

function deleteApplicationEntry(id) {
  return router(`/${action}/delete-application-entry`, {id})
}

function listCertificationEntries(filter = {}) {
  return router(`/${action}/list-entries`, filter)
}

function getApplicationEntry(id) {
  return router(`/${action}/get-application-entry`, {id})
}

function grantCertification(id) {
  return router(`/${action}/grant-certification`, {id});
}

export {
  newApplicationEntry,
  editApplicationEntry,
  deleteApplicationEntry,
  listCertificationEntries,
  getApplicationEntry,
  grantCertification,
}