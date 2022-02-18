// Import the functions you need from the SDKs you need
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_J9prtO0tgXl5li5Ee6X1JVBVpmdEzPc",
  authDomain: "bootcamp-week3-assg.firebaseapp.com",
  projectId: "bootcamp-week3-assg",
  storageBucket: "bootcamp-week3-assg.appspot.com",
  messagingSenderId: "885933451677",
  appId: "1:885933451677:web:3dbaad028feed4e16ba774",
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();
export { auth };
