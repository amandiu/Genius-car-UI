// src/components/all-LandingPage/FeaturesSection.jsx
import { motion } from "framer-motion";
import {
  Smartphone,
  MapPin,
  CreditCard,
  Bell,
  Shield,
  Clock,
} from "lucide-react";

const features = [
  {
    icon: Smartphone,
    title: "Easy Mobile Booking",
    description:
      "Book services anytime, anywhere with our intuitive mobile-friendly platform.",
  },
  {
    icon: MapPin,
    title: "Real-Time Tracking",
    description:
      "Track your mechanic's arrival and service progress in real-time.",
  },
  {
    icon: CreditCard,
    title: "Secure Payments",
    description:
      "Multiple payment options with encrypted, secure transactions.",
  },
  {
    icon: Bell,
    title: "Smart Reminders",
    description:
      "Get automated reminders for scheduled maintenance and service due dates.",
  },
  {
    icon: Shield,
    title: "Quality Guarantee",
    description:
      "All services backed by our satisfaction guarantee and warranty coverage.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description:
      "Round-the-clock customer support for emergencies and inquiries.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white via-orange-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
            App Features
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground text-lg">
            Designed with you in mind. Our platform makes car maintenance
            effortless and transparent.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.12,
                  duration: 0.6,
                  ease: "easeOut",
                }}
                whileHover={{ scale: 1.04 }}
                className="
                  group relative rounded-2xl
                  bg-white/70 backdrop-blur-md
                  border border-orange-100
                  p-6 shadow-md
                  transition-all duration-300
                  hover:shadow-2xl
                "
              >
                {/* Icon */}
                <div
                  className="
                    mb-4 flex h-14 w-14 items-center justify-center rounded-xl
                    bg-gradient-to-br from-orange-400 to-orange-600
                    text-white shadow-md
                    transition-transform duration-300
                    group-hover:scale-110
                  "
                >
                  <Icon className="h-7 w-7" />
                </div>

                {/* Content */}
                <h3 className="mb-2 text-lg font-semibold text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
