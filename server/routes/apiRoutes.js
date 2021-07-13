const router = require('express').Router();
const { SightingReport } = require("../models/index");


router.post('/sightingReport', (req, res) => {
  SightingReport.create({
    sharkType: req.body.sharkType,
    location: req.body.location,
    time: req.body.time,
    email: req.body.email,
    subscribe: Boolean(req.body.subscribe),
  })
  .then(newSightingReport => { 
    res.json(newSightingReport);
   }).catch(err => {
    res.status(500).json(err);
   });
});


module.exports = router;