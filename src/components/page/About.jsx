import React from 'react';

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-500 to-cyan-400 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-float">
            About Shri Kashi Tour & Travels
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8 animate-slide-in">
            Your complete travel solution for pilgrimages, adventures, business trips, and leisure getaways across India
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in">
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Story</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Born in the sacred city of Varanasi, Shri Kashi Tour & Travels has evolved from a pilgrimage travel specialist to a full-service travel agency catering to all your mobility needs.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Whether you're seeking spiritual solace, corporate travel, family vacations, or adventurous road trips, we provide customized solutions with the warmth of Indian hospitality.
              </p>
            </div>
            <div className="animate-slide-in">
              <img
                src="https://images.unsplash.com/photo-1605540436563-5bca919ae766?ixlib=rb-4.0.3&auto=format&fit=crop&w=1469&q=80"
                alt="Travel across India"
                className="rounded-lg shadow-xl w-full h-80 object-cover transform hover:scale-105 transition duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-gradient-to-r from-blue-100 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Diverse Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              One stop for all your travel needs across India
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Spiritual Journeys',
                description: 'Pilgrimage packages to Kashi, Ayodhya, Prayagraj, and more',
                icon: '🛕'
              },
              {
                title: 'Adventure Tours',
                description: 'Himalayan expeditions, desert safaris, and wildlife trips',
                icon: '🏔️'
              },
              {
                title: 'Business Travel',
                description: 'Corporate cab services with professional drivers',
                icon: '💼'
              },
              {
                title: 'Wedding & Events',
                description: 'Premium vehicles for weddings and special occasions',
                icon: '🎉'
              },
              {
                title: 'Family Vacations',
                description: 'Comfortable SUVs and tempo travelers for groups',
                icon: '👨‍👩‍👧‍👦'
              },
              {
                title: 'Airport Transfers',
                description: '24/7 reliable pickups and drops',
                icon: '✈️'
              }
            ].map((service, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 animate-slide-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-6 text-center">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Versatile Fleet</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Vehicles for every occasion and budget
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                type: 'Luxury Sedans',
                description: 'Mercedes, Audi for executives and weddings',
                image: 'https://images.unsplash.com/photo-1494976388901-7509ad7062f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80'
              },
              {
                type: 'SUVs & MUVs',
                description: 'Innova, Crysta, Scorpio for family trips',
                image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80'
              },
              {
                type: 'Tempo Travelers',
                description: '12-18 seaters for group tours',
                image: 'https://images.unsplash.com/photo-1633613286848-e6f43bbafb8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80'
              },
              {
                type: 'Budget Cars',
                description: 'Swift, Etios for economical travel',
                image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80'
              }
            ].map((vehicle, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300 animate-slide-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img 
                  src={vehicle.image} 
                  alt={vehicle.type} 
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold text-gray-800 mb-2">{vehicle.type}</h3>
                <p className="text-gray-600">{vehicle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-to-r from-blue-100 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Why Travel With Us?</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: 'Local Roots, National Network', 
                description: 'Varanasi-based with pan-India operations',
                icon: '📍'
              },
              { 
                title: 'Multi-Purpose Travel', 
                description: 'From pilgrimages to corporate offsites',
                icon: '🔄'
              },
              { 
                title: 'Female-Friendly', 
                description: 'Women drivers available on request',
                icon: '👩'
              },
              { 
                title: 'GPS Tracked', 
                description: 'Real-time journey monitoring',
                icon: '📡'
              },
              { 
                title: 'All-India Permits', 
                description: 'Seamless interstate travel',
                icon: '📄'
              },
              { 
                title: 'Custom Packages', 
                description: 'Tailored itineraries for your needs',
                icon: '✂️'
              }
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-200 animate-slide-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl mb-3">{value.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">Where Will You Go Next?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Spiritual retreat or business trip? Family vacation or solo adventure? We've got you covered!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-bold hover:bg-blue-50 transition-colors duration-200 shadow-lg">
              Book a Vehicle
            </button>
            <button className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-bold hover:bg-white hover:text-blue-600 transition-colors duration-200 shadow-lg">
              Customize Tour
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;