import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ChefHat,
  User,
  Mail,
  Phone,
  Briefcase,
  MapPin,
  Upload,
  Send,
  CheckCircle2,
} from 'lucide-react';
   const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
const ApplyNow = () => {
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    city: '',
    message: '',
  });

  const positions = [
    'Executive Chef',
    'Sous Chef',
    'Pastry Chef',
    'Tandoor Master',
    'Vegan Chef',
    'Head Chef',
    'Line Cook',
    'Kitchen Assistant',
  ];

  const experienceLevels = [
    '0-2 Years',
    '3-5 Years',
    '6-10 Years',
    '10+ Years',
    '15+ Years',
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Log every field change as it happens
    console.log(`[ApplyNow] field changed → ${name}:`, value);

    setFormData((prev) => {
      const next = { ...prev, [name]: value };
      console.log('[ApplyNow] formData state now:', next);
      return next;
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      console.log('[ApplyNow] file selected:', {
        name: file.name,
        size: `${(file.size / 1024).toFixed(2)} KB`,
        type: file.type || 'unknown',
      });
    } else {
      console.log('[ApplyNow] file selection cleared');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('[ApplyNow] submit triggered');
    console.log('[ApplyNow] payload →', formData);

    // Basic validation snapshot
    const missing = Object.entries(formData)
      .filter(([, v]) => !v)
      .map(([k]) => k);
    if (missing.length) {
      console.warn('[ApplyNow] empty (optional) fields:', missing);
    }

    // TODO: send formData to your API / backend

    setSubmitted(true);
    console.log('[ApplyNow] submitted state set to true');
  };

  const handleReset = () => {
    console.log('[ApplyNow] resetting form');

    setSubmitted(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      position: '',
      experience: '',
      city: '',
      message: '',
    });

    console.log('[ApplyNow] form reset complete');
  };

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeIn' },
    },
  };

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, duration: 0.7, ease: 'easeIn' },
    },
  };

  return (
    <section
      id="apply-now"
      className="relative min-h-screen bg-gradient-to-b from-gray-200 to-amber-50 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-orange-300/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-300/30 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-red-500 shadow-lg mb-4 mt-5">
            <ChefHat className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Join Our{' '}
            <span className="text-orange-600">Indian Chefs Team</span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            We're always looking for passionate chefs who want to celebrate and
            innovate Indian cuisine and create extraordinary dining experiences.
          </p>
        </motion.div>

        {/* Card */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-5 gap-8"
        >
          {/* Left: perks / info panel */}
          <motion.div
            variants={fadeUp}
            className="lg:col-span-2 bg-gradient-to-br from-orange-600 to-red-600 rounded-2xl shadow-xl p-8 text-white flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Why Work With Spice Haven?
              </h3>
              <ul className="space-y-4 text-orange-50 text-sm">
                {[
                  'Competitive salary & performance bonuses',
                  'Health, dental & wellness benefits',
                  'Access to premium spices & ingredients',
                  'Ongoing culinary training & workshops',
                  'Creative freedom to innovate new dishes',
                  'Global culinary competitions & awards',
                ].map((perk, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                    <span>{perk}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-white/20">
              <p className="text-orange-100 text-sm mb-1">Questions?</p>
              <p className="font-semibold text-lg">
                spicehaven@service.com
              </p>
              <p className="text-orange-100 text-sm mt-1">+91 98765 43210</p>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            variants={fadeUp}
            className="lg:col-span-3 bg-white rounded-2xl shadow-xl p-8"
          >
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Application Received!
                </h3>
                <p className="text-gray-600 max-w-md">
                  Thank you, <strong>{formData.fullName || 'Chef'}</strong>. Our
                  team will review your application and get back to you within
                  3–5 business days.
                </p>
                <button
                  onClick={handleReset}
                  className="mt-6 text-orange-600 hover:text-orange-700 font-medium underline underline-offset-4"
                >
                  Submit another application
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Chef Keshav Kumar"
                      className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition"
                    />
                  </div>
                </div>

                {/* Email + Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Email *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="chef@example.com"
                        className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Phone *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition"
                      />
                    </div>
                  </div>
                </div>

                {/* Position + Experience */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Position Applying For *
                    </label>
                    <div className="relative">
                      <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <select
                        name="position"
                        required
                        value={formData.position}
                        onChange={handleChange}
                        className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition bg-white appearance-none"
                      >
                        <option value="">Select a position</option>
                        {positions.map((p) => (
                          <option key={p} value={p}>
                            {p}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Experience *
                    </label>
                    <select
                      name="experience"
                      required
                      value={formData.experience}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition bg-white appearance-none"
                    >
                      <option value="">Years of experience</option>
                      {experienceLevels.map((lvl) => (
                        <option key={lvl} value={lvl}>
                          {lvl}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* City */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    City
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="Delhi, India"
                      className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition"
                    />
                  </div>
                </div>

                {/* Resume upload */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Resume / Portfolio
                  </label>
                  <label className="flex items-center gap-3 w-full px-4 py-3 rounded-xl border-2 border-dashed border-gray-200 hover:border-orange-400 cursor-pointer transition group">
                    <Upload className="w-5 h-5 text-gray-400 group-hover:text-orange-500 transition" />
                    <span className="text-sm text-gray-500 group-hover:text-gray-700 transition">
                      Upload PDF, DOC, or link to portfolio
                    </span>
                    <input
                      type="file"
                      className="hidden"
                      onChange={handleFileChange}
                    />
                  </label>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Tell us about yourself
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Share your culinary journey, specialties, and what excites you about Indian cuisine..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-semibold py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.01]"
                >
                  <Send className="w-5 h-5" />
                  Submit Application
                </button>

                <p className="text-xs text-gray-400 text-center">
                  By submitting, you agree to our Terms & Privacy Policy.
                </p>
              </form>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ApplyNow;