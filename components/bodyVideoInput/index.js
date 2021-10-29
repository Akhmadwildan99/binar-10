import {useRef, useState, useEffect} from 'react';
import { useRouter } from 'next/router';
import {connect} from 'react-redux';
import {db, storageFire} from '../../firebase/firebase.config';
import {getDownloadURL, ref, uploadBytes} from '@firebase/storage';
import {  doc, updateDoc, serverTimestamp } from '@firebase/firestore'


function BodyVideoInput({user, isLogin}) {
    const router = useRouter();
    const fileVideoRef = useRef(null);
    const filePosterRef = useRef(null);
    const [videoUrl, setVideoUrl] = useState("")
    const [posterUrl, setPosterUrl] = useState("")
    const [title, setTitle] = useState("");
    const [des, setDes] = useState("");
    const [success, setSuccess] = useState(false)
    
    const submitPost = async (e) => {
      e.preventDefault();
      if(title !== "" || des !== "") {
        try {
          const update = await updateDoc(doc(db, 'player-game', user.uid), {
            videoUrl,
            posterUrl,
            title,
            des,
            timestamp: serverTimestamp(),
          })
          console.log(update);
          setTimeout(() => {
            setDes("");
            setTitle("");
            setSuccess(true);
        }, 2000)
        } catch (error) {
          console.error("belum berhasil menambahkan video", error);
        }
      }
      
    }

    const videoPost = async (e) => {
      const selectVideoPick = e.target.files[0];
      const videoRef = ref(storageFire, `post/${user.uid}/video`);
      await uploadBytes(videoRef, selectVideoPick, "data_url").then(async snapshot => {
        const downloadVideoUrl = await getDownloadURL(videoRef);
        setVideoUrl(downloadVideoUrl)

      })
    }

    const posterPost = async (e) => {
      const selectPoster = e.target.files[0];
      const posterRef = ref(storageFire, `post/${user.uid}/poster`);
      await uploadBytes(posterRef, selectPoster, "data_url").then(async snapshot => {
        const downloadPosterUrl = await getDownloadURL(posterRef);
        setPosterUrl(downloadPosterUrl)

      })

    }

    useEffect(() => {
      if(isLogin === false) {
        router.push('/login');
      }
    }, [isLogin, router])
    return(
        <div className="body-bg">
      <div className="form-container">
        <div className="form">
          <h1>Input Video</h1>
          {success && <h3>Berhasil menambahkan video dan poster !!</h3>}
          <form>
            <div className="file-input">
                <div className="file-video">
                    <i className="bi bi-camera-reels-fill" onClick={() => fileVideoRef.current.click()}></i>
                    <input
                    type="file"
                    ref={fileVideoRef}
                    onChange={videoPost}
                    hidden />
                </div>
                <div className="video-poster">
                    <i className="bi bi-image-alt" onClick={() => filePosterRef.current.click()}></i>
                    <input
                    type="file"
                    ref={filePosterRef}
                    onChange={posterPost}
                    hidden />
                </div>
            </div>
            <input 
            type="text" 
            value={title}
            placeholder="Title" 
            name="title" 
            onChange={(e) => setTitle(e.target.value)}
            required />
            <input 
            type="text" 
            placeholder="description" 
            value={des}
            onChange={(e) => setDes(e.target.value)}
            required />
            <button className="button-register" type="submit" onClick={submitPost}>input</button>
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
});

export default connect(reduxState, null) (BodyVideoInput);