import {useRouter} from 'next/router';
export default function VideoCard({id, poster, title, description, avatar }) {
    const router = useRouter();
    const pushVideoCard =() => {
        router.push(`/video/${id}`)
    }
    return (
        <div className="root-card" onClick={pushVideoCard}>
            <img className="poster-video" src={poster} alt=""/>
            <div className="container">
                <div className="row">
                    <div className="col-2">
                        <img className="avatar-video" src={avatar} alt=""/>
                    </div>
                    <div className="col-10 title-description-card">
                        <h6 className="title-card-video">{title}</h6>
                        <p className="description-card-video">{description}</p>
                    </div>
                </div>
            </div>
        </div>
      
    )
}