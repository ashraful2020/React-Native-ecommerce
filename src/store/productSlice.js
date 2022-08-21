import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  isLoading: false,
  error: null,
  status: "idle",
};
//
const fetchedProducts = createAsyncThunk("products/fetchProduct", async () => {
  const res = await fetch(
    "https://mocki.io/v1/af29529b-ae7d-45a6-81c7-abf4fcb1d14d"
  );
  return res.json();
});
export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchedProducts.pending]: (state, action) => {
      state.isLoading = true;
    },
    [fetchedProducts.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [fetchedProducts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = productSlice.actions;

export default productSlice.reducer;
