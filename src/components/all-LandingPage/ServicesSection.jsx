import { motion } from "framer-motion";
import ServiceCard from "../cards/ServiceCard";
import { servicesData } from "../../data/servicesData";

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
    <section className="py-24 bg-gradient-to-b from-gray-50 via-orange-50 to-white">
      <div className="max-w-7xl mx-auto px-6 2xl:px-0">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground text-lg">
            Professional car care services designed to keep your vehicle safe,
            reliable, and road-ready.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="
            grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3
            gap-8
          "
        >
          {servicesData.slice(0, 6).map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              className="
                transition-shadow duration-300
                hover:shadow-2xl
                rounded-2xl
              "
            >

            <ServiceCard key={service.id} service={service} />

            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
