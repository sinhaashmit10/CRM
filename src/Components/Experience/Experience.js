import React from 'react'
import './Experience.css'
const Experience = () => {
  return (
    <section className="experiencePage">
        <div id="experience">
            <h1 className="experienceTitle">My Experience</h1>
            <p className="experienceDesc">I have had the oppurtunity to work with some prestigious group of companies. Some of the notable companies I have worked for includes</p>
            <div className="experienceImgs">
                <img src="./graphy.png" alt="" className="experienceImg" />
                <img src="./vawabag.png" alt="" className="experienceImg" />
            </div>
        </div>
    </section>
  )
}

export default Experience