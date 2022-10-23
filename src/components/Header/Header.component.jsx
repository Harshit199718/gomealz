import React from 'react'
import "../../styles/header.css"
import logo from "../../assets/icons/logo.png"
import userIcon from "../../assets/icons/user-icon.png"

function Header() {
  return (
    <header id ="main_header">
        <div id="gomealz_logo" className="logo_container">
            <img src={logo} alt="" />
            <h4 className="logo_title">Gomealz</h4>
        </div>
        <div id="header-links" className="links_container">
            <h4 id="aboutus_link">
                <a href="#">About Us</a>
                <div className="link-line"></div>
            </h4>
            <div id="register-btns" className="register-btns_container">
                <button className="register-btn hover-scale">Sign Up</button>
                <button className="register-btn hover-scale">
                    <img src={userIcon} alt="" />
                    Log in
                </button>
            </div>
        </div>
    </header>
  )
}

export default Header