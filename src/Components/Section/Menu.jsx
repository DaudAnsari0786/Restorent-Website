import React from 'react'
import { Link } from 'react-router-dom';

const Menu = () => {
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
     const featuredDishes = [
       {
         id: 1,
         name: "Truffle Risotto",
         description: "Creamy arborio rice with black truffle & parmesan",
         price: "$24",
         image:
           "https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=800&q=80",
       },
       {
         id: 2,
         name: "Grilled Salmon",
         description: "Atlantic salmon with lemon-dill butter & asparagus",
         price: "$28",
         image:
           "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80",
       },
       {
         id: 3,
         name: "Wagyu Steak",
         description: "A5 Japanese wagyu, roasted garlic & red wine jus",
         price: "$55",
         image:
           "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=800&q=80",
       },
       {
         id: 4,
         name: "Tiramisu",
         description: "Classic espresso-soaked layers with mascarpone",
         price: "$14",
         image:
           "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=80",
       },
     ];

  return (
    <div>
      {/* ========== FEATURED MENU SECTION ========== */}
      <section
        id="menu"
        className="py-24 lg:py-10 px-6 max-w-7xl mx-auto glass max-w-full"
      >
        <div className="text-center mb-16">
          <span className="text-amber-600 font-semibold tracking-widest text-sm uppercase block mb-3">
            Signature Selection
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-stone-900">
            Our Most Loved Dishes
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredDishes.map((dish) => (
            <div
              key={dish.id}
              className="group glass  rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-serif text-xl font-bold text-stone-800">
                    {dish.name}
                  </h3>
                  <span className="text-amber-700 font-bold text-lg">
                    {dish.price}
                  </span>
                </div>
                <p className="text-stone-600 text-sm leading-relaxed flex-1">
                  {dish.description}
                </p>
                <button className="cursor-pointer  mt-5 text-amber-700 hover:text-amber-500 font-semibold text-sm tracking-wider uppercase flex items-center gap-1 transition-colors">
                  Order Now <span className="text-lg leading-none">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            onClick={scrollToTop}
            to="/menubar"
            className="inline-block border-2 border-stone-300 hover:border-amber-500 text-stone-700 hover:text-amber-600 px-10 py-3.5 rounded-full text-sm font-semibold tracking-widest uppercase transition-all"
          >
            View Full Menu
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Menu