import React from 'react'
import { ProductItem } from 'components/ProductItem';
import { useGetProducts } from 'hooks/useGetProducts';
import 'styles/ProductList.scss';

const API = 'https://store-node-api.onrender.com/api/v1/products';

const ProductList = () => {
  const products = useGetProducts(API)
  return (
    <section className="main-container">
      <div className="ProductList">
        {products.map(product => {
          return <ProductItem product={product} key={product.id} />
        })}
      </div>
    </section>
  );
}

export { ProductList };