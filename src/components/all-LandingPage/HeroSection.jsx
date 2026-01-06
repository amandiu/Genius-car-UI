// src/components/all-LandingPage/HeroSection.jsx
import React, { useRef, useState, useEffect } from "react";
import { Car, Wrench, ShieldCheck, Star } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

// Particle colors: blue, yellow, green, pink (medium → deep)
const particleColors = [
  "#1E40AF", "#60A5FA", // blue
  "#D97706", "#FACC15", // yellow
  "#059669", "#10B981", // green
  "#BE185D", "#F472B6", // pink
];

// Electric streak colors
const electricColors = ["#3B82F6", "#F59E0B", "#10B981", "#EC4899"];

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const yOffset = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const scaleOffset = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  const rotateOffset = useTransform(scrollYProgress, [0, 1], [0, 5]);

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  // Floating particles
  const [particles, setParticles] = useState([]);
  useEffect(() => {
    const arr = [...Array(80)].map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      color: particleColors[Math.floor(Math.random() * particleColors.length)],
      speedX: Math.random() * 0.3 + 0.05,
      speedY: Math.random() * 0.3 + 0.05,
      opacity: Math.random() * 0.5 + 0.3,
      blur: Math.random() * 8 + 2,
      glow: Math.random() * 16 + 6,
      duration: Math.random() * 5 + 4,
    }));
    setParticles(arr);
  }, []);

  // Jharbati / falling sparkles
  const [jharbati, setJharbati] = useState([]);
  useEffect(() => {
    const arr = [...Array(40)].map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1.5,
      color: particleColors[Math.floor(Math.random() * particleColors.length)],
      speedY: Math.random() * 0.3 + 0.1,
      opacity: Math.random() * 0.6 + 0.3,
      blur: Math.random() * 6 + 1,
      glow: Math.random() * 12 + 4,
      duration: Math.random() * 6 + 4,
    }));
    setJharbati(arr);
  }, []);

  // Electric vector lines
  const [electricLines, setElectricLines] = useState([]);
  useEffect(() => {
    const arr = [...Array(15)].map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      length: Math.random() * 80 + 40,
      color: electricColors[Math.floor(Math.random() * electricColors.length)],
      opacity: Math.random() * 0.5 + 0.3,
      duration: Math.random() * 4 + 2,
    }));
    setElectricLines(arr);
  }, []);

  return (
    <section
      ref={ref}
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden min-h-screen w-full"
      style={{
        background: `linear-gradient(135deg, #ffffff 0%, #f3f4f6 50%, #e5e7eb 100%)`,
      }}
    >
      {/* Floating Particles */}
      {particles.map((p, i) => (
        <motion.div
          key={`fp-${i}`}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            top: `${p.y}%`,
            left: `${p.x}%`,
            opacity: p.opacity,
            filter: `blur(${p.blur}px)`,
            boxShadow: `0 0 ${p.glow}px ${p.color}`,
          }}
          animate={{
            x: [-p.speedX * 20, p.speedX * 20, -p.speedX * 20],
            y: [-p.speedY * 20, p.speedY * 20, -p.speedY * 20],
            opacity: [p.opacity, p.opacity + Math.random() * 0.3, p.opacity],
          }}
          transition={{
            repeat: Infinity,
            duration: p.duration,
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Jharbati / falling sparkles */}
      {jharbati.map((p, i) => (
        <motion.div
          key={`jh-${i}`}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            top: `${p.y}%`,
            left: `${p.x}%`,
            opacity: p.opacity,
            filter: `blur(${p.blur}px)`,
            boxShadow: `0 0 ${p.glow}px ${p.color}`,
          }}
          animate={{
            y: ["-10%", "110%"],
            opacity: [p.opacity, 0.1, p.opacity],
          }}
          transition={{
            repeat: Infinity,
            duration: p.duration,
            ease: "linear",
            delay: Math.random() * 3,
          }}
        />
      ))}

      {/* Electric vector light streaks */}
      {electricLines.map((line, i) => (
        <motion.div
          key={`el-${i}`}
          className="absolute pointer-events-none"
          style={{
            top: `${line.y}%`,
            left: `${line.x}%`,
            width: `${line.length}px`,
            height: "2px",
            background: line.color,
            opacity: line.opacity,
            filter: `blur(2px)`,
            transformOrigin: "left center",
            borderRadius: "2px",
          }}
          animate={{
            rotate: [-20, 20, -20],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [line.opacity, 0.1, line.opacity],
          }}
          transition={{
            repeat: Infinity,
            duration: line.duration,
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* === Rest of Hero content stays unchanged === */}
      <div className="relative max-w-7xl mx-auto px-6 py-24 sm:py-32 flex flex-col md:flex-row items-center gap-16">
        {/* LEFT CONTENT */}
        <motion.div
          style={{ y: yOffset }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            Smart{" "}
            <span className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
              Car Service
            </span>{" "}
            Made Simple
          </h1>

          <p className="text-gray-800 text-sm sm:text-base md:text-lg mb-10 max-w-xl">
            Book services, order genuine parts, and track mechanics in real-time — all in one premium automotive platform.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4 flex-wrap mb-12">
            <motion.a
              href="https://v0-genius-car-frontend-ui-2.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255,140,0,0.7)" }}
              transition={{ type: "spring", stiffness: 300 }}
              className="px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold shadow-2xl inline-block"
            >
              Book a Service
            </motion.a>

            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255,255,255,0.5)" }}
              transition={{ type: "spring", stiffness: 300 }}
              className="px-6 sm:px-8 py-3 sm:py-4 rounded-xl border border-gray-200 hover:bg-gray-50 transition-all"
            >
              Explore Platform
            </motion.button>
          </div>

          {/* Trust Badges */}
          <div className="flex gap-6 flex-wrap text-sm sm:text-base text-gray-700">
            <div>
              <p className="text-2xl sm:text-3xl font-bold">15k+</p>
              <p>Customers</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-bold">1k+</p>
              <p>Verified Mechanics</p>
            </div>
            <div className="flex items-center gap-1">
              <Star className="w-5 sm:w-6 h-5 sm:h-6 text-orange-400" />
              <p className="text-2xl sm:text-3xl font-bold">4.9</p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT VISUAL */}
        <motion.div
          style={{ y: yOffset, scale: scaleOffset, rotateZ: rotateOffset }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex justify-center relative"
        >
          <motion.div
            className="relative w-72 sm:w-96 md:w-[420px] h-72 sm:h-96 md:h-[440px] rounded-3xl bg-white/10 backdrop-blur-xl border border-gray-200 shadow-2xl flex items-center justify-center perspective-[1200px]"
            whileHover={{ rotateY: 8, rotateX: -4, scale: 1.04 }}
            transition={{ type: "spring", stiffness: 80, damping: 12 }}
          >
            {/* Floating Car */}
            <motion.div animate={{ y: [0, -12, 0] }} transition={{ repeat: Infinity, duration: 3 }}>
              <Car className="w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32 text-orange-400 drop-shadow-lg" />
            </motion.div>

            {/* Floating Icons */}
            <motion.div
              animate={{ y: [0, -8, 0], rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2.5 }}
              className="absolute -top-6 -left-6 bg-white/20 backdrop-blur-md p-3 sm:p-4 rounded-xl border border-gray-200 shadow-md"
            >
              <Wrench className="text-orange-400 w-5 sm:w-6 h-5 sm:h-6" />
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0], rotate: [0, -10, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2.5 }}
              className="absolute -bottom-6 -right-6 bg-white/20 backdrop-blur-md p-3 sm:p-4 rounded-xl border border-gray-200 shadow-md"
            >
              <ShieldCheck className="text-orange-400 w-5 sm:w-6 h-5 sm:h-6" />
            </motion.div>

            {/* Neon glow ring */}
            <div className="absolute inset-0 rounded-3xl ring-2 ring-orange-400/40 pointer-events-none animate-pulse" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
