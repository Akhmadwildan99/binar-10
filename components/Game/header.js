import Link from 'next/link'

export default function Header({ronde, play, gameQuitSubmit}) {
    return (
        <header className="header">
          <ul>
              <Link href="/" ><a onClick={gameQuitSubmit}><li className="navigasi"> &laquo; </li></a></Link>
              <a><li className="logo"><img src="/images/logo 1.jpg" alt=""/></li></a>
              <a><li className="title">batu kertas gunting</li></a>
              <a><li className="title">Ronde: {ronde} </li></a>
              {play ? 
              <a><li className="title">Main: {play} </li></a> :
              <a><li className="title">Belum Pernah main</li></a>}
              
          </ul>
        </header>
    )
}
