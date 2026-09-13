import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import img1 from "/public/keshav.jpeg";
import img2 from "/public/neha.jpg";
import img3 from "/public/bakar.jpeg"
// import img4 from "/public/chef4.jpg";
import img5 from "/public/ankit.jpeg";
import { FaCentos } from 'react-icons/fa';
// import img6 from "/public/chef6.jpg";
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
import {
  FaFacebookF,

} from "react-icons/fa";
const Chef = () => {
  const [activeChef, setActiveChef] = useState(null);

  // Indian Chef Data
  const chefs = [
    {
      id: 1,
      name: "Chef Keshav Kumar",
      img: img1,
      position: "Executive Chef",
      experience: "18+ Years",
      specialty: "Royal Indian Cuisine",
      bio: "Master of authentic Indian royal cuisine with expertise in Awadhi and Mughlai dishes. Trained under legendary chefs in Lucknow and Hyderabad.",
      rating: 4.9,
      awards: ["Best Indian Chef 2023", "Royal Cuisine Award 2022"],
      social: {
        facebook: "https://www.facebook.com/share/1MT6Vzpy4k/",
        twitter: "#",
        instagram: "https://www.instagram.com/kkeshav20899/",

      },
      specialties: ["Biryani", "Kebabs", "Curries"],
      availability: "Mon-Sat",
      color: "from-red-500 to-orange-500",
      initial: "KK",
    },
    {
      id: 2,
      name: "Chef Neha Singh",
      img: img2,
      position: "Pastry Chef",
      experience: "12+ Years",
      specialty: "Indian Desserts & Fusion",
      bio: "Award-winning pastry chef specializing in traditional Indian sweets with a modern twist. Expert in fusion desserts combining Indian and French techniques.",
      rating: 4.8,
      awards: ["Best Dessert Chef 2023", "Innovation in Indian Sweets 2022"],
      social: {
        facebook: "#",
        twitter: "#",
        instagram: "https://www.instagram.com/neh_usingh55/",

      },
      specialties: ["Gulab Jamun", "Rasmalai", "Fusion Desserts"],
      availability: "Wed-Sun",
      color: "from-pink-500 to-rose-500",
      initial: "NS",
    },
    {
      id: 3,
      name: "Chef Daud Ansari",
      img: img3,
      position: "Sous Chef",
      experience: "10+ Years",
      specialty: "South Indian Cuisine",
      bio: "Passionate about authentic South Indian flavors from Tamil Nadu, Kerala, and Andhra. Known for perfect spice blends and traditional cooking methods.",
      rating: 4.7,
      awards: ["Best South Indian Chef 2023", "Spice Master Award"],
      social: {
        facebook: "https://www.facebook.com/share/1Hb8GA7WzV/",
        twitter: "https://x.com/daudansari6472",
        instagram: "https://www.instagram.com/official_venom_900/",

      },
      specialties: ["Dosa", "Sambar", "Biryani"],
      availability: "Tue-Sun",
      color: "from-yellow-500 to-amber-500",
      initial: "DA",
    },
    {
      id: 4,
      name: "Chef Abdul Gani",
      img: "https://i.pravatar.cc/400?img=68", // replace with img4
      position: "Tandoor Master",
      experience: "14+ Years",
      specialty: "Tandoori & North Indian",
      bio: "Expert in traditional tandoor cooking with a focus on Punjabi and North Indian cuisine. Master of marination and clay oven techniques.",
      rating: 4.9,
      awards: ["Best Tandoor Chef 2023", "North Indian Cuisine Excellence"],
      social: { facebook: "#", twitter: "#", instagram: "https://www.instagram.com/gani_mirza.h/", },
      specialties: ["Tandoori Chicken", "Naan", "Butter Chicken"],
      availability: "Mon-Fri",
      color: "from-orange-500 to-red-500",
      initial: "AG",
    },
    {
      id: 5,
      name: "Chef Ankit",
      img: img5, // replace with img5
      position: "Vegan Chef",
      experience: "15+ Years",
      specialty: "Indian Vegetarian & Vegan",
      bio: "Pioneer in Indian plant-based cuisine. Expert in creating flavorful vegetarian and vegan dishes using traditional Indian ingredients and spices.",
      rating: 5.0,
      awards: ["Best Vegan Chef 2023", "Plant-Based Innovation Award"],
      social: { facebook: "#", twitter: "#", instagram: "https://www.instagram.com/ankit_ankit_8866/", },
      specialties: ["Paneer Dishes", "Dal", "Vegetarian Curries"],
      availability: "Mon-Sat",
      color: "from-green-500 to-emerald-500",
      initial: "SA",
    },
    {
      id: 6,
      name: "Chef Priya",
      img: "https://i.pravatar.cc/400?img=32", // replace with img6
      position: "Head Chef",
      experience: "16+ Years",
      specialty: "Coastal Indian Cuisine",
      bio: "Celebrating the rich coastal flavors of Kerala, Goa, and Bengal. Expert in seafood, coconut-based curries, and traditional coastal cooking.",
      rating: 4.8,
      awards: ["Best Seafood Chef 2023", "Coastal Cuisine Award"],
      social: { facebook: "#", twitter: "#", instagram: "#", },
      specialties: ["Fish Curry", "Prawns", "Coconut Dishes"],
      availability: "Mon-Fri",
      color: "from-cyan-500 to-blue-500",
      initial: "PR",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, duration: 0.7, ease: "easeIn" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeIn" } },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeIn" } },
  };

  const statsVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.5, duration: 0.7, ease: "easeIn" },
    },
  };

  const ctaVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.7, duration: 0.7, ease: "easeIn" },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-200 to-amber-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
            Meet Our <span className="text-yellow-400">Master Indian Chefs</span>
          </h1>
          <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">
            Passionate culinary artists dedicated to celebrating the rich and diverse
            flavors of Indian cuisine with authentic techniques and innovative approaches.
          </p>
        </motion.div>

        {/* Chef Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {chefs.map((chef) => (
            <motion.div
              key={chef.id}
              variants={itemVariants}
              whileHover={{
                y: -10,
                scale: 1.02,
                transition: { duration: 1, ease: "easeInOut" },
              }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-1000 overflow-hidden group cursor-pointer"
            >
              {/* Chef Avatar Section */}
              <div
                className={`relative overflow-hidden h-72 sm:h-80 bg-gradient-to-br ${chef.color}`}
              >
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
                  <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/3 translate-y-1/3 animate-pulse delay-1000"></div>
                  <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse delay-500"></div>
                </div>

                {/* Chef Avatar */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="relative w-36 h-36 md:w-44 md:h-44 mx-auto">
                      {/* Outer Ring */}
                      <div className="absolute inset-0 bg-white/30 backdrop-blur-sm rounded-full ring-4 ring-white/40 shadow-2xl"></div>

                      {/* Inner Circle with Chef Image */}
                      <div className="absolute inset-2 bg-white/40 backdrop-blur-sm rounded-full overflow-hidden">
                        {chef.img ? (
                          <img
                            src={chef.img}
                            alt={chef.name}
                            loading="lazy"
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                            }}
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-orange-100 to-amber-200">
                            <span className="text-3xl font-bold text-orange-600">
                              {chef.initial}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Initials Badge */}
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-lg">
                        <span className="text-xs font-bold text-gray-800">
                          {chef.initial}
                        </span>
                      </div>
                    </div>

                    {/* Title Badge */}
                    <div className="mt-3 bg-white/30 backdrop-blur-sm px-4 py-1.5 rounded-full inline-block border border-white/20">
                      <span className="text-white text-xs font-medium tracking-wider">
                        {chef.position}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Rating Badge */}
                <div className="absolute top-4 right-4 bg-white bg-opacity-90 backdrop-blur-sm px-3 py-1 rounded-full shadow-lg z-10">
                  <span className="flex items-center gap-1 text-sm font-semibold text-gray-700">
                    <span className="text-yellow-400">★</span>
                    {chef.rating}
                  </span>
                </div>

                {/* Experience Badge */}
                <div className="absolute bottom-4 left-4 bg-black/40 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg z-10">
                  {chef.experience}
                </div>

                {/* Availability Badge */}
                <div className="absolute bottom-4 right-4 bg-green-500/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg z-10">
                  {chef.availability}
                </div>

                {/* Indian Flag Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-lg z-10">
                  <span className="text-sm font-medium">🇮🇳</span>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
              </div>

              {/* Chef Info */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-orange-600 transition-colors duration-1000">
                      {chef.name}
                    </h3>
                    <p className="text-orange-600 text-sm font-medium">
                      {chef.position}
                    </p>
                  </div>
                  <span className="bg-orange-50 text-orange-600 px-2 py-1 rounded text-xs font-semibold">
                    {chef.specialty}
                  </span>
                </div>

                <p className="text-gray-600 text-sm mt-2 line-clamp-2">{chef.bio}</p>

                {/* Specialties */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {chef.specialties.map((specialty, index) => (
                    <span
                      key={index}
                      className="bg-orange-50 text-orange-700 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>

                {/* Awards */}
                <div className="mt-3 flex flex-wrap gap-2">
                  {chef.awards.map((award, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center gap-1 bg-yellow-50 text-yellow-700 px-2 py-1 rounded-full text-xs font-medium"
                    >
                      <span className="text-yellow-500">🏆</span>
                      {award}
                    </span>
                  ))}
                </div>

                {/* Social Links */}
                <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex gap-3">
                    <a
                      href={chef.social.facebook}
                      className="text-gray-400 hover:text-blue-600 transition-all duration-1000 hover:scale-110"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      
                    <FaFacebookF size={20} />
                    </a>
                    <a
                      href={chef.social.twitter}
                      className="text-gray-400 hover:text-blue-400 transition-all duration-1000 hover:scale-110"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </a>
                    <a
                      href={chef.social.instagram}
                      className="text-gray-400 hover:text-pink-600 transition-all duration-1000 hover:scale-110"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                      </svg>
                    </a>
                   
                  </div>
                  <button
                    onClick={() =>
                      setActiveChef(activeChef === chef.id ? null : chef.id)
                    }
                    className="text-orange-600 hover:text-orange-700 text-sm font-medium transition-colors duration-1000 hover:scale-105"
                  >
                    {activeChef === chef.id ? 'View Less' : 'View More'}
                  </button>
                </div>

                {/* Expanded Details */}
                {activeChef === chef.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.7, ease: "easeIn" }}
                    className="mt-4 pt-4 border-t border-gray-100"
                  >
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">
                        About {chef.name}
                      </h4>
                      <p className="text-gray-600 text-sm">{chef.bio}</p>
                      <div className="mt-3 flex items-center gap-4">
                        <div className="flex items-center gap-1 text-sm text-gray-600">
                          <span className="text-orange-500">🍳</span>
                          <span>Specializes in {chef.specialty}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={statsVariants}
          initial="hidden"
          animate="visible"
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-1000 hover:scale-105 transform">
            <div className="text-3xl md:text-4xl font-bold text-orange-600">15+</div>
            <div className="text-gray-600 text-sm mt-1">Expert Indian Chefs</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-1000 hover:scale-105 transform">
            <div className="text-3xl md:text-4xl font-bold text-orange-600">20+</div>
            <div className="text-gray-600 text-sm mt-1">Years Combined Experience</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-1000 hover:scale-105 transform">
            <div className="text-3xl md:text-4xl font-bold text-orange-600">50+</div>
            <div className="text-gray-600 text-sm mt-1">National & International Awards</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-1000 hover:scale-105 transform">
            <div className="text-3xl md:text-4xl font-bold text-orange-600">100%</div>
            <div className="text-gray-600 text-sm mt-1">Guest Satisfaction</div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={ctaVariants}
          initial="hidden"
          animate="visible"
          className="mt-16 bg-gradient-to-r from-orange-600 to-orange-700 rounded-2xl shadow-xl p-8 md:p-12 text-center text-white"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Want to Join Our Indian Culinary Team?
          </h2>
          <p className="text-orange-100 text-base md:text-lg max-w-2xl mx-auto mb-6">
            We're always looking for passionate chefs who want to celebrate and innovate
            Indian cuisine and create extraordinary dining experiences.
          </p>
          <Link to="/applynow"
           onClick={scrollToTop}
          className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition-all duration-1000 transform hover:scale-105 shadow-lg">
            Apply Now
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Chef;