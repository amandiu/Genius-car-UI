import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const mechanics = [
  {
    id: 1,
    name: "John Doe",
    experience: "10 years",
    specialization: "Engine Repair, Oil Change",
    rating: 4.8,
    img: "/mechanics/images (2).jpg",
    reviews: [
      { name: "Ali Rahman", comment: "Excellent service!" },
      { name: "Sara Khan", comment: "Very professional and fast." },
    ],
  },
  {
    id: 2,
    name: "Jane Smith",
    experience: "8 years",
    specialization: "Tire Replacement, Battery Service",
    rating: 4.7,
    img: "/mechanics/images (3).jpg",
    reviews: [{ name: "Rahim Ali", comment: "Great skills and friendly!" }],
  },
  {
    id: 3,
    name: "Alex Rahman",
    experience: "12 years",
    specialization: "Full Car Diagnostics",
    rating: 4.9,
    img: "/mechanics/images (4).jpg",
    reviews: [],
  },
];

const MechanicProfile = () => {
  const [selectedMechanic, setSelectedMechanic] = useState(mechanics[0]);
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="px-6 py-12 font-sans text-gray-800 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Mechanic List */}
        <div className="w-full md:w-1/4 bg-white rounded-lg shadow p-4">
          <h2 className="text-xl font-bold mb-4">Mechanics</h2>
          <ul className="flex flex-col gap-2">
            {mechanics.map((m) => (
              <li
                key={m.id}
                onClick={() => setSelectedMechanic(m)}
                className={`cursor-pointer p-2 rounded hover:bg-orange-100 transition ${
                  selectedMechanic.id === m.id ? "bg-orange-100 font-semibold" : ""
                }`}
              >
                {m.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Selected Mechanic Profile */}
        <div className="flex-1 bg-white rounded-lg shadow p-6">
          <div className="flex flex-col md:flex-row gap-6">
            <img
              src={selectedMechanic.img}
              alt={selectedMechanic.name}
              className="w-48 h-48 rounded-full mx-auto md:mx-0 object-cover shadow-lg"
            />
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-2">{selectedMechanic.name}</h2>
              <p className="text-gray-600 mb-2">
                Experience: {selectedMechanic.experience}
              </p>
              <p className="text-gray-600 mb-4">
                Specialization: {selectedMechanic.specialization}
              </p>
              <div className="flex items-center gap-2 mb-4">
                <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
                <span className="font-semibold">{selectedMechanic.rating}</span>
              </div>
              <button
                onClick={() => setOpenModal(true)}
                className="bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded text-white font-semibold transition shadow hover:shadow-lg"
              >
                Book This Mechanic
              </button>
            </div>
          </div>

          {/* Reviews */}
          <div className="mt-8">
            <h3 className="text-2xl font-bold mb-4">Reviews</h3>
            {selectedMechanic.reviews.length > 0 ? (
              <div className="flex flex-col gap-4">
                {selectedMechanic.reviews.map((r, idx) => (
                  <div
                    key={idx}
                    className="bg-gray-100 p-4 rounded shadow hover:shadow-md transition"
                  >
                    <p className="mb-2">"{r.comment}"</p>
                    <span className="font-semibold">{r.name}</span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">No reviews yet.</p>
            )}
          </div>
        </div>
      </div>

      {/* Modal */}
      {openModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md relative"
          >
            <h2 className="text-xl font-bold mb-4">
              Booking: {selectedMechanic.name}
            </h2>
            <form className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <button
                type="submit"
                className="bg-orange-500 text-white px-4 py-2 rounded font-semibold hover:bg-orange-600 transition"
              >
                Submit
              </button>
            </form>
            <button
              onClick={() => setOpenModal(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 font-bold"
            >
              ✕
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default MechanicProfile;
