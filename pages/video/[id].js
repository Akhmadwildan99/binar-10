import {useRouter} from 'next/router';
import {useEffect, useState} from 'react';
import HeaderVideo from '../../components/HeaderVideo/HeaderVideo.js'
import {
    Player, 
    ReplayControl,
    ForwardControl,
    CurrentTimeDisplay,
    TimeDivider,
    PlaybackRateMenuButton,
    VolumeMenuButton, ControlBar} from 'video-react';
    import {db} from '../../firebase/firebase.config.js';
    import {onSnapshot, doc, } from '@firebase/firestore';

export default function VideoDisplay() {
    const {isReady, query} = useRouter();
    const [video, setVideo] = useState({});

    useEffect(() => {
        if(isReady) {
            onSnapshot(doc(db, 'player-game', query.id), (doc) => {
                setVideo(doc.data())
            })
            console.log('router telah tersedia', query.id)
        } else {
            console.log('router belum bersedia')
        }
    },[isReady, query])
    return (
        <div>
            {/* Header */}
            <HeaderVideo />

            {/* Body */}
            <div className="root-play-video">
                <div className="video-player-container">
                    <Player
                    className="video-player"
                    poster={video.posterUrl} 
                    src={video.videoUrl}>
                         <ControlBar>
                            <ReplayControl seconds={10} order={1.1} />
                            <ForwardControl seconds={30} order={1.2} />
                            <CurrentTimeDisplay order={4.1} />
                            <TimeDivider order={4.2} />
                            <PlaybackRateMenuButton rates={[5, 2, 1, 0.5, 0.1]} order={7.1} />
                            <VolumeMenuButton disabled />
                        </ControlBar>
                    </Player>
                </div>
            </div>
        </div>
    )
}