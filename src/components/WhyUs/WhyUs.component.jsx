import React from 'react'
import "../../styles/why-us.css"
import WhyUsCard from './WhyUsCard.component'
import certifiedImg from "../../assets/images/certifiedImg.png"
import fastDeliveryImg from "../../assets/images/fastDeliveryImg.png"
import guaranteeImg from "../../assets/images/guaranteeImg.png"

function WhyUs() {
  return (
    <div id="why-us_container">
        <h2 className='sections-title why-us-title'>Why Us </h2>
        <div style={{display: "flex", columnGap: "21px"}}>
            <div style={{flex: "1"}}>
                <WhyUsCard cardTitle="Certified" cardImg={certifiedImg} />
            </div>
            <div style={{flex: "1"}}>
                <WhyUsCard cardTitle="Fast delivery" cardImg={fastDeliveryImg} />
            </div>
            <div style={{flex: "1"}}>
                <WhyUsCard cardTitle="100% Money back " cardImg={guaranteeImg} />
            </div>
        </div>
    </div>
  )
}

export default WhyUs