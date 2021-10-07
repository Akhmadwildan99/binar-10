import {useState} from 'react';
import { storageFire, db} from '../../firebase/firebase.config';
import { doc, setDoc } from "firebase/firestore";
import {  ref, uploadBytes, getDownloadURL} from "firebase/storage";

export default function BodyPlayerGame() {
    const [name, setName] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [error, setError] = useState("");

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
            const id = localStorage.getItem("userId");
            const userId = JSON.parse(id);
            console.log(userId);
            const data = {
                name,
                imageUrl,
            }
            try {
                const res = await setDoc(doc(db, "player-game", userId ), data);
                console.log(res);
            } catch (err) {
                console.error("Error adding document: ", err);
            }
            setError(false)
        } else {
            setError(true)
        }
        
    }

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
                        <button 
                        className="button-register"
                        type="submit"
                        onClick={handleSubmit} 
                        >
                           Submit
                        </button>
                    </form>
                </div>
                <div className="img-side"></div>
            </div>
        </div>
    )
}
