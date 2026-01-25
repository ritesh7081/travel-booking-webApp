import React, { useState } from 'react';
import { FiHeart, FiMapPin, FiStar, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  // Sample gallery data
  const galleryData = [
    {
      id: 1,
      title: "Santorini Sunset",
      location: "Greece",
      category: "beach",
      rating: 4.8,
      liked: false,
      image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 2,
      title: "Mountain Retreat",
      location: "Switzerland",
      category: "mountain",
      rating: 4.9,
      liked: true,
      image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 3,
      title: "Tokyo Nights",
      location: "Japan",
      category: "city",
      rating: 4.7,
      liked: false,
      image: "https://images.unsplash.com/photo-1492571350019-22de08371fd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 4,
      title: "Desert Adventure",
      location: "Dubai",
      category: "desert",
      rating: 4.5,
      liked: false,
      image: "https://images.unsplash.com/photo-1518630382440-9fcc15422bc8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 5,
      title: "Tropical Paradise",
      location: "Maldives",
      category: "beach",
      rating: 4.9,
      liked: true,
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 6,
      title: "Alpine Village",
      location: "Austria",
      category: "mountain",
      rating: 4.6,
      liked: false,
      image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 7,
      title: "Urban Exploration",
      location: "New York",
      category: "city",
      rating: 4.7,
      liked: false,
      image: "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 8,
      title: "Sahara Dunes",
      location: "Morocco",
      category: "desert",
      rating: 4.4,
      liked: false,
      image: "https://images.unsplash.com/photo-1517825738774-7de9363ef735?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Destinations' },
    { id: 'beach', name: 'Beach Getaways' },
    { id: 'mountain', name: 'Mountain Retreats' },
    { id: 'city', name: 'City Breaks' },
    { id: 'desert', name: 'Desert Adventures' }
  ];

  const filteredImages = activeCategory === 'all' 
    ? galleryData 
    : galleryData.filter(item => item.category === activeCategory);

  const openLightbox = (index) => {
    setCurrentImage(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const navigateImage = (direction) => {
    if (direction === 'prev') {
      setCurrentImage(prev => (prev === 0 ? filteredImages.length - 1 : prev - 1));
    } else {
      setCurrentImage(prev => (prev === filteredImages.length - 1 ? 0 : prev + 1));
    }
  };

  const toggleLike = (id) => {
    // In a real app, you would update state or make an API call here
    console.log(`Toggled like for image ${id}`);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Explore Our Destinations</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover breathtaking locations from around the world that will inspire your next adventure
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredImages.map((item, index) => (
            <div 
              key={item.id} 
              className="relative group overflow-hidden rounded-xl shadow-lg transition-transform duration-300 hover:scale-[1.02]"
            >
              {/* Image with gradient overlay */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onClick={() => openLightbox(index)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <h3 className="text-white font-bold text-lg mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {item.title}
                  </h3>
                  <div className="flex items-center text-white/90 text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <FiMapPin className="mr-1" />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>

              {/* Rating and Like Button */}
              <div className="absolute top-3 right-3 flex items-center space-x-2">
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleLike(item.id);
                  }}
                  className="bg-white/80 p-2 rounded-full backdrop-blur-sm hover:bg-white transition-colors duration-200"
                >
                  <FiHeart 
                    className={`w-4 h-4 ${item.liked ? 'text-red-500 fill-red-500' : 'text-gray-700'}`} 
                  />
                </button>
                <div className="bg-white/80 px-2 py-1 rounded-full backdrop-blur-sm flex items-center">
                  <FiStar className="text-yellow-500 w-3 h-3 mr-1" />
                  <span className="text-xs font-medium text-gray-800">{item.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:opacity-90">
            View All Destinations
          </button>
        </div>

        {/* Lightbox */}
        {lightboxOpen && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <button 
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white text-2xl z-10 hover:text-blue-300 transition-colors"
            >
              &times;
            </button>
            
            <div className="relative max-w-4xl w-full">
              {/* Navigation Arrows */}
              <button 
                onClick={() => navigateImage('prev')}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 text-white p-2 rounded-full backdrop-blur-sm hover:bg-white/30 transition-colors z-10"
              >
                <FiChevronLeft className="w-6 h-6" />
              </button>
              
              <button 
                onClick={() => navigateImage('next')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 text-white p-2 rounded-full backdrop-blur-sm hover:bg-white/30 transition-colors z-10"
              >
                <FiChevronRight className="w-6 h-6" />
              </button>
              
              {/* Current Image */}
              <div className="relative h-[70vh]">
                <img
                  src={filteredImages[currentImage].image}
                  alt={filteredImages[currentImage].title}
                  className="w-full h-full object-contain"
                />
              </div>
              
              {/* Image Info */}
              <div className="bg-gradient-to-t from-black/90 to-transparent text-white p-6">
                <h3 className="text-xl font-bold mb-1">{filteredImages[currentImage].title}</h3>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <FiMapPin className="mr-1 text-blue-300" />
                    <span>{filteredImages[currentImage].location}</span>
                  </div>
                  <div className="flex items-center">
                    <FiStar className="mr-1 text-yellow-400" />
                    <span>{filteredImages[currentImage].rating}</span>
                  </div>
                </div>
              </div>
              
              {/* Thumbnail Navigation */}
              <div className="flex overflow-x-auto py-4 space-x-2 mt-2">
                {filteredImages.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`flex-shrink-0 w-16 h-16 rounded-md overflow-hidden border-2 transition-all ${
                      currentImage === index ? 'border-blue-400' : 'border-transparent'
                    }`}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Gallery;