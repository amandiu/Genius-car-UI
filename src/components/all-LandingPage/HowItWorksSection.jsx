import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarCheck,
  faTools,
  faRoute,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

const steps = [
  { title: "Book Service", icon: faCalendarCheck },
  { title: "Pick Location", icon: faRoute },
  { title: "Car Inspection", icon: faTools },
  { title: "Live Tracking", icon: faRoute },
  { title: "Repair Work", icon: faTools },
  { title: "Quality Check", icon: faStar },
  { title: "Payment", icon: faCalendarCheck },
  { title: "Delivery", icon: faRoute },
  { title: "Review Service", icon: faStar },
  { title: "Support", icon: faTools },
];

const HowItWorksSection = () => {
  return (
    <section className="py-20 px-10 bg-white">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 px-[10px]">
        How It Works
      </h2>

      {/* SAFE AREA (10px gap guaranteed) */}
      <div className="overflow-hidden px-[10px]">
        <motion.div
          className="flex gap-6"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 25,
            ease: "linear",
          }}
        >
          {[...steps, ...steps].map((step, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}   // ⬅️ ONLY Y-axis (safe)
              transition={{ type: "spring", stiffness: 200 }}
              className="min-w-[240px] bg-gray-50 rounded-2xl p-6 shadow-md hover:shadow-xl"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-orange-100 mb-4 mx-auto">
                <FontAwesomeIcon
                  icon={step.icon}
                  className="text-orange-500 text-xl"
                />
              </div>

              <h3 className="font-semibold text-lg text-center mb-2">
                {step.title}
              </h3>

              <p className="text-gray-500 text-sm text-center">
                Simple & fast process handled by professionals.
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
