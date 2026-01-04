import { motion } from "framer-motion";
import ServiceCard from "../cards/ServiceCard";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    x: 80, // RIGHT → LEFT
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const ServicesSection = ({ services }) => {
  return (
    <section className="py-20 bg-gray-100 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold mb-12"
      >
        Our Services
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6 2xl:px-0"
      >
        {services.map((service) => (
          <motion.div key={service.title} variants={cardVariants}>
            <ServiceCard icon={service.icon} title={service.title} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ServicesSection;
