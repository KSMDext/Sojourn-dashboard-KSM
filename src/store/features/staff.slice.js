import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "staff",
  initialState: {
    allStaff: [],
  },

  reducers: {
    setAllStaffData: (state, action) => {
      state.allStaff = action.payload;
    },
  },
});
export const { setAllStaffData } = slice.actions;

export default slice.reducer;
