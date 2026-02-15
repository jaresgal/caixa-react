import { useEffect, useState } from "react";
import { getCharacters } from "../api/api";

export const useCharacters = (filters) => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getCharacters(filters)
      .then(res => setCharacters(res.data.results))
      .finally(() => setLoading(false));
  }, [filters]);

  return { characters, loading };
};
