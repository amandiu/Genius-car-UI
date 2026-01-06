import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const MechanicCard = ({ mechanic }) => {
  return (
    <motion.div
      className="
        min-w-[260px] sm:min-w-[280px] 
        bg-white/70 backdrop-blur-md
        rounded-3xl shadow-lg shadow-gray-300
        cursor-pointer overflow-hidden
        flex flex-col
        border border-gray-100
      "
      whileHover={{ scale: 1.12, y: -10 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
    >
      {/* Image */}
      <motion.div
        className="relative h-56 sm:h-64 overflow-hidden rounded-t-3xl"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.5 }}
      >
        <motion.img
          src={mechanic.img}
          alt={mechanic.name}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.12 }}
          transition={{ duration: 0.5 }}
        />
        {/* Glow overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
      </motion.div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow justify-between">
        <div className="text-center">
          <h3 className="font-bold text-lg sm:text-xl mb-2 text-gray-900">{mechanic.name}</h3>
          <div className="flex items-center justify-center gap-1 mb-2">
            <FontAwesomeIcon icon={faStar} className="text-orange-500" />
            <span className="font-medium text-gray-700">{mechanic.rating}</span>
          </div>
          <p className="text-gray-500 text-sm sm:text-base">
            Expert mechanic with verified skills and experience.
          </p>
        </div>

        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(249,115,22,0.4)" }}
          transition={{ duration: 0.2 }}
          className="
            mt-4 py-2 px-5
            bg-gradient-to-r from-orange-500 to-orange-600
            text-white font-semibold rounded-xl
            shadow-md
            hover:shadow-lg
          "
        >
          Book Now
        </motion.button>
      </div>

      {/* Floating ring glow */}
      <div className="
        pointer-events-none absolute inset-0 rounded-3xl
        opacity-0 hover:opacity-100
        transition-opacity duration-500
        ring-1 ring-orange-300/40
      " />
    </motion.div>
  );
};

export default MechanicCard;
