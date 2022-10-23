import React from 'react'
import "../../styles/footer.css"
import logo from "../../assets/icons/logo.png"
import fbIcon from "../../assets/icons/fbIcon.png"
import instaIcon from "../../assets/icons/instaIcon.png"

function FooterTop() {
  return (
    <div className='footer-top'>
        <div className="footer-logo_container">
            <img src={logo} alt="" />
            <h2 className='footer-logo-text'>Gomealz</h2>
        </div>
        <div className="social-media-icons">
            <img src={fbIcon} alt="" />
            <img src={instaIcon} alt="" />
        </div>
    </div>
  )
}

export default FooterTop