import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDvIhyHgTpWXgmwsnGpNqoKvbjNnJSil4I",
  authDomain: "quora-clone-2a153.firebaseapp.com",
  projectId: "quora-clone-2a153",
  storageBucket: "quora-clone-2a153.appspot.com",
  messagingSenderId: "29403727828",
  appId: "1:29403727828:web:379483ba2e772468593841",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider };
