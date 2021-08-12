const router = require('express').Router();
const { SightingReport } = require("../models/index");
const sequelize = require("../config/config")
const Client = require("@notionhq/client").Client;

const notion = new Client({ auth: process.env.NOTION_KEY })

const databaseId = process.env.NOTION_DATABASE_ID

router.post('/sightingReport', async (req, res) => {
  // SightingReport.create({
  //   sharkType: req.body.sharkType,
  //   location: req.body.location,
  //   timeOfSighting: req.body.timeOfSighting,
  //   email: req.body.email,
  //   subscribe: Boolean(req.body.subscribe),
  //   description: req.body.description,
  // })
  // .then(newSightingReport => {
  //   res.json(newSightingReport);
  // }).catch(err => {
  //   res.status(500).json(err);
  // });
  const response =
    await notion.request({
      path: "pages",
      method: "POST",
      body: {
        parent: { database_id: databaseId },
        properties: {
          title: {
            title: [
              {
                "text": {
                  "content": req.body.location
                }
              }
            ]
          },
          'Time of Sighting': {
            type: 'text',
            rich_text: [
              {
                text: {
                  content: req.body.timeOfSighting,
                },
              },
            ],
          },
          'Shark Type': {
            type: 'text',
            rich_text: [
              {
                text: {
                  content: req.body.sharkType.alt,
                },
              },
            ],
          },
          'Email': {
            type: 'email',
            email: req.body.email
          },
          'Subscribe': {
            type: 'checkbox',
            checkbox: req.body.subscribe
          }
        }
      },
    })
  res.json(response);
});


router.get('/sightingData', async (req, res) => {
  SightingReport.findAll({
    attributes: ["location"]
  }).then(newSightingReport => {
    res.json(newSightingReport);
  }).catch(err => {
    res.status(500).json(err);
  });
})

module.exports = router;