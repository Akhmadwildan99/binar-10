import {useState, useEffect} from 'react';
import Navbar from '../components/navbar';
import VideoCard from '../components/videoCard/videoCard';
import {db} from '../firebase/firebase.config.js';
import {onSnapshot, query, collection, orderBy} from '@firebase/firestore'

// const DUMMY_DATA = [
//     {   
//         id: "123",
//         avatar: "https://firebasestorage.googleapis.com/v0/b/server-binar-chapter-10.appspot.com/o/senku.jpg?alt=media&token=0363383d-0364-4924-a07b-454e13ebdc44",
//         title: "Roket",
//         description: "Roket meluncur",
//         poster: "https://firebasestorage.googleapis.com/v0/b/server-binar-chapter-10.appspot.com/o/post%2FqEVu83dIcyPPNXbdr9eze0zEbg03%2Fposter?alt=media&token=1ad1e49f-c9b5-4ea6-9c38-2c877cce44a9"
//     },
//     {
//         id: "122",
//         avatar: "https://firebasestorage.googleapis.com/v0/b/server-binar-chapter-10.appspot.com/o/senku.jpg?alt=media&token=0363383d-0364-4924-a07b-454e13ebdc44",
//         title: "Roket",
//         description: "Roket meluncur",
//         poster: "https://firebasestorage.googleapis.com/v0/b/server-binar-chapter-10.appspot.com/o/post%2FqEVu83dIcyPPNXbdr9eze0zEbg03%2Fposter?alt=media&token=1ad1e49f-c9b5-4ea6-9c38-2c877cce44a9"
//     },
// ]
export default function Video() {
    const [dataVideo, setDataVideo] = useState([]);

    useEffect(
        ()=> onSnapshot(query(collection(db, 'player-game'), orderBy('timestamp', 'desc')),(snapshot) => {
            setDataVideo(snapshot.docs);
        }), [db]);

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