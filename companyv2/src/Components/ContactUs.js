import React from 'react'
import './ContactUs.css';
import Icon1 from "./Assets/instagramlogo.jpg";
import Icon2 from "./Assets/fblogo.jpg";
import Icon3 from "./Assets/tiktoklogo.png";
import Icon4 from "./Assets/whatsapplogo.jpg";

const ContactUs = ({ id }) => {
  return (
    <div id={id} className="connect-with-us-section" >
      <h2>Connect With Us</h2>

          {/* Google Maps Directions section */}
          <div className="directions-section">
            <p>
              To visit us, click on the link below for the direction.
              <br />
                <a
                  href="https://www.google.com/maps/place/School+of+Computer+Sciences,+USM/@5.3546527,100.3013018,20.09z/data=!4m6!3m5!1s0x304ac1a96f010e97:0x8b91d5d092b91828!8m2!3d5.3546432!4d100.3015266!16s%2Fg%2F11r89_9sk?entry=ttu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open in Google Maps
                </a>
            </p>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d465.82931908768575!2d100.30153073822807!3d5.354628923199255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304ac1a96f010e97%3A0x8b91d5d092b91828!2sSchool%20of%20Computer%20Sciences%2C%20USM!5e0!3m2!1sms!2smy!4v1703701982701!5m2!1sms!2smy" 
              width="500"  // Adjust the width as needed
              height="300"  // Adjust the height as needed
              title="Company Place"
              style={{ border: '0', borderRadius: '15px' }}  // Add border-radius for rounded corners 
              allowfullscreen="" 
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade">
            </iframe>
          </div>

          <div className="infocompany">
            <div className="address-company">
              <h4>Address</h4>
                <p>
                  School of Computer Sciences, Universiti Sains Malaysia, 
                </p>
                <p>
                  11800 USM Penang, Malaysia.
                </p>
            </div>
          
            <div className="opening-hours">
              <h4>Opening Hours</h4>
                <p>
                  Mon - Fri 8:00am - 5:00pm
                </p>
                <p>
                  Sat - Sun 8:00am - 1:00pm
                </p>
            </div>

            <div className="email">
              <h4>Email</h4>
                <p>
                  ichibanfurniture@gmail.com
                </p>
            </div>

            <div className="phone">
              <h4>Phone</h4>
                <p>
                +60 11-5339 5679 (Faizal)
                </p>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="social-icons">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={Icon1} alt="Instagram" className="social-icon" />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={Icon2} alt="Facebook" className="social-icon" />
            </a>
            <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
              <img src={Icon3} alt="TikTok" className="social-icon" />
            </a>
            <a href="https://api.whatsapp.com/send?phone=601153395679" target="_blank" rel="noopener noreferrer">
                <img src={Icon4} alt="WhatsApp" className="social-icon" />
            </a>
          </div>
        </div>
  )
}

export default ContactUs
