import React from "react";
import { motion } from "framer-motion";

const TestimonialCard = ({ testimonial }) => {
  return (
    <motion.div
      whileHover={{ y: -12, scale: 1.08, rotateX: 2 }}
      transition={{ type: "spring", stiffness: 330, damping: 20 }}
      className="
        relative
        w-full min-h-[280px] sm:min-h-[300px] md:min-h-[320px] lg:min-h-[340px] xl:min-h-[360px]
        bg-gradient-to-br from-white/80 via-white/70 to-white/60
        backdrop-blur-3xl
        rounded-3xl
        shadow-2xl shadow-gray-300/40
        border border-gray-100/20
        p-6 sm:p-8
        flex flex-col items-center text-center
        cursor-pointer
        overflow-hidden
      "
    >
      {/* Floating Avatar */}
      <motion.div
        className="relative w-20 h-20 sm:w-24 sm:h-24 mb-4"
        animate={{ y: [0, -6, 0], rotate: [0, 2, -2, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-full h-full rounded-full object-cover border-2 border-orange-500 shadow-lg"
        />
        <div className="absolute inset-0 rounded-full ring-2 ring-orange-400/50 pointer-events-none animate-pulse" />
      </motion.div>

      {/* Testimonial Text */}
      <p className="text-gray-800 text-xs sm:text-sm md:text-base lg:text-lg mb-4 relative z-10 px-2 sm:px-4 before:absolute before:-inset-1 before:rounded-xl before:bg-gradient-to-r before:from-orange-100/30 before:to-orange-200/30 before:-z-10">
        {testimonial.text}
      </p>

      {/* Name */}
      <h4 className="font-bold text-gray-900 text-sm sm:text-base md:text-lg lg:text-xl tracking-wide">
        {testimonial.name}
      </h4>

      {/* Decorative Sparkles */}
      <div className="absolute top-2 left-2 w-2 h-2 bg-orange-300 rounded-full animate-ping opacity-70" />
      <div className="absolute bottom-3 right-3 w-2 h-2 bg-yellow-300 rounded-full animate-ping opacity-70 delay-200" />
      <div className="absolute top-6 right-8 w-1.5 h-1.5 bg-white rounded-full animate-pulse opacity-60" />

      {/* Floating Background Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-white rounded-full opacity-20"
            animate={{ x: [0, 10, -10, 0], y: [0, 10, -10, 0] }}
            transition={{ duration: 6 + i, repeat: Infinity, ease: "easeInOut" }}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
