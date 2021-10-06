
import {useState, useEffect} from 'react'
import {setSignUp} from '../../firebase/firebase.config'

export default function Bodyregister() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [register, setRegister] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if(email !== "" && password !== "") {
                await setSignUp(email, password);
                setRegister(true)
            } 
        } catch (err) {
            setRegister(false);
            console.log(err);
        }
       
    }

    useEffect(() => {
        if(register) {
            setEmail("");
            setPassword("");
        }
    }, [register]);

    return (
        <div className="body-bg">
            <div className="form-container">
                <div className="form">
                    <h1>Register</h1>
                    <form >
                        <input 
                        type="text" 
                        placeholder="Email" 
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} 
                        required />
                        <input 
                        type="password" 
                        placeholder="Password" 
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} 
                        required />
                        <button 
                        className="button-register"
                        type="submit" 
                        onClick={handleSubmit}>
                            Register
                        </button>
                    </form>
                </div>
                <div className="img-side"></div>
            </div>
        </div>
    )
}
