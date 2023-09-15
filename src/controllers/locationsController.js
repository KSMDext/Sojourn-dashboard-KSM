import { locationsAPI } from "../api/locationsAPI";

class LocationsController {
  static async getAllLocations() {
    try {
      const response = await locationsAPI.getAllLocations();
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

  static async addLocation({ locationData }) {
    try {
      const response = await locationsAPI.addLocation({ locationData });
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

  static async getLocationById({ locationId }) {
    try {
      const response = await locationsAPI.getLocationById({ locationId });
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

  static async updateLocationById(locationId, updatedData) {
    try {
      const response = await locationsAPI.updateLocationById({
        locationId,
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

  static async deleteLocationById({ locationId }) {
    try {
      await locationsAPI.deleteLocationById({ locationId });
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

  static async addLocationImage(locationId, photoFile) {
    try {
      const response = await locationsAPI.addLocationImage(
        locationId,
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

  static async deleteLocationImage({ locationId, imageId }) {
    try {
      await locationsAPI.deleteLocationImage({ locationId, imageId });
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

export default LocationsController;
