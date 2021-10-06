import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDy9SoIVdX-1fZSGbdko_rOLvXbVwGHm0U",
  authDomain: "server-binar-chapter-10.firebaseapp.com",
  projectId: "server-binar-chapter-10",
  storageBucket: "server-binar-chapter-10.appspot.com",
  messagingSenderId: "210538881061",
  appId: "1:210538881061:web:7c4d6a9c6c57197f399fcc"

};

const app = initializeApp(firebaseConfig);

export async function setSignUp(email, password) {
    const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log('user', user)
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('error', errorCode, errorMessage);
    });
}

export async function setSignIn(email, password) {
    const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user);
      localStorage.setItem(JSON.stringify(user.uid));
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('error', errorCode, errorMessage);
    });
}