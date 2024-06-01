import React, { useEffect } from 'react';
import '../style/cartItem.css'
import { useSelector, useDispatch } from 'react-redux';
import { fetchCartItems, removeCartItem,incrementCartItem,decrementCartItem } from '../../feautures/cart/cartSlice'; // Assuming you have actions to fetch cart items and remove cart items

const Cart = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const cartItems = useSelector(state => state.cart.cart); // Corrected to access cart state

  useEffect(() => {
    if (user.email) {
      console.log(user.email);
      
      dispatch(fetchCartItems(user.email))
        .catch(error => console.error('Error fetching cart items:', error)); // Fetch cart items from the API when the component mounts
        console.log(cartItems);
      }
  }, [dispatch, user.email]);
  const handleIncrement = (itemId) => {
    if (user.email) {
      dispatch(incrementCartItem({ userEmail: user.email, itemId }))
        .catch(error => console.error('Error incrementing cart item:', error));
    }
  };

  const handleDecrement = (itemId) => {
    if (user.email) {
      dispatch(decrementCartItem({ userEmail: user.email, itemId }))
        .catch(error => console.error('Error decrementing cart item:', error));
    }
  };

  const handleRemoveFromCart = (itemId) => {
    if (user.email) {
      dispatch(removeCartItem({ userEmail: user.email, itemId }))
        .catch(error => console.error('Error removing cart item:', error)); // Dispatch an action to remove the item from the cart
    }
  };

  return (
    <div className='cartItem_container'>
      <h2 className='shopping_cart_heading' >ShoppingCart</h2>
      {user.email ? (
        <div>
          {cartItems.length > 0 ? 

              (
                 cartItems.map((item)=>(
                  <div className='single_cart' key={item.id} >
                              <hr></hr>
                      <div className='product_container'>
                        <img 
                            alt={item.product.name}
                            className='cart_img'
                            src={`data:image/jpeg;base64,${item.product.image}`}
                          />
                        <div className='product_name_rate'>
                            <h4 className = 'product_name'>{item.product.name}</h4>
                            <h3 className='product_rate'> ₹ {item.product.amount}</h3>
                        </div>
                      </div>
                      <div className='product_container_two'>
                          <h2 className='product_qty'>QTY : {item.qty}</h2>
                          <button onClick={() => handleIncrement(item.id)} className = 'product_qty_button_plus'> <span>+</span></button>
                          <button onClick={() => handleDecrement(item.id)} className = 'product_qty_button_minus'> <span>-</span></button> 
                          <button onClick={() => handleRemoveFromCart(item.id)} className = 'delete_btn'> Remove from cart </button> 
                      </div>
                  </div>
                ))
              )

          // (
            // <ul>
            //   {cartItems.map(item => (
            //     <li key={item.id}>
            //       <div className='product_name_rate' >
            //         <p className='product_name'>{item.product.name}</p>
            //         <p className='product_rate'>₹ {item.product.amount}</p>
            //       </div>
                  
            //       <p>{item.qty}</p>
            //       <img 
            //       alt={item.product.name}
            //       className='cart_img single_img'
            //       src={`data:image/jpeg;base64,${item.product.image}`}
            //       />
            //       <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
            //     </li>
            //   ))}
            // </ul>
          // )
           : (
            <p>Cart is empty</p>
          )}
        </div>
      ) : (
        <p>Please log in to view your cart</p>
      )}
    </div>
  );
};

export default Cart;
