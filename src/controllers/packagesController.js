import { packagesAPI } from "../api/packagesAPI";

class PackagesController {
  static async getAllPackages() {
    try {
      const response = await packagesAPI.getAllPackages();
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

  static async addPackage({ packageData }) {
    try {
      const response = await packagesAPI.addPackage({ packageData });
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

  static async getPackageById({ packageId }) {
    try {
      const response = await packagesAPI.getPackageById({ packageId });
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

  static async updatePackageById({ packageId, updatedData }) {
    try {
      const response = await packagesAPI.updatePackageById({
        packageId,
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

  static async deletePackageById({ packageId }) {
    try {
      await packagesAPI.deletePackageById({ packageId });
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

export default PackagesController;
