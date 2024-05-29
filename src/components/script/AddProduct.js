import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../style/addProduct.css';

const AddProduct = () => {
  const [formData, setFormData] = useState({
    name: '',
    image: null,
    amount: '',
    ratings: '',
    qty: ''
  });
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      image: file
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('image', formData.image);
      formDataToSend.append('amount', formData.amount);
      formDataToSend.append('ratings', formData.ratings);
      formDataToSend.append('qty', formData.qty);

      const response = await fetch('http://localhost:8080/api/products/register', {
        method: 'POST',
        body: formDataToSend
      });

      if (response.ok) {
        const result = await response.text();
        alert(result);
        navigate('/'); // Redirect to homepage after successful submission
      } else {
        const errorMessage = await response.text();
        setError(errorMessage);
      }
    } catch (error) {
      console.error('Network or server error:', error);
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className='add_product'>
      <div className='add_product_container'>
        <div className='amazon_logo'>
          <Link to='/'>
            <img
              alt='amazon-logo'
              className='header__logo'
              src="https://pngimg.com/uploads/amazon/amazon_PNG24.png"
            />
          </Link>
        </div>
        <div className='add_product_block'>
          <h2 className='add_product_block_header'>Add Product</h2>
          {error && <p className="error">{error}</p>}
          <form onSubmit={handleSubmit}>
            <label>
              <h5 className='add_product_text'>Product Name</h5>
              <input
                className='add_product_input'
                type='text'
                name='name'
                value={formData.name}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              <h5 className='add_product_text'>Product Image</h5>
              <input
                className='add_product_input'
                type='file'
                name='image'
                onChange={handleFileChange}
                required
              />
            </label>
            <label>
              <h5 className='add_product_text'>Amount</h5>
              <input
                className='add_product_input'
                type='number'
                name='amount'
                value={formData.amount}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              <h5 className='add_product_text'>Ratings</h5>
              <input
                className='add_product_input'
                type='number'
                max='5'
                step='0.1'
                name='ratings'
                value={formData.ratings}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              <h5 className='add_product_text'>Quantity</h5>
              <input
                className='add_product_input'
                type='number'
                name='qty'
                value={formData.qty}
                onChange={handleChange}
                required
              />
            </label>
            <button className='continue_button' type='submit'>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
