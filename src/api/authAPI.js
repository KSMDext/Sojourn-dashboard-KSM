import axios from "axios";
import config from "../config";

export const authAPI = {

  login: ({ email, password }) => {
    
    return axios.post(
      `${config.baseURL}/auth/token/`,
      { email, password },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  },

  // signUp: ({ signUpData }) => {
  //   return axios.post(
  //     `${config.baseURL}/auth/signup`,
  //     { ...signUpData },
  //     {
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     }
  //   );
  // },
};
