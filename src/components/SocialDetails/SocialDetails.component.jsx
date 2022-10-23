import React from 'react'
import "../../styles/social-details.css"
import likeIcon from "../../assets/icons/likeIcon.png"

function SocialDetails() {
  return (
    <section id="social-details_container">
        <div className="certified_container">
            <h2 className='percentage-text font-styles'>100%</h2>
            <h2 className='certified-text font-styles'>Certified Chef</h2>
        </div>
        <div className="likes_container">
            <div className="text_container">
                <h2 className='total-likes-label-text font-styles'>Total likes</h2>
                <h2 className='total-likes-text font-styles'>2.6 M</h2>
                <h2 className='increase-in-likes-text'>21% more than last month</h2>
            </div>
            <img src={likeIcon} alt="" />
        </div>
        <div className="certified_container">
            <h2 className='rating-text font-styles'>4.7/5</h2>
            <h2 className='rating-label-text font-styles'>Our Average Rating</h2>
        </div>
    </section>
  )
}

export default SocialDetails