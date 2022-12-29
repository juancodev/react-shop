import { useEffect, useState } from "react";
import axios from 'axios';

const useGetProducts = (API) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios(API + '?limit=100&offset=100');
      setProducts(response.data);
    }
    getProducts();
  }, [])
  return products
};

export { useGetProducts };