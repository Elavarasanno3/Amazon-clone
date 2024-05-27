import React, { useReducer } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import {configureStore} from '@reduxjs/toolkit'
import productReducer from './feautures/product/productSlice'
import cartReducer from './feautures/cart/cartSlice'
import userReducer from './feautures/user/UserSlice';
const store = configureStore({
  reducer:{
    product:productReducer,
    cart : cartReducer,
    user : userReducer
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

