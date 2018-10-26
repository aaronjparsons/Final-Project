const functions = require('firebase-functions');
const express = require('express');

const app = express();
const stripe = require('stripe')(functions.config().stripe.token);

app.post('/createCust/', (req, res) => {
  return stripe.customers.create({
    email: 'YOUR_EMAILtest@test.com', //req.body.email
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
      source: req.body.tokenId,
      description: 'Test payment',
    })
    .then(result => res.status(200).json(result));
});

exports.app = functions.https.onRequest(app);
