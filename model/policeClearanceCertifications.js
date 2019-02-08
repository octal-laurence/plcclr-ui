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

function grantCertificate(application) {
  return router(`/${action}/grant-certificate`, application);
}

function getCertificate(id) {
  return router(`/${action}/get-certificate`, {id}); 
}

function listCertificates(filter = {}) {
  return router('/post-test', filter);
}

export {
  newApplicationEntry,
  editApplicationEntry,
  deleteApplicationEntry,
  listCertificationEntries,
  getApplicationEntry,
  grantCertificate,
  getCertificate,
  listCertificates,
}