import React from "react";
import { motion } from "framer-motion";
import Service from "./Service";
import Menu from "./Menu";
import About from "./About";
import Testimonials from "./Testimonials";
import Reservations from "./Reservations";
import Contact from "./Contact";
import { ArrowDownToDot } from "lucide-react";
import { Link } from "react-router-dom";
import Chef from "./Chef";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };


const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const Home = () => {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-gray-800 scroll-smooth">
      {/* ========== HERO SECTION ========== */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/Hotel2.jpg')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-stone-900/80 via-stone-900/60 to-stone-900/85"></div>
        </div>

        <motion.div
          className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1
            variants={fadeInUp}
            className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight mb-6"
          >
            Where Every <span className="text-amber-400">Bite</span> Tells a
            Story
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10 font-light"
          >
            Experience modern Italian cuisine crafted with passion, served in a
            setting of understated elegance.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-5 justify-center"
          >
            <Link
              onClick={scrollToTop}
              to="/menu"
              className="bg-gradient-to-r from-orange-500 to-red-600 hover:bg-amber-500 text-white px-10 py-4 rounded-full text-sm font-semibold tracking-widest uppercase transition-all shadow-lg hover:shadow-amber-600/30"
            >
              Explore Our Menu
            </Link>
            <Link
            onClick={scrollToTop}
              to="/reservations"
              className="border-2 border-white/30 hover:border-amber-400 text-white hover:text-amber-400 px-10 py-4 rounded-full text-sm font-semibold tracking-widest uppercase transition-all"
            >
              Book a Table
            </Link>
          </motion.div>
        </motion.div>

        {/* Bouncing scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <a href="#about">
            <ArrowDownToDot className="w-6 h-6 text-white/60 " />
          </a>
        </motion.div>
      </section>

      {/* ========== SECTIONS WITH SCROLL ANIMATIONS ========== */}

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <Menu />
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <About />
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <Service />
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <Chef/>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <Reservations />
      </motion.section>
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <Testimonials />
      </motion.section>
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <Contact />
      </motion.section>
    </div>
  );
};

export default Home;
