import { useState } from "react";
import { useCharacters } from "../hooks/useCharacters";
import CharacterCard from "../components/CharacterCard";
import SearchBar from "../components/SearchBar";

const Home = () => {
  const [filters, setFilters] = useState({});
  const { characters, loading } = useCharacters(filters);

  return (
<div className="w-full min-h-screen px-10 py-10 flex flex-col items-center">
  {/* SearchBar centrado */}
  <div className="w-full max-w-4xl mb-10">
    <SearchBar onSearch={setFilters} />
  </div>

  {/* Grid responsive full width */}
  <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full">
    {characters?.map((character) => (
      <CharacterCard key={character.id} character={character} />
    ))}
  </div>
</div>



  );
};

export default Home;
