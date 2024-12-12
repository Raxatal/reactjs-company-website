import React from 'react';
import './BestSeller.css';
import Product1 from './Assets/FashionFolioWardrobe.jpg';
import Product2 from './Assets/BritishStyleWardrobe .jpg';
import Product3 from './Assets/TeakWoodWardrobe .jpg';
import Product4 from './Assets/StyleSyncWardrobe.jpg';
import Product5 from './Assets/OceanEpoxyTable.jpg';
import Product6 from './Assets/ElegantGroveTable.jpg';
import ArrowUp from './Assets/ArrowUp.png';
import ArrowDown from './Assets/ArrowDown.png';

function toggleSize (){
  const content = document.getElementById('overflowContent');
  const arrow = document.getElementById('Arrow');
  const buttonClick = document.getElementById('toggleButton');

  if (content.style.height === "auto"){
    content.style.height = '580px'; /*Change if needed here*/
    arrow.setAttribute('src', ArrowDown )
    buttonClick.setAttribute('href', "#bestseller-top")
  } else {
    content.style.height = "auto";
    arrow.setAttribute('src', ArrowUp )
    buttonClick.setAttribute('href',"#!")
  }
}

 function toggleDesc(itemId){
   const details = document.getElementById(itemId);
   if(details){
     const price = details.querySelector('.product-price');
     const dim = details.querySelector('.product-dim');
     const others = details.querySelector('.product-others');
     const pointer = details.querySelector('.point-down');
    const priceDisplay = window.getComputedStyle(price).getPropertyValue('display');

    if (priceDisplay === 'none') {
      price.style.display = 'block';
      dim.style.display = 'block';
      others.style.display = 'block';
      pointer.textContent = `/\\ /\\ /\\ /\\ /\\ /\\`;
    } else {
      price.style.display = 'none';
      dim.style.display = 'none';
      others.style.display = 'none';
      pointer.textContent = `\\/ \\/ \\/ \\/ \\/ \\/`;
    }
   }
 }

const BestSeller = ({ id }) => {
  return (
    <div id={id} className="bestseller-section">
      <h2 className='bestseller-title' id='bestseller-top'>Best Sellers</h2>
      <div className='bestseller-content'>
        <h4 className='bestseller-content-title'>All Products</h4>
        <div className='bestseller-items-container'>
          <div className='bestseller-items-gallery' id='overflowContent'>
            <button className='bestseller-items' id='item-1' onClick={() =>toggleDesc('item-1') }>
              <img src={Product1} alt='Product 1'/>
              <p className='product-name'> FashionFolio Wardrobe </p>
              <div className='product-details' id="details-1">
                <p className='product-price'>Price: RM118.00</p>
                <p className='product-dim'>Product Dimension: 195x190x60cm</p>
                <p className='product-others'>Others: Comes with Hanging Rod and Shelving,
                Flat Top, Solid Wood Handles</p>
                <p className='point-down'>\/ \/ \/ \/ \/ \/ \/</p>
              </div>
            </button>
            <button className='bestseller-items' id='item-2' onClick={() =>toggleDesc('item-2') }>
              <img src={Product2} alt='Product 2'/>
              <p className='product-name'> British Style Wardrobe </p>
              <div className='product-details'>
                <p className='product-price'>Price: RM289.00</p>
                <p className='product-dim'>Product Dimension: 190x170x60cm</p>
                <p className='product-others'>Others: Classical Engraving,Four Spaces, Two Drawers</p>
                <p className='point-down'>\/ \/ \/ \/ \/ \/ \/</p>
              </div>
            </button>
            <button className='bestseller-items' id='item-3' onClick={() =>toggleDesc('item-3') }>
              <img src={Product3} alt='Product 3'/>
              <p className='product-name'> TeakWood Wardrobe </p>
              <div className='product-details'>
                <p className='product-price'>Price: RM211.00</p>
                <p className='product-dim'>Product Dimension: 190x180x70cm</p>
                <p className='product-others'>Others: Have Two Large Mirrors, Iron Handles, Natural
                Wood Pattern</p>
                <p className='point-down'>\/ \/ \/ \/ \/ \/ \/</p>
              </div>
            </button>
            <button className='bestseller-items' id='item-4' onClick={() =>toggleDesc('item-4') }>
              <img src={Product4} alt='Product 4'/>
              <p className='product-name'> StyleSync Wardrobe </p>
              <div className='product-details' id="details-1">
                <p className='product-price'>Price: RM154.00</p>
                <p className='product-dim'>Product Dimension: 200x170x60cm</p>
                <p className='product-others'>Others: Sliding Doors, Have a Glass Door, 
                Stable Flat Bottom</p>
                <p className='point-down'>\/ \/ \/ \/ \/ \/ \/</p>
              </div>
            </button>
            <button className='bestseller-items' id='item-5' onClick={() =>toggleDesc('item-5') }>
              <img src={Product5} alt='Product 5'/>
              <p className='product-name'> Ocean Epoxy Table</p>
              <div className='product-details'>
              <p className='product-price'>Price: RM431.00</p>
                <p className='product-dim'>Product Dimension: 80x180x90cm</p>
                <p className='product-others'>Others: Rubber gliders to protect the floor, Blunt Edge, 
                Epoxy resin that coats the wood</p>
                <p className='point-down'>\/ \/ \/ \/ \/ \/ \/</p>
              </div>
            </button>
            <button className='bestseller-items' id='item-6' onClick={() =>toggleDesc('item-6') }>
              <img src={Product6} alt='Product 6'/>
              <p className='product-name'> Elegant Grove Table </p>
              <div className='product-details'>
                <p className='product-price'>Price: RM312.00</p>
                <p className='product-dim'>Product Dimension: 80x170x80cm</p>
                <p className='product-others'>Others: Large space and stabilized design, Easy maintenance and cleaning,
                Anti corrosion</p>
                <p className='point-down'>\/ \/ \/ \/ \/ \/ \/</p>
              </div>
            </button>
          </div>
          <a id='toggleButton' href='#!'><button className='items-button' onClick={ toggleSize }><img id="Arrow" src={ ArrowDown} alt='Arrow'/></button></a>
        </div>
      </div>
    </div>
  )
}

export default BestSeller