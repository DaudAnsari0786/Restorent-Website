import React, { useState } from "react";
import {
  Calendar,
  Clock,
  Users,
  Phone,
  Mail,
  User,
  CheckCircle,
} from "lucide-react";

 const scrollToTop = () => {
   window.scrollTo({ top: 0, behavior: "smooth" });
 };
const Booking = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: 2,
    specialRequests: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would send the data to your backend API
    console.log("Booking Data:", formData);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      guests: 2,
      specialRequests: "",
    });
    setIsSubmitted(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-stone-50 to-stone-100 px-4 py-12 sm:px-6 lg:px-8 pt-28">
      <div className="w-full max-w-3xl">
        {/* Card Container */}
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100">
          {/* Header with Gradient */}
          <div className="text-center  bg-gradient-to-r from-amber-600 to-orange-600 px-8 py-6">
            <h2 className="text-3xl font-bold text-white tracking-tight">
              {isSubmitted ? "Booking Confirmed!" : "Reserve Your Table"}
            </h2>
            <p className="text-amber-100 mt-1">
              {isSubmitted
                ? "We look forward to welcoming you."
                : "Fill in the details below to secure your spot."}
            </p>
          </div>

          <div className="p-8">
            {isSubmitted ? (
              /* ---------- CONFIRMATION / SUMMARY TABLE ---------- */
              <div className="animate-in fade-in zoom-in duration-500">
                <div className="flex items-center justify-center mb-6 text-green-600">
                  <CheckCircle className="w-16 h-16" />
                </div>
                <h3 className="text-2xl font-semibold text-center text-gray-800 mb-6">
                  Your reservation is confirmed
                </h3>

                {/* Booking Summary Table */}
                <div
                  className="border border-gray-200 rounded-xl overflow-hidden shadow-sm mb-8"
                >
                  <table className="w-full text-sm text-left text-gray-600">
                    <thead className="bg-gray-50 text-gray-700 font-semibold">
                      <tr>
                        <th className="px-6 py-3 border-b w-1/3">Detail</th>
                        <th className="px-6 py-3 border-b w-2/3">
                          Information
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 font-medium flex items-center gap-2">
                          <User className="w-4 h-4 text-amber-600" /> Name
                        </td>
                        <td className="px-6 py-4">{formData.name}</td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 font-medium flex items-center gap-2">
                          <Mail className="w-4 h-4 text-amber-600" /> Email
                        </td>
                        <td className="px-6 py-4">{formData.email}</td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 font-medium flex items-center gap-2">
                          <Phone className="w-4 h-4 text-amber-600" /> Phone
                        </td>
                        <td className="px-6 py-4">{formData.phone}</td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 font-medium flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-amber-600" /> Date
                        </td>
                        <td className="px-6 py-4">{formData.date || "N/A"}</td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 font-medium flex items-center gap-2">
                          <Clock className="w-4 h-4 text-amber-600" /> Time
                        </td>
                        <td className="px-6 py-4">{formData.time || "N/A"}</td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 font-medium flex items-center gap-2">
                          <Users className="w-4 h-4 text-amber-600" /> Guests
                        </td>
                        <td className="px-6 py-4">{formData.guests}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="flex justify-center">
                  <button
                    onClick={() => {
                      handleReset();
                      // If you have a custom scrollToTop function, use it.
                      // If not, this native browser command works perfectly:
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="cursor-pointer px-8 py-3 bg-stone-800 text-white rounded font-medium hover:bg-stone-900 transition-all shadow-md hover:shadow-lg"
                  >
                    Make Another Booking
                  </button>
                </div>
              </div>
            ) : (
              /* ---------- BOOKING FORM ---------- */
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded  focus:border-transparent transition-all bg-gray-50"
                      placeholder="Daud Ansari............."
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded  focus:border-transparent transition-all bg-gray-50"
                      placeholder="daud@example.com"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded  focus:border-transparent transition-all bg-gray-50"
                      placeholder="+91 90263 50956"
                    />
                  </div>

                  {/* Guests */}
                  <div>
                    <label
                      htmlFor="guests"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Number of Guests *
                    </label>
                    <input
                      type="number"
                      id="guests"
                      name="guests"
                      min="1"
                      max="20"
                      required
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded  focus:border-transparent transition-all bg-gray-50"
                    />
                  </div>

                  {/* Date */}
                  <div>
                    <label
                      htmlFor="date"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Reservation Date *
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      required
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded  focus:border-transparent transition-all bg-gray-50"
                    />
                  </div>

                  {/* Time */}
                  <div>
                    <label
                      htmlFor="time"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Reservation Time *
                    </label>
                    <input
                      type="time"
                      id="time"
                      name="time"
                      required
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded  focus:border-transparent transition-all bg-gray-50"
                    />
                  </div>
                </div>

                {/* Special Requests */}
                <div>
                  <label
                    htmlFor="specialRequests"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Special Requests
                  </label>
                  <textarea
                    id="specialRequests"
                    name="specialRequests"
                    rows="3"
                    value={formData.specialRequests}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded  focus:border-transparent transition-all bg-gray-50 resize-none"
                    placeholder="Any dietary preferences, table location, or special occasions..."
                  />
                </div>

                {/* Submit Button */}
                <button
                onClick={scrollToTop}
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold rounded cursor-pointer shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  Confirm Booking
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
