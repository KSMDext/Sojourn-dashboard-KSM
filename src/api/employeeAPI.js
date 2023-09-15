import axiosWithTokenHook from "../hooks/useAxios";
import config from "../config";

const axiosWithToken = axiosWithTokenHook();

export const employeesAPI = {
  getAllEmployees: () => {
    return axiosWithToken.get(`${config.baseURL}/employees/`);
  },

  addEmployee: ({ employeeData }) => {
    return axiosWithToken.post(`${config.baseURL}/employees/`, employeeData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },

  getEmployeeById: ({ employeeId }) => {
    return axiosWithToken.get(`${config.baseURL}/employees/${employeeId}/`);
  },

  updateEmployeeById: ({ employeeId, updatedData }) => {
    return axiosWithToken.put(
      `${config.baseURL}/employees/${employeeId}/`,
      updatedData
    );
  },

  deleteEmployeeById: ({ employeeId }) => {
    return axiosWithToken.delete(`${config.baseURL}/employees/${employeeId}/`);
  },

  // addEmployee: ({ employeeData }) => {
  //   const formData = new FormData();

  //   // Loop through the keys of the employeeData object
  //   for (const key in employeeData) {
  //     if (employeeData.hasOwnProperty(key)) {
  //       // Append each key-value pair to the formData
  //       formData.append(key, employeeData[key]);
  //     }
  //   }

  //   return axiosWithToken.post(`${config.baseURL}/employees/`, formData, {
  //     headers: {
  //       "Content-Type": "multipart/form-data",
  //     },
  //   });
  // },
};
