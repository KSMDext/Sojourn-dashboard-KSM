import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "location",
  initialState: {
    allLocations: [],
  },

  reducers: {
    setAllLocations: (state, action) => {
      state.allLocations = action.payload;
    },
  },
});
export const { setAllLocations } = slice.actions;

export default slice.reducer;
