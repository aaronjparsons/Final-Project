import { 
  API_KEY,
  AUTH_DOMAIN,DATABASE_URL,
  PROJECT_ID,STORAGE_BUCKET,
  MESSAGING_SENDER_ID } from 'react-native-dotenv'
function startFirebase(firebase)  {
var config = {
  apiKey: API_KEY,
  authDomain:AUTH_DOMAIN,
  databaseURL: DATABASE_URL,
  projectId: PROJECT_ID,
  storageBucket:STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID
};
if (!firebase.apps.length) {
  firebase.initializeApp(config);

}
}

export default startFirebase;