import React from "react";
import {
  Wrench,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";

/* ------------------ Floating Particles ------------------ */
const particleColors = [
  "bg-green-400/60",
  "bg-blue-400/60",
  "bg-yellow-300/70",
];

const Particles = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {[...Array(80)].map((_, i) => {
        const color =
          particleColors[Math.floor(Math.random() * particleColors.length)];

        return (
          <span
            key={i}
            className={`absolute rounded-full ${color}`}
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${
                Math.random() * 10 + 6
              }s linear infinite`,
            }}
          />
        );
      })}
    </div>
  );
};

/* ------------------ Footer Links ------------------ */
const footerLinks = {
  services: [
    { label: "Oil Change", href: "#" },
    { label: "Brake Service", href: "#" },
    { label: "Engine Repair", href: "#" },
    { label: "Tire Service", href: "#" },
  ],
  company: [
    { label: "About Us", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Press", href: "#" },
    { label: "Blog", href: "#" },
  ],
  support: [
    { label: "Help Center", href: "#" },
    { label: "Contact Us", href: "#" },
    { label: "FAQs", href: "#" },
    { label: "Privacy Policy", href: "#" },
  ],
};

/* ------------------ Footer ------------------ */
export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* White • Black • Orange Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-black to-orange-500 animate-gradient" />
      <div className="absolute inset-0 bg-black/30" />

      {/* Particles */}
      <Particles />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 py-16 text-white">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="/" className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/20 backdrop-blur shadow-lg">
                <Wrench className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold">Genius Car</span>
            </a>

            <p className="mt-4 max-w-xs text-sm text-white/80">
              Your trusted partner for car service and maintenance.
              Professional care, transparent pricing, real-time tracking.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex gap-4">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="group flex h-11 w-11 items-center justify-center rounded-full
                             bg-white/20 backdrop-blur shadow-lg
                             transition-all duration-300
                             hover:-translate-y-1 hover:scale-110
                             hover:bg-orange-500"
                >
                  <Icon className="h-5 w-5 text-white transition" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 font-semibold tracking-wide">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/80 hover:text-orange-400 transition"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4 font-semibold tracking-wide">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/80 hover:text-orange-400 transition"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="mb-4 font-semibold tracking-wide">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/80 hover:text-orange-400 transition"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 border-t border-white/20 pt-6 text-center text-sm text-white/70">
          © {new Date().getFullYear()} Genius Car. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
