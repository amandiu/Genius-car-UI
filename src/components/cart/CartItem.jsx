import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faTrash } from "@fortawesome/free-solid-svg-icons";

const CartItem = ({ item }) => {
  return (
    <div className="flex justify-between items-center bg-white rounded-lg shadow p-4 hover:shadow-lg transition">
      <div>
        <h3 className="font-bold">{item.title}</h3>
        <p className="text-gray-600">${item.price}</p>
      </div>
      <div className="flex items-center gap-2">
        <button className="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300 transition">
          <FontAwesomeIcon icon={faMinus} />
        </button>
        <span>{item.quantity}</span>
        <button className="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300 transition">
          <FontAwesomeIcon icon={faPlus} />
        </button>
        <button className="ml-4 text-red-500 hover:text-red-700 transition">
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
