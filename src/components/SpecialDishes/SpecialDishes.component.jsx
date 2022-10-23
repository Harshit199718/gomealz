import React from 'react'
import "../../styles/special-dishes.css"
import dish1 from "../../assets/images/dish1.png"
import dish2 from "../../assets/images/dish2.png"
import dish3 from "../../assets/images/dish3.png"
import dish4 from "../../assets/images/dish4.png"
import dish5 from "../../assets/images/dish5.png"
import dish6 from "../../assets/images/dish6.png"

function SpecialDishes() {
  return (
    <div id="special-dishes_container">
        <h2 className='sections-title special-dishes-title'>How We Works</h2>
        <div className="dishes_container">
                <img className="dish-img_container img-1" src={dish1} alt="" />
                <img className="dish-img_container img-3" src={dish3} alt="" />
                <img className="dish-img_container img-4" src={dish4} alt="" />
                <img className="dish-img_container img-5" src={dish5} alt="" />
                <img className="dish-img_container img-2" src={dish2} alt="" />
                <img className="dish-img_container img-6" src={dish6} alt="" />
                {/* <div className="input_conainer img-7">
                    <input type="text" placeholder='Your Code' />
                    <button>Find It</button>
                </div> */}
            {/* <div className="image-with-input img-6">
            </div> */}
        </div>
    </div>
  )
}

export default SpecialDishes