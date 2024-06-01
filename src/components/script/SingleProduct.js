import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addProductToCart } from '../../feautures/cart/cartSlice';
import { fetchProducts } from '../../feautures/product/productSlice';
import '../style/singleProduct.css';

const SingleProduct = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const products = useSelector((state) => state.product.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleAddToCart = (product) => {
    if (!user.email) {
      alert('You need to log in to add items to the cart');
      return;
    }
    console.log(product)
    dispatch(addProductToCart({ product, userEmail: user.email }));
  };

  const renderStars = (ratings) => {
    const stars = [];
    for (let i = 0; i < ratings; i++) {
      stars.push(<span key={i}>⭐</span>);
    }
    return stars;
  };

  return (
    <div className='single_product_set'>
      {products.map((product) => (
        <div key={product.id}>
          <li className='single_of_product'>
            <Link className='link' to={`/details/${product.id}`}>
              <img
                alt={product.name}
                className='single_img'
                src={`data:image/jpeg;base64,${product.imageString}`}
              />
            </Link>
            <h4>
              <span>₹</span> {product.amount}
            </h4>
            <p>{product.name}</p>
            <div>{renderStars(product.ratings)}</div>
            <button onClick={() => handleAddToCart(product)} className='cart_button'>
              Add To Cart
            </button>
          </li>
        </div>
      ))}
    </div>
  );
};

export default SingleProduct;
