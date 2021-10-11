import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {app, db} from '../../firebase/firebase.config';
import { doc, setDoc } from "firebase/firestore";
import {PRO_LOADING, PRO_LOGIN, CHANGE_USER} from '../reducer/typeAction.js';



const registerAPI =  (data) => (dispatch) => {
    return new Promise((resolve, reject) => {
      dispatch({ type: PRO_LOADING, value : true})
      const auth = getAuth(app);
      createUserWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log('user', user)
          dispatch({ type: PRO_LOADING, value : false})
          resolve();
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log('error', errorCode, errorMessage);
          dispatch({ type: PRO_LOADING, value : false})
          reject();
        })  
    })
}

const loginAPI = (data) => (dispatch) => {
  dispatch({ type: PRO_LOADING, value : true})
  new Promise((resolve, reject) => {
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((res) => {
        const dataUser = {
          user: res.user.email,
          uid: res.user.uid
        }
        dispatch({ type: PRO_LOADING, value :false});
        dispatch({ type: PRO_LOGIN, value :true});
        dispatch({ type: CHANGE_USER, value :dataUser});
        resolve()
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('error', errorCode, errorMessage);
        dispatch({ type: PRO_LOADING, value : false});
        dispatch({ type:PRO_LOGIN, value: false})
        reject();
      })

  })
}

const submitPlayer = (userId,data) => (dispatch) => {
  dispatch({type:PRO_LOADING, value : true});
  new Promise((resolve, reject) => {
    setDoc(doc(db, "player-game", userId ), data)
      .then((res) => {
        console.log(res);
        dispatch({ type:PRO_LOADING, value : false});
        resolve();
      })
      .catch((err) => {
        console.log('error', err);
        dispatch({ type:PRO_LOADING, value : false});
        reject();
      })
  })
}



export {registerAPI, loginAPI, submitPlayer};