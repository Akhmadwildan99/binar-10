import { useState, useEffect } from "react";
import {loginAPI} from '../../redux/action/index';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Button from "../Button/button";
import {useRouter} from 'next/router';

function BodyLogin({isLogin, loginUserAPI, isLoading}) {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [errorBlank, setErrorBlank] = useState("");
  const router = useRouter()

  const handleLogin = async (e) => {
      e.preventDefault();
      try{
        if(!email || !password) {
          setErrorBlank("email dan password harus diisi!!!");
        } else {
          const data = {email, password}
          const auth = await loginUserAPI(data);
          console.log(auth);
          setTimeout(() => {
            setPassword("");
            setemail("");
          },1000)  
        }
      } catch (err) {
        console.log(err)
      }
      
  };

  useEffect(() => {
    if(isLogin === true) {
      setTimeout(() => {
        router.push('/');
      }, 2000)
    }
  }, [router, isLogin])

  return (
    <div className="body-bg">
      <div className="form-container">
        <div className="form">
          <h1>Log in</h1>
          <h1>{errorBlank}</h1>
          <form>
            <input type="text" placeholder="email" name="email" value={email} onChange={(e) => setemail(e.target.value)} required />
            <input type="password" placeholder="Password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <Button onClick={handleLogin} title={"Login"} loading={isLoading} />
          </form>
        </div>
        <div className="img-side"></div>
      </div>
    </div>
  );
}

const reduxState = (state) => ({
  isLogin: state.reducUser.isLogin,
  isLoading: state.reducUser.isLoading,
})

const reduxDispatch = (dispatch) => ({
  loginUserAPI: bindActionCreators(loginAPI, dispatch)
})

export default connect(reduxState, reduxDispatch) (BodyLogin)
