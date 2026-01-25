import { apiClient } from './authService';
import API_CONFIG from '../config/api.config';

const enquiryService = {
  // Create new enquiry
  createEnquiry: async (enquiryData) => {
    try {
      const response = await apiClient.post(API_CONFIG.ENDPOINTS.ENQUIRIES, enquiryData);
      return response.data;
    } catch (error) {
      throw error.response?.data?.message || 'Failed to submit enquiry.';
    }
  },

  // Get all enquiries (Admin only)
  getAllEnquiries: async () => {
    try {
      const response = await apiClient.get(API_CONFIG.ENDPOINTS.ENQUIRIES);
      return response.data;
    } catch (error) {
      throw error.response?.data?.message || 'Failed to fetch enquiries.';
    }
  },

  // Get enquiry by ID
  getEnquiryById: async (id) => {
    try {
      const response = await apiClient.get(API_CONFIG.ENDPOINTS.ENQUIRY_BY_ID(id));
      return response.data;
    } catch (error) {
      throw error.response?.data?.message || 'Failed to fetch enquiry.';
    }
  },

  // Update enquiry status (Admin only)
  updateEnquiry: async (id, enquiryData) => {
    try {
      const response = await apiClient.put(API_CONFIG.ENDPOINTS.ENQUIRY_BY_ID(id), enquiryData);
      return response.data;
    } catch (error) {
      throw error.response?.data?.message || 'Failed to update enquiry.';
    }
  },

  // Delete enquiry (Admin only)
  deleteEnquiry: async (id) => {
    try {
      const response = await apiClient.delete(API_CONFIG.ENDPOINTS.ENQUIRY_BY_ID(id));
      return response.data;
    } catch (error) {
      throw error.response?.data?.message || 'Failed to delete enquiry.';
    }
  },
};

export default enquiryService;
