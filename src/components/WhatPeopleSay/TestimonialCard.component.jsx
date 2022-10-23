import React from 'react'
import starIcon from "../../assets/icons/starIcon.png"

function TestimonialCard({userImg}) {
  return (
    <div className='testimonial-card'>
        <p className="testimonial-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
            molestiae quas vel sint commodi repudiandae consequuntur voluptatum l
            Lorem ipsum dolor sit amet consectetur 
        </p>
        <div className="user_container">
            <div className="user-img">
                <img src={userImg} alt="" />
            </div>
            <div className="user-name_container">
                <h2 className='user-name'>Juana Porch</h2>
                <div className="stars_container">
                    <img src={starIcon} alt="" />
                    <img src={starIcon} alt="" />
                    <img src={starIcon} alt="" />
                    <img src={starIcon} alt="" />
                    <img src={starIcon} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default TestimonialCard