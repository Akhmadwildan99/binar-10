import {useState, useEffect} from 'react';
import Navbar from '../components/navbar';
import VideoCard from '../components/videoCard/videoCard';
import {db} from '../firebase/firebase.config.js';
import {onSnapshot, query, collection, orderBy} from '@firebase/firestore';


export default function Video() {
    const [dataVideo, setDataVideo] = useState([]);

    useEffect(
        ()=> onSnapshot(query(collection(db, 'player-game'), orderBy('timestamp', 'desc')),(snapshot) => {
            setDataVideo(snapshot.docs);
        }), []);

    return (
        <div className="root-card-video">
            {/* Header */}
            <Navbar />

            {/* Title */}
            <br/>
            <br/>
            <div >
                <div className="container video-card">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="title-video">Daftar Video</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container video-container">
            <div className="row card-video-row">
                    {dataVideo.map(video => {
                        return(
                            <div className="col-3" key={video.id}>
                                <VideoCard
                                key={video.id}
                                id={video.id}
                                poster={video.data().posterUrl}
                                title={video.data().title}
                                description={video.data().des}
                                avatar={video.data().imageUrl} />
                            </div>
                        )
                    })}
            </div>
            </div>

        </div>
    )
}