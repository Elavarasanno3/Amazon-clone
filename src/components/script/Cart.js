import React,{useState} from 'react'
import "../style/cart.css"
import CartItem from './CartItem'

const Cart = () => {

  return (

   <div className='cart'>
    <CartItem/>
   </div>
  )
}

export default Cart