import React from 'react'
import "../../styles/what-people-say.css"
import TestimonialCard from './TestimonialCard.component'
import user1 from "../../assets/images/userImg.png"
import user2 from "../../assets/images/user2.png"
import user3 from "../../assets/images/user3.png"
import user4 from "../../assets/images/user4.png"

function WhatPeopleSay() {
  return (
    <div id="what-people-say_container">
        <h2 className='sections-title special-dishes-title'>What People Say About Us </h2>
        <div style={{display: "flex", justifyContent: "space-between", flexWrap: "wrap", rowGap: "95px"}}>
            <div style={{width: "45%"}}>
                <TestimonialCard userImg={user1} />
            </div>
            <div style={{width: "45%"}}>
                <TestimonialCard userImg={user2} />
            </div>
            <div style={{width: "45%"}}>
                <TestimonialCard userImg={user3} />
            </div>
            <div style={{width: "45%"}}>
                <TestimonialCard userImg={user4} />
            </div>
        </div>
    </div>
  )
}

export default WhatPeopleSay