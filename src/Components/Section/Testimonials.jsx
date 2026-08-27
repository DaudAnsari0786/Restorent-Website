import React from "react";
import img1 from "/public/Hotel1.jpg";
import img2 from "/public/Hotel2.jpg";
import img3 from "/public/Hotel3.jpg";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      img: img1,
      quote: "An absolute gem! The flavours are out of this world.",
      name: "Harsh Kumar",
      role: "Food Critic",
    },
    {
      id: 2,
      img: img2,
      quote: "Best dining experience in the city. Impeccable service.",
      name: "Abdul Gani",
      role: "Regular Guest",
    },
    {
      id: 3,
      img: img3,
      quote: "Every dish is a masterpiece. Can’t wait to return!",
      name: "Keshav.",
      role: "Local Guide",
    },
  ];

  return (
    <div>
      {/* ========== TESTIMONIALS SECTION ========== */}
      <section
        id="testimonials"
        className="py-24 lg:py-32 px-6 max-w-7xl mx-auto  "
      >
        <div className="text-center mb-16">
          <span className="text-amber-600 font-semibold tracking-widest text-sm uppercase block mb-3">
            Testimonials
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-stone-900">
            What Our Guests Say
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className=" cursor-pointer bg-white p-10 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 text-center flex flex-col items-center"
            >
              <img
                src={t.img}
                alt=""
                className="h-20 w-20 object-cover rounded-full"
              />
              {/* <svg
                className="w-12 h-12 text-amber-400 mb-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg> */}
              <p className="text-stone-600 italic leading-relaxed mb-6 text-lg">
                "{t.quote}"
              </p>
              <div className="mt-auto">
                <p className="font-serif text-xl font-bold text-stone-800">
                  {t.name}
                </p>
                <p className="text-amber-600 text-sm font-medium tracking-wide">
                  {t.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
