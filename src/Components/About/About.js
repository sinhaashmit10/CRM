import React from 'react'
import './About.css'

const Skills = () => {
  return (
    <section id='about'>
        <span className="aboutTitle">Explore our Features</span>
        {/* <span className="aboutDesc">A CRM website serves as a centralized platform for managing and organizing customer interactions and relationships. It enables businesses to track customer information, communication history, and preferences in one place. With features like lead management and task tracking, it streamlines sales and marketing processes, fostering better customer engagement and retention. Ultimately, a CRM website enhances overall business efficiency and helps in delivering personalized experiences to customers.</span> */}
        <div className="aboutBars">
            <div className="aboutBar">
                {/* <img src="./business.svg" alt="" className="aboutImg" />  */}
                <div className="aboutText">
                    <h2>Intuitive Query Form</h2>
                    <p>Easily submit your queries using our user-friendly form. Simply enter your query and provide essential database details.</p>
                </div>
            </div>
            <div className="aboutBar">
                {/* <img src="./growth.svg" alt="" className="aboutImg" /> */}
                <div className="aboutText">
                    <h2>Customizable Queries</h2>
                    <p>Tailor your queries to your specific needs. Specify criteria, conditions, and sorting options effortlessly.</p>
                </div>
            </div>
            <div className="aboutBar">
                {/* <img src="./service.svg" alt="" className="aboutImg" /> */}
                <div className="aboutText">
                    <h2>Database Compatibility</h2>
                    <p>QueryHub supports various databases, ensuring compatibility with your preferred database system. MySQL, PostgreSQL, MongoDB - we've got you covered.</p>
                </div>
            </div>
            <div className="aboutBar">
                {/* <img src="./customers.svg" alt="" className="aboutImg" /> */}
                <div className="aboutText">
                    <h2>Instant Results</h2>
                    <p>Experience real-time query results. No waiting around – get the information you need instantly.</p>
                </div>
            </div>
            <div className="aboutBar">
                {/* <img src="./customers.svg" alt="" className="aboutImg" /> */}
                <div className="aboutText">
                    <h2>Secure Data Handling</h2>
                    <p>Rest easy knowing that your data is handled with the utmost security. QueryHub prioritizes the protection of your information.</p>
                </div>
            </div>
            <div className="aboutBar">
                {/* <img src="./customers.svg" alt="" className="aboutImg" /> */}
                <div className="aboutText">
                    <h2>Query History</h2>
                    <p>Keep track of your past queries with our built-in history feature. Retrieve and reuse previous queries for enhanced efficiency.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills