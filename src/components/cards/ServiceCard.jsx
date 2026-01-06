import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

// Skeleton Loader
const SkeletonCard = () => (
  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-tr from-orange-400 via-orange-500 to-orange-600 p-6 animate-pulse shadow-lg">
    <div className="flex justify-center mb-4">
      <div className="h-12 w-12 rounded-xl bg-white/30"></div>
    </div>
    <div className="flex justify-between mb-6">
      <div className="h-6 w-24 bg-white/30 rounded"></div>
      <div className="h-6 w-16 bg-white/30 rounded"></div>
    </div>
    <div className="h-10 w-full bg-white/30 rounded"></div>
  </div>
);

const ServiceCard = ({ service, variant = "default", isLoading = false }) => {
  const navigate = useNavigate();

  if (isLoading) return <SkeletonCard />;
  if (!service || !service.id) return null;

  const { id, icon, title, price, description } = service;

  // Variant styles
  const variantStyles = {
    default:
      "bg-gradient-to-tr from-orange-400 via-orange-500 to-orange-600 text-white border border-white/20 shadow-md",
    featured:
      "bg-gradient-to-tr from-orange-400 via-orange-500 to-orange-600 text-white border border-white/20 shadow-2xl shadow-white/30",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.06 }}
      transition={{ type: "spring", stiffness: 120, damping: 10 }}
      onClick={() => navigate(`/services/${id}`)}
      className={`group relative cursor-pointer overflow-hidden rounded-2xl p-6 backdrop-blur-md transition-all duration-300 ${variantStyles[variant]}`}
    >
      {/* Pulsing neon glow */}
      <div
        className="
        absolute -inset-1
        bg-gradient-to-r from-white/20 via-white/50 to-white/20
        opacity-50 blur-3xl
        animate-pulse-slow
        rounded-2xl
      "
      />

      {/* Shimmer hover overlay */}
      <div
        className="
        absolute inset-0
        bg-gradient-to-r from-white/0 via-white/20 to-white/0
        opacity-0 group-hover:opacity-30
        transition-opacity duration-500
        animate-shimmer
      "
      />

      <div className="relative z-10 flex flex-col h-full justify-between">
        {/* Icon row */}
        {icon && (
          <div className="flex mb-4">
            <div
              className="
                flex h-12 w-12 items-center justify-center rounded-xl 
                bg-white/20 text-white
                shadow-lg shadow-orange-300/60
                group-hover:shadow-xl group-hover:shadow-orange-400/80
                transition-shadow duration-300
              "
            >
              <FontAwesomeIcon
                icon={icon}
                size="lg"
                className="drop-shadow-md"
              />
            </div>
          </div>
        )}

        {/* Title + Price row */}
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-bold drop-shadow-lg">{title}</h3>
          <p className="text-black font-semibold drop-shadow-md">{price}</p>
        </div>
        <h4 className="text-white font-medium justify-center item-center mb-3 drop-shadow-md">{description}</h4>

        {/* Button row */}
        <motion.button
          whileHover={{ x: 6, scale: 1.05 }}
          onClick={(e) => {
            e.stopPropagation();
            navigate(`/services/${id}`);
          }}
          className="
            w-full inline-flex justify-center items-center gap-2 font-medium
            bg-white text-black px-4 py-2 rounded-xl
            shadow-lg hover:shadow-2xl
            transition-all duration-300 hover:bg-white/90
          "
        >
          Book Now <FontAwesomeIcon icon={faArrowRight} />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
