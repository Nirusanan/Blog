import {initializeApp} from "firebase/app"

import {
  getFirestore
} from 'firebase/firestore'

const firebaseConfig = {
    //your configuration is here
  };

  initializeApp(firebaseConfig)

  const db = getFirestore();

  export {db};