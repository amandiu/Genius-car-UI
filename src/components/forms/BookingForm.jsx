import { useState } from "react";
import { FaUser, FaCar, FaMapMarkerAlt, FaCalendarAlt, FaClock } from "react-icons/fa";

const BookingForm = () => {
  const [focused, setFocused] = useState({});
  const [values, setValues] = useState({});

  const handleFocus = (name) => setFocused((f) => ({ ...f, [name]: true }));
  const handleBlur = (name) => setFocused((f) => ({ ...f, [name]: false }));
  const handleChange = (name, val) => setValues((v) => ({ ...v, [name]: val }));

  const inputs = [
    { name: "name", placeholder: "Full Name", type: "text", icon: <FaUser /> },
    { name: "car", placeholder: "Car Model", type: "text", icon: <FaCar /> },
    { name: "date", type: "date", icon: <FaCalendarAlt /> },
    { name: "time", type: "time", icon: <FaClock /> },
    { name: "location", placeholder: "Service Location", type: "text", icon: <FaMapMarkerAlt /> },
  ];

  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-6 border border-orange-400 max-w-md mx-auto">
      <h3 className="text-xl font-bold mb-6 text-center text-white">Booking Details</h3>
      <form className="flex flex-col gap-6">
        {inputs.map((input) => (
          <div key={input.name} className="relative">
            {/* Icon */}
            <div
              className={`absolute left-3 top-1/2 -translate-y-1/2 transition-colors ${
                focused[input.name] ? "text-orange-400" : "text-white"
              }`}
            >
              {input.icon}
            </div>

            {/* Floating Label */}
            <label
              htmlFor={input.name}
              className={`absolute left-10 top-1/2 -translate-y-1/2 text-white transition-all pointer-events-none
                ${focused[input.name] || values[input.name] ? "-top-2 text-xs text-orange-400" : ""}`}
            >
              {input.placeholder}
            </label>

            {/* Input Field */}
            <input
              id={input.name}
              type={input.type}
              value={values[input.name] || ""}
              onFocus={() => handleFocus(input.name)}
              onBlur={() => handleBlur(input.name)}
              onChange={(e) => handleChange(input.name, e.target.value)}
              className="w-full border rounded px-10 py-3 bg-gray-700 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
            />
          </div>
        ))}

        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded shadow transition hover:scale-105"
        >
          Confirm Booking
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
