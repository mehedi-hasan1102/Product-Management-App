"use client";

import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight, FaChartLine, FaTasks, FaShieldAlt } from "react-icons/fa";
import Image from "next/image";

const slides = [
  {
    title: "Streamline Your Product Journey",
    subtitle: "From Idea to Market",
    description: "Productly helps you manage your entire product lifecycle with intuitive tools and collaborative features.",
    icon: <FaTasks className="text-sky-400 text-5xl mb-4 animate-bounce" />,
    gradient: "from-sky-600 via-blue-600 to-indigo-700"
  },
  {
    title: "Data-Driven Decisions",
    subtitle: "Real-Time Analytics",
    description: "Track performance, user engagement, and conversion metrics with our comprehensive dashboard.",
    icon: <FaChartLine className="text-sky-400 text-5xl mb-4 animate-bounce" />,
    gradient: "from-blue-600 via-indigo-600 to-purple-700"
  },
  {
    title: "Secure Collaboration",
    subtitle: "Team-Based Workspaces",
    description: "Role-based access control ensures your product data remains secure while enabling seamless teamwork.",
    icon: <FaShieldAlt className="text-sky-400 text-5xl mb-4 animate-bounce" />,
    gradient: "from-indigo-600 via-purple-600 to-pink-700"
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide(prev => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={`relative overflow-hidden min-h-screen flex items-center text-white transition-all duration-700 bg-gradient-to-r ${slides[currentSlide].gradient}`}>
      {/* Overlay pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMiI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMjgiLz48L2c+PC9zdmc+')] opacity-20" />
      
      <div className="container mx-auto px-6 lg:px-16 py-16 lg:py-32 flex flex-col lg:flex-row items-center justify-between relative z-10">
        {/* Text */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <div className="flex justify-center lg:justify-start">
            {slides[currentSlide].icon}
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 animate-fade-in">
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-sky-200 via-white to-blue-200">
              {slides[currentSlide].title}
            </span>
            <span className="block mt-2 text-sky-100 text-xl sm:text-2xl">{slides[currentSlide].subtitle}</span>
          </h1>

          <p className="text-blue-100 sm:text-lg md:text-xl max-w-lg mb-8 mx-auto lg:mx-0 animate-fade-in delay-200">
            {slides[currentSlide].description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in delay-400">
            <a
              href="#"
              className="px-10 py-3 rounded-lg bg-gradient-to-r from-sky-400 to-blue-500 text-white font-semibold shadow-lg transform transition hover:scale-105 hover:shadow-xl"
            >
              Get Started Free
            </a>
            {/* <a
              href="#"
              className="px-10 py-3 rounded-lg border-2 border-white text-white font-semibold hover:bg-white/20 transition transform hover:scale-105"
            >
              Watch Demo
            </a> */}
          </div>

          {/* Dots */}
          <div className="flex justify-center lg:justify-start mt-10 gap-3">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  currentSlide === idx ? "bg-white scale-125" : "bg-white/50 hover:scale-110"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center relative">
          <div className="relative w-full max-w-lg">
            {/* Decorative blurred background */}
            <div className="absolute -inset-4 bg-white/10 rounded-3xl blur-xl transform rotate-3" />
            
            {/* Image container */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="aspect-video rounded-3xl flex items-center justify-center bg-sky-800/20">
                <Image
                  src="/product-manager-skills3.webp" // Make sure the image is in public folder
                  alt="Product Dashboard Preview"
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 p-3 rounded-full transition z-20"
      >
        <FaArrowLeft className="text-white text-xl" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 p-3 rounded-full transition z-20"
      >
        <FaArrowRight className="text-white text-xl" />
      </button>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/30 to-transparent" />
    </section>
  );
};

export default Hero;
