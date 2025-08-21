"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const products = [
  {
    id: 1,
    name: "Earthen Bottle",
    price: "$48",
    imageSrc: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
    imageAlt: "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 2,
    name: "Nomad Tumbler",
    price: "$35",
    imageSrc: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
    imageAlt: "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 3,
    name: "Focus Paper Refill",
    price: "$89",
    imageSrc: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
    imageAlt: "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 4,
    name: "Machined Mechanical Pencil",
    price: "$35",
    imageSrc: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
    imageAlt: "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
];

const ProductHighlights = () => {
  const controls = useAnimation();
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          controls.start("visible");
        }
      },
      { root: null, rootMargin: "0px", threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  const cardVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.5, type: "spring", stiffness: 100 } },
  };

  return (
    <section
      ref={sectionRef}
      className="relative mx-auto px-6 py-24 md:py-32 overflow-hidden bg-gradient-to-br from-emerald-50 to-cyan-50 transition-colors duration-300 rounded-xl"
    >
      {/* Animated background blobs */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 0.1 } : { opacity: 0 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 overflow-hidden pointer-events-none"
      >
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-emerald-300 mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-cyan-300 mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-64 h-64 rounded-full bg-blue-300 mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      </motion.div>

      {/* Heading */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="text-center max-w-4xl mx-auto mb-16"
      >
        <motion.span
          variants={cardVariants}
          className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-emerald-100 text-emerald-800 mb-6"
        >
          Featured Products
        </motion.span>
        <motion.h2
          variants={cardVariants}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 transition-colors duration-300"
        >
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-cyan-500">Products</span>
        </motion.h2>
        <motion.p
          variants={cardVariants}
          className="text-xl text-gray-600 leading-relaxed transition-colors duration-300"
        >
          Discover premium quality products designed to improve your lifestyle and productivity.
        </motion.p>
      </motion.div>

      {/* Product Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
      >
        {products.map((product) => (
          <motion.div
            key={product.id}
            variants={cardVariants}
            className="relative group"
            whileHover={{ y: -5 }}
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-all duration-500"></div>
            <div className="relative h-full bg-white p-1 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
              <img
                src={product.imageSrc}
                alt={product.imageAlt}
                className="w-full h-64 object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-medium text-lg">{product.name} - {product.price}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Blob animation styles */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>
    </section>
  );
};

export default ProductHighlights;
