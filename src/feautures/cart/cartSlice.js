import {createSlice} from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name:'cart',
    initialState :{
        cart:[]
    },
    reducers : {
        addCart:(state,action)=>{
            state.cart = [...state.cart,action.payload]
        },
        deleteCart:(state,action)=>{
            state.cart.splice(action.payload,1)
            state.cart = state.cart
        }
    }
}) ;
export const {addCart,deleteCart} = cartSlice.actions;
export default cartSlice.reducer;