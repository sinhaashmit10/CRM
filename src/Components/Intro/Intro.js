import React from 'react'
import './Intro.css';
// import { Link } from 'react-scroll';

const Intro = () => {

  return (
    <section id="intro">
        <div className="introContent"> 
            <span className="introName">Welcome to QueryHub</span>
            <p className="introPara">your go-to platform for seamless database queries.</p>  
        </div>
        <img src="./database.svg" alt="" className="bg" />
    </section>
  )
}

export default Intro