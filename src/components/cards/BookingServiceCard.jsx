import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCarSide } from "@fortawesome/free-solid-svg-icons";

const BookingServiceCard = ({ title, price }) => {
  return (
    <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition flex flex-col items-center">
      <FontAwesomeIcon icon={faCarSide} size="3x" className="text-orange-500 mb-4" />
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">${price}</p>
      <button className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded text-white font-semibold transition">
        Select Service
      </button>
    </div>
  );
};

export default BookingServiceCard;
