import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAWsfKNhKVWpF_fHtxKd23lMU2NC420NWU",
  authDomain: "hspantryapp-e74e4.firebaseapp.com",
  projectId: "hspantryapp-e74e4",
  storageBucket: "hspantryapp-e74e4.appspot.com",
  messagingSenderId: "328505512956",
  appId: "1:328505512956:web:68c837a9ce263378419879"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };