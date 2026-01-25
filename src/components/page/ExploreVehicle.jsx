import React, { useState } from 'react';

export default function ExploreVehicle() {
  // Dummy data for vehicles
  const vehicles = [
    {
      id: 1,
      name: 'Toyota Innova',
      images: [
        'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1494976388901-750336ad0eaa?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
      ],
      rate: 45,
      type: 'SUV',
      seatingCapacity: 7,
      ac: true,
      airbag: true,
      fuelType: 'Petrol',
      luggageCapacity: 4,
      description: 'Spacious and comfortable ride ideal for family travel with advanced safety features.',
      available: true
    },
    {
      id: 2,
      name: 'Honda City',
      images: [
        'https://images.unsplash.com/photo-1549317661-bd32d8cdf2a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1550355291-bbee04a02027?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
      ],
      rate: 35,
      type: 'Sedan',
      seatingCapacity: 5,
      ac: true,
      airbag: true,
      fuelType: 'Petrol',
      luggageCapacity: 2,
      description: 'Elegant sedan with premium features and excellent fuel efficiency.',
      available: true
    },
    {
      id: 3,
      name: 'Ford Mustang',
      images: [
        'https://images.unsplash.com/photo-1493238792000-8113da705763?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
      ],
      rate: 75,
      type: 'Sports',
      seatingCapacity: 4,
      ac: true,
      airbag: true,
      fuelType: 'Petrol',
      luggageCapacity: 2,
      description: 'Iconic sports car with powerful performance and head-turning design.',
      available: false
    }
  ];

  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  const openModal = (vehicle) => {
    setSelectedVehicle(vehicle);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedVehicle(null);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex + 1) % selectedVehicle.images.length
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex - 1 + selectedVehicle.images.length) % selectedVehicle.images.length
    );
  };

  const visibleVehicles = showMore ? vehicles : vehicles.slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header with gradient */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Explore Our Vehicles</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-indigo-600 mx-auto rounded-full"></div>
        </div>

        {/* Vehicle Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleVehicles.map((vehicle) => (
            <div 
              key={vehicle.id} 
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer"
              onClick={() => openModal(vehicle)}
            >
              {/* Image with gradient overlay */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={vehicle.images[0]} 
                  alt={vehicle.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-blue-500/10"></div>
                {/* Price tag with gradient */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md">
                  ${vehicle.rate}/hr
                </div>
                {!vehicle.available && (
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md">
                    Booked
                  </div>
                )}
              </div>

              {/* Card Content */}
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold text-gray-800">{vehicle.name}</h3>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                    {vehicle.type}
                  </span>
                </div>

                <div className="mt-4 flex items-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-blue-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    {vehicle.seatingCapacity} Seats
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-blue-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                    {vehicle.luggageCapacity} Bags
                  </div>
                </div>

                <div className="mt-4 flex items-center space-x-2">
                  {vehicle.ac && (
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                      AC
                    </span>
                  )}
                  {vehicle.airbag && (
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                      Airbag
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        {!showMore && vehicles.length > 3 && (
          <div className="text-center mt-10">
            <button 
              onClick={() => setShowMore(true)}
              className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:opacity-90"
            >
              Show More Vehicles
            </button>
          </div>
        )}

        {/* Modal for Vehicle Details */}
        {selectedVehicle && (
          <div className="fixed inset-0 backdrop-brightness-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              {/* Modal Header with gradient */}
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6 rounded-t-xl">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold">{selectedVehicle.name}</h2>
                  <button 
                    onClick={closeModal}
                    className="text-white hover:text-gray-200 focus:outline-none"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div className="flex items-center mt-2 space-x-4">
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                    {selectedVehicle.type}
                  </span>
                  <span className="text-white/90">
                    ${selectedVehicle.rate}/hr
                  </span>
                  {!selectedVehicle.available && (
                    <span className="bg-red-500 px-3 py-1 rounded-full text-sm">
                      Currently Booked
                    </span>
                  )}
                </div>
              </div>

              {/* Image Gallery */}
              <div className="relative h-64 sm:h-80 bg-gray-100">
                <img 
                  src={selectedVehicle.images[currentImageIndex]} 
                  alt={selectedVehicle.name}
                  className="w-full h-full object-cover"
                />
                
                {/* Navigation Arrows */}
                {selectedVehicle.images.length > 1 && (
                  <>
                    <button 
                      onClick={(e) => { e.stopPropagation(); prevImage(); }}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 text-blue-600 rounded-full p-2 shadow-md hover:bg-white transition"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button 
                      onClick={(e) => { e.stopPropagation(); nextImage(); }}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 text-blue-600 rounded-full p-2 shadow-md hover:bg-white transition"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </>
                )}
                
                {/* Image Indicator */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                  {selectedVehicle.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(index); }}
                      className={`w-2 h-2 rounded-full ${currentImageIndex === index ? 'bg-white' : 'bg-white/50'}`}
                    />
                  ))}
                </div>
              </div>

              {/* Vehicle Details */}
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="bg-blue-100 p-3 rounded-full mr-4">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-gray-500 text-sm">Seating Capacity</h4>
                        <p className="font-medium">{selectedVehicle.seatingCapacity} Persons</p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div className="bg-blue-100 p-3 rounded-full mr-4">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-gray-500 text-sm">Luggage Capacity</h4>
                        <p className="font-medium">{selectedVehicle.luggageCapacity} Bags</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="bg-blue-100 p-3 rounded-full mr-4">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-gray-500 text-sm">Fuel Type</h4>
                        <p className="font-medium">{selectedVehicle.fuelType}</p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div className="bg-blue-100 p-3 rounded-full mr-4">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-gray-500 text-sm">Features</h4>
                        <div className="flex space-x-2">
                          {selectedVehicle.ac && (
                            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                              AC
                            </span>
                          )}
                          {selectedVehicle.airbag && (
                            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                              Airbag
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="border-t border-gray-200 pt-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Description</h3>
                  <p className="text-gray-600">{selectedVehicle.description}</p>
                </div>

                {/* Book Now Button */}
                <div className="mt-8">
                  <button
                    className={`w-full py-3 rounded-lg font-bold text-white shadow-lg transition-all duration-300 ${selectedVehicle.available 
                      ? 'bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700' 
                      : 'bg-gray-400 cursor-not-allowed'}`}
                    disabled={!selectedVehicle.available}
                  >
                    {selectedVehicle.available ? 'Book Now' : 'Currently Unavailable'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}