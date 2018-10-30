import axios from 'axios';
import {GOOGLE_MAPS_API} from 'react-native-dotenv'

const MyApiClient = axios.create({
  baseURL: 'https://park-server.firebaseapp.com',
  timeout: 10000,
  headers: {'Content-Type': 'application/json'}
});

const googleApi = axios.create({
  baseURL:'https://maps.googleapis.com/maps/api/geocode',
  timeout: 5000,
  headers: {'Content-Type': 'application/json'}
});

export const getLocation = (parsedAddress) => {
  console.log("inside getLocation");
  return googleApi.get(`/json?address=${parsedAddress}&key=${GOOGLE_MAPS_API }`).then(function(response){
    console.log(response.data.results[0].formatted_address);
    console.log(response.data.results[0].geometry.location);
  })
}

export const createCust = (tokenId, accessToken) => {
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