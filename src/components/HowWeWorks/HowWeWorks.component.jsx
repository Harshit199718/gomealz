import React from 'react'
import "../../styles/how-we-works.css"
import orderDate from "../../assets/icons/order-date-icon.png"
import orderHere from "../../assets/icons/order-here-icon.png"
import deliverIt from "../../assets/icons/deliver-it-icon.png"

function HowWeWorks() {
  return (
    <section id="how-we-works_container">
        <h2 className='sections-title how-we-works-title'>How We Works</h2>
        <div className='flow_container'>
            <div className="flow-card">
                <div className="number_container">1</div>
                <img className='flow-icon' src={orderDate} alt="" />
                <h2 className='flow-title'>Choose date</h2>
                <p className="flow-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="flow-card">
                <div className="number_container">2</div>
                <img className='flow-icon' src={orderHere} alt="" />
                <h2 className='flow-title'>Order Here</h2>
                <p className="flow-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="flow-card">
                <div className="number_container">3</div>
                <img className='flow-icon' src={deliverIt} alt="" />
                <h2 className='flow-title'>Delivery it</h2>
                <p className="flow-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </div>
    </section>
  )
}

export default HowWeWorks