import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const BookingTable = ({ bookings }) => {
  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow p-6">
      <h3 className="text-xl font-bold mb-4">Booking History</h3>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2">Service</th>
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Review</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((b) => (
            <tr key={b.id} className="border-b hover:bg-gray-50">
              <td className="px-4 py-2">{b.service}</td>
              <td className="px-4 py-2">{b.date}</td>
              <td className="px-4 py-2">{b.status}</td>
              <td className="px-4 py-2">
                <button className="bg-green-500 hover:bg-green-600 px-3 py-1 rounded text-white flex items-center gap-1 transition">
                  <FontAwesomeIcon icon={faStar} />
                  Review
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingTable;
