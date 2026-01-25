import React, { useState, useEffect } from "react";
import srnt from "../../assets/Srnt.jpeg";
import taj from "../../assets/Taj.jpg";
import beach from "../../assets/Beach.jpg";
import goa from "../../assets/Goa.jpg";

const slides = [
  {
    image: srnt,
    text: "Travel Varanasi Heritage Retreats",
  },
  {
    image: taj,
    text: "Experience the Majestic Taj Mahal",
  },
  {
    image: beach,
    text: "Relax on Pristine Beaches",
  },
  {
    image: goa,
    text: "Travel Adventures in Goa",
  },
];

function Home1() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000); // Increased interval to 3s for better UX
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full flex items-center justify-center text-white bg-cover bg-center overflow-hidden">
      <div
        className="absolute inset-0 flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="min-w-full h-screen bg-cover bg-center flex items-center justify-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="text-center w-full max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-6 rounded-lg bg-black/50 backdrop-blur-[1px] text-white">
              <h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {slide.text}
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8">
                Plan, book, and experience unforgettable adventures with our
                all-in-one travel app.
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Home1;
