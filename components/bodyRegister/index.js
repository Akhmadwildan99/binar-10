import {useState, useEffect} from 'react'
// import {setSignUp} from '../../firebase/firebase.config';
// import {useRouter} from 'next/router';
import Button from '../Button/button';
import {registerAPI} from '../../redux/action'
// import {useSelector, useDispatch} from 'react-redux';
import { connect } from 'react-redux';


function Bodyregister({isLoading, registerAPI}) {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [register, setRegister] = useState(false);

    // const router = useRouter();
    // const loading = useSelector(state => state.isLoading)
    // const dispatch = useDispatch();

    const handleSubmit =(e) => {
        e.preventDefault();
        try {
            if(email !== "" && password !== "") {
                const data ={email, password};
                // const res = await dispatch(registerAPI(data))
                const res =  registerAPI(data)
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
                        <Button onClick={handleSubmit} title="Register" loading={isLoading} />
                    </form>
                </div>
                <div className="img-side"></div>
            </div>
        </div>
    )
}

const reduxState = (state) => ({
    isLoading: state.isLoading
});

const reduxDispatch = (dispatch) => ({
    registerAPI: (data) => dispatch(registerAPI(data))
})

export default connect(reduxState, reduxDispatch) (Bodyregister)
