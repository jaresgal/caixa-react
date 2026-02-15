import { useFavorites } from "../hooks/useFavorites";
import CharacterCard from "../components/CharacterCard";

const Favorites = () => {
  const { favorites } = useFavorites();

  return (
    <div>
      <h1>My Favorites</h1>

      {favorites.length === 0 && <p>No favorites yet</p>}

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {favorites.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
