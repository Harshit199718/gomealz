import React from 'react'

function ChefCard({chefImg, chefName, chefLocation}) {
    return (
        <div className='chef-card'>
            <div className="chef-img_container">
                <img src={chefImg} alt="" />
            </div>
            <div className="chef-details">
                <h2 className="chef-name">{chefName}</h2>
                <h4 className="chef-location">{chefLocation}</h4>
                <p className="chef-desc">Lorem ipsum dolor sit consecteturadipisicing elit.Maxime mollitia</p>
                <button className="view-profile-btn">view profile</button>
            </div>
        </div>
    )
}

export default ChefCard