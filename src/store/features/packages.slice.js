import { createSlice } from "@reduxjs/toolkit";

const packagesSlice = createSlice({
  name: "packages",
  initialState: {
    allPackages: [], 
  },
  reducers: {
    setAllPackages: (state, action) => {
      state.allPackages = action.payload.results;
    },
  },
});

export const { setAllPackages } = packagesSlice.actions;

export default packagesSlice.reducer;
