import React from 'react'
import './Intro.css';
// import { Link } from 'react-scroll';

const Intro = () => {

  return (
    <section id="intro">
        <div className="introContent"> 
            <span className="introName">Data + AI + CRM + Trust = more sales and happier customers.</span>
            <p className="introPara">Discover how unified data and trusted AI help you connect with customers in a whole new way.</p>
            {/* <Link><a href='https://www.linkedin.com/in/ashmitsinha'><button className="btn"><img className='btnImg' src="./hireme.png" alt="" />Hire Me</button></a></Link> */}  
        </div>
        <img src="./crm.png" alt="" className="bg" />
    </section>
  )
}

export default Intro