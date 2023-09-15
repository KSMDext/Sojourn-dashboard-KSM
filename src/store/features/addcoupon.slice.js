import { createSlice } from "@reduxjs/toolkit";

const addCouponSlice = createSlice({
  name: "addCoupon",
  initialState: {
    newCoupon: null, 
    isAdding: false, 
    addError: null, 
  },
  reducers: {
    addCouponRequest: (state) => {
      state.isAdding = true;
      state.addError = null;
    },
    addCouponSuccess: (state, action) => {
      state.isAdding = false;
      state.newCoupon = action.payload;
    },
    addCouponFailure: (state, action) => {
      state.isAdding = false;
      state.addError = action.payload;
    },
  },
});

export const { addCouponRequest, addCouponSuccess, addCouponFailure } =
  addCouponSlice.actions;

export default addCouponSlice.reducer;
