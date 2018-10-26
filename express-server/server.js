require('dotenv').config({path: '../.env'});

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const PORT = process.env.PORT;
const STRIPE_KEY = process.env.STRIPE_SKEY;
const stripe = require('stripe')(STRIPE_KEY);


app.post('/api/doPayment/', (req, res) => {
  console.log('api/doPayment called');
  return stripe.charges
    .create({
      amount: req.body.amount, // Unit: cents
      currency: 'cad',
      source: req.body.tokenId,
      description: 'Test payment',
    })
    .then(result => res.status(200).json(result));
});

app.get('/api/test', (req, res) => {
  console.log('server api/test called');
  res.send('test get');
});


app.listen(PORT, () => {
  console.log(`server listening on port: ${PORT}`);
});