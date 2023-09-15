import { createSlice } from "@reduxjs/toolkit";

const extraChargesSlice = createSlice({
  name: "extraCharges",
  initialState: {
    allExtraCharges: [],
  },
  reducers: {
    setAllExtraCharges: (state, action) => {
      state.allExtraCharges = action.payload;
    },
  },
});

export const { setAllExtraCharges } = extraChargesSlice.actions;

export default extraChargesSlice.reducer;
