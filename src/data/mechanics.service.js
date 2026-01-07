import mechanics from "../data/mechanics.data";

// 🔁 Future backend ready
export const getAllMechanics = async () => {
  // return fetch("/api/mechanics").then(res => res.json());
  return mechanics;
};

export const getMechanicById = async (id) => {
  // return fetch(`/api/mechanics/${id}`).then(res => res.json());
  return mechanics.find(m => m.id === id);
};
