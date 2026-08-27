import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, X, CheckCircle } from "lucide-react";
import { TfiFacebook } from "react-icons/tfi";
import { FaTwitter } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { FaGoogle } from "react-icons/fa6";

const Contact = () => {
  const [showSuccess, setShowSuccess] = useState(false);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    console.log("📩 Contact-page Form submitted with data:", data);
    form.reset();

    // Show success message
    setShowSuccess(true);
    // Auto-hide after 5 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-stone-50 pt-20 pb-12">
      {/* ===== HERO / HEADER ===== */}
      <section className="relative bg-gradient-to-r from-stone-900 to-stone-800 text-white py-16 md:py-24">
        <div className="absolute inset-0 opacity-10 bg-[url('/spice-pattern.svg')] bg-repeat"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-serif text-4xl md:text-5xl font-bold mb-4"
          >
            Get in <span className="text-amber-400">Touch</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-stone-300 max-w-2xl mx-auto text-lg"
          >
            We'd love to hear from you. Whether you have a question about our
            menu, want to book a private event, or just want to say hello –
            reach out!
          </motion.p>
        </div>
      </section>

      {/* ===== CONTACT INFO CARDS ===== */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: MapPin,
              title: "Address",
              detail: "Vill. Rukmalpur Atrauliya, Azamgarh 223223",
            },
            {
              icon: Phone,
              title: "Phone",
              detail: "+91 (902) 635-0956",
              link: "tel:+919026350956",
            },
            {
              icon: Mail,
              title: "Email",
              detail: "Daudansari6472@gmail.com",
              link: "mailto:Daudansari6472@gmail.com",
            },
            {
              icon: Clock,
              title: "Opening Hours",
              detail: (
                <>
                  Mon–Thu: 5:00 – 10:30 PM
                  <br />
                  Fri–Sat: 5:00 – 11:30 PM
                  <br />
                  Sunday: 4:00 – 9:30 PM
                </>
              ),
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white rounded-2xl shadow-lg p-6 border border-stone-100 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="p-3 bg-amber-100 rounded-full text-amber-600">
                  <item.icon size={20} />
                </div>
                <h3 className="font-semibold text-stone-800">{item.title}</h3>
              </div>
              {item.link ? (
                <a
                  href={item.link}
                  className="text-stone-600 hover:text-amber-600 transition-colors"
                >
                  {item.detail}
                </a>
              ) : (
                <p className="text-stone-600 text-sm leading-relaxed">
                  {item.detail}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ===== FORM + MAP SECTION ===== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* ---- Contact Form ---- */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-white p-8 rounded-2xl shadow-lg border border-stone-100 relative"
          >
            {/* Success Banner */}
            {showSuccess && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-green-600" size={24} />
                  <div>
                    <h4 className="font-semibold text-green-800">Thank you!</h4>
                    <p className="text-sm text-green-700">
                      Your message has been successfully submitted.
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setShowSuccess(false)}
                  className="text-green-600 hover:text-green-800 transition-colors"
                >
                  <X size={20} />
                </button>
              </motion.div>
            )}

            <h2 className="font-serif text-2xl font-bold text-stone-800 mb-2">
              Send us a <span className="text-amber-600">Message</span>
            </h2>
            <p className="text-stone-500 text-sm mb-6">
              We'll get back to you as soon as possible.
            </p>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-stone-700 mb-1"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    className="w-full px-4 py-2.5 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-stone-700 mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="you@example.com"
                    className="w-full px-4 py-2.5 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition"
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-stone-700 mb-1"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="How can we help?"
                  className="w-full px-4 py-2.5 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-stone-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Write your message here..."
                  className="w-full px-4 py-2.5 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition resize-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/30"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
            {/* Social links */}
            <div className="mt-6 flex justify-center gap-4">
              <a
                href="#"
                className="text-stone-400 hover:text-amber-600 transition-colors"
              >
                <TfiFacebook size={20} />
              </a>
              <a
                href="#"
                className="text-stone-400 hover:text-amber-600 transition-colors"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="#"
                className="text-stone-400 hover:text-amber-600 transition-colors"
              >
                <FaGoogle size={20} />
              </a>
              <a
                href="#"
                className="text-stone-400 hover:text-amber-600 transition-colors"
              >
                <IoLogoYoutube size={20} />
              </a>
            </div>
          </motion.div>

          {/* ---- Google Map ---- */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="rounded-2xl overflow-hidden shadow-lg border border-stone-100 h-96 lg:h-auto min-h-[400px]"
          >
            <iframe
              title="Restaurant Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28640.82135927113!2d83.1610777!3d26.106204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3995f9c3e3e3e3e3%3A0x3e3e3e3e3e3e3e3e!2sAzamgarh%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
