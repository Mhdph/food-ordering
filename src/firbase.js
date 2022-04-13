import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDOMXiz5KBaPfRQslLZjjJAHdmjCUc8Eo4",
  authDomain: "resturantapp-7db96.firebaseapp.com",
  databaseURL: "https://resturantapp-7db96-default-rtdb.firebaseio.com",
  projectId: "resturantapp-7db96",
  storageBucket: "resturantapp-7db96.appspot.com",
  messagingSenderId: "576621673503",
  appId: "1:576621673503:web:5e446c911511606ea8a92a",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
