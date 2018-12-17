const express = require('express');
const router = express.Router();

const apiPlcclr = require('../../api_services/plcclr-api'); 

router.post('/new', (req, res, next) => {
  const {body} = req;
  const plcclr = new apiPlcclr();
  plcclr.newApplicantEntry(body)
  .then(({data}) => res.status(200).json({ data: data }))
  .catch(err => res.status(500).json({ error: err.message }));
});

router.post('/getRecord', (req, res, next) => {
  const {body} = req;
  const plcclr = new apiPlcclr();
  plcclr.getApplicantEntry(body.id)
  .then(({data}) => res.status(200).json({ data: data }))
  .catch(err => res.status(500).json({ error: err.message }));
});

router.post('/list', (req, res, next) => {
  const {body} = req;
  const plcclr = new apiPlcclr();
  plcclr.list(body)
  .then(({data}) => res.status(200).json({ data: data }))
  .catch(err => res.status(500).json({ error: err.message }));
});

module.exports = router;