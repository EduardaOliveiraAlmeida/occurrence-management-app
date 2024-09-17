// services/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDHKtR81gAGq3OxVmVCIFWC8yxhWIt4xvs",
  authDomain: "gestao-condominios-c49da.firebaseapp.com",
  projectId: "gestao-condominios-c49da",
  storageBucket: "gestao-condominios-c49da.appspot.com",
  messagingSenderId: "100682655571",
  appId: "1:100682655571:web:f3be3889dcbfbde60663a6",
  measurementId: "G-B4C4DYJ9JS"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
