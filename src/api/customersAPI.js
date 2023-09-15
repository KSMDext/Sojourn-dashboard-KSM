import axiosWithTokenHook from "hooks/useAxios";
import config from "../config";

const axiosWithToken = axiosWithTokenHook();

export const customerAPI = {
  getAllCustomers: () => {
    return axiosWithToken.get(`${config.baseURL}/customers/`);
  },

  addCustomer: ({ customerData }) => {
    return axiosWithToken.post(`${config.baseURL}/customers`, { customerData });
  },

  getCustomerById: ({ customerId }) => {
    return axiosWithToken.get(`${config.baseURL}/customers/${customerId}/`);
  },

  getCustomerReservations: ({ customerId }) => {
    return axiosWithToken.get(
      `${config.baseURL}/customers/${customerId}/reservations/`
    );
  },

  updateCustomerById: ({ customerId, updatedData }) => {
    return axiosWithToken.put(
      `${config.baseURL}/customers/${customerId}/`,
      updatedData
    );
  },

  deleteCustomerById: ({ customerId }) => {
    return axiosWithToken.delete(`${config.baseURL}/customers/${customerId}/`);
  },
};
