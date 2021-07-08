const router = require('express').Router();
const { SightingReport } = require("../models/index");


router.post('/sightingReport', (req, res) => {
  SightingReport.create({sharkType: req.body.sharkType})
  .then(newSightingReport => { 
    res.json(newSightingReport);
   }).catch(err => {
    res.status(500).json(err);
   });
});


module.exports = router;