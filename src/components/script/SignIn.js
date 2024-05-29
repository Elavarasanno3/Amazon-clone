import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {addUser} from '../../feautures/user/UserSlice'
import '../style/signIn.css';

const SignIn = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [emailId, setEmailId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignIn = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    try {
      const response = await fetch('http://localhost:8080/api/users/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ emailId, password }),
      });
      if (response.ok) {
        console.log('Sign-in successful');
        dispatch(addUser({ email: emailId, password }));
        console.log('Updated user state:', { email: emailId, password });
        navigate('/');
      } else {
        const errorMessage = await response.text();
        throw new Error(errorMessage || 'Sign-in failed');
      }
    } catch (error) {
      console.error('Sign-in failed:', error.message);
      setError(error.message || 'Sign-in failed');
    }
  };

  const goToCreateAccount = () => {
    navigate('/createaccount');
  };

  return (
    <div className='sign_in'>
      <div className='sign_in_container'>
        <div className='amazon_logo'>
          <Link to='/'><img alt='amazon-logo' className='header__logo' src="https://pngimg.com/uploads/amazon/amazon_PNG24.png"></img></Link>
        </div>
        <div className='sign_in_block'>
          <h2 className='sign_in_block_header'>Sign in</h2>
          <form onSubmit={handleSignIn}>
            <label>
              <h5 className='sign_in_text'> Email or mobile phone number</h5>
              <input className='sign_in_email_input' type='text' value={emailId} onChange={(e) => setEmailId(e.target.value)}></input>
            </label>
            <label>
              <h5 className='sign_in_text'> Enter your password</h5>
              <input className='sign_in_email_input' type='password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
            </label>
            <button className='continue_button' type='submit'> Continue</button>
          </form>
          {error && <p className="error-message">{error}</p>}
          <p className='privacy_and_conditions'>By continuing, you agree to Amazon's<span className='privacy'>Conditions of Use and Privacy Notice.</span></p>
          <p className='privacy_and_conditions'><span className='conditions'>Need help?</span></p>
          <div className='amazon_business'>
            <h5>Want to sell?</h5>
              <p><span className='business'>Shop on Amazon Business</span></p>
          </div>
        </div>
        <div className='create_account_container'>
          <div className='left_create_account_border'></div>
          <p className='new_to_amazon'>New to Amazon?</p>
          <div className='left_create_account_border'></div>
        </div>
        <div>
          <button onClick={goToCreateAccount} className='create_account_button'>Create Your Amazon account</button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
