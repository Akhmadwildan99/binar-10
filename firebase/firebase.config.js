import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import {getStorage} from 'firebase/storage'


const firebaseConfig = {
  apiKey: "AIzaSyDy9SoIVdX-1fZSGbdko_rOLvXbVwGHm0U",
  authDomain: "server-binar-chapter-10.firebaseapp.com",
  projectId: "server-binar-chapter-10",
  storageBucket: "server-binar-chapter-10.appspot.com",
  messagingSenderId: "210538881061",
  appId: "1:210538881061:web:7c4d6a9c6c57197f399fcc"

};

const app = initializeApp(firebaseConfig);
const storageFire = getStorage(app);
const db = getFirestore(app);
export {app, storageFire, db}

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
    const res = await signInWithEmailAndPassword(auth, email, password);
    const response = res.user.uid;
    return response;
}

// export async function setAvatar(image, storageFire) {
//   const storage = storageFire
//   const storageRef = ref(storage, image.name);

//   // 'file' comes from the Blob or File API
//   const upload = await uploadBytes(storageRef, image);
//   console.log(upload)
//   const url = await getDownloadURL(storageRef)
//   return url
// }