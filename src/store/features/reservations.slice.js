import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "reservations",
  initialState: {
    allReservations: [],
  },

  reducers: {
    setAllReservationData: (state, action) => {
      state.allReservations = action.payload;
    },
  },
});
export const { setAllReservationData } = slice.actions;

export default slice.reducer;
