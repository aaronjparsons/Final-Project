const functions = require('firebase-functions');
const express = require('express');

const app = express();

app.get('/test', (req, res) => {
  res.send('Hello from test route');
});

exports.app = functions.https.onRequest(app);