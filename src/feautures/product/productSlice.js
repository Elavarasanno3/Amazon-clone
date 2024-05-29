import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk('product/fetchProducts', async () => {
  const response = await fetch('http://localhost:8080/api/products/all');
  const data = await response.json();
  return data;
});

// Async thunk to fetch a single product by its ID
export const fetchProductById = createAsyncThunk('product/fetchProductById', async (productId) => {
  const response = await fetch(`http://localhost:8080/api/products/${productId}`);
  const data = await response.json();
  return data;
});

const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: [],
    productDetails: null, // Initial state for single product details
    status: 'idle',
    error: null
  },
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
      })
      .addCase(fetchProductById.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.productDetails = action.payload;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default productSlice.reducer;
