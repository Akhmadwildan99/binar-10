import Link from 'next/link';

export default function Navbar() {
    return (
    <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
            <a className="navbar-brand" >Logo</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav nav-1 ">
                    <a className="nav-link">Home</a>
                    <a className="nav-link" >Work</a>
                    <a className="nav-link" >Contact</a>
                    <a className="nav-link">About me</a>
                </div>
                <div className="navbar-nav nav-2 ">
                    <Link href="/register"><a className="nav-link" >Sign up</a></Link>
                    <a className="nav-link" >Login</a>
                </div>
            </div>
        </div>
    </nav>
   
    )
}
