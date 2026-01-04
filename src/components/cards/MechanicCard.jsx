import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const MechanicCard = ({ name, rating, img }) => {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 w-72">
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={img}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
        />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition" />
      </div>

      {/* Content */}
      <div className="p-5 text-center">
        <h3 className="font-semibold text-lg mb-1">{name}</h3>

        <div className="flex items-center justify-center gap-1 text-orange-500 mb-2">
          <FontAwesomeIcon icon={faStar} />
          <span className="font-medium text-gray-700">{rating}</span>
        </div>

        <p className="text-sm text-gray-500">
          Expert mechanic with verified skills and experience.
        </p>
      </div>
    </div>
  );
};

export default MechanicCard;
