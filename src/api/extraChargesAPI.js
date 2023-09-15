import axiosWithTokenHook from "../hooks/useAxios";
import config from "../config";

const axiosWithToken = axiosWithTokenHook();

export const extraChargesAPI = {
  getAllExtraCharges: () => {
    return axiosWithToken.get(`${config.baseURL}/extra_charges/`);
  },

  addExtraCharge: ({ chargeData }) => {
    return axiosWithToken.post(`${config.baseURL}/extra_charges/`, {
      chargeData,
    });
  },

  getExtraChargeById: ({ chargeId }) => {
    return axiosWithToken.get(`${config.baseURL}/extra_charges/${chargeId}/`);
  },

  updateExtraChargeById: ({ chargeId, updatedData }) => {
    return axiosWithToken.put(
      `${config.baseURL}/extra_charges/${chargeId}/`,
      updatedData
    );
  },

  deleteExtraChargeById: ({ chargeId }) => {
    return axiosWithToken.delete(
      `${config.baseURL}/extra_charges/${chargeId}/`
    );
  },
};
