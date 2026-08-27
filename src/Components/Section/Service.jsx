import React from "react";
import { motion } from "framer-motion";
import {
  Utensils,
  Package,
  Coffee,
  Users,
  Calendar,
  Gift,
  Phone,
 
  MapPin,
} from "lucide-react";
import Service_img from "/public/Hotel2.jpg"
const Service = () => {
  const services = [
    {
      icon: <Utensils className="w-8 h-8 text-amber-500" />,
      title: "Fine Dine‑In",
      description:
        "Experience authentic Indian cuisine in a warm, elegant setting. Our chefs craft each dish with fresh spices and love.",
    },
    {
      icon: <Package className="w-8 h-8 text-amber-500" />,
      title: "Takeaway & Delivery",
      description:
        "Enjoy our signature flavours at home. Order online for quick pickup or doorstep delivery.",
    },
    {
      icon: <Users className="w-8 h-8 text-amber-500" />,
      title: "Catering Services",
      description:
        "Make your events memorable with our bespoke catering – from intimate gatherings to grand celebrations.",
    },
    {
      icon: <Calendar className="w-8 h-8 text-amber-500" />,
      title: "Private Events",
      description:
        "Host your special occasions in our private dining rooms, tailored to your preferences.",
    },
    {
      icon: <Coffee className="w-8 h-8 text-amber-500" />,
      title: "Bar & Lounge",
      description:
        "Unwind with our curated selection of wines, spirits, and handcrafted cocktails inspired by Indian flavours.",
    },
    {
      icon: <Gift className="w-8 h-8 text-amber-500" />,
      title: "Gift Cards",
      description:
        "Give the gift of exquisite dining. Purchase gift cards for friends and family to enjoy our culinary journey.",
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  return (
    <div className="min-h-screen ">
      {/* ===== HERO ===== */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: { Service_img },
          }}
        >
          <div className="absolute inset-0 bg-stone-900/70"></div>
        </div>
        <motion.div
          className="relative z-10 text-center text-white px-6"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1
            variants={fadeInUp}
            className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight"
          >
            Our <span className="text-amber-400">Services</span>
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="mt-4 text-lg text-white/80 max-w-2xl mx-auto"
          >
            From intimate dinners to grand celebrations – we offer a complete
            culinary experience tailored to your needs.
          </motion.p>
        </motion.div>
      </section>

      {/* ===== SERVICES GRID ===== */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="cursor-pointer element glass rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 border border-stone-100 hover:border-amber-200"
            >
              <div className="w-14 h-14 rounded-full bg-amber-50 flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-stone-800 mb-2">
                {service.title}
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>
      {/* ===== CTA / CONTACT ===== */}
      {/* <section className="bg-stone-900 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold">
            Ready to experience{" "}
            <span className="text-amber-400">Spice Haven</span>?
          </h2>
          <p className="mt-3 text-stone-300 text-lg">
            Book a table, order takeaway, or enquire about our catering – we're
            here to serve you.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="/reservations"
              className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-500 text-white font-semibold px-8 py-3 rounded-full transition-all shadow-lg hover:shadow-amber-600/30"
            >
              <Phone className="w-5 h-5" />
              Reserve Now
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 border-2 border-white/30 hover:border-amber-400 text-white hover:text-amber-400 font-semibold px-8 py-3 rounded-full transition-all"
            >
              <MapPin className="w-5 h-5" />
              Find Us
            </a>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Service;
