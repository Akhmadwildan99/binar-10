import {useState, useEffect} from 'react'
import Button from '../Button/button';
import {registerAPI} from '../../redux/action'
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';


function Bodyregister({isLoading, registerAPI}) {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [register, setRegister] = useState(false);



    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if(email !== "" && password !== "") {
                const data ={email, password};
                const res = await registerAPI(data);
                console.log(res);
                setRegister(true);
                setTimeout(() => {
                    setEmail("");
                    setPassword("");
                    setRegister(false);
                }, 3000) 
            } 
        } catch (err) {
            setRegister(false);
            console.log(err);
        }
       
    }
    useEffect(() => {
        if(register === true) {
            setEmail("");
            setPassword("");
        }
    }, [register]);

    return (
        <div className="body-bg">
            <div className="form-container">
                <div className="form">
                    <h1>Register</h1>
                    {register && <h3>Register Berhasil ...!!!</h3>}
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
                        <Button onClick={handleSubmit} title={"Register"} loading={isLoading} />
                    </form>
                </div>
                <div className="img-side"></div>
            </div>
        </div>
    )
}

const reduxState = (state) => ({
    isLoading: state.reducUser.isLoading
});

const reduxDispatch = (dispatch) => ({
    registerAPI: bindActionCreators(registerAPI, dispatch)
})

export default connect(reduxState, reduxDispatch) (Bodyregister)
