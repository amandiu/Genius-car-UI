import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import MechanicCard from "../cards/MechanicCard";

const mechanics = [
  { name: "John Doe", rating: 4.8, img: "/public/professional-mechanic-working-on-car-engine-in-mod.jpg" },
  { name: "Jane Smith", rating: 4.7, img: "/public/mechanics/1_JktzC9GrA_l4yz0cCy8a5Q.jpg" },
  { name: "Alex Rahman", rating: 4.9, img: "/public/mechanics/images (1).jpg" },
  { name: "Sara Khan", rating: 4.6, img: "/public/mechanics/images (2).jpg" },
  { name: "Michael Lee", rating: 4.8, img: "/public/mechanics/download (3).jpg" },
  { name: "Emma Watson", rating: 4.7, img: "/public/mechanics/1_JktzC9GrA_l4yz0cCy8a5Q.jpg" },
];

const MechanicsSection = () => {
  const controls = useAnimation();
  const sliderRef = useRef(null);

  useEffect(() => {
    startMarquee();
  }, []);

  const startMarquee = () => {
    controls.start({
      x: ["0%", "-50%"],
      transition: {
        duration: 28,
        ease: "linear",
        repeat: Infinity,
      },
    });
  };

  const pauseMarquee = () => {
    controls.stop();
  };

  return (
    <section className="py-20 bg-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 2xl:px-0">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Featured Mechanics</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Certified professionals with years of hands-on experience.
          </p>
        </div>

        {/* Marquee */}
        <div
          className="relativen py-7 overflow-hidden"
          onMouseEnter={pauseMarquee}
          onMouseLeave={startMarquee}
        >
          <motion.div
            ref={sliderRef}
            className="flex gap-6 w-max will-change-transform"
            animate={controls}
          >
            {[...mechanics, ...mechanics].map((m, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <MechanicCard mechanic={m} />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Progress Bar */}
        <div className="relative mt-2 h-1 w-full bg-gray-300 rounded-full overflow-hidden">
          <motion.div
            className="absolute left-0 top-0 h-full w-1/3 bg-orange-500 rounded-full"
            animate={{ x: ["0%", "200%"] }}
            transition={{
              duration: 28,
              ease: "linear",
              repeat: Infinity,
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default MechanicsSection;
