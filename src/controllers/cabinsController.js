import { cabinsAPI } from "../api/cabinsAPI";

class CabinsController {
  static async getAllCabins() {
    try {
      const response = await cabinsAPI.getAllCabins();
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

  static async addCabin({ cabinData }) {
    try {
      const response = await cabinsAPI.addCabin({ cabinData });
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

  static async getCabinById({ cabinId }) {
    try {
      const response = await cabinsAPI.getCabinById({ cabinId });
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

  static async updateCabinById({ cabinId, updatedData }) {
    try {
      const response = await cabinsAPI.updateCabinById({
        cabinId,
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

  static async deleteCabinById({ cabinId }) {
    try {
      await cabinsAPI.deleteCabinById({ cabinId });
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

  static async addCabinImage({ cabinId, photoData }) {
    try {
      const response = await cabinsAPI.addCabinImage({ cabinId, photoData });
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

  static async deleteCabinImage({ cabinId, imageId }) {
    try {
      await cabinsAPI.deleteCabinImage({ cabinId, imageId });
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

export default CabinsController;
