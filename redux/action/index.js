import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {app} from '../../firebase/firebase.config';
import {PRO_LOADING} from '../reducer/typeAction.js';

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

export {registerAPI};