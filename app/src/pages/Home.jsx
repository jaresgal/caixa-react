import { useState } from "react";
import { useCharacters } from "../hooks/useCharacters";
import CharacterCard from "../components/CharacterCard";
import SearchBar from "../components/SearchBar";

const Home = () => {
  const [filters, setFilters] = useState({});
  const { characters, loading } = useCharacters(filters);

  return (
    <div>
      <h1>Rick & Morty Characters</h1>

      <SearchBar onSearch={setFilters} />

      {loading && <p>Loading...</p>}

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {characters?.map(character => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
};

export default Home;
