import React, { useState } from "react"
import Head from "./Head"
import "./header.css"
import { Link } from "react-router-dom"

const Header = () => {
  const [navbar, setNavbar] = useState(false)

  return (
    <>
      <Head />
      <header>
        <div className='container paddingSmall'>
          <nav>
            <ul className={navbar ? "navbar" : "flex"} onClick={() => setNavbar(false)}>
              <li>
                <Link to='/'>Beranda</Link>
              </li>
              <li>
                <Link to='/culture'>Budaya</Link>
              </li>
              <li>
                <Link to='/politics'>Politik</Link>
              </li>
              <li>
                <Link to='/memes'>Kuliner</Link>
              </li>
              <li>
                <Link to='/sports'>Olahraga</Link>
              </li>
              <li>
                <Link to='/boxed'>Sea Games 2023</Link>
              </li>
              <li>
                <Link to='/reviews'>Ulasan</Link>
              </li>
            </ul>
            <button className='barIcon' onClick={() => setNavbar(!navbar)}>
              {navbar ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
            </button>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header
