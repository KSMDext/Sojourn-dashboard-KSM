import { combineReducers } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import staff from "./features/staff.slice";
import locationReducer from "./features/location.slice";
import cabinsSlice from "./features/cabins.slice";
import reservationsSlice from "./features/reservations.slice";

export const reducer = combineReducers({
  staff,
  locations: locationReducer,
  cabins: cabinsSlice,
  reservations: reservationsSlice,
});

export const store = configureStore({
  reducer,
});

export default store;
