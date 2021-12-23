// import firebase from "firebase/app";
// import "firebase/firestore";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// Required for side-effects
require("firebase/firestore");


const firebaseConfig = {
    apiKey: "AIzaSyACyE6b-xD0sX6ng-7DjKHEAtlyYtdE0rQ",
    authDomain: "sweettooth-e69a3.firebaseapp.com",
    projectId: "sweettooth-e69a3",
    storageBucket: "sweettooth-e69a3.appspot.com",
    messagingSenderId: "656211590264",
    appId: "1:656211590264:web:bf2abb3c5a770ac232018d"
  };
// const firebaseConfig = {
//     apiKey: "AIzaSyCk6fz7nKNj2R2iV05hGwxkf4TSS4ljyKM",
//     authDomain: "vuexcart.firebaseapp.com",
//     projectId: "vuexcart",
//     storageBucket: "vuexcart.appspot.com",
//     messagingSenderId: "213086041580",
//     appId: "1:213086041580:web:49228df62bf3f4ee283cc9",
//     measurementId: "G-66R89DJPXW"
// };

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
//   const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export default firebase;  
  export { 
      db,
      auth,
      timestamp };
//   export default firebaseApp.firestore();