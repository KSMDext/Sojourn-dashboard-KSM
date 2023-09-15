import { employeesAPI } from "../api/employeeAPI";

class EmployeesController {
  static async getAllEmployees() {
    try {
      const response = await employeesAPI.getAllEmployees();
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

  static async addEmployee({ employeeData }) {
    try {

      const response = await employeesAPI.addEmployee({ employeeData });
      return {
        success: true,
        data: response.data,
        error: null,
      };
    } catch (error) {
      const { response } = error;
      console.log(response);


      const err = response?.data?.err;
      return {
        success: false,
        data: null,
        error: err || "Something went wrong",
      };
    }
  }

  static async getEmployeeById({ employeeId }) {
    try {
      const response = await employeesAPI.getEmployeeById({ employeeId });
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

  static async updateEmployeeById(employeeId, updatedData) {
    try {
      const response = await employeesAPI.updateEmployeeById({
        employeeId,
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

  static async deleteEmployeeById({ employeeId }) {
    console.log(employeeId);
    try {
      await employeesAPI.deleteEmployeeById({ employeeId });
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

  static async updateProfilePhoto(employeeId, photoFile) {
    try {
      const response = await employeesAPI.updateProfilePhoto(
        employeeId,
        photoFile
      );
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
}

export default EmployeesController;
