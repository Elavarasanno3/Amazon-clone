import React, { useEffect, useState } from 'react';
import '../style/details.css';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addProductToCart } from '../../feautures/cart/cartSlice';
import { fetchProducts, fetchProductById } from '../../feautures/product/productSlice';

const Details = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const user = useSelector((state) => state.user);
  const product = useSelector((state) => state.product.productDetails);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(fetchProductById(id));
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleAddToCart = () => {
    if (!user.email) {
      alert('You need to log in to add items to the cart');
      navigate('/signin');
    } else {
      dispatch(addProductToCart({ ...product, image: `data:image/jpeg;base64,${product.imageString}` }));
    }
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className='details'>
        <img className='details__image' src={`data:image/jpeg;base64,${product.imageString}`} alt={product.name}></img>
        <div className='details__detail'>
          <h3 className='product_name'>{product.name}</h3>
          <a href='#'>Visit the DZYN Furnitures Store</a>
          <h2 className='product_price'>₹{product.amount}</h2>
          <div className='buttons'>
            {user.email && (
              <button className='cart_button' onClick={handleAddToCart}>Add to Cart</button>
            )}
            {!user.email && (
              <button className='cart_button' onClick={handleAddToCart}>Sign in to Add to Cart</button>
            )}
          </div>
        </div>
      </div>
      <Link to='/' className='details_footer'>Back To Home</Link>
    </div>
  );
};

export default Details;
