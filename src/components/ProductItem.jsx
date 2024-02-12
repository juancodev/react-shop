import React, { useContext } from 'react';
import { AppContext } from 'contexts/AppContext';
import 'styles/ProductItem.scss';
import buttonAddToCart from 'icons/bt_add_to_cart.svg';

const ProductItem = ({ product }) => {
  const { addToCart } = useContext(AppContext);

  const handleClick = (item) => {
    addToCart(item);
  }
  return (
    <div className="ProductItem">
      <img src={product.image} alt={product.title} />
      <div className="dots">
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
      <div className="product-info">
        <p>{product.price}$</p>
        <p>{product.name}</p>
        <figure onClick={() => handleClick(product)}>
          <img src={buttonAddToCart} alt="cart" />
        </figure>
      </div>
    </div>
  );
};

export { ProductItem };