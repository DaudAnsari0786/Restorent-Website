import React from 'react'
import { Link } from 'react-router-dom';

const Reservations = () => {
      const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      };

  return (
    <div>
      {" "}
      {/* ========== RESERVATION CTA ========== */}
      <section
        id="reserve"
        className="relative py-28 lg:py-36 bg-stone-900 overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=2070&q=80')`,
          }}
        ></div>
        <div className="relative z-10 max-w-3xl mx-auto text-center px-6 text-white">
          <span className="text-amber-400 font-semibold tracking-widest text-sm uppercase block mb-4">
            Reservations
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-6">
            Ready for an Unforgettable Evening?
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
            Reserve your table today and let us create a memorable dining
            experience for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link
              onClick={scrollToTop}
              to="/booking"
              className="bg-gradient-to-r from-orange-500 to-red-600 hover:text-amber-500 text-white px-12 py-4.5 rounded-full text-sm font-semibold tracking-widest uppercase transition-all shadow-2xl"
            >
              Book Now
            </Link>
            <a
              href="tel:+1234567890"
              className="border-2 border-white/30 hover:border-amber-400 text-white hover:text-amber-400 px-12 py-4 rounded-full text-sm font-semibold tracking-widest uppercase transition-all"
            >
              Call Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Reservations