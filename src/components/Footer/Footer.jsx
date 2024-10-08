import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
              <img src={assets.logo} alt=""/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero fugit assumenda veritatis aut, officia eum totam, repudiandae officiis voluptatibus fuga perspiciatis ex laboriosam pariatur odio est tenetur, eligendi laborum at!</p>
              <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
              </div>
            </div>
            <div className="footer-content-centre">
              <h2>COMPANY</h2>
              <ul>
                <li>Home</li>
                <li>About-us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            <div className="footer-content-right">
              <h2>Get In Touch</h2>
              <ul>
                <li>+91 98765-43210</li>
                <li>contact@tomato.com</li>
              </ul>
            </div>
        </div>
        <hr/>
        <p className='footer-copyright'>
          &copy; 2024 Tomato. All rights reserved.
        </p>

      
    </div>
  )
}

export default Footer
