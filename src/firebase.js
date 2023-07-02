import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAKZeVY-Li3q5-YDkluNzEX75LO7uZZAU8",
    authDomain: "clinicalcare-21233.firebaseapp.com",
    projectId: "clinicalcare-21233",
    storageBucket: "clinicalcare-21233.appspot.com",
    messagingSenderId: "472975240650",
    appId: "1:472975240650:web:92ec3711f60fa0f56cb333",
    measurementId: "G-E0KLKNQPJ7"
  };
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);

export {app, auth, analytics}