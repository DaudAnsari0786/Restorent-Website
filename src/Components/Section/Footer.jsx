import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ChevronRight,
  ArrowUp,
} from "lucide-react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { Link } from "react-router-dom";

const socialLinks = [
  { name: "Facebook", icon: <FaFacebookF />, link: "#" },
  { name: "Youtube", icon: <IoLogoYoutube />, link: "#" },
  { name: "Twitter", icon: <FaTwitter />, link: "#" },
  { name: "Instagram", icon: <FaInstagram />, link: "#" },
  { name: "Linkedin", icon: <FaLinkedinIn />, link: "#" },
];

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Menu", href: "/menu" },
  { label: "Reservations", href: "/reservations" },
  { label: "Gift Cards", href: "#" },
  { label: "Book Now", href: "/booking" },
];

const Footer = () => {
  const [email, setEmail] = useState("");
  const currentYear = new Date().getFullYear();

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Integrate your API call here
    setEmail("");
    console.log("Email for Subscribe : ", email);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gradient-to-b from-stone-950 via-stone-900 to-stone-950 text-stone-300">
      {/* Subtle top glow line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-400/40 to-transparent" />

      <div className="max-w-7xl mx-auto pt-16 pb-6 px-4 md:px-8 relative z-10">
        {/* Main Grid - 4 columns on large screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand & Social */}
          <div>
            <h3 className="font-serif text-4xl font-bold text-white mb-3 tracking-tight">
              Spice Haven<span className="text-amber-400">.</span>
            </h3>
            <p className="text-sm text-stone-400 leading-relaxed max-w-xs mb-6">
              Authentic Indian flavors, aromatic spices, and warm hospitality.
              Experience the rich culinary heritage of India in every bite.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((item) => (
                <Link
                  key={item.name}
                  to={item.link}
                  className="w-10 h-10 rounded-full border border-stone-700/60 flex items-center justify-center text-stone-400 hover:text-amber-400 hover:border-amber-400 hover:shadow-lg hover:shadow-amber-400/20 transition-all duration-300  bg-stone-800/30 backdrop-blur-sm"
                  aria-label={item.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-[0.2em] mb-5 relative inline-block">
              Quick Links
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-orange-500 to-red-600 rounded-full" />
            </h4>
            <ul className="space-y-3 text-sm">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-stone-400 hover:text-amber-400 transition-all duration-300 inline-flex items-center gap-2 group"
                  >
                    <ChevronRight
                      size={14}
                      className="text-amber-400/60 group-hover:translate-x-1 transition-transform duration-300"
                    />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-[0.2em] mb-5 relative inline-block">
              Contact
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-orange-500 to-red-600 rounded-full" />
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 group">
                <MapPin
                  size={18}
                  className="text-amber-400 mt-0.5 shrink-0 group-hover:scale-110 transition-transform"
                />
                <span className="text-stone-400">
                  Vill. Rukmalpur Atrauliya <br /> Azamgarh 223223
                </span>
              </li>
              <li className="flex items-center gap-3 group">
                <Phone
                  size={18}
                  className="text-amber-400 shrink-0 group-hover:scale-110 transition-transform"
                />
                <a
                  href="tel:+919026350956"
                  className="text-stone-400 hover:text-amber-400 transition-colors"
                >
                  +91 (902) 635-0956
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <Mail
                  size={18}
                  className="text-amber-400 shrink-0 group-hover:scale-110 transition-transform"
                />
                <a
                  href="mailto:Daudansari6472@gmail.com"
                  className="text-stone-400 hover:text-amber-400 transition-colors break-all"
                >
                  Daudansari6472@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-[0.2em] mb-5 relative inline-block">
              Opening Hours
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-orange-500 to-red-600 rounded-full" />
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between text-stone-400">
                <span>Mon – Thu</span>
                <span className="text-white font-medium">5:00 – 10:30 PM</span>
              </li>
              <li className="flex justify-between text-stone-400">
                <span>Fri – Sat</span>
                <span className="text-white font-medium">5:00 – 11:30 PM</span>
              </li>
              <li className="flex justify-between text-stone-400">
                <span>Sunday</span>
                <span className="text-white font-medium">4:00 – 9:30 PM</span>
              </li>
            </ul>
            <div className="mt-5 flex items-center gap-2 text-xs text-amber-300 bg-amber-500/10 border border-amber-500/20 rounded-lg px-3 py-2 backdrop-blur-sm">
              <Clock size={14} className="text-amber-400 animate-pulse" />
              <span>We're open — reserve your table!</span>
            </div>
          </div>
        </div>

        {/* Newsletter – glass card */}
        <div className="mt-14 p-5 md:p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-5">
            <div>
              <h4 className="text-white font-semibold text-sm uppercase tracking-wider">
                Subscribe to our newsletter
              </h4>
              <p className="text-stone-400 text-sm mt-1">
                Get the latest offers and events straight to your inbox.
              </p>
            </div>
            <form
              className="flex flex-wrap w-full md:w-auto gap-2 "
              onSubmit={handleSubscribe}
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 md:w-72 px-5 py-3 bg-stone-800/50 border border-stone-700 rounded-xl text-white text-sm placeholder-stone-500 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/30 transition-all backdrop-blur-sm"
                required
                aria-label="Email address"
              />
              <button
                type="submit"
                className=" cursor-pointer w-full sm:w-fit  px-7 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-stone-950 font-semibold text-sm rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-amber-500/30 whitespace-nowrap active:scale-95"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-stone-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>
            © {currentYear} Spice Haven. All rights reserved. Designed with{" "}
            <span className="text-amber-400 animate-pulse">❤</span> by Spice
            Haven.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-amber-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-amber-400 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-amber-400 transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="cursor-pointer  fixed bottom-8 right-8 z-50 w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 text-stone-950 rounded-full shadow-lg shadow-amber-500/30 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-amber-500/50 backdrop-blur-sm hover:bg-amber-300"
        aria-label="Back to top"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;
