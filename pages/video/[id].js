import {useRouter} from 'next/router';
import {useEffect} from 'react';
import HeaderVideo from '../../components/HeaderVideo/HeaderVideo.js'
import {Player, BigPlayerButton, Poster} from 'video-react'

export default function VideoDisplay() {
    const {isReady, query} = useRouter();

    useEffect(() => {
        if(isReady) {
            console.log('router telah tersedia', query.id)
        } else {
            console.log('router belum bersedia')
        }
    },[])
    return (
        <div>
            {/* Header */}
            <HeaderVideo />
        </div>
    )
}