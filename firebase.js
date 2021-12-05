import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCmYchKbuW41S68pb9jPrb-zjieF96Crd8",
  authDomain: "newagent-6a8a7.firebaseapp.com",
  databaseURL: "https://newagent-6a8a7.firebaseio.com",
  projectId: "newagent-6a8a7",
  storageBucket: "newagent-6a8a7.appspot.com",
  messagingSenderId: "816246532076",
  appId: "1:816246532076:web:c61da18a4fb403be4702c9",
};
// Initialize Firebase

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const storage = getStorage(app);

export {app,database,storage};
