import React from 'react'
import image from '../../assets/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
  return (
    <div className="hero-style">
        <img src={image} alt='image'/>
        <div className='Hero-section'>
            <div className='Hero-contant'>
                <h5>New Arrivals Only </h5>
                <h2> new<br></br> Collections<br></br> for everyone </h2>
                <button><span>Latest Collection <FontAwesomeIcon  icon={faArrowRight} style={{paddingLeft:"10px"}}/></span></button>
            </div>
        </div>
    </div>
  )
}

export default Hero