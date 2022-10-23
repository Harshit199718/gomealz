import React from 'react'

function WhyUsCard({cardTitle ,cardImg}) {
  return (
    <div className='why-us-card'>
        <h2 className="why-us-card-title">{cardTitle}</h2>
        <div className="why-us-details_container">
            <img src={cardImg} alt="" />
            <div className="why-us-desc_container">
                <p className="why-us-desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                    molestiae quas vel sint commodi repud
                </p>
                <img src="" alt="" />
            </div>
        </div>
    </div>
  )
}

export default WhyUsCard