import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

// Layout components
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Section/Footer";

// Page components
import Home from "./Components/Section/Home";
import About from "./Components/Section/About";
import Menu from "./Components/Section/Menu";
import Reservations from "./Components/Section/Reservations";
import Service from "./Components/Section/Service";
import Contact from "./Components/Section/Contact";
import Booking from "./Components/Section/Booking";
import PageNotFound from "./Components/PageNotFound/PageNotFound";
import Login from "./Components/Form/Login";
import Signup from "./Components/Form/Signup";
import MenuCard from "./Components/Menu/Menubar";
import Profile from "./Components/Section/Profile";
import Chef from "./Components/Section/Chef"; // Import Chef

const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <Login />
            </PageTransition>
          }
        />
        <Route
          path="/home"
          element={
            <PageTransition>
              <Home />
            </PageTransition>
          }
        />
        <Route
          path="/chef"  // Add Chef route
          element={
            <PageTransition>
              <Chef />
            </PageTransition>
          }
        />
        <Route
          path="/service"
          element={
            <PageTransition>
              <Service />
            </PageTransition>
          }
        />
        <Route
          path="/menu"
          element={
            <PageTransition>
              <Menu />
            </PageTransition>
          }
        />
        <Route
          path="/menubar"
          element={
            <PageTransition>
              <MenuCard />
            </PageTransition>
          }
        />
        <Route
          path="/about"
          element={
            <PageTransition>
              <About />
            </PageTransition>
          }
        />
        <Route
          path="/reservations"
          element={
            <PageTransition>
              <Reservations />
            </PageTransition>
          }
        />
        <Route
          path="/booking"
          element={
            <PageTransition>
              <Booking />
            </PageTransition>
          }
        />
        <Route
          path="/profile"
          element={
            <PageTransition>
              <Profile />
            </PageTransition>
          }
        />
        <Route
          path="/contact"
          element={
            <PageTransition>
              <Contact />
            </PageTransition>
          }
        />
        <Route
          path="/signup"
          element={
            <PageTransition>
              <Signup />
            </PageTransition>
          }
        />
      
        <Route
          path="*"
          element={
            <PageTransition>
              <PageNotFound />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  return (
    <div>
      <Navbar />
      <AnimatedRoutes />
      <Footer />
    </div>
  );
};

export default App;