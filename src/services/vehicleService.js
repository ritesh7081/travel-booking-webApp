import { apiClient } from './authService';
import API_CONFIG from '../config/api.config';

const vehicleService = {
  // Get all vehicles
  getAllVehicles: async () => {
    try {
      const response = await apiClient.get(API_CONFIG.ENDPOINTS.VEHICLES);
      return response.data;
    } catch (error) {
      throw error.response?.data?.message || 'Failed to fetch vehicles.';
    }
  },

  // Get vehicle by ID
  getVehicleById: async (id) => {
    try {
      const response = await apiClient.get(API_CONFIG.ENDPOINTS.VEHICLE_BY_ID(id));
      return response.data;
    } catch (error) {
      throw error.response?.data?.message || 'Failed to fetch vehicle.';
    }
  },

  // Create new vehicle (Admin only)
  createVehicle: async (vehicleData) => {
    try {
      const response = await apiClient.post(API_CONFIG.ENDPOINTS.VEHICLES, vehicleData);
      return response.data;
    } catch (error) {
      throw error.response?.data?.message || 'Failed to create vehicle.';
    }
  },

  // Update vehicle (Admin only)
  updateVehicle: async (id, vehicleData) => {
    try {
      const response = await apiClient.put(API_CONFIG.ENDPOINTS.VEHICLE_BY_ID(id), vehicleData);
      return response.data;
    } catch (error) {
      throw error.response?.data?.message || 'Failed to update vehicle.';
    }
  },

  // Delete vehicle (Admin only)
  deleteVehicle: async (id) => {
    try {
      const response = await apiClient.delete(API_CONFIG.ENDPOINTS.VEHICLE_BY_ID(id));
      return response.data;
    } catch (error) {
      throw error.response?.data?.message || 'Failed to delete vehicle.';
    }
  },
};

export default vehicleService;
