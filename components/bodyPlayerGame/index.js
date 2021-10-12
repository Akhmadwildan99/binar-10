import {useState, useEffect} from 'react';
import { storageFire} from '../../firebase/firebase.config';
import {  ref, uploadBytes, getDownloadURL} from "firebase/storage";
import {submitPlayer} from '../../redux/action/index';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Button from '../Button/button';
import {useRouter} from 'next/router';

function BodyPlayerGame({isLogin, user, submitPlayer, isLoading}) {
    const [name, setName] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [error, setError] = useState("");
    const router =  useRouter();

    const handleImage = async (e) => {
        const select = e.target.files[0];
        try {
            const storage = storageFire
            const storageRef = ref(storage, select.name);
            
            // 'file' comes from the Blob or File API
            const upload = await uploadBytes(storageRef,select);
            console.log(upload)
            const url = await getDownloadURL(storageRef)
            console.log(url)
            setImageUrl(url);
            
        } catch (err) {
            console.log("error" ,err);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(name !== "" && imageUrl !== "") {
            const userId = user.uid
            const data = {
                email: user.user,
                name: name,
                imageUrl: imageUrl,
                score: 0,
                play: 0
            }
            try {
                const res = await submitPlayer(userId, data);
                console.log(res);
                setTimeout(() => {
                    router.push('/');
                }, 2000)
            
            } catch (err) {
                console.error("Error adding document: ", err);
            }
            setError(false)
        } else {
            setError(true)
        }
        
    }

    useEffect(() => {
        if(isLogin === false) {
            router.push('/login');
        }
    }, [router, isLogin])


    return (
        <div className="body-bg">
            <div className="form-container">
                <div className="form">
                    <h1>Input Player Data</h1>
                    {error && <h2>Isi form terlebih dahulu!!!</h2>}
                    <form >
                        <label className="label-avatar">
                            <input className="form-avatar"type="file" onChange={handleImage}/>
                            <figure className="figure-personal">
                                <img className="personal-avatar" src={imageUrl ? imageUrl : "/images/avatar.png"} alt="avatar"/>
                            </figure>
                        </label>
                        <input 
                        type="text" 
                        placeholder="Input your name" 
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)} 
                        required />
                        <Button onClick={handleSubmit} title={"Submit Data"} loading={isLoading}/>
                        {/* <button 
                        className="button-register"
                        type="submit"
                        onClick={handleSubmit} 
                        >
                           Submit
                        </button> */}
                    </form>
                </div>
                <div className="img-side"></div>
            </div>
        </div>
    )
}

const reduxState = (state) => ({
    user: state.reducUser.user,
    isLogin: state.reducUser.isLogin,
    isLoading: state.reducUser.isLoading
});

const reduxDispatch = (dispatch) => ({
    submitPlayer: bindActionCreators(submitPlayer, dispatch)
})
export default connect(reduxState, reduxDispatch) (BodyPlayerGame)
