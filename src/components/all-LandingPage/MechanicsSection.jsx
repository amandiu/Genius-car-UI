import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const mechanics = [
  { name: "John Doe", rating: 4.8, img: "/public/professional-mechanic-working-on-car-engine-in-mod.jpg" },
  { name: "Jane Smith", rating: 4.7, img: "/public/mechanics/1_JktzC9GrA_l4yz0cCy8a5Q.jpg" },
  { name: "Alex Rahman", rating: 4.9, img: "/public/mechanics/images (1).jpg" },
  { name: "Sara Khan", rating: 4.6, img: "/public/mechanics/images (2).jpg" },
  { name: "Michael Lee", rating: 4.8, img: "/public/mechanics/download (3).jpg" },
  { name: "Emma Watson", rating: 4.7, img: "/public/mechanics/1_JktzC9GrA_l4yz0cCy8a5Q.jpg" },
];


const MechanicsSection = () => {
  const sliderVariants = {
    animate: {
      x: ["0%", "-50%"],
      transition: { x: { repeat: Infinity, duration: 25, ease: "linear" } },
    },
  };

  return (
    <section className="py-20 px-10 bg-gray-100">
      {/* Header */}
      <div className="text-center mb-10 px-6 2xl:px-0">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Featured Mechanics
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Certified professionals with years of hands-on experience.
        </p>
      </div>

      {/* Horizontal Slider */}
      <div className="relative overflow-hidden px-[10px]">
        <motion.div
          className="flex gap-6 w-max"
          variants={sliderVariants}
          animate="animate"
        >
          {[...mechanics, ...mechanics].map((m, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8 }}
              className="min-w-[240px] bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden rounded-t-2xl">
                <img
                  src={m.img}
                  alt={m.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5 text-center">
                <h3 className="font-semibold text-lg mb-1">{m.name}</h3>
                <div className="flex items-center justify-center gap-1 text-orange-500 mb-2">
                  <FontAwesomeIcon icon={faStar} />
                  <span className="font-medium text-gray-700">{m.rating}</span>
                </div>
                <p className="text-sm text-gray-500">
                  Expert mechanic with verified skills and experience.
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Progress Bar */}
        <div className="py-5">
          <div className="absolute  bottom-2 left-0 w-full h-1 bg-gray-300 rounded-full overflow-hidden">
            <motion.div
              className="h-full  bg-orange-500 rounded-full"
              animate={{ x: ["0%", "100%"] }}
              transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MechanicsSection;
