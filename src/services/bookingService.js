import { apiClient } from './authService';
import API_CONFIG from '../config/api.config';

const bookingService = {
  // Create new booking
  createBooking: async (bookingData) => {
    try {
      const response = await apiClient.post(API_CONFIG.ENDPOINTS.BOOKINGS, bookingData);
      return response.data;
    } catch (error) {
      throw error.response?.data?.message || 'Failed to create booking.';
    }
  },

  // Get all bookings (Admin only)
  getAllBookings: async () => {
    try {
      const response = await apiClient.get(API_CONFIG.ENDPOINTS.BOOKINGS);
      return response.data;
    } catch (error) {
      throw error.response?.data?.message || 'Failed to fetch bookings.';
    }
  },

  // Get user's bookings
  getUserBookings: async () => {
    try {
      const response = await apiClient.get(API_CONFIG.ENDPOINTS.USER_BOOKINGS);
      return response.data;
    } catch (error) {
      throw error.response?.data?.message || 'Failed to fetch your bookings.';
    }
  },

  // Get booking by ID
  getBookingById: async (id) => {
    try {
      const response = await apiClient.get(API_CONFIG.ENDPOINTS.BOOKING_BY_ID(id));
      return response.data;
    } catch (error) {
      throw error.response?.data?.message || 'Failed to fetch booking.';
    }
  },

  // Update booking
  updateBooking: async (id, bookingData) => {
    try {
      const response = await apiClient.put(API_CONFIG.ENDPOINTS.BOOKING_BY_ID(id), bookingData);
      return response.data;
    } catch (error) {
      throw error.response?.data?.message || 'Failed to update booking.';
    }
  },

  // Cancel booking
  cancelBooking: async (id) => {
    try {
      const response = await apiClient.delete(API_CONFIG.ENDPOINTS.BOOKING_BY_ID(id));
      return response.data;
    } catch (error) {
      throw error.response?.data?.message || 'Failed to cancel booking.';
    }
  },
};

export default bookingService;
