// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyACyEGxeskqZUr96IOHUD_5Z4Na28LULU8",
    authDomain: "x-com-5415a.firebaseapp.com",
    projectId: "x-com-5415a",
    storageBucket: "x-com-5415a.appspot.com",
    messagingSenderId: "874462380555",
    appId: "1:874462380555:web:61e7df5477efce3473bd0e",
    measurementId: "G-YKT46LTMQH"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);