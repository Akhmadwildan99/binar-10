import {useRef, useState, useEffect} from 'react';
import { useRouter } from 'next/router';
import {connect} from 'react-redux';
import {db, storageFire} from '../../firebase/firebase.config';
import {getDownloadURL, ref, uploadString} from '@firebase/storage';
import { updateDoc } from '@firebase/firestore'


function BodyVideoInput({user, isLogin}) {
    const router = useRouter();
    const fileVideoRef = useRef(null);
    const filePosterRef = useRef(null);
    const [selectVideo, setSelectVideo] = useState()
    const [selectPoster, setSelectPoster] = useState()
    const [title, setTitle] = useState("");
    const [des, setDes] = useState("");
    
    const submitPost = async () => {
      const videoRef = ref(storageFire, `post/${user.uid}/video`);
      const posterRef = ref(storageFire, `post/${user.uid}/poster`);
      await uploadString(videoRef, selectVideo, "data_url").then(async snapshot => {
        const downloadVideoUrl = await getDownloadURL(videoRef);

        await updateDoc(doc(db, 'player-game', user.uid), {
          videoUrl: downloadVideoUrl
        })
      })

      await uploadString(videoRef, selectPoster, "data_url").then(async snapshot => {
        const downloadPosterUrl = await getDownloadURL(posterRef);

        await updateDoc(doc(db, 'player-game', user.uid), {
          posterUrl: downloadPosterUrl,
          titleVideo: title,
          desVideo: des
        })
      })
    }

    const videoPost = (e) => {
      const reader = new FileReader();
      if(e.target.files[0]) {
        reader.readAsDataURL(e.target.files[0]);
      }

      reader.onload = (readerEvent) => {
        setSelectVideo(readerEvent.target.result);
      }
    }

    const posterPost = (e) => {
      const reader = new FileReader();
      if(e.target.files[0]) {
        reader.readAsDataURL(e.target.files[0]);
      }

      reader.onload = (readerEvent) => {
        setSelectPoster(readerEvent.target.result);
      }
    }

    useEffect(() => {
      if(isLogin === false) {
        router.push('/login');
      }
    }, [])
    return(
        <div className="body-bg">
      <div className="form-container">
        <div className="form">
          <h1>Input Video</h1>
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