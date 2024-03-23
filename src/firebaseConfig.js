import {initializeApp} from "firebase/app"

import {
  getFirestore
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCYpnAOI9S2MVP9oWJ4SqxUCWCVMJjsaqc",
    authDomain: "blog-1f9d9.firebaseapp.com",
    projectId: "blog-1f9d9",
    storageBucket: "blog-1f9d9.appspot.com",
    messagingSenderId: "441882588354",
    appId: "1:441882588354:web:5e1faf6b0b89050da6775b"
  };

  initializeApp(firebaseConfig)

  const db = getFirestore();

  export {db};