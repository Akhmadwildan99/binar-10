import {useState, useEffect} from 'react';
import Link from 'next/link';
import {connect} from 'react-redux';
import { doc, getDoc } from "firebase/firestore";
import {db} from '../../firebase/firebase.config'

function Navbar({isLogin,user}) {
    const [player, setPlayer] = useState({});
    console.log(player)
    
    useEffect(() => {
        const getDataPlayer = async () => {
            try {
                const docRef = doc(db, 'player-game', user.uid);
                const get = await getDoc(docRef);
                setPlayer(get.data());
            } catch (err) {
                console.log('error', err);
            }
        }
        getDataPlayer();

    },[ user])

    return (
    <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
            <a className="navbar-brand" >{player ? player.name : Logo}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav nav-1 ">
                    <Link href="/"><a className="nav-link">Home</a></Link>
                    <a className="nav-link" >Work</a>
                    <a className="nav-link" >Contact</a>
                    <a className="nav-link">About me</a>
                </div>
                {isLogin ? 
                <div className="navbar-nav nav-2">
                    <a className="nav-link" >Log out</a>
                    <Link href="/playerGame"><img src={player ? player.imageUrl : "/images/avatar.png" } className="images-navbar" /></Link>
                </div> : 
                <div className="navbar-nav nav-2 ">
                    <Link href="/register"><a className="nav-link" >Sign up</a></Link>
                    <Link href="/login"><a className="nav-link" >Login</a></Link>
                </div>}
                
            </div>
        </div>
    </nav>
   
    )
}

const reduxState = (state) => ({
    isLogin: state.reducUser.isLogin,
    user: state.reducUser.user
})

export default connect(reduxState, null) (Navbar)
