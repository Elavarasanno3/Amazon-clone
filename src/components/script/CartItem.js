import React from 'react'
import {useSelector} from 'react-redux'
import "../style/cartItem.css"
import {useDispatch} from 'react-redux'
import { deleteCart } from '../../feautures/cart/cartSlice';
const CartItem = () => {

const dispatch = useDispatch()
let products = useSelector(state=>state.cart.cart)
console.log(products)
  return (
    <div className='cartItem_container'>
        <h2 className='shopping_cart_heading'>Shopping Cart</h2>

        {
            products && products.map((product,index)=>(
              <div className='single_cart' key={index} >
                          <hr></hr>
                  <div className='product_container'>
                    <img className='cart_img' src={product.image}></img>
                    <div className='product_name_rate'>
                        <h4 className = 'product_name'>{product.name}</h4>
                        <h3 className='product_rate'> ₹ {product.amount}</h3>
                    </div>
                  </div>
                  <div className='product_container_two'>
                      <h2 className='product_qty'>QTY : {product.qty}</h2>
                      <button className = 'product_qty_button_plus'> <span>+</span></button>
                      <button className = 'product_qty_button_minus'> <span>-</span></button> 
                      <button className = 'delete_btn' onClick={()=>{dispatch(deleteCart(index))}}> Remove from cart </button> 
                  </div>
              </div>
            ))
          }
          


    </div>
  )
}

export default CartItem