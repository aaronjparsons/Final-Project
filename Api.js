import axios from 'axios';

const MyApiClient = axios.create({
  baseURL: 'https://parker-7a5ba.firebaseapp.com',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});


export const doPayment = (amount, tokenId, accessToken) => {
  console.log('api.js doPayment called');
  const body = {
    amount: amount,
    tokenId: tokenId,
  };
  // const headers = {
  //   'Content-Type': 'application/json',
  // };
  return MyApiClient
    .post('/doPayment', body)
    .then(({ data }) => {
      return data;
    })
    .catch(error => {
      return Promise.reject('Error in making payment', error);
    });
};

export const testGet = () => {
  MyApiClient.get('/test').then((res) => {
    console.log(res);
  });
}