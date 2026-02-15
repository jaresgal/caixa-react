import { Link } from "react-router-dom";
import { useFavorites } from "../hooks/useFavorites";

const CharacterCard = ({ character }) => {
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();
  const favorite = isFavorite(character.id);

  const toggleFavorite = () => {
    favorite
      ? removeFavorite(character.id)
      : addFavorite(character);
  };

  return (
  <div className="bg-gray-800 rounded-2xl shadow-lg w-full flex flex-col overflow-hidden">
  <img src={character.image} className="w-full h-64 object-cover" />
  <div className="p-4 flex-1 flex flex-col justify-between">
    <h3 className="text-lg font-bold text-white">{character.name}</h3>
    <p className="text-sm text-gray-400">Planeta: {character.origin.name}</p>
    <div className="mt-4 flex justify-between items-center">
      <button 
        onClick={toggleFavorite}
      className="e bg-red-500 px-3 py-1 rounded-lg">
        {favorite ? "❤️ Eliminar de favoritos" : "🤍 Añadir a favoritos"}
      </button>
      <Link className="text-cyan-400 hover:underline" to={`/character/${character.id}`}>
        Ver más
      </Link>
    </div>
  </div>
</div>
  );
};

export default CharacterCard;
