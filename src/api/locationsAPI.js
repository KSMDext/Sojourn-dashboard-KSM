import axiosWithTokenHook from "../hooks/useAxios";
import config from "../config";

const axiosWithToken = axiosWithTokenHook();

export const locationsAPI = {
  getAllLocations: () => {
    return axiosWithToken.get(`${config.baseURL}/locations/`);
  },

  addLocation: ({ locationData }) => {
    return axiosWithToken.post(`${config.baseURL}/locations`, { locationData });
  },

  getLocationById: ({ locationId }) => {
    return axiosWithToken.get(`${config.baseURL}/locations/${locationId}/`);
  },

  updateLocationById: ({ locationId, updatedData }) => {
    return axiosWithToken.put(
      `${config.baseURL}/locations/${locationId}/`,
      updatedData
    );
  },

  deleteLocationById: ({ locationId }) => {
    return axiosWithToken.delete(`${config.baseURL}/locations/${locationId}/`);
  },

  addLocationImage: ({ locationId, photoData }) => {
    const formData = new FormData();
    formData.append("image", photoData);

    return axiosWithToken.post(
      `${config.baseURL}/locations/${locationId}/add_image`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
  },

  deleteLocationImage: ({ locationId, imageId }) => {
    return axiosWithToken.delete(
      `${config.baseURL}/locations/${locationId}/remove_image/${imageId}/`
    );
  },
};
