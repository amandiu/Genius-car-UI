import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCheck } from "@fortawesome/free-solid-svg-icons";
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

const ServiceCard = ({
  service,
  variant = "default",
  isLoading = false,
  isSelected = false,
  selectable = true,
  onSelect,
}) => {
  if (isLoading) return <SkeletonCard />;
  if (!service || !service.id) return null;

  const { icon, title, price, description } = service;

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
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 120, damping: 12 }}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        selectable && onSelect?.();
      }}
      className={`
        group relative cursor-pointer overflow-hidden rounded-2xl p-6
        backdrop-blur-md transition-all duration-300
        ${variantStyles[variant]}
        ${isSelected ? "ring-4 ring-white/80 scale-[1.02]" : ""}
      `}
    >
      {/* Selected badge */}
      {isSelected && (
        <div className="absolute top-3 right-3 z-20 bg-white text-orange-600 rounded-full p-2 shadow-lg">
          <FontAwesomeIcon icon={faCheck} />
        </div>
      )}

      {/* Glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-white/20 via-white/40 to-white/20 opacity-40 blur-3xl rounded-2xl" />

      <div className="relative z-10 flex flex-col h-full justify-between">
        {/* Icon */}
        {icon && (
          <div className="flex mb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 shadow-lg">
              <FontAwesomeIcon icon={icon} size="lg" />
            </div>
          </div>
        )}

        {/* Title + Price */}
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="text-black font-semibold">{price}</p>
        </div>

        {/* Description */}
        <p className="text-white/90 text-sm mb-4">
          {description}
        </p>

        {/* Select button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            selectable && onSelect?.();
          }}
          className={`
            w-full inline-flex justify-center items-center gap-2 font-medium
            px-4 py-2 rounded-xl transition-all duration-300
            ${
              isSelected
                ? "bg-green-500 text-white"
                : "bg-white text-black hover:bg-white/90"
            }
          `}
        >
          {isSelected ? "Selected" : "Select Service"}
          <FontAwesomeIcon icon={faArrowRight} />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
