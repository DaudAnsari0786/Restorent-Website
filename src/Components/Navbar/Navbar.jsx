import React, { useState } from "react";
import {
  Menu,
  X,
  Search,
  Utensils,
  Phone,
  Home,
  Users,
  Hamburger,
  Image,
  UserStar,
  UtensilsCrossed,
  User,
  LogOut,
  Settings,
  UserCircle,
  ChevronDown,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// Static data outside component
const navLinks = [
  { name: "Home", link: "/home", icon: Home },
  { name: "Menu", link: "/Menu", icon: Hamburger },
  { name: "About", link: "/About", icon: Users },
  { name: "Service", link: "/Service", icon: Image },
  { name: "Contact", link: "/Contact", icon: UserStar },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const navigate = useNavigate();

  // Mock user state - replace with actual auth state
  const [user, setUser] = useState({
    isLoggedIn: true,
    name: "John Doe",
    email: "john@example.com",
    avatar: null, // or a URL to an image
  });

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
    setSearchQuery("");
  };

  const handleLogout = () => {
    // Add your logout logic here
    setUser({ ...user, isLoggedIn: false });
    setIsProfileOpen(false);
    navigate("/");
  };

  const handleLogin = () => {
    // Add your login logic here
    navigate("/login");
  };

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/home" className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center">
              <UtensilsCrossed color="white" />
            </div>
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                Spice Haven
              </span>
              <p className="text-xs text-gray-500 -mt-1">
                Fine Dining & Catering
              </p>
            </div>
          </Link>

          {/* Desktop: Nav Links + Search + Book Now + Profile */}
          <div className="hidden md:flex items-center space-x-1 ml-10">
            {navLinks.map(({ name, link }) => (
              <Link
                onClick={scrollToTop}
                key={name}
                to={link}
                className="px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-amber-600 hover:bg-amber-50 transition-all duration-200"
              >
                {name}
              </Link>
            ))}
          </div>

          {/* Desktop: Search bar, Book Now, and Profile */}
          <div className="hidden md:flex items-center space-x-3 ml-10">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search dishes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-40 lg:w-86  pl-9 pr-9 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-gray-50"
                aria-label="Search"
              />
              <Search className="absolute left-2.5 top-2.5 w-4 h-4 text-gray-400" />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2.5 top-2.5 text-gray-400 hover:text-gray-600 focus:outline-none"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </form>

            {/* Desktop Book Now */}
            <Link
              onClick={scrollToTop}
              to="/reservations"
              className="inline-flex items-center -mr-36 gap-0 sm:gap-4 px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white text-sm font-medium rounded-lg transition-all duration-200 whitespace-nowrap"
            >
              <Phone className="w-4 h-4" />
              Book Now
            </Link>

            {/* Desktop Profile Section */}
            <div className="relative left-40">
              {user.isLoggedIn ? (
                <>
                  <button
                    onClick={() => setIsProfileOpen(!isProfileOpen)}
                    className="flex items-center gap-2 px-2 py-1 rounded-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500"
                    aria-label="Profile menu"
                  >
                    {user.avatar ? (
                      <img
                        src={user.avatar}
                        alt={user.name}
                        className="w-8 h-8 rounded-full object-cover border-2 border-amber-500"
                      />
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-500 to-red-600 flex items-center justify-center text-white text-sm font-semibold">
                        {getInitials(user.name)}
                      </div>
                    )}
                    <ChevronDown
                      className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
                        isProfileOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Profile Dropdown */}
                  {isProfileOpen && (
                    <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-1 overflow-hidden">
                      <div className="px-4 py-3 border-b border-gray-100">
                        <p className="text-sm font-medium text-gray-900">
                          {user.name}
                        </p>
                        <p className="text-xs text-gray-500 truncate">
                          {user.email}
                        </p>
                      </div>
                      <Link
                        to="/profile"
                        className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition-colors"
                        onClick={() => {
                          setIsProfileOpen(false);
                          scrollToTop();
                        }}
                      >
                        <UserCircle className="w-4 h-4" />
                        My Profile
                      </Link>
                      <Link
                        to="/profile/settings"
                        className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition-colors"
                        onClick={() => {
                          setIsProfileOpen(false);
                          scrollToTop();
                        }}
                      >
                        <Settings className="w-4 h-4" />
                        Settings
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="flex items-center gap-3 w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors border-t border-gray-100"
                      >
                        <LogOut className="w-4 h-4" />
                        Logout
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <button
                  onClick={handleLogin}
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-amber-600 hover:text-amber-700 hover:bg-amber-50 rounded-lg transition-colors"
                >
                  <User className="w-4 h-4" />
                  Login
                </button>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            {/* Mobile Profile Icon */}
            {user.isLoggedIn && (
              <Link
                to="/profile"
                className="p-2 text-gray-600 hover:text-amber-600 transition-colors"
                onClick={scrollToTop}
              >
                {user.avatar ? (
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-7 h-7 rounded-full object-cover border-2 border-amber-500"
                  />
                ) : (
                  <div className="w-7 h-7 rounded-full bg-gradient-to-r from-orange-500 to-red-600 flex items-center justify-center text-white text-xs font-semibold">
                    {getInitials(user.name)}
                  </div>
                )}
              </Link>
            )}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-600 hover:text-amber-600 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-lg"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with slide animation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white border-t border-gray-200 px-4 pt-3 pb-4 space-y-1">
          {/* Mobile User Info */}
          {user.isLoggedIn && (
            <div className="flex items-center gap-3 px-3 py-3 mb-2 bg-gray-50 rounded-lg">
              {user.avatar ? (
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-10 h-10 rounded-full object-cover border-2 border-amber-500"
                />
              ) : (
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-500 to-red-600 flex items-center justify-center text-white text-sm font-semibold">
                  {getInitials(user.name)}
                </div>
              )}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">
                  {user.name}
                </p>
                <p className="text-xs text-gray-500 truncate">{user.email}</p>
              </div>
            </div>
          )}

          {/* Mobile Search */}
          <form onSubmit={handleSearch} className="relative mb-3">
            <input
              type="text"
              placeholder="Search dishes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-10 py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 bg-gray-50"
              aria-label="Search"
            />
            <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-3 text-gray-400 hover:text-gray-600 focus:outline-none"
                aria-label="Clear search"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </form>

          {/* Mobile Nav Links with icons */}
          {navLinks.map(({ name, link, icon: Icon }) => (
            <Link
              key={name}
              to={link}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-base font-medium text-gray-600 hover:text-amber-600 hover:bg-amber-50 transition-all"
              onClick={() => {
                scrollToTop();
                setIsOpen(false);
              }}
            >
              <Icon className="w-5 h-5" />
              {name}
            </Link>
          ))}

          {/* Mobile Profile Links (when logged in) */}
          {user.isLoggedIn && (
            <>
              <Link
                to="/profile"
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-base font-medium text-gray-600 hover:text-amber-600 hover:bg-amber-50 transition-all"
                onClick={() => {
                  scrollToTop();
                  setIsOpen(false);
                }}
              >
                <UserCircle className="w-5 h-5" />
                My Profile
              </Link>
              <Link
                to="/profile/settings"
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-base font-medium text-gray-600 hover:text-amber-600 hover:bg-amber-50 transition-all"
                onClick={() => {
                  scrollToTop();
                  setIsOpen(false);
                }}
              >
                <Settings className="w-5 h-5" />
                Settings
              </Link>
              <button
                onClick={() => {
                  handleLogout();
                  setIsOpen(false);
                }}
                className="flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-base font-medium text-red-600 hover:bg-red-50 transition-all"
              >
                <LogOut className="w-5 h-5" />
                Logout
              </button>
            </>
          )}

          {/* Mobile Login Button (when logged out) */}
          {!user.isLoggedIn && (
            <button
              onClick={() => {
                handleLogin();
                setIsOpen(false);
              }}
              className="flex items-center justify-center gap-2 w-full px-4 py-3 mt-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-lg transition-all"
            >
              <User className="w-5 h-5" />
              Login
            </button>
          )}

          {/* Mobile Book Now */}
          <Link
            to="/booking"
            className="flex items-center justify-center gap-2 w-full px-4 py-3 mt-2 bg-gradient-to-r from-orange-500 to-red-600 hover:bg-amber-700 text-white font-medium rounded-lg transition-all"
            onClick={() => {
              scrollToTop();
              setIsOpen(false);
            }}
          >
            <Phone className="w-5 h-5" />
            Book Now
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;