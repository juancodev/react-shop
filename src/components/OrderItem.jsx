import React, { useContext } from 'react';
import { AppContext } from 'contexts/AppContext';
import 'styles/OrderItem.scss';
import closeIcon from 'icons/icon_close.png';

const OrderItem = ({ product, indexValue }) => {
  const { removeFromCart } = useContext(AppContext);

  const handleRemove = product => {
    removeFromCart(product)
  }
  return (
    <div className="OrderItem">
      <figure>
        <img
          src={product.images[0]} className="product-img" alt={product.title} />
      </figure>
      <p>{product.title}</p>
      <p>{product.price}</p>
      <img src={closeIcon} alt="close" onClick={() => handleRemove(indexValue)} />
    </div>
  );
}

export { OrderItem };