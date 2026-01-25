import React, { useState } from 'react';

function Testimonials() {
  const [formData, setFormData] = useState({
    name: '',
    rating: 0,
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRatingChange = (rating) => {
    setFormData((prev) => ({
      ...prev,
      rating,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Testimonial:', formData);
    // Add your API call here to save the testimonial
    setFormData({ name: '', rating: 0, description: '' });
  };

  const testimonials = [
    {
      name: 'Sarah Johnson',
      rating: 5,
      description: 'The best car rental experience ever! The vehicles were in top condition, and the staff was incredibly helpful.',
    },
    {
      name: 'Michael Lee',
      rating: 4,
      description: 'Great service and a wide variety of cars to choose from. Booking was seamless, and the prices were fair.',
    },
    {
      name: 'Emily Davis',
      rating: 5,
      description: 'Loved the eco-friendly options! The hybrid car was perfect for our family trip. Highly recommend!',
    },
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Testimonials Section */}
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-12 animate-slide-in">
          What Our Customers Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300 animate-slide-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Decorative Quote Icon */}
              <svg
                className="absolute top-4 left-4 w-8 h-8 text-blue-200"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M3 9h6a3 3 0 013 3v6a3 3 0 01-3 3H3a3 3 0 01-3-3v-6a3 3 0 013-3zm12 0h6a3 3 0 013 3v6a3 3 0 01-3 3h-6a3 3 0 01-3-3v-6a3 3 0 013-3z" />
              </svg>
              <div className="mt-8">
                <p className="text-gray-600 italic mb-4">"{testimonial.description}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{testimonial.name}</h3>
                    <div className="flex mt-2">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-5 h-5 ${
                            i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'
                          }`}
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative Border */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-b-lg"></div>
            </div>
          ))}
        </div>

        {/* Post Rating Form */}
        <div className="mt-16 max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8 animate-slide-in">
          <h3 className="text-2xl font-semibold text-gray-800 text-center mb-6">
            Share Your Experience
          </h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300"
                placeholder="e.g., John Doe"
                required
              />
            </div>

            {/* Rating */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Rating
              </label>
              <div className="flex space-x-2">
                {[...Array(5)].map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => handleRatingChange(i + 1)}
                    className={`w-8 h-8 flex items-center justify-center rounded-full ${
                      formData.rating > i
                        ? 'bg-yellow-400 text-white'
                        : 'bg-gray-200 text-gray-600'
                    } hover:bg-yellow-500 transition duration-300`}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  </button>
                ))}
              </div>
            </div>

            {/* Description */}
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Your Feedback
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="4"
                className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300"
                placeholder="Share your experience with us..."
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105"
            >
              Submit Testimonial
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;