import React, { useState, useEffect } from "react";
import { MapPin, Calendar, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: MapPin,
    title: "Select Location",
    description: "Choose where you want the service.",
  },
  {
    icon: Calendar,
    title: "Book Service",
    description: "Pick a time and date that suits you.",
  },
  {
    icon: CheckCircle,
    title: "Track & Done",
    description: "Track your mechanic and confirm completion.",
  },
];

// Particle colors
const particleColors = [
  "#1E40AF",
  "#60A5FA", // blue
  "#D97706",
  "#FACC15", // yellow
  "#059669",
  "#10B981", // green
  "#BE185D",
  "#F472B6", // pink
];

// Electric streak colors
const electricColors = ["#3B82F6", "#F59E0B", "#10B981", "#EC4899"];

const HowItWorksSection = () => {
  // Floating particles
  const [particles, setParticles] = useState([]);
  useEffect(() => {
    const arr = [...Array(50)].map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 2,
      color: particleColors[Math.floor(Math.random() * particleColors.length)],
      speedX: Math.random() * 0.3 + 0.05,
      speedY: Math.random() * 0.3 + 0.05,
      opacity: Math.random() * 0.5 + 0.3,
      blur: Math.random() * 6 + 2,
      glow: Math.random() * 12 + 6,
      duration: Math.random() * 5 + 4,
    }));
    setParticles(arr);
  }, []);

  // Jharbati / falling sparkles
  const [jharbati, setJharbati] = useState([]);
  useEffect(() => {
    const arr = [...Array(25)].map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
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
    const arr = [...Array(10)].map(() => ({
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
      className="relative py-16 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #ffffff 0%, #f3f4f6 50%, #e5e7eb 100%)",
      }}
    >
      {/* Floating particles */}
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

      {/* Electric streaks */}
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

      {/* === Rest of HowItWorks content === */}
      <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
        <h1
          className="text-3xl md:text-4xl font-extrabold mb-10 
               bg-gradient-to-r from-orange-400 via-gray-400 to-gray-800 
               bg-clip-text text-transparent"
        >
          How It Works
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition"
            >
              <div className="bg-orange-100 p-4 rounded-full mb-4">
                <step.icon className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
