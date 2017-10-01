'use strict';

const functions = require('firebase-functions');
const cors = require('cors')({origin: true});
const request = require('request');

exports.aircallJobProxy = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    if (!req.query.uri) {
      return res.status(400).send('Bad request');
    }

    request('https://aircall-job.herokuapp.com' + req.query.uri, function(err, response, body) {
      return res.status(err ? 500 : 200).json(JSON.parse(body));
    });
  });
});
