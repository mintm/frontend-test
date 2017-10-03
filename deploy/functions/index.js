'use strict';

const functions = require('firebase-functions');
const cors = require('cors')({origin: true});
const request = require('request');

exports.aircallJobProxy = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    if (['GET', 'POST'].indexOf(req.method) === -1) {
      return res.status(405).send('Bad method');
    }
    if (!req.query.uri) {
      return res.status(400).send('Bad request');
    }

    request[req.method.toLowerCase()]('https://aircall-job.herokuapp.com' + req.query.uri, (err, response, body) => {
      return res.status(err ? 500 : 200).json(JSON.parse(body));
    });
  });
});
