const functions = require('firebase-functions');
const express = require('express');
require('dotenv').config()
const app = express();
const stripe = require('stripe')(functions.config().stripe.token);

const googleMapsClient = require('@google/maps').createClient({
  key: process.env.GOOGLE_MAPS_API
});
app.post('/createCust/', (req, res) => {
  return stripe.customers.create({
    email: req.body.email,
    source: req.body.tokenId
  })
  .then(result => res.status(200).json(result))
});

app.post('/doPayment/', (req, res) => {
  console.log('/doPayment called');
  return stripe.charges
    .create({
      amount: req.body.amount, // Unit: cents
      currency: 'cad',
      customer: req.body.customer,
      description: 'Test payment',
    })
    .then(result => res.status(200).json(result));
});

app.post('/getLocation/', (req, res) => {
  console.log('/getLocation called');
  return googleMapsClient.geocode({
    address: req.address
  }, function(err, response) {
    if (!err) {
      console.log(response.json.results);
    }
  }).then(result => res.status(200).json(result));
});
exports.app = functions.https.onRequest(app);
