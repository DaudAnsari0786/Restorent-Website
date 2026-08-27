import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Menubar = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const menuData = [
    // Appetizers
    {
      id: 1,
      name: "Truffle Fries",
      price: 12.99,
      category: "appetizers",
      tag: "Popular",
      image:
        "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=400&h=300&fit=crop",
      description:
        "Crispy golden fries tossed in truffle oil, parmesan & herbs.",
    },
    {
      id: 2,
      name: "Bruschetta",
      price: 9.99,
      category: "appetizers",
      tag: "Veggie",
      image:
        "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=400&h=300&fit=crop",
      description:
        "Toasted bread topped with fresh tomatoes, basil & balsamic glaze.",
    },
    {
      id: 3,
      name: "Calamari",
      price: 14.99,
      category: "appetizers",
      tag: "New",
      image:
        "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=300&fit=crop",
      description:
        "Lightly fried squid rings with zesty marinara & lemon aioli.",
    },
    // Main Course
    {
      id: 4,
      name: "Grilled Ribeye Steak",
      price: 34.99,
      category: "main",
      tag: "Chef's Choice",
      image:
        "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=400&h=300&fit=crop",
      description:
        "12oz prime ribeye with garlic butter, served with roasted veggies.",
    },
    {
      id: 5,
      name: "Lobster Linguine",
      price: 28.99,
      category: "main",
      tag: "Premium",
      image:
        "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=400&h=300&fit=crop",
      description:
        "Fresh lobster tail over linguine in a creamy tomato basil sauce.",
    },
    {
      id: 6,
      name: "Mushroom Risotto",
      price: 22.99,
      category: "main",
      tag: "Veggie",
      image:
        "https://images.unsplash.com/photo-1633964913290-0a5c7cdc6a68?w=400&h=300&fit=crop",
      description:
        "Creamy arborio rice with wild mushrooms, truffle & parmesan.",
    },
    {
      id: 7,
      name: "Chicken Piccata",
      price: 24.99,
      category: "main",
      tag: "Popular",
      image:
        "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop",
      description: "Pan-seared chicken with lemon, capers & white wine sauce.",
    },
    // Desserts
    {
      id: 8,
      name: "Chocolate Lava Cake",
      price: 10.99,
      category: "desserts",
      tag: "Signature",
      image:
        "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=300&fit=crop",
      description:
        "Warm chocolate cake with a molten center, vanilla ice cream.",
    },
    {
      id: 9,
      name: "Tiramisu",
      price: 9.99,
      category: "desserts",
      tag: "Popular",
      image:
        "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=300&fit=crop",
      description:
        "Classic Italian dessert with coffee-soaked ladyfingers & mascarpone.",
    },
    {
      id: 10,
      name: "Panna Cotta",
      price: 8.99,
      category: "desserts",
      tag: "New",
      image:
        "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=300&fit=crop",
      description: "Silky vanilla panna cotta with fresh berry compote.",
    },
    // Beverages
    {
      id: 11,
      name: "Espresso Martini",
      price: 14.99,
      category: "beverages",
      tag: "Popular",
      image:
        "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&h=300&fit=crop",
      description: "Vodka, espresso, coffee liqueur & a touch of simple syrup.",
    },
    {
      id: 12,
      name: "Fresh Lemonade",
      price: 6.99,
      category: "beverages",
      tag: "Veggie",
      image:
        "https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=400&h=300&fit=crop",
      description: "Hand-squeezed lemonade with mint & seasonal berries.",
    },
    {
      id: 13,
      name: "Old Fashioned",
      price: 16.99,
      category: "beverages",
      tag: "Premium",
      image:
        "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=400&h=300&fit=crop",
      description: "Bourbon, bitters, sugar & a twist of orange peel.",
    },
  ];

  const categories = [
    { id: "all", label: "All" },
    { id: "appetizers", label: "Appetizers" },
    { id: "main", label: "Main Course" },
    { id: "desserts", label: "Desserts" },
    { id: "beverages", label: "Beverages" },
  ];

  const filteredItems =
    activeCategory === "all"
      ? menuData
      : menuData.filter((item) => item.category === activeCategory);

  const getTagColor = (tag) => {
    const colors = {
      Popular: "#e74c3c",
      New: "#2ecc71",
      Veggie: "#27ae60",
      Premium: "#f39c12",
      "Chef's Choice": "#8e44ad",
      Signature: "#e67e22",
    };
    return colors[tag] || "#3498db";
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
        duration: 0.4,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.2 },
    },
  };

  const buttonVariants = {
    hover: { scale: 1.05, transition: { duration: 0.15 } },
    tap: { scale: 0.95, transition: { duration: 0.1 } },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 min-h-screen">
      {/* Animated Header */}
      <motion.div
        className="text-center mb-10 pb-5 border-b-2 border-stone-200"
        initial="hidden"
        animate="visible"
        variants={headerVariants}
      >
        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-stone-800 tracking-wide mb-2 pt-8">
          Our Menu
        </h1>
        <p className="text-stone-500 text-base sm:text-lg font-light tracking-wide">
          Handcrafted dishes made with the finest ingredients
        </p>
      </motion.div>

      {/* Category Filter with Animated Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((cat) => (
          <motion.button
            key={cat.id}
            className={`px-6 py-2.5 rounded-full border-2 text-sm font-semibold uppercase tracking-wide transition-colors duration-300 ${
              activeCategory === cat.id
                ? "bg-stone-800 border-stone-800 text-white shadow-lg shadow-stone-800/25"
                : "border-stone-300 text-stone-600 hover:bg-stone-200 hover:border-stone-400"
            }`}
            onClick={() => setActiveCategory(cat.id)}
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            {cat.label}
          </motion.button>
        ))}
      </div>

      {/* Menu Grid with AnimatePresence for exit animations */}
      <AnimatePresence mode="wait">
        {filteredItems.length > 0 ? (
          <motion.div
            key={activeCategory}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-stone-100"
                variants={cardVariants}
                layout // smooth layout shifts
              >
                <div className="relative h-56 overflow-hidden bg-stone-100">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition duration-700 hover:scale-105 ease-in-out"
                  />
                  <span
                    className="absolute top-4 right-4 px-4 py-1 rounded-full text-white text-xs font-bold uppercase tracking-wide shadow-md backdrop-blur-sm"
                    style={{ backgroundColor: getTagColor(item.tag) }}
                  >
                    {item.tag}
                  </span>
                </div>

                <div className="p-5 sm:p-6 glass">
                  <div className="flex justify-between items-start gap-3 mb-1.5">
                    <h3 className="text-lg font-serif font-bold text-stone-800 leading-tight">
                      {item.name}
                    </h3>
                    <span className="text-lg font-serif font-bold text-stone-800 bg-stone-50 px-4 py-0.5 rounded-full whitespace-nowrap">
                      ₹{item.price.toFixed(2)}
                    </span>
                  </div>
                  <p className="text-stone-500 text-sm leading-relaxed mb-4 min-h-[2.5rem]">
                    {item.description}
                  </p>
                  <div className="flex justify-between items-center pt-3 border-t border-stone-100">
                    <span className="text-xs font-semibold text-stone-400 uppercase tracking-wide">
                      {categories.find((c) => c.id === item.category)?.label}
                    </span>
                    <motion.button
                      className=" cursor-pointer  px-5 py-2 bg-stone-800 text-white text-sm font-semibold rounded-full transition-colors duration-200 hover:bg-stone-700 shadow-sm hover:shadow-md"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Order Now
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="empty"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-center py-16 text-stone-400 text-lg"
          >
            No items found in this category.
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Menubar;
