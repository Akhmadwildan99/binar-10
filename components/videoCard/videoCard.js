import Link from 'next/link';
export default function VideoCard({id, poster, title, description, avatar }) {
    return (
        <Link href={`video/${id}`}>
            <div className="root-card">
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
        </Link>
    )
}