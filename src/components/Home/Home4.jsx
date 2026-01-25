import React from 'react';

const tourPackages = [
  {
    title: "Spiritual Varanasi Experience",
    description: "Sunrise boat ride, temple visits & evening Ganga Aarti in the holy city",
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5",
    duration: "2 Days",
    price: "₹3,999",
    type: "spiritual",
    highlights: ["Kashi Vishwanath Temple", "Ganga Aarti", "Sarnath visit"]
  },
  {
    title: "Himalayan Adventure Trek",
    description: "5-day trekking expedition through Uttarakhand's breathtaking trails",
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5",
    duration: "5 Days",
    price: "₹12,499",
    type: "adventure",
    highlights: ["Guided trekking", "Camp stays", "Mountain views"]
  },
  {
    title: "Golden Triangle Tour",
    description: "Explore Delhi, Agra & Jaipur - India's most iconic cultural circuit",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523",
    duration: "6 Days",
    price: "₹18,999",
    type: "cultural",
    highlights: ["Taj Mahal", "Amber Fort", "City Palace"]
  },
  {
    title: "Corporate Retreat Package",
    description: "Luxury business travel with meetings, transfers & team activities",
    image: "https://images.unsplash.com/photo-1494976388901-7509ad7062f4",
    duration: "Custom",
    price: "On Request",
    type: "business",
    highlights: ["Executive vehicles", "Hotel bookings", "Event planning"]
  },
  {
    title: "Goa Beach Vacation",
    description: "7-day tropical getaway with beachfront stays and water sports",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2",
    duration: "7 Days",
    price: "₹22,999",
    type: "leisure",
    highlights: ["Beach resorts", "Water sports", "Nightlife"]
  },
  {
    title: "Wildlife Safari Expedition",
    description: "Ranthambore tiger safari and nature exploration package",
    image: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e",
    duration: "4 Days",
    price: "₹14,499",
    type: "wildlife",
    highlights: ["Jeep safaris", "Nature walks", "Bird watching"]
  },
  {
    title: "Wedding & Events Travel",
    description: "Complete wedding party transportation with luxury vehicles",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed",
    duration: "Custom",
    price: "On Request",
    type: "special",
    highlights: ["Decorated cars", "Bridal fleet", "24/7 support"]
  },
  {
    title: "Pilgrimage Special: Char Dham",
    description: "15-day spiritual journey covering four sacred Himalayan shrines",
    image: "https://images.unsplash.com/photo-1605540436563-5bca919ae766",
    duration: "15 Days",
    price: "₹34,999",
    type: "spiritual",
    highlights: ["Yamunotri", "Gangotri", "Kedarnath", "Badrinath"]
  }
];

const TourPackages = () => {
  const getTypeBadge = (type) => {
    const colors = {
      spiritual: "bg-purple-100 text-purple-800",
      adventure: "bg-green-100 text-green-800",
      cultural: "bg-amber-100 text-amber-800",
      business: "bg-blue-100 text-blue-800",
      leisure: "bg-cyan-100 text-cyan-800",
      wildlife: "bg-orange-100 text-orange-800",
      special: "bg-pink-100 text-pink-800"
    };
    return (
      <span className={`text-xs px-2 py-1 rounded-full ${colors[type]} capitalize`}>
        {type}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-4 sm:p-6 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 mb-3">
            Explore Our Diverse Tour Packages
          </h1>
          <p className="text-blue-600/80 max-w-2xl mx-auto">
            From spiritual journeys to adventurous expeditions - we've got the perfect trip for every traveler
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {tourPackages.map((tour, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-md overflow-hidden border border-blue-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col"
            >
              <div className="relative h-48 sm:h-56 w-full overflow-hidden">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src = "https://via.placeholder.com/600x400?text=Tour+Image";
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 flex justify-between items-end">
                  <span className="text-white text-sm font-medium">{tour.duration}</span>
                  {getTypeBadge(tour.type)}
                </div>
              </div>
              
              <div className="p-5 flex flex-col flex-grow">
                <div className="flex-grow">
                  <h2 className="text-xl font-bold text-gray-800 mb-2">
                    {tour.title}
                  </h2>
                  <p className="text-gray-600 text-sm mb-4">
                    {tour.description}
                  </p>
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-gray-500 mb-1">HIGHLIGHTS</h4>
                    <ul className="text-xs text-gray-600 space-y-1">
                      {tour.highlights.map((item, i) => (
                        <li key={i} className="flex items-center">
                          <svg className="w-3 h-3 mr-1 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mt-4">
                  <div>
                    <span className="text-blue-600 font-bold">{tour.price}</span>
                    {tour.price !== "On Request" && (
                      <span className="text-blue-400 text-xs ml-1">per person</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium py-3 px-8 rounded-full hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center">
            View All 25+ Packages
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TourPackages;