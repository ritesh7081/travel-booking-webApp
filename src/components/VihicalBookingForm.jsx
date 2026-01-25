import React, { useState } from 'react';

const VehicleBookingForm = () => {
  const [tripType, setTripType] = useState('oneWay');
  const [selectedVehicle, setSelectedVehicle] = useState('');
  const [airbagOption, setAirbagOption] = useState('yes');
  const [acOption, setAcOption] = useState('ac');
  const [isVehicleDropdownOpen, setIsVehicleDropdownOpen] = useState(false);

  // Sample vehicle data - you can replace with your actual vehicle list
  const vehicleCategories = [
    {
      category: "Economy",
      vehicles: [
        { id: 'eco1', name: 'Maruti Swift', seats: 4, icon: '🚗', ac: true, airbags: 2 },
        { id: 'eco2', name: 'Hyundai i20', seats: 4, icon: '🚗', ac: true, airbags: 2 }
      ]
    },
    {
      category: "Sedan",
      vehicles: [
        { id: 'sed1', name: 'Honda City', seats: 4, icon: '🚘', ac: true, airbags: 4 },
        { id: 'sed2', name: 'Toyota Camry', seats: 4, icon: '🚘', ac: true, airbags: 6 }
      ]
    },
    {
      category: "SUV",
      vehicles: [
        { id: 'suv1', name: 'Toyota Fortuner', seats: 7, icon: '🚙', ac: true, airbags: 6 },
        { id: 'suv2', name: 'Mahindra Scorpio', seats: 7, icon: '🚙', ac: true, airbags: 4 }
      ]
    },
    {
      category: "Luxury",
      vehicles: [
        { id: 'lux1', name: 'Mercedes E-Class', seats: 4, icon: '🏎️', ac: true, airbags: 8 },
        { id: 'lux2', name: 'BMW 5 Series', seats: 4, icon: '🏎️', ac: true, airbags: 6 }
      ]
    },
    {
      category: "Tempo Travellers",
      vehicles: [
        { id: 'tmp1', name: 'Force Traveller', seats: 12, icon: '🚐', ac: true, airbags: 2 },
        { id: 'tmp2', name: 'Mahindra Traveller', seats: 12, icon: '🚐', ac: false, airbags: 0 }
      ]
    }
  ];

  // Flatten all vehicles for easier selection
  const allVehicles = vehicleCategories.flatMap(category => category.vehicles);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 p-4 sm:p-6 flex justify-center items-center">
      <div className="max-w-6xl mx-auto flex">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col lg:flex-row">
          {/* Left Side - Vehicle Options */}
          <div className="lg:w-1/3 bg-gradient-to-b from-blue-600 to-cyan-500 p-6 text-white">
            <h2 className="text-2xl font-bold mb-6">Vehicle Options</h2>
            
            {/* Vehicle Dropdown */}
            <div className="mb-6 relative">
              <label className="block text-sm font-medium mb-2">Select Vehicle</label>
              <button
                type="button"
                onClick={() => setIsVehicleDropdownOpen(!isVehicleDropdownOpen)}
                className="w-full flex justify-between items-center px-4 py-3 bg-white/10 border border-white/30 rounded-lg hover:bg-white/15 transition-colors"
              >
                <span>
                  {selectedVehicle 
                    ? allVehicles.find(v => v.id === selectedVehicle)?.name 
                    : "Choose a vehicle"}
                </span>
                <svg 
                  className={`h-5 w-5 transform transition-transform ${isVehicleDropdownOpen ? 'rotate-180' : ''}`} 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>

              {isVehicleDropdownOpen && (
                <div className="absolute z-10 mt-1 w-full bg-white rounded-lg shadow-lg max-h-96 overflow-y-auto">
                  {vehicleCategories.map((category) => (
                    <div key={category.category}>
                      <div className="px-4 py-2 bg-gray-100 text-gray-700 font-medium">
                        {category.category}
                      </div>
                      {category.vehicles.map((vehicle) => (
                        <div
                          key={vehicle.id}
                          onClick={() => {
                            setSelectedVehicle(vehicle.id);
                            setIsVehicleDropdownOpen(false);
                            setAcOption(vehicle.ac ? 'ac' : 'non-ac');
                            setAirbagOption(vehicle.airbags > 0 ? 'yes' : 'no');
                          }}
                          className={`px-4 py-3 cursor-pointer flex items-center ${selectedVehicle === vehicle.id ? 'bg-blue-50' : 'hover:bg-gray-50'}`}
                        >
                          <span className="text-2xl mr-3">{vehicle.icon}</span>
                          <div>
                            <div className="font-medium text-gray-800">{vehicle.name}</div>
                            <div className="text-sm text-gray-500">
                              {vehicle.seats} seats • {vehicle.airbags} airbags • {vehicle.ac ? 'AC' : 'Non-AC'}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Selected Vehicle Details */}
            {selectedVehicle && (
              <div className="mb-6 p-4 bg-white/10 rounded-lg border border-white/20">
                <div className="flex items-center mb-2">
                  <span className="text-3xl mr-3">
                    {allVehicles.find(v => v.id === selectedVehicle)?.icon}
                  </span>
                  <div>
                    <h3 className="font-bold text-lg">
                      {allVehicles.find(v => v.id === selectedVehicle)?.name}
                    </h3>
                    <p className="text-sm opacity-90">
                      {allVehicles.find(v => v.id === selectedVehicle)?.seats} seats
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="bg-white/10 p-2 rounded">
                    <div className="font-medium">Airbags</div>
                    <div>{allVehicles.find(v => v.id === selectedVehicle)?.airbags || 0}</div>
                  </div>
                  <div className="bg-white/10 p-2 rounded">
                    <div className="font-medium">AC</div>
                    <div>{allVehicles.find(v => v.id === selectedVehicle)?.ac ? 'Yes' : 'No'}</div>
                  </div>
                </div>
              </div>
            )}

            {/* Options */}
            <div className="space-y-6">
              <div>
                <h3 className="font-medium mb-3">Airbag Requirement</h3>
                <div className="flex space-x-3">
                  <button
                    onClick={() => setAirbagOption('yes')}
                    className={`px-4 py-2 rounded-lg text-sm ${airbagOption === 'yes' ? 'bg-white text-blue-600' : 'bg-white/10'}`}
                  >
                    Must Have Airbags
                  </button>
                  <button
                    onClick={() => setAirbagOption('no')}
                    className={`px-4 py-2 rounded-lg text-sm ${airbagOption === 'no' ? 'bg-white text-blue-600' : 'bg-white/10'}`}
                  >
                    Not Required
                  </button>
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-3">AC Preference</h3>
                <div className="flex space-x-3">
                  <button
                    onClick={() => setAcOption('ac')}
                    className={`px-4 py-2 rounded-lg text-sm ${acOption === 'ac' ? 'bg-white text-blue-600' : 'bg-white/10'}`}
                  >
                    AC Required
                  </button>
                  <button
                    onClick={() => setAcOption('non-ac')}
                    className={`px-4 py-2 rounded-lg text-sm ${acOption === 'non-ac' ? 'bg-white text-blue-600' : 'bg-white/10'}`}
                  >
                    Non-AC Okay
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Booking Form */}
          <div className="lg:w-2/3 p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Trip Details</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-7">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Trip Type</label>
                <div className="inline-flex rounded-md shadow-sm">
                  <button
                    type="button"
                    onClick={() => setTripType('oneWay')}
                    className={`px-4 py-2 text-sm font-medium rounded-l-lg ${tripType === 'oneWay' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                  >
                    One Way
                  </button>
                  <button
                    type="button"
                    onClick={() => setTripType('roundTrip')}
                    className={`px-4 py-2 text-sm font-medium rounded-r-lg ${tripType === 'roundTrip' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                  >
                    Round Trip
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Pickup Date</label>
                <input
                  type="date"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Pickup Location</label>
                <input
                  type="text"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter pickup location"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Drop Location</label>
                <input
                  type="text"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter drop location"
                  required
                />
              </div>

              {tripType === 'roundTrip' && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Return Date</label>
                    <input
                      type="date"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Return Time</label>
                    <input
                      type="time"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                </>
              )}
            </div>

            <div className="mb-7">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Passenger Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="+91 1234567890"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Passengers</label>
                  <select className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(num => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'Passenger' : 'Passengers'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium py-3 px-6 rounded-lg shadow-md hover:from-blue-700 hover:to-cyan-600 transition-all duration-300"
              disabled={!selectedVehicle}
            >
              {selectedVehicle ? 'Confirm Booking' : 'Select a Vehicle to Continue'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleBookingForm;