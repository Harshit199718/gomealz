import React from 'react'
import "../../styles/chef-near-you.css"
import ChefCard from './ChefCard.component'
import chef1 from "../../assets/images/chef1.png"
import chef2 from "../../assets/images/chef2.png"
import chef3 from "../../assets/images/chef3.png"

function ChefNearYou() {
  return (
    <div id='chef-near-you'>
        <h2 className='sections-title special-dishes-title'>Chef nears You</h2>
        <div style={{display: "flex", flexWrap: "wrap", gap: "11px"}}>
            <div style={{flex: "1"}}>
                <ChefCard chefImg={chef1} chefName="Karen D." chefLocation="Canada" />
            </div>
            <div style={{flex: "1"}}>
                <ChefCard chefImg={chef2} chefName="Monique Joi" chefLocation="Denmark" />
            </div>
            <div style={{flex: "1"}}>
                <ChefCard chefImg={chef3} chefName="Colema Diny" chefLocation="UK" />
            </div>
        </div>
    </div>
  )
}

export default ChefNearYou