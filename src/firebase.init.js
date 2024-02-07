// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDaccuHzNepo_VUdaIu-I5Vuzt8b8wd6Rc",
  authDomain: "twitter-clone-365a3.firebaseapp.com",
  projectId: "twitter-clone-365a3",
  storageBucket: "twitter-clone-365a3.appspot.com",
  messagingSenderId: "727721572624",
  appId: "1:727721572624:web:c105c172a69fdf832e0d95",
  measurementId: "G-GX1JE6N9Q4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);