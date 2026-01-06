import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import TestimonialCard from "../cards/TestimonialCard";

const testimonials = [
  { name: "Ali Rahman", text: "Excellent service! Highly recommend.", avatar: "/public/mechanics/download (3).jpg" },
  { name: "Sara Khan", text: "Very professional and fast.", avatar: "/public/mechanics/1_JktzC9GrA_l4yz0cCy8a5Q.jpg" },
  { name: "John Doe", text: "Reliable and friendly staff.", avatar: "/public/mechanics/images (2).jpg" },
];

const TestimonialsSection = () => {
  const controls = useAnimation();
  const sliderRef = useRef(null);

  useEffect(() => {
    startMarquee();
  }, []);

  const startMarquee = () => {
    controls.start({
      x: ["0%", "-50%"],
      transition: {
        duration: 60,
        ease: "linear",
        repeat: Infinity,
      },
    });
  };

  const pauseMarquee = () => controls.stop();

  return (
    <section className="py-20  bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 2xl:px-0">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">What Our Customers Say</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Feedback from some of our happy clients.
          </p>
        </div>

        {/* Fade edges */}
        <div className="absolute top-0 bottom-0 left-0 w-16 pointer-events-none bg-gradient-to-r from-gray-50/100 to-gray-50/0 z-20" />
        <div className="absolute top-0 bottom-0 right-0 w-16 pointer-events-none bg-gradient-to-l from-gray-50/100 to-gray-50/0 z-20" />

        {/* Marquee Slider */}
        <div
          className="relative overflow-hidden"
          onMouseEnter={pauseMarquee}
          onMouseLeave={startMarquee}
        >
          <motion.div
            ref={sliderRef}
            className="flex gap-6 w-max will-change-transform"
            animate={controls}
          >
            {[...testimonials, ...testimonials].map((t, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-72 py-5" // same fixed width for all cards
              >
                <TestimonialCard testimonial={t} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
