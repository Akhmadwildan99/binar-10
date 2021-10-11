import {useState, useEffect} from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';
import {connect} from 'react-redux';
import { doc, getDoc } from "firebase/firestore";
import {db} from '../../firebase/firebase.config';
import {PRO_LOGIN, CHANGE_USER} from '../../redux/reducer/typeAction';


function Navbar({isLogin,user, deleteUser, logout}) {
    const [player, setPlayer] = useState({});
    const router = useRouter();
    
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

    const logoutSystem = () => {
        deleteUser();
        logout();
        setTimeout(() => {
            router.push('/login')
        }, 2000)
    }

    const logo = "logo";

    return (
    <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
            {player ?
             <a className="navbar-brand" >{player.name}</a>:
             <a className="navbar-brand" >{logo}</a>}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav nav-1 ">
                    <Link href="/#"><a className="nav-link">Home</a></Link>
                    <Link href="/game"><a className="nav-link" >Game</a></Link>
                    <a className="nav-link" >Contact</a>
                    <a className="nav-link">About me</a>
                </div>
                {isLogin ? 
                <div className="navbar-nav nav-2">
                    <a className="nav-link" onClick={logoutSystem}>Log out</a>
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
});

const reduxDispatch = (dispatch) => ({
    deleteUser: () => dispatch({type: CHANGE_USER, value : {}}),
    logout: () => dispatch({type: PRO_LOGIN, value: false})
})

export default connect(reduxState, reduxDispatch) (Navbar)
