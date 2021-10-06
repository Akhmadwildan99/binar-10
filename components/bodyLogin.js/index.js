import { useState } from "react";
import { setSignIn } from '../../firebase/firebase.config';

export default function BodyLogin() {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [errorBlank, setErrorBlank] = useState("");


  const handleLogin = async (e) => {
      e.preventDefault();
      if(!email || !password) {
        setErrorBlank("Email dan password wajib di isi");
      } else {
          await setSignIn(email, password);
      }
  };
  return (
    <div className="body-bg">
      <div className="form-container">
        <div className="form">
          <h1>Log in</h1>
          <h1>{errorBlank}</h1>
          <form>
            <input type="text" placeholder="email" name="email" value={email} onChange={(e) => setemail(e.target.value)} required />
            <input type="password" placeholder="Password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <button className="button-register" type="submit" onClick={handleLogin}>
              Login
            </button>
          </form>
        </div>
        <div className="img-side"></div>
      </div>
    </div>
  );
}
