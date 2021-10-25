import Navbar from '../components/navbar';
import VideoCard from '../components/videoCard/videoCard';

const DUMMY_DATA = [
    {   
        id: "123",
        avatar: "https://firebasestorage.googleapis.com/v0/b/server-binar-chapter-10.appspot.com/o/senku.jpg?alt=media&token=0363383d-0364-4924-a07b-454e13ebdc44",
        title: "Roket",
        description: "Roket meluncur",
        poster: "https://firebasestorage.googleapis.com/v0/b/server-binar-chapter-10.appspot.com/o/post%2FqEVu83dIcyPPNXbdr9eze0zEbg03%2Fposter?alt=media&token=1ad1e49f-c9b5-4ea6-9c38-2c877cce44a9"
    },
    {
        id: "122",
        avatar: "https://firebasestorage.googleapis.com/v0/b/server-binar-chapter-10.appspot.com/o/senku.jpg?alt=media&token=0363383d-0364-4924-a07b-454e13ebdc44",
        title: "Roket",
        description: "Roket meluncur",
        poster: "https://firebasestorage.googleapis.com/v0/b/server-binar-chapter-10.appspot.com/o/post%2FqEVu83dIcyPPNXbdr9eze0zEbg03%2Fposter?alt=media&token=1ad1e49f-c9b5-4ea6-9c38-2c877cce44a9"
    },
]
export default function Video() {
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
            <div className="container">
            <div className="row card-video-row">
                    {DUMMY_DATA.map(data => {
                        return(
                            <div className="col-3">
                                <VideoCard
                                key={data.id}
                                id={data.id}
                                poster={data.poster}
                                title={data.title}
                                description={data.description}
                                avatar={data.avatar} />
                            </div>
                        )
                    })}
            </div>
            </div>

        </div>
    )
}