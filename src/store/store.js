import { combineReducers } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import staff from "./features/staff.slice";
import locationReducer from "./features/location.slice";
import cabinsSlice from "./features/cabins.slice";
import reservationsSlice from "./features/reservations.slice";
import addCouponReducer from "./features/addcoupon.slice";
import couponsSlice from "./features/coupons.slice";
import extrachargesSlice from "./features/extracharges.slice";
import packagesSlice from "./features/packages.slice";

export const reducer = combineReducers({
  staff,
  locations: locationReducer,
  cabins: cabinsSlice,
  reservations: reservationsSlice,
  addCoupon: addCouponReducer,
  coupons: couponsSlice,
  extracharges: extrachargesSlice,
  packages: packagesSlice
});

export const store = configureStore({
  reducer,
});

export default store;
