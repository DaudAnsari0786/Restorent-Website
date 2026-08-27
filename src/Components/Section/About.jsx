import React from 'react'
import image from "/public/Hotel3.jpg"
 
const About = () => {
  return (
    <div>
      {/* ========== ABOUT SECTION ========== */}
      <section id="about" className="glass py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-">
            <span className="text-amber-600 font-semibold tracking-widest text-sm uppercase block mb-3">
              Our Story
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-stone-900 mb-6">
              A Passion for <br />
              <span className="text-amber-600">Exceptional</span> Dining
            </h2>
            <p className="text-stone-600 leading-relaxed mb-6 text-lg">
              Founded in 2024, Gusto has been the heart of authentic Italian
              cuisine in the city. Our chef, Marco Bellini, brings over 02 years
              of culinary mastery, using only the freshest seasonal ingredients
              sourced from local farmers and trusted Italian producers.
            </p>
            <p className="text-stone-600 leading-relaxed mb-8">
              Every plate is a tribute to tradition, yet reimagined with a
              modern twist. From handmade pasta to wood‑fired specialties, we
              invite you to savour the true taste of Italy.
            </p>
            <div className="flex gap-8 text-center">
              <div>
                <span className="font-serif text-3xl font-bold text-amber-600">
                  02+
                </span>
                <p className="text-sm text-stone-500 mt-1">
                  Years of Excellence
                </p>
              </div>
              <div>
                <span className="font-serif text-3xl font-bold text-amber-600">
                  05+
                </span>
                <p className="text-sm text-stone-500 mt-1">Awards Won</p>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={image}
                alt="Restaurant interior"
                className="w-full h-[450px] object-cover"
                loading="lazy"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-amber-500 rounded-xl hidden lg:block -z-10"></div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About