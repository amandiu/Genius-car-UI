import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ServiceCard = ({ icon, title }) => {
  return (
    <div className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
      <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-orange-100 group-hover:bg-orange-500 transition">
        <FontAwesomeIcon
          icon={icon}
          className="text-2xl text-orange-500 group-hover:text-white transition"
        />
      </div>

      <h3 className="text-lg font-semibold mb-2 group-hover:text-orange-500 transition">
        {title}
      </h3>

      <p className="text-gray-500 text-sm">
        High quality service by certified mechanics.
      </p>
    </div>
  );
};

export default ServiceCard;
