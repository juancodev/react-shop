import React from 'react';
import 'styles/ProductItem.scss';
import buttonAddToCart from 'icons/bt_add_to_cart.svg';

const ProductItem = () => {
  return (
    <div className="ProductItem">
      <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Bike" />
      <div className="dots">
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
      <div className="product-info">
        <p>$35.00</p>
        <p>Bike</p>
        <figure>
          <img src={buttonAddToCart} alt="car" />
        </figure>
      </div>
    </div>
  );
};

export { ProductItem };