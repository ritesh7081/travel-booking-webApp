import React, { useState } from "react";
import BookingModal from "../BookingModal";

function Home2() {
  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const openModal = () => setIsModalOpen(true);
  // const closeModal = () => setIsModalOpen(false);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Handle form submission logic here (e.g., API call)
  //   alert("Booking submitted!");
  //   closeModal();
  // };

  return (
    <>
      <section className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 p-4">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
              alt="Couple in Venice"
              className="w-full h-64 sm:h-80 lg:h-96 object-cover"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 p-4 flex flex-col justify-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-3">
            Plan Your Trip with Tours
          </h1>
          <p className="text-gray-600 text-base sm:text-lg lg:text-xl mb-3">
            Discover India with ease and excitement! Our expert team crafts
            personalized travel experiences, from breathtaking cultural tours to
            relaxing beach getaways, ensuring every journey is unforgettable. Let
            us handle the details while you create lifelong memories.
          </p>
          <ul className="space-y-3 mb-4">
            {[
              "200+ Our Guide",
              "100% Trusted Tour Agency",
              "5+ Years of Experience",
              "100% Travelers are Happy",
            ].map((item, index) => (
              <li key={index} className="flex items-center">
                <span className="text-blue-500 mr-2">✔</span>
                <span className="text-gray-700 text-base sm:text-lg">{item}</span>
              </li>
            ))}
          </ul>
          {/* <button
            onClick={openModal}
            className="self-start bg-blue-500 text-white font-semibold py-2 px-6 rounded-full hover:bg-blue-600 transition duration-300"
          >
            Book Now
          </button> */}
        </div>
      </section>

      {/* Modal */}
      {/* <BookingModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onSubmit={handleSubmit}
      /> */}
    </>
  );
}

export default Home2;