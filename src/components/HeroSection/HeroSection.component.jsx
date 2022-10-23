import React from 'react'
import Header from '../Header/Header.component'
import "../../styles/hero-section.css"
import geoIcon from "../../assets/icons/geoIcon.png"

function HeroSection() {
  return (
    <section id="hero-section_container">
        <Header />
        <div className="hero-section">
          <h2 className="hero-title">Order Food To Your Door</h2>
          <div className="location-container">
            <div className="input-with-icon">
                <img src={geoIcon} alt="" />
                <input type="text" placeholder='enter your code' />
            </div>
            <button className='find-food-btn hover-scale'>Find Food</button>
          </div>
          <h4 className="hero-section-tag">Food that make in home</h4>
        </div>
    </section>
  )
}

export default HeroSection