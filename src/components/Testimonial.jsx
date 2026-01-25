import React from "react";
import { Carousel } from "primereact/carousel";
import { Avatar } from "primereact/avatar";

// Sample testimonial data with all required fields
const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "Frequent Traveler",
    content: "The Varanasi Ghat tour was a spiritual awakening. The guides were knowledgeable and the experience was seamless from booking to completion. Highly recommend!",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    date: "March 2023"
  },
  {
    id: 2,
    name: "Priya Patel",
    role: "Family Vacationer",
    content: "Our family had an amazing time on the Prayagraj Sangam tour. The vehicle provided was comfortable and the driver was extremely professional. Will book again!",
    rating: 4,
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    date: "January 2023"
  },
  {
    id: 3,
    name: "Arjun Mehta",
    role: "Solo Explorer",
    content: "The Sarnath Monastery tour exceeded all expectations. The attention to detail and quality of service was exceptional. Perfect for spiritual seekers.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/67.jpg",
    date: "December 2022"
  },
  {
    id: 4,
    name: "Neha Gupta",
    role: "Travel Blogger",
    content: "As someone who's been on countless tours, I can confidently say this company stands out. Their luxury vehicles and expert guides make all the difference.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/63.jpg",
    date: "November 2022"
  }
];

// Responsive carousel configuration
const responsiveOptions = [
  {
    breakpoint: '1024px',
    numVisible: 2,
    numScroll: 1
  },
  {
    breakpoint: '768px',
    numVisible: 1,
    numScroll: 1
  }
];

// Star rating component with validation
const renderStars = (rating) => {
  // Validate rating is a number between 0-5
  const validatedRating = typeof rating === 'number' 
    ? Math.min(5, Math.max(0, Math.round(rating)))
    : 0;

  return (
    <div className="flex justify-center mb-3">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < validatedRating ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

// Testimonial card component with error handling
const TestimonialCard = ({ testimonial }) => {
  // Validate testimonial object
  if (!testimonial || typeof testimonial !== 'object') {
    console.warn('Invalid testimonial data received');
    return null;
  }

  // Destructure with default values
  const {
    name = 'Anonymous',
    role = 'Traveler',
    content = 'No review content available',
    rating = 0,
    avatar = 'https://randomuser.me/api/portraits/lego/1.jpg',
    date = ''
  } = testimonial;

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mx-3 h-full flex flex-col">
      {renderStars(rating)}
      <p className="text-gray-600 italic mb-6 text-center">
        "{content}"
      </p>
      <div className="flex items-center justify-center">
        <Avatar 
          image={avatar} 
          size="large" 
          shape="circle" 
          className="border-2 border-blue-400"
          onImageError={(e) => {
            e.target.src = 'https://randomuser.me/api/portraits/lego/1.jpg';
          }}
        />
        <div className="ml-4">
          <h4 className="font-bold text-gray-800">{name}</h4>
          <p className="text-blue-600 text-sm">{role}</p>
          {date && <p className="text-gray-500 text-xs">{date}</p>}
        </div>
      </div>
    </div>
  );
};

// Main testimonials section component
const TestimonialsSection = () => {
  // Validate testimonials data
  if (!Array.isArray(testimonials)) {
    console.error('Testimonials data is not an array');
    return (
      <section className="py-16 px-4 bg-blue-50 text-center">
        <div className="max-w-7xl mx-auto">
          <p>Testimonials are currently unavailable. Please check back later.</p>
        </div>
      </section>
    );
  }

  if (testimonials.length === 0) {
    return (
      <section className="py-16 px-4 bg-blue-50 text-center">
        <div className="max-w-7xl mx-auto">
          <p>No testimonials available yet.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 px-4 sm:px-6 bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 mb-3">
            Traveler Experiences
          </h2>
          <p className="text-blue-600/80 max-w-2xl mx-auto text-lg">
            Hear what our customers say about their spiritual journeys with us
          </p>
        </div>

        <div className="relative">
          <Carousel
            value={testimonials}
            itemTemplate={(item) => <TestimonialCard testimonial={item} />}
            numVisible={3}
            numScroll={1}
            responsiveOptions={responsiveOptions}
            className="custom-carousel pb-4"
            circular
            autoplayInterval={5000}
          />
          
          {/* Decorative elements */}
          <div className="absolute -top-8 -left-8 w-24 h-24 bg-blue-200/30 rounded-full blur-xl"></div>
          <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-cyan-200/30 rounded-full blur-xl"></div>
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium py-3 px-8 rounded-full hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center">
            Share Your Experience
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;