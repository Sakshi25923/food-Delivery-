import React from 'react'
import './About.css'
import img from '../../assets/rasmalai.jpg'

const About = () => {
  return (
    <section className="about">
      <div className="about-container">

        <div className="about-text">
          <h1>About Us</h1>

          <p>
            Welcome to our website! We are passionate about building beautiful
            and functional web applications. Our goal is to provide the best
            user experience with modern technologies.
          </p>

          <button className="about-btn">
            Learn More
          </button>
        </div>

        <div className="about-image">
          <img src={img} alt="Rasmalai" />
        </div>

      </div>
    </section>
  )
}

export default About;