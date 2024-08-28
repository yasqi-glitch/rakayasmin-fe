import { initializeApp } from "firebase/app"
import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDLW8Keh_Q3leM4AKHU6jH2EjCnNa0L2w0",
    authDomain: "clone-news-yasmin.firebaseapp.com",
    projectId: "clone-news-yasmin",
    storageBucket: "clone-news-yasmin.appspot.com",
    messagingSenderId: "132056437457",
    appId: "1:132056437457:web:7d968935ccd5dae48d6bf0"
  };

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();