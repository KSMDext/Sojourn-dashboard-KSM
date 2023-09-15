import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "cabin",
  initialState: {
    allCabins: [],
  },

  reducers: {
    setAllCabins: (state, action) => {
      state.allCabins = action.payload;
    },
  },
});
export const { setAllCabins } = slice.actions;

export default slice.reducer;
