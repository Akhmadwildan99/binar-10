import {useState, useEffect} from 'react';
import Header from '../components/Game/header';
import Player from '../components/Game/Player';
import Com from '../components/Game/Com';
import {connect} from 'react-redux';
import {useRouter} from 'next/router'; 
import { doc, getDoc } from "firebase/firestore";
import {db} from '../firebase/firebase.config';


function Game({isLogin, user}) {
    const router = useRouter()
    const [pilihan, setPilihan] = useState('');
    const [pilCom, setPilCom] = useState('');
    const [rock, setRock] = useState(false);
    const [paper, setPaper] = useState(false);
    const [scissors, setScissors] = useState(false);
    const [rockCom, setRockCom] = useState(false);
    const [paperCom, setPaperCom] = useState(false);
    const [scissorsCom, setScissorsCom] = useState(false);
    const [playerWin, setPlayerWin] = useState('');
    const [vs, setVs] = useState(false);
    const [score, setScore] = useState(0);
    const [scoreCom, setScoreCom] = useState(0);
    const [dataPlayer, setDataPlayer] = useState({});
    const [currentScore, setCurrentScore] = useState(0);
    const [room, setRoom] = useState(0)
    console.log(room);
    console.log(currentScore);
    

    function choices(e){
      setPilihan(e.target.dataset.id);
      const com = Math.floor(Math.random() * 3) + 1;
      if(com === 1) return setPilCom('batu');
      if(com === 2) return setPilCom('kertas');
      return  setPilCom('gunting');
    }


    useEffect(() => {
        if(pilihan === "batu") {
            setRock(true)
            setPaper(false)
            setScissors(false)
        } else if(pilihan === "kertas") {
            setPaper(true)
            setRock(false)
            setScissors(false)
        } else if(pilihan === "gunting") {
            setScissors(true);
            setRock(false)
            setPaper(false)
        } else {
            setRock(false)
            setPaper(false)
            setScissors(false)
        }
    }, [pilihan]);

    useEffect(() => {
        if(pilCom === "batu") {
            setRockCom(true)
            setPaperCom(false)
            setScissorsCom(false)
        } else if(pilCom === "kertas") {
            setPaperCom(true)
            setRockCom(false)
            setScissorsCom(false)
        } else if(pilCom === "gunting") {
            setScissorsCom(true);
            setRockCom(false)
            setPaperCom(false)
        } else {
            setRockCom(false)
            setPaperCom(false)
            setScissorsCom(false)
        }
    }, [pilCom]);


    useEffect(() => {
      if(pilihan === 'batu' && pilCom === 'batu') {
        setPlayerWin('Draw');
        setRoom(s => s + 1)
      } else if(pilihan === 'kertas' && pilCom === 'kertas') {
        setPlayerWin('Draw');
        setRoom(s => s + 1)
      } else if(pilihan === 'gunting' && pilCom === 'gunting') {
        setPlayerWin('Draw');
        setRoom(s => s + 1)
      } else if(pilihan === 'batu' && pilCom === 'kertas') {
        setPlayerWin('Com win');
        setScoreCom(s => s + 1);
        setRoom(s => s + 1)
      } else if(pilihan === 'batu' && pilCom === 'gunting') {
        setPlayerWin('Player 1 win');
        setScore(s => s + 1);
        setRoom(s => s + 1)
      } else if(pilihan === 'kertas' && pilCom === 'gunting') {
        setPlayerWin('Com win');
        setScoreCom(s => s + 1);
        setRoom(s => s + 1)
      } else if(pilihan === 'kertas' && pilCom === 'batu') {
        setPlayerWin('Player 1 win');
        setScore(s => s + 1);
        setRoom(s => s + 1)
      } else if(pilihan === 'gunting' && pilCom === 'batu') {
        setPlayerWin('Com win');
        setScoreCom(s => s + 1);
        setRoom(s => s + 1)
      } else if(pilihan === 'gunting' && pilCom === 'kertas') {
        setPlayerWin('Player 1 win');
        setScore(s => s + 1);
        setRoom(s => s + 1)
      } else {
        setPlayerWin('');
      }
    }, [pilihan, pilCom])

    useEffect(()=> {
      if(playerWin !== "") {
        setTimeout(() => {
          setVs(true);
        }, 1000);
      }
    },[playerWin]);

    useEffect(()=> {
      const privateData = async () => {
        try {
          const docRef = doc(db, 'player-game', user.uid);
          const get = await getDoc(docRef);
          setDataPlayer(get.data());
          setCurrentScore(get.score);
        } catch (err) {
          console.log('error', err);
        }
      }
      privateData();
    }, [user])

    useEffect(() => {
      if(room > 5) {
        setRock(false)
        setPaper(false)
        setScissors(false)
        setRockCom(false)
        setPaperCom(false)
        setScissorsCom(false)
        setVs(false)
        setScore(0)
        setScoreCom(0)
        setRoom(0)
      }

      if( room === 5 && score > scoreCom) {
        setCurrentScore( c=> c + 1)
      }

    }, [room, score, scoreCom])

    const submitData = async () => {
      if(room === 5 && score > scoreCom) {
        setCurrentScore(c => c +1);
        // const response = await setGame(currentScore);
        // console.log(response);
      }
      setRock(false)
      setPaper(false)
      setScissors(false)
      setRockCom(false)
      setPaperCom(false)
      setScissorsCom(false)
      setVs(false)
      setScore(0)
      setScoreCom(0)
      setRoom(0)
    }
    
    useEffect(() => {
      if(isLogin === false) {
        router.push('/login');
      }
    })

    return (
    <section id="game-batu-kertas-gunting">
      <Header />
      <div className="container">
        <div className="row">
          <Player dataPlayer={dataPlayer.name}  rock={rock} paper={paper} scissors={scissors} choices={choices} score={score} />
          <div className="col-4">
              <div className="hasil">
                <h1 className={vs ? "vs hidden" : "vs"}>vs</h1>
                <div className={vs ? "result" : "result hidden"}>
                  {playerWin}
                </div>
                <img src="/images/refresh.png" alt="refresh" onClick={submitData}  className="refresh"/>
              </div>
          </div>
          <Com rockCom={rockCom} paperCom={paperCom} scissorsCom={scissorsCom} scoreCom={scoreCom} />
        </div>
      </div>
    </section>
    )
}

const reduxState = (state) => ({
  isLogin: state.reducUser.isLogin,
  user: state.reducUser.user
})
export default connect(reduxState, null)(Game)
