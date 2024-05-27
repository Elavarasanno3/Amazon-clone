import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addUser } from '../../feautures/user/UserSlice'; // Ensure the path is correct
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import '../style/header.css';

const Header = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(addUser({ email: '', password: '' }));
    navigate('/signin');
  };

  return (
    <div className='header'>
      <Link to='/'><img alt='amazon-logo' className='header__logo' src='https://pngimg.com/uploads/amazon/amazon_PNG11.png' /></Link>
      <div className='header__search'>
        <input className='header__searchInput' type='text' />
        <div className='header__searchInputIcon'><SearchIcon /></div>
      </div>
      <div className='header__nav'>
        {user.email ? (
          <div onClick={handleLogout} className='header__option'>
            <div className='header__optionLineOne'>Hello, {user.email}</div>
            <div className='header__optionLineTwo'>Logout</div>
          </div>
        ) : (
          <Link to='/signin' className='header__option'>
            <div className='header__optionLineOne'>Hello, sign in</div>
            <div className='header__optionLineTwo'>Account & Lists</div>
          </Link>
        )}
        <div className='header__option'>
          <div className='header__optionLineOne'>Returns</div>
          <div className='header__optionLineTwo'>& Orders</div>
        </div>
        <Link to='/cart'>
          <div className='header__option__cart'>
            <div><ShoppingCartIcon fontSize='large' /></div>
            <div className='header__optionLineTwo'>Cart</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
