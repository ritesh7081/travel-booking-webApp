import React, { useState } from "react";
import { Carousel } from "primereact/carousel";
import Car1 from "../../assets/Cars/Car1.png";
import Car2 from "../../assets/Cars/Car2.png";
import Car3 from "../../assets/Cars/Car3.png";
import Car4 from "../../assets/Cars/Car4.png";
import Car5 from "../../assets/Cars/Car5.png";
import Car6 from "../../assets/Cars/Car6.png";
import Car7 from "../../assets/Cars/Car7.png";

const vehicles = [
  {
    type: "Premium Car",
    image: Car1,
    description: "Luxury vehicles with premium features for business or leisure.",
    price: "$120/day",
    features: ["GPS Navigation", "Leather Seats", "Bluetooth", "Sunroof"],
    rating: 4.8,
  },
  {
    type: "Family Van",
    image: Car2,
    description: "Spacious and comfortable for family trips.",
    price: "$90/day",
    features: ["7 Seats", "Child Safety", "Large Trunk", "Dual AC"],
    rating: 4.6,
  },
  {
    type: "Tour Bus",
    image: Car3,
    description: "Professional transportation for large groups.",
    price: "$250/day",
    features: ["50 Seats", "AC", "Entertainment", "WiFi"],
    rating: 4.7,
  },
  {
    type: "Luxury SUV",
    image: Car4,
    description: "Premium SUVs for all adventures.",
    price: "$150/day",
    features: ["4WD", "Panoramic Sunroof", "Premium Sound", "Heated Seats"],
    rating: 4.9,
  },
  {
    type: "Compact Car",
    image: Car5,
    description: "Fuel-efficient and easy to park for city driving.",
    price: "$70/day",
    features: ["Eco Mode", "Compact Design", "Bluetooth", "Rear Camera"],
    rating: 4.5,
  },
  {
    type: "Convertible",
    image: Car6,
    description: "Enjoy open-air driving with style.",
    price: "$130/day",
    features: ["Retractable Top", "Sport Mode", "Premium Audio", "Keyless Entry"],
    rating: 4.7,
  },
  {
    type: "Electric Car",
    image: Car7,
    description: "Eco-friendly driving with cutting-edge technology.",
    price: "$110/day",
    features: ["Zero Emissions", "Touchscreen", "Fast Charging", "Autopilot"],
    rating: 4.8,
  },
];

const responsiveOptions = [
  {
    breakpoint: "1280px",
    numVisible: 3,
    numScroll: 3,
  },
  {
    breakpoint: "1024px",
    numVisible: 2,
    numScroll: 2,
  },
  {
    breakpoint: "768px",
    numVisible: 1,
    numScroll: 1,
  },
];

const VehicleScroll = () => {
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  const productTemplate = (vehicle) => {
    return (
      <div className="px-3 py-4 cursor-pointer group" onClick={() => setSelectedVehicle(vehicle)}>
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
          {/* Vehicle Image with Overlay */}
          <div className="relative h-56 w-full overflow-hidden">
            <img
              src={vehicle.image}
              alt={vehicle.type}
              className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <div className="flex justify-between items-end">
                <div>
                  <h2 className="text-xl font-bold text-white">{vehicle.type}</h2>
                  <p className="text-blue-200 text-sm">{vehicle.price}</p>
                </div>
                <div className="flex items-center bg-blue-600/90 px-2 py-1 rounded-full">
                  <svg className="w-4 h-4 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-white text-sm ml-1">{vehicle.rating}</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Vehicle Details */}
          <div className="p-5 flex flex-col flex-grow">
            <p className="text-gray-600 text-sm mb-4 line-clamp-2">
              {vehicle.description}
            </p>
            
            <div className="mt-auto">
              <div className="flex flex-wrap gap-2 mb-4">
                {vehicle.features.slice(0, 3).map((feature, i) => (
                  <span
                    key={i}
                    className="bg-blue-50 text-blue-600 px-2.5 py-1 rounded-full text-xs font-medium"
                  >
                    {feature}
                  </span>
                ))}
              </div>
              
              
            </div>
          </div>
        </div>
      </div>
    );
  };

  const closeModal = () => {
    setSelectedVehicle(null);
  };

  return (
    <div className="w-full bg-gradient-to-br from-blue-50 to-cyan-50 py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h1 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 mb-3">
            Our Premium Fleet
          </h1>
          <p className="text-blue-600/80 max-w-2xl mx-auto text-lg">
            Choose from our curated selection of luxury and practical vehicles for every occasion
          </p>
        </div>
        
        <Carousel
          value={vehicles}
          numVisible={3}
          numScroll={1}
          responsiveOptions={responsiveOptions}
          className="custom-carousel pb-10"
          circular
          autoplayInterval={4000}
          itemTemplate={productTemplate}
        />
      </div>

      {/* Vehicle Detail Modal */}
      {selectedVehicle && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 px-4 py-8">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
            >
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Modal Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Image Section */}
              <div className="relative h-64 lg:h-full bg-gray-100 rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none overflow-hidden">
                <img
                  src={selectedVehicle.image}
                  alt={selectedVehicle.type}
                  className="w-full h-full object-contain"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <div className="flex justify-between items-end">
                    <div>
                      <h2 className="text-2xl font-bold text-white">{selectedVehicle.type}</h2>
                      <p className="text-blue-200">{selectedVehicle.price}</p>
                    </div>
                    <div className="flex items-center bg-blue-600/90 px-3 py-1 rounded-full">
                      <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-white text-sm ml-1">{selectedVehicle.rating}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Details Section */}
              <div className="p-6 sm:p-8">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Description</h3>
                  <p className="text-gray-600">{selectedVehicle.description}</p>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Features</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedVehicle.features.map((feature, i) => (
                      <div key={i} className="flex items-center">
                        <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8">
                  <button
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium py-3 px-6 rounded-lg hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 shadow-md hover:shadow-lg"
                    onClick={() => alert(`Booking ${selectedVehicle.type}!`)}
                  >
                    Book Now - {selectedVehicle.price}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VehicleScroll;