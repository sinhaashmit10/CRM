import React from 'react'
import './About.css'

const Skills = () => {
  return (
    <section id='about'>
        <span className="aboutTitle">About Us</span>
        <span className="aboutDesc">A CRM website serves as a centralized platform for managing and organizing customer interactions and relationships. It enables businesses to track customer information, communication history, and preferences in one place. With features like lead management and task tracking, it streamlines sales and marketing processes, fostering better customer engagement and retention. Ultimately, a CRM website enhances overall business efficiency and helps in delivering personalized experiences to customers.</span>
        <div className="aboutBars">
            <div className="aboutBar">
                <img src="./business.svg" alt="" className="aboutImg" /> {/* <a href="https://www.flaticon.com/free-icons/web-page" title="web page icons">Web page icons created by rukanicon - Flaticon</a> */}
                <div className="aboutText">
                    <h2>Small Business</h2>
                    <p>Sales, service, and email outreach tools in a single app.</p>
                </div>
            </div>
            <div className="aboutBar">
                <img src="./growth.svg" alt="" className="aboutImg" />
                <div className="aboutText">
                    <h2>Sales Cloud</h2>
                    <p>Close more deals and speed up growth with the #1 CRM.</p>
                </div>
            </div>
            <div className="aboutBar">
                <img src="./service.svg" alt="" className="aboutImg" />
                <div className="aboutText">
                    <h2>Service Cloud</h2>
                    <p>Make customers happy faster and build loyalty with Service Cloud.</p>
                </div>
            </div>
            <div className="aboutBar">
                <img src="./customers.svg" alt="" className="aboutImg" />
                <div className="aboutText">
                    <h2>Marketing Cloud</h2>
                    <p>Build customer relationships for life with data-first digital marketing.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills