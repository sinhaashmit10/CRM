import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-scroll';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="navbar">
        <img src="crmlogo.png" alt="Logo" className='logo' />
        <div className="desktopMenu">
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={700} className="desktopMenuListItem">Home</Link>
            <Link activeClass='active' to='about' spy={true} smooth={true} offset={-80} duration={700} className="desktopMenuListItem">About Us</Link>
        </div>
        <button className="desktopMenuBtn" onClick={() => {
          document.getElementById('contactMe').scrollIntoView({behavior: 'smooth'});
        }}>
            <img src="./start.svg" alt="" className="desktopMenuImg" />Get Started</button>

        <img src="menu.svg" alt="Menu" className='mobMenu' onClick={()=>setShowMenu(!showMenu)} />
        <div className="navMenu" style={{display: showMenu? 'flex':'none'}}>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={700} className="listItem" onClick={()=>setShowMenu(false)}>Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-80} duration={700} className="listItem" onClick={()=>setShowMenu(false)}>Skills</Link>
        </div>
    </nav>
  )
}

export default Navbar