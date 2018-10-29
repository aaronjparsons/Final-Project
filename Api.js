import axios from 'axios';

const MyApiClient = axios.create({
  baseURL: 'https://park-server.firebaseapp.com',
  timeout: 10000,
  headers: {'Content-Type': 'application/json'}
});

export const createCust = (tokenId, email, accessToken) => {
  console.log('create customer api called');
  const body = {
    tokenId: tokenId,
    email: email
  };
  return MyApiClient
    .post('/createCust', body)
    .then(({ data }) => {
      console.log(data);
      return data;
    })
    // .catch(error => {
    //   return Promise.reject('Error in making payment', error);
    // });
};

export const doPayment = (amount, customer) => {
  console.log('api.js doPayment called');
  const body = {
    amount: amount,
    customer: customer,
  };
  return MyApiClient
    .post('/doPayment', body)
    .then(({ data }) => {
      // console.log(data);
      return data;
    })
    // .catch(error => {
    //   return Promise.reject('Error in making payment', error);
    // });
};