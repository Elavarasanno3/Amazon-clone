import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCartItems, removeCartItem } from '../../feautures/cart/cartSlice'; // Assuming you have actions to fetch cart items and remove cart items

const Cart = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const cartItems = useSelector(state => state.cart.cart); // Corrected to access cart state

  useEffect(() => {
    if (user.email) {
      dispatch(fetchCartItems(user.email)); // Fetch cart items from the API when the component mounts
    }
  }, [dispatch, user.email]);

  const handleRemoveFromCart = (itemId) => {
    if (user.email) {
      dispatch(removeCartItem({ userEmail: user.email, itemId })); // Dispatch an action to remove the item from the cart
    }
  };

  return (
    <div>
      <h2>Cart</h2>
      {user.email ? (
        <div>
          {cartItems.length > 0 ? (
            <ul>
              {cartItems.map(item => (
                <li key={item.id}>
                  <p>{item.product.name}</p>
                  <p>₹ {item.product.amount}</p>
                  <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
                </li>
              ))}
            </ul>
          ) : (
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
