import React from 'react';
import './Services.css';
import ServiceImage1 from "./Assets/warranty.jpg";
import ServiceImage2 from "./Assets/installwardrobe.jpg";
import ServiceImage3 from "./Assets/roomplanner.jpg";

const Services = ({ id }) => {
  return (
    <div id={id} className="services-content">
      <h2 className="services-title">Services</h2>
      <p className="services-subtitle">Enjoy the exclusive services provided by Ichiban Furnitures which you will never expect.</p>
      <div className="services-image-container">
        <div className="service">
          <img src={ServiceImage1} alt="Service 1 Image" />
          <h4>10 Years Warranty</h4>
          <p>Worry that your furntiture will crumble after a few years? Ichiban Furnitures 
            provide 10 years of warranty and it is extendable. 
          </p>
        </div>
        <div className="service">
          <img src={ServiceImage2} alt="Service 2 Image" />
          <h4>Professional Assembly and Installation</h4>
          <p>We offer a hassle-free experience by providing professional assembly and 
            installation services for purchased furniture. Skilled technicians can 
            ensure that the furniture is expertly assembled and placed in the customer's 
            desired location. 
          </p>
        </div>
        <div className="service">
          <img src={ServiceImage3} alt="Service 3 Image" />
          <h4>Virtual Room Planning Consultations</h4>
          <p>Provide customers with a virtual room planning service where they can 
            consult with experts to determine the best furniture arrangement for their 
            space. Using digital tools and 3D simulations, customers can visualize how 
            different pieces of furniture will fit and complement their existing decor.
          </p>
        </div>  
      </div>
    </div>
  );
}

export default Services;
