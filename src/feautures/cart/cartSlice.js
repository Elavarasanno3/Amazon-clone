import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: []
    },
    reducers: {
        addCart: (state, action) => {
            state.cart = [...state.cart, action.payload];
        },
        deleteCart: (state, action) => {
            state.cart = state.cart.filter((item, index) => index !== action.payload);
        },
        setCart: (state, action) => {
            state.cart = action.payload;
        },
        updateCart: (state, action) => {
            state.cart = state.cart.map(item => item.id === action.payload.id ? action.payload : item);
        }
    }
});

export const { addCart, deleteCart, setCart,updateCart } = cartSlice.actions;

export const addProductToCart = ({ product, userEmail }) => async (dispatch) => {
    try {
        const response = await axios.post('http://localhost:8080/api/carts/add', { product, userEmail });
        if (!response.data) {
            throw new Error('Failed to add product to cart');
        }
        dispatch(addCart(response.data)); // Assuming response.data contains the updated cart item
    } catch (error) {
        console.error('Error adding product to cart:', error);
        // Handle error or display error message to the user
    }
};

export const fetchCartItems = (userEmail) => async (dispatch) => {
    try {
        const response = await axios.get(`http://localhost:8080/api/carts/${userEmail}`);
        if (!response.data) {
            throw new Error('Failed to fetch cart items');
        }
        dispatch(setCart(response.data)); // Assuming response.data contains the user's cart items
    } catch (error) {
        console.error('Error fetching cart items:', error);
        // Handle error or display error message to the user
    }
};

export const removeCartItem = ({ userEmail, itemId }) => async (dispatch) => {
    try {
        await axios.delete(`http://localhost:8080/api/carts/${userEmail}/${itemId}`);
        dispatch(fetchCartItems(userEmail)); // Fetch updated cart items after removing the item
    } catch (error) {
        console.error('Error removing cart item:', error);
        // Handle error or display error message to the user
    }
};

export const incrementCartItem = ({ userEmail, itemId }) => async (dispatch) => {
    try {
        const response = await axios.put(`http://localhost:8080/api/carts/${userEmail}/${itemId}/increment`);
        if (!response.data) {
            throw new Error('Failed to increment cart item');
        }
        dispatch(updateCart(response.data));
    } catch (error) {
        console.error('Error incrementing cart item:', error);
    }
};

export const decrementCartItem = ({ userEmail, itemId }) => async (dispatch) => {
    try {
        const response = await axios.put(`http://localhost:8080/api/carts/${userEmail}/${itemId}/decrement`);
        if (response.data) {
            dispatch(updateCart(response.data));
        } else {
            dispatch(fetchCartItems(userEmail)); // If item qty reaches 0, refetch the cart items
        }
    } catch (error) {
        console.error('Error decrementing cart item:', error);
    }
};

export const selectCart = (state) => state.cart.cart; // Selects the cart state

export default cartSlice.reducer;
