import { couponsAPI } from "../api/couponsAPI";

class CouponsController {
  static async getAllCoupons() {
    try {
      const response = await couponsAPI.getAllCoupons();
      return {
        success: true,
        data: response.data,
        error: null,
      };
    } catch (error) {
      const { response } = error;
      const err = response?.data?.err;
      return {
        success: false,
        data: null,
        error: err || "Something went wrong",
      };
    }
  }

  static async addCoupon({ couponData }) {
    try {
      const response = await couponsAPI.addCoupon({ couponData });
      return {
        success: true,
        data: response.data,
        error: null,
      };
    } catch (error) {
      const { response } = error;
      const err = response?.data?.err;
      return {
        success: false,
        data: null,
        error: err || "Something went wrong",
      };
    }
  }

  static async getCouponById({ couponId }) {
    try {
      const response = await couponsAPI.getCouponById({ couponId });
      return {
        success: true,
        data: response.data,
        error: null,
      };
    } catch (error) {
      const { response } = error;
      const err = response?.data?.err;
      return {
        success: false,
        data: null,
        error: err || "Something went wrong",
      };
    }
  }

  static async updateCouponById({ couponId, updatedData }) {
    try {
      const response = await couponsAPI.updateCouponById({
        couponId,
        updatedData,
      });
      return {
        success: true,
        data: response.data,
        error: null,
      };
    } catch (error) {
      const { response } = error;
      const err = response?.data?.err;
      return {
        success: false,
        data: null,
        error: err || "Something went wrong",
      };
    }
  }

  static async deleteCouponById({ couponId }) {
    try {
      await couponsAPI.deleteCouponById({ couponId });
      return {
        success: true,
        data: null,
        error: null,
      };
    } catch (error) {
      const { response } = error;
      const err = response?.data?.err;
      return {
        success: false,
        data: null,
        error: err || "Something went wrong",
      };
    }
  }
}

export default CouponsController;
