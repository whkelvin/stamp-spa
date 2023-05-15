import { initializeApp } from "firebase/app";
import * as constants from "../configs/constants";
import { readable } from "svelte/store";

const firebaseConfig = {
  apiKey: constants.FIREBASE_API_KEY,
  authDomain: constants.FIREBASE_AUTH_DOMAIN,
  projectId: constants.FIREBASE_PROJECT_ID,
  storageBucket: constants.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: constants.FIREBASE_MESSAGING_SENDER_ID,
  appId: constants.FIREBASE_APP_ID,
};

export const firebaseApp = readable(initializeApp(firebaseConfig));
