import React, { useEffect } from 'react';
import '../style/singleProduct.css';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProducts } from '../../feautures/product/productSlice'; // Import the fetchProducts action

const SingleProduct = () => {
  const dispatch = useDispatch();
  const { products, status } = useSelector((state) => state.product);

  useEffect(() => {
    // Dispatch the fetchProducts action when the component mounts
    dispatch(fetchProducts());
  }, [dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>; // Display a loading indicator while fetching products
  }


  return (
    <div className='single_product_set'>
      {products.map((product) => (       
        <div key={product.id }>
          <li className='single_of_product'>
            <Link className='link' to={`/details/${product.id}`}>
              <img alt='' className='single_img' src={`data:image/jpeg;base64,${product.image}`} />
            </Link>
            
            <h4>
              <span>₹</span> {product.amount}
            </h4>
            <p>{product.name}</p>
            {/* <small>{Array(product.ratings).fill(<span>⭐</span>)}</small> */}
            <button onClick={() => { /* Handle add to cart */ }} className='cart_button'>
              Add To Cart
            </button>
          </li>
        </div>
      ))}
    </div>
  );
};

export default SingleProduct;
