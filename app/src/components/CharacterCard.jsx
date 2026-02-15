import { Link } from "react-router-dom";
import { useFavorites } from "../hooks/useFavorites";

const CharacterCard = ({ character }) => {
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  const favorite = isFavorite(character.id);

  const toggleFavorite = () => {
    if (favorite) {
      removeFavorite(character.id);
    } else {
      addFavorite(character);
    }
  };

  return (
    <div style={{ border: "1px solid gray", margin: 10, padding: 10 }}>
      <img src={character.image} width="150" />
      <h3>{character.name}</h3>
      <p>Planet: {character.origin.name}</p>

      <button onClick={toggleFavorite}>
        {favorite ? "❤️ Remove" : "🤍 Add"}
      </button>

      <br />
      <Link to={`/character/${character.id}`}>
        View Detail
      </Link>
    </div>
  );
};

export default CharacterCard;
