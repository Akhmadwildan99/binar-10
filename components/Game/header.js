import Link from 'next/link'

export default function Header() {
    return (
        <header className="header">
          <ul>
              <Link href="/" ><a><li className="navigasi"> &laquo; </li></a></Link>
              <a><li className="logo"><img src="/images/logo 1.jpg" alt=""/></li></a>
              <a><li className="title">batu kertas gunting</li></a>
          </ul>
        </header>
    )
}
