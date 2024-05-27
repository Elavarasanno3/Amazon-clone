import React from 'react'
import "../style/footer.css"
import {Link} from 'react-router-dom'


const Footer = () => {
  return (
    <div className='footer'>
      <Link to = '/' className='back_to_top'>Back To Top</Link>
      <div className='footer_first'>
        <div className='footer_first_one'>
          <ul>
            <li>Get to know us</li>
            <li>About us</li>
            <li>careers</li>
            <li>press releases</li>
            <li>amazon science</li>
          </ul>
          <ul>
            <li>Connect with us</li>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
          <ul>
            <li>Make Money with Us</li>
            <li>Sell on Amazon</li>
            <li>Sell under Amazon Accelerator</li>
            <li>Amazon Global Selling</li>
            <li>Become an Affiliate</li>
            <li>Fulfilment by Amazon</li>
            <li>Advertise Your Products</li>
            <li>Amazon Pay on Merchants</li>
          </ul>
          <ul>
            <li>Let Us Help You</li>
            <li>COVID-19 and Amazon</li>
            <li>Your Account</li>
            <li>Returns Centre</li>
            <li>Amazon App Download</li>
            <li>Amazon Assistant Download</li>
            <li>100% Purchase Protection</li>
            <li>Help</li>
          </ul>
        </div>

        <hr className='hr'></hr>

        <div className='footer_first_two'>
            <li>Australia</li>
            <li>Brazil</li>
            <li>Canada</li>
            <li>China</li>
            <li>France</li>
            <li>Germany</li>
            <li>Italy</li>
            <li>Japan</li>
            <li>Mexico</li>
            <li>Netherlands</li>
            <li>Singapore</li>
        </div>
      </div>
      <div className='footer_second'>
        <li className='copyRight' >Conditions of Use & Sale Privacy Notice Interest-Based Ads</li>
        <li className='copyRight'>© 1996-2022, Amazon.com, Inc. or its affiliates</li>      
      </div>
    </div>
  )
}

export default Footer