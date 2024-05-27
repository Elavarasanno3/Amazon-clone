import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// Define the initial state
const initialState = {
  products: [],
  status: 'idle',
  error: null,
};

// Define the async thunk for fetching products
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await axios.get('http://localhost:8080/api/products/all');
    console.log(response.data)
    return response.data;
  }
);

// Create a slice
export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

// Export the reducer
export default productSlice.reducer;

// import {createSlice} from '@reduxjs/toolkit'

// export const productSlice = createSlice({
//     name:'product',
//     initialState : [
//         {
//             id : 0,
//             image : "https://m.media-amazon.com/images/I/717lug1hSkL._AC_UL320_.jpg",
//             name : "Hygear Mens Mens Shoes Sneaker",
//             amount : 599,
//             ratings : 4,
//             qty : 1
//         },
//         {
//             id : 1,
//             image : "https://m.media-amazon.com/images/I/81pCvnfYHAL._AC_UL320_.jpg",
//             name : "Diverse Men Cotton Shorts",
//             amount : 299,
//             ratings : 4,
//             qty : 1
//         },
//         {
//             id : 2,    
//             image : "https://m.media-amazon.com/images/I/81nVGpmCIwL._AC_UL320_.jpg",
//             name : "Urban Forest Stag RFID Blocking Black/Red Leather Wallet for Men",
//             amount : 479,
//             ratings : 4,
//             qty : 1
//         },
//         {
//             id : 3,
//             image : "https://m.media-amazon.com/images/I/61Q0R5cdxWL._AC_UL320_.jpg",
//             name : "Noise ColorFit Pulse Grand Smart Watch with 1.69'(4.29cm) HD Display'",
//             amount : 1998,
//             ratings : 4,
//             qty : 1
//         },
//         {
//             id : 4,
//             image : "https://m.media-amazon.com/images/I/81Z4Bu4c4bL._AC_UL320_.jpg",
//             name : "Urban Forest Zeus Vintage Brown RFID Blocking Leather Wallet for Men",
//             amount : 499,
//             ratings : 4,
//             qty : 1
//         },
//         {
//             id : 5,
//             image : "https://m.media-amazon.com/images/I/61w9ISMyhiL._AC_UL320_.jpg",
//             name : "Sonata Analog Black Dial Men's Watch-NN7924NM01/NP7924NM01",
//             amount : 1625,
//             ratings : 4,
//             qty : 1    
//         },
//         {
//             id : 6,
//             image : "https://m.media-amazon.com/images/I/51QCXW-lhxL._AC_UL320_.jpg",
//             name : "Okos Men's Jewellery 3D Cuboid Vertical Bar/Stick Stainless Steel",
//             amount : 39,
//             ratings : 4,
//             qty : 1
//         },
//         {
//             id : 7,
//             image : "https://m.media-amazon.com/images/I/61PGRfoJCZL._AC_UL320_.jpg",
//             name : "Yellow Chimes Rings for Men and Boys | Fashion Black Ring Set for Men",
//             amount : 189,
//             ratings : 4,
//             qty : 1
//         },
//         {
//             id : 8,
//             image : "https://m.media-amazon.com/images/I/81kzaF24XjL._AC_UL320_.jpg",
//             name : "CREATURE Reversible Pu-Leather Formal Belt For Men",
//             amount : 279,
//             ratings : 4,
//             qty : 1
//         },
//         {
//             id : 9,
//             image : "https://m.media-amazon.com/images/I/51SzSJZtk8L._AC_UL320_.jpg",
//             name : "Garnier Men, Face Wash, Brightening & Anti-Pollution,",
//             amount : 242,
//             ratings : 4,
//             qty : 1
//         },
//         {
//             id : 10,
//             image : "https://m.media-amazon.com/images/I/41qzHeup+BL._AC_UL320_.jpg",
//             name : "MEENAZ Titanium Stainless Steel Stylish adjustable size proposal Couple band thumb Silver",
//             amount : 172,
//             ratings : 4,
//             qty : 1
//         },
//         {
//             id : 11,
//             image : "https://m.media-amazon.com/images/I/61utX8kBDlL._AC_UL320_.jpg",
//             name : "ASIAN Men's Wonder-13 Sports Running Shoes",
//             amount : 482,
//             ratings : 4,
//             qty : 1
//         }

//     ]
// }) ;
// export default productSlice.reducer;