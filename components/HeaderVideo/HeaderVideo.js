import Link from 'next/link';
export default function HeaderVideo() {
    return (
        <Link href="/video">
            <div className="root-header-vido">
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
        </Link>
    )
}