import { useEffect, useState } from 'react';
import Product from '../components/Product'
import axios from 'axios';

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('http://localhost:5000/api/products');
      setProducts(data);
      console.log(data)
    };
    fetchProducts();
  }, []);

  return (
    <div className='flex flex-wrap gap-6'>
      {products.map((product) => (
        <Product className="" key={product._id} product={product}>
          <div>{product.name}</div>
        </Product>
      ))}
    </div>
  )
}


export default HomeScreen
