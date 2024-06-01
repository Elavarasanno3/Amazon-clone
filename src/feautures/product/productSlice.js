import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk('product/fetchProducts', async () => {
  try {
    const response = await fetch('http://localhost:8080/api/products/all');
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    const data = await response.json();
    console.log('Fetched products:', data);
    return data;
  } catch (error) {
    console.error('Error fetching products:', error.message);
    throw error;
  }
});

// Async thunk to fetch a single product by its ID
export const fetchProductById = createAsyncThunk('product/fetchProductById', async (productId) => {
  try {
    const response = await fetch(`http://localhost:8080/api/products/${productId}`);
    if (!response.ok) {
      throw new Error('Failed to fetch product details');
    }
    const data = await response.json();
    console.log('Fetched product details:', data);
    return data;
  } catch (error) {
    console.error('Error fetching product details:', error.message);
    throw error;
  }
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
