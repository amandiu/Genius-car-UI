import { useEffect, useState } from "react";
import { getAllMechanics } from "./../data/mechanics.service";

const useMechanics = (filters) => {
  const [mechanics, setMechanics] = useState([]);

  useEffect(() => {
    getAllMechanics().then(data => {
      let result = data;

      if (filters.search) {
        result = result.filter(m =>
          m.name.toLowerCase().includes(filters.search.toLowerCase())
        );
      }

      if (filters.skill) {
        result = result.filter(m =>
          m.skills.includes(filters.skill)
        );
      }

      if (filters.rating) {
        result = result.filter(m =>
          m.rating >= Number(filters.rating)
        );
      }

      setMechanics(result);
    });
  }, [filters]);

  return mechanics;
};

export default useMechanics;
