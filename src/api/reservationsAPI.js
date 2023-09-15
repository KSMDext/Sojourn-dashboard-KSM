import axiosWithTokenHook from "../hooks/useAxios";
import config from "../config";

const axiosWithToken = axiosWithTokenHook();

export const reservationsAPI = {
  getAllreservations: () => {
    return axiosWithToken.get(`${config.baseURL}/reservations/`);
  },

  addReservation: ({ reservationData }) => {
    return axiosWithToken.post(`${config.baseURL}/reservations/`, {
      reservationData,
    });
  },

  getReservationById: ({ reservationId }) => {
    return axiosWithToken.get(
      `${config.baseURL}/reservations/${reservationId}/`
    );
  },

  getAvailableCabins: () => {
    return axiosWithToken.get(
      `${config.baseURL}/reservations/get_available_cabins/`
    );
  },

  updateReservationById: ({ reservationId, updatedData }) => {
    return axiosWithToken.put(
      `${config.baseURL}/reservations/${reservationId}/`,
      updatedData
    );
  },

  deleteReservationById: ({ reservationId }) => {
    return axiosWithToken.delete(
      `${config.baseURL}/reservations/${reservationId}/`
    );
  },
};
