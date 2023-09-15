import axiosWithTokenHook from "hooks/useAxios";
import config from "../config";

const axiosWithToken = axiosWithTokenHook();

export const packagesAPI = {
  getAllPackages: () => {
    return axiosWithToken.get(`${config.baseURL}/packages/`);
  },

  addPackage: ({ packageData }) => {
    return axiosWithToken.post(`${config.baseURL}/packages/`, {
      packageData,
    });
  },

  getPackageById: ({ packageId }) => {
    return axiosWithToken.get(`${config.baseURL}/packages/${packageId}/`);
  },

  updatePackageById: ({ packageId, updatedData }) => {
    return axiosWithToken.put(
      `${config.baseURL}/packages/${packageId}/`,
      updatedData
    );
  },

  deletePackageById: ({ packageId }) => {
    return axiosWithToken.delete(`${config.baseURL}/packages/${packageId}/`);
  },
};
