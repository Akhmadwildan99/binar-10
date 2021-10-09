import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export const registerAPI =  (data) => (dispatch) => {
    dispatch(type= 'PRO_LOADING', value = true)
    const auth = getAuth();
    return (
        createUserWithEmailAndPassword(auth, data.email, data.password)
          .then((userCredential) => {
            const user = userCredential.user;
            console.log('user', user)
            dispatch(type= 'PRO_LOADING', value = false)
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log('error', errorCode, errorMessage);
            dispatch(type= 'PRO_LOADING', value = true)
          })  
    )
}