import React from 'react';
import 'styles/OrderItem.scss';
import closeIcon from 'icons/icon_close.png';

const OrderItem = ({ product }) => {
  return (
    <div className="OrderItem">
      <figure>
        <img
          src={product.images[0]} className="product-img" alt={product.title} />
      </figure>
      <p>{product.title}</p>
      <p>{product.price}</p>
      <img src={closeIcon} alt="close" />
    </div>
  );
}

export { OrderItem };