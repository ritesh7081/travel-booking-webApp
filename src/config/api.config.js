// API Configuration
// Change this base URL to match your backend server

const API_CONFIG = {
  // Base URL: prefers env for deployed backend, falls back to render instance for demo
  BASE_URL: import.meta.env.VITE_API_URL || 'https://travel-booking-app-backend-e5ph.onrender.com/api',
  
  
  // API Endpoints
  ENDPOINTS: {
    // Auth endpoints
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    LOGOUT: '/auth/logout',
    
    // Vehicle endpoints
    VEHICLES: '/vehicles',
    VEHICLE_BY_ID: (id) => `/vehicles/${id}`,
    
    // Booking endpoints
    BOOKINGS: '/bookings',
    BOOKING_BY_ID: (id) => `/bookings/${id}`,
    USER_BOOKINGS: '/bookings/user',
    
    // Enquiry endpoints
    ENQUIRIES: '/enquiries',
    ENQUIRY_BY_ID: (id) => `/enquiries/${id}`,
  },
  
  // Request timeout (in milliseconds)
  TIMEOUT: 10000,
  
  // Headers
  HEADERS: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }
};

export default API_CONFIG;
