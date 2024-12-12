import React from 'react'
import './Intro.css';
import IntroContentPic from "./Assets/introcontentpic.png";



const Intro = () => {
  const scrollToProducts = () => {
    const productsSection = document.getElementById('bestsellers');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="intro-content">
          <div className="intro-text">
            <h2 className="intro-title">Ichiban Furniture</h2>
            <p className="intro-subtitle">Furniture for you, furniture for them, furniture for everyone!</p>
            <p className="intro-description">The best furnitures for your humble abode.</p>
            <button className="intro-button" onClick={scrollToProducts}>View Products</button>
          </div>
          <div className="intro-image-container">
            {/* Replace 'your-image.jpg' with the actual image URL */}
            <img src={IntroContentPic} alt="Furniture Image" className="intro-image" />
          </div>
    </div>
  )
}

export default Intro
