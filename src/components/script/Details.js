import React ,{useEffect,useState}from 'react'
import '../style/details.css'
import {useSelector} from 'react-redux';
import {useParams ,Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { addCart } from '../../feautures/cart/cartSlice';

const Details = () => {
  const dispatch = useDispatch()
  const products = useSelector(state=>state.product);
  const cart = useSelector(state=>state.cart);
  let {id} = useParams();
  const singleProduct = products[id]
  console.log(cart)

  return (
    <div>
      <div className='details'>
        <img className='details__image' src={singleProduct.image}></img>
        <div className='details__detail'>
          <h3 className='product_name'>{singleProduct.name}</h3>
          <a href='#'>Visit the DZYN Furnitures Store</a>
          <h2 className='product_price'>₹{singleProduct.amount}</h2>
          <div className='buttons'>
            <button className='cart_button' onClick={()=>{dispatch(addCart(singleProduct))}} >Add to Cart</button>
            <button className='buy_button'>Buy Now</button>
          </div>
        </div>
        
      </div>
      <Link to = '/' className='details_footer'>Back To Home</Link>
    </div>
  )
}

export default Details