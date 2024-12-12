import React from 'react'
import ProductImage from "./Assets/companywood.jpg";
import './Product.css';

const Product = ({ id }) => {
  return (
    <div id={id} className="product-content">
        <h2 className="product-title">Ichiban Wood</h2>
        <div className="product-image-container">
            {/* Replace 'your-image.jpg' with the actual image URL */}
            <img src={ProductImage} alt="Product Image" className="product-image" />
        </div>
    </div>
  )
}

export default Product
