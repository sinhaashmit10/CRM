import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-scroll';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="navbar">
        <img src="hero.svg" alt="Logo" className='logo' />
        <div className="desktopMenu">
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={700} className="desktopMenuListItem">Home</Link>
            <Link activeClass='active' to='about' spy={true} smooth={true} offset={-80} duration={700} className="desktopMenuListItem">About Us</Link>
            <Link activeClass='active' to='instructions' spy={true} smooth={true} offset={-99} duration={700} className="desktopMenuListItem">Instructions</Link>
            <Link activeClass='active' to='support' spy={true} smooth={true} offset={-99} duration={700} className="desktopMenuListItem">Support</Link>
        </div>
        <button className="desktopMenuBtn" onClick={() => {
          document.getElementById('card').scrollIntoView({behavior: 'smooth'});
        }}>
            <img src="./start.svg" alt="" className="desktopMenuImg" />Get Started</button>

        <img src="menu.svg" alt="Menu" className='mobMenu' onClick={()=>setShowMenu(!showMenu)} />
        <div className="navMenu" style={{display: showMenu? 'flex':'none'}}>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={700} className="listItem" onClick={()=>setShowMenu(false)}>Home</Link>
            <Link activeClass='active' to='about' spy={true} smooth={true} offset={-80} duration={700} className="listItem" onClick={()=>setShowMenu(false)}>About</Link>
            <Link activeClass='active' to='instructions' spy={true} smooth={true} offset={-60} duration={700} className="listItem" onClick={()=>setShowMenu(false)}>Instructions</Link>
            <Link activeClass='active' to='support' spy={true} smooth={true} offset={-60} duration={700} className="listItem" onClick={()=>setShowMenu(false)}>Support</Link>
        </div>
    </nav>
  )
}

export default Navbar