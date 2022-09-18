import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAP6bdeOuG7gRGXKTllDEedP1dSYDyaT18",
  authDomain: "auth-development-bb685.firebaseapp.com",
  projectId: "auth-development-bb685",
  storageBucket: "auth-development-bb685.appspot.com",
  messagingSenderId: "329558002241",
  appId: "1:329558002241:web:f8e991aef928b4d6c0d4c0",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };
