import {useState, useEffect} from 'react'
import {setSignUp} from '../../firebase/firebase.config';
// import {useRouter} from 'next/router';
import Button from '../Button/button';
import connect from 'react-redux';


function Bodyregister() {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [register, setRegister] = useState(false);

    // const router = useRouter();


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if(email !== "" && password !== "") {
                const res = await setSignUp(email, password);
                if(res) {
                    setEmail("")
                    setPassword("")
                }
                setRegister(true);
                // router.push('/login');
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
                        <Button onClick={handleSubmit} title="Register" />
                    </form>
                </div>
                <div className="img-side"></div>
            </div>
        </div>
    )
}



export default  Bodyregister
