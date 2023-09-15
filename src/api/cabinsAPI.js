import axiosWithTokenHook from "../hooks/useAxios";
import config from "../config";

const axiosWithToken = axiosWithTokenHook();

export const cabinsAPI = {
  getAllCabins: () => {
    return axiosWithToken.get(`${config.baseURL}/cabins/`);
  },

  addCabin: ({ cabinData }) => {
    return axiosWithToken.post(`${config.baseURL}/cabins`, { cabinData });
  },

  getCabinById: ({ employeeId }) => {
    return axiosWithToken.get(`${config.baseURL}/cabins/${employeeId}/`);
  },

  updateCabinById: ({ cabinId, updatedData }) => {
    return axiosWithToken.put(
      `${config.baseURL}/cabins/${cabinId}/`,
      updatedData
    );
  },

  deleteCabinById: ({ cabinId }) => {
    return axiosWithToken.delete(`${config.baseURL}/cabins/${cabinId}/`);
  },

  addCabinImage: ({ cabinId, photoData }) => {
    const formData = new FormData();
    formData.append("image", photoData);

    return axiosWithToken.post(
      `${config.baseURL}/cabins/${cabinId}/add_image`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
  },

  deleteCabinImage: ({ cabinId, imageId }) => {
    return axiosWithToken.delete(
      `${config.baseURL}/cabins/${cabinId}/remove_image/${imageId}`
    );
  },
};
