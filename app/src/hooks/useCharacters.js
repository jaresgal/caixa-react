import { useEffect, useState } from "react";
import { getCharacters } from "../api/api";

export const useCharacters = (filters) => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getCharacters()
      .then(res => {
        let data = res.data.results;

        // Filtrado por cada campo si existe
        if (filters) {
          data = data.filter((char) => {
            const nameMatch = char.name.toLowerCase().includes((filters.name || "").toLowerCase());
            const speciesMatch = char.species.toLowerCase().includes((filters.species || "").toLowerCase());
            const locationMatch = char.location.name.toLowerCase().includes((filters.location || "").toLowerCase());
            return nameMatch && speciesMatch && locationMatch;
          });
        }

        setCharacters(data);
      })
      .finally(() => setLoading(false));
  }, [filters]);

  return { characters, loading };
};
