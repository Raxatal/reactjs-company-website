import React from 'react'
import './OurCompany.css';

const OurCompany = ({ id }) => {
  return (
    <div id={id} className="our-company-section">
          <h2 className="our-company-header">Our Company</h2>

        <div className="vision-mission-section">
        <div className="vision-section">
          <h3>Vision</h3>
          <div className="vision-content">
            <p>"To be a leading innovator in the furniture industry, 
                providing timeless and functional designs that elevate living spaces worldwide."</p>
          </div>
        </div>

        <div className="mission-section">
          <h3>Mission</h3>
          <div className="mission-content">
            <p>"Our mission is to craft high-quality furniture with a perfect blend of artistry 
                and functionality, enriching the lives of our customers. We are committed to sustainability, 
                continuous improvement, and creating spaces that inspire comfort and joy."</p>
          </div>
        </div>
        </div>

          <div className="youtube-section">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/FRYlKSOH68w"
                title="Company Video"
                frameBorder="0"
                allowFullScreen
              ></iframe>
          </div>
    </div>
  )
}

export default OurCompany
