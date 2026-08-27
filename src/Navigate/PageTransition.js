// src/Components/PageTransition.js
import React from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";


// Predefined animation variants
const variants = {
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  slideUp: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -30 },
  },
  slideDown: {
    initial: { opacity: 0, y: -30 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 30 },
  },
  scale: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
  },
  none: {
    initial: {},
    animate: {},
    exit: {},
  },
};

const PageTransition = ({
  children,
  type = "slideUp", // 'fade' | 'slideUp' | 'slideDown' | 'scale' | 'none'
  duration = 0.4,
  delay = 0,
  ease = "easeInOut",
  className = "",
}) => {
  const selectedVariant = variants[type] || variants.slideUp;

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={selectedVariant}
      transition={{ duration, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
};



PageTransition.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(Object.keys(variants)),
  duration: PropTypes.number,
  delay: PropTypes.number,
  ease: PropTypes.string,
  className: PropTypes.string,
};

export default React.memo(PageTransition);
