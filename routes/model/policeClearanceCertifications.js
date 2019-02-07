const express = require('express');
const router = express.Router();

const apiPlcclr = require('../../api_services/plcclr-certification'); 

router.post('/new', (req, res, next) => {
  const {body} = req;
  const plcclr = new apiPlcclr();
  
  plcclr.newApplicantionEntry(body)
  .then(({data}) => res.status(200).json({ data: data }))
  .catch(err => res.status(500).json({ error: err.message }));
});

router.post('/edit-application-entry', (req, res, next) => {
  const {body} = req;
  const plcclr = new apiPlcclr();

  plcclr.editApplicationEntry(body)
  .then(({data}) => res.status(200).json({ data: data }))
  .catch(err => res.status(500).json({ error: err.message }));
});

router.post('/delete-application-entry', (req, res, next) => {
  const {body} = req;
  const plcclr = new apiPlcclr();

  plcclr.deleteApplicationEntry(body)
  .then(({data}) => res.status(200).json({ data: data }))
  .catch(err => res.status(500).json({ error: err.message }));
});

router.post('/get-application-entry', (req, res, next) => {
  const {body} = req;
  const plcclr = new apiPlcclr();

  plcclr.getApplicationEntry(body.id)
  .then(({data}) => res.status(200).json({ data: data }))
  .catch(err => res.status(500).json({ error: err.message }));
});

router.post('/list-entries', (req, res, next) => {
  const {body} = req;
  const plcclr = new apiPlcclr();

  plcclr.list(body)
  .then(({data}) => res.status(200).json({ data: data }))
  .catch(err => res.status(500).json({ error: err.message }));
});

router.post('/grant-certification', (req, res, next) => {
  const {body} = req;
  const plcclr = new apiPlcclr();

  plcclr.grantCertificate(body)
  .then(({data}) => res.status(200).json({ data: data }))
  .catch(err => res.status(500).json({ error: err.message }));
});

module.exports = router;