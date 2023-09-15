import { createSlice } from "@reduxjs/toolkit";

const couponsSlice = createSlice({
  name: "coupons",
  initialState: {
    allCoupons: [],
  },
  reducers: {
    setAllCoupons: (state, action) => {
      state.allCoupons = action.payload;
    },
  },
});

export const { setAllCoupons } = couponsSlice.actions;

export default couponsSlice.reducer;
