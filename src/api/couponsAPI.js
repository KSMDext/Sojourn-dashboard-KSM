import axiosWithTokenHook from "hooks/useAxios";
import config from "../config";

const axiosWithToken = axiosWithTokenHook();

export const couponsAPI = {
  getAllCoupons: () => {
    return axiosWithToken.get(`${config.baseURL}/coupons/`);
  },

  addCoupon: ({ couponData }) => {
    return axiosWithToken.post(`${config.baseURL}/coupons/`, { couponData });
  },

  getCouponById: ({ couponId }) => {
    return axiosWithToken.get(`${config.baseURL}/coupons/${couponId}/`);
  },

  updateCouponById: ({ couponId, updatedData }) => {
    return axiosWithToken.put(
      `${config.baseURL}/coupons/${couponId}/`,
      updatedData
    );
  },

  deleteCouponById: ({ couponId }) => {
    return axiosWithToken.delete(`${config.baseURL}/coupons/${couponId}/`);
  },
};
