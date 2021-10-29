import {useRouter} from 'next/router';
export default function HeaderVideo() {
    const router = useRouter();
    return (
        <div className="root-header-vido" onClick ={() => router.push('/video')}>
            <div className="container ">
                <div className="row child-container">
                    <div className="col-2 laquo">
                        &laquo;
                    </div>
                    <div className="col-10 title-video-display">
                        <h1>Video Display</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}