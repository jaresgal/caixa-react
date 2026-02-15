import { useFavorites } from "../hooks/useFavorites";
import CharacterCard from "../components/CharacterCard";

const Favorites = () => {
  const { favorites } = useFavorites();

  return (
  <div className="w-full min-h-screen px-6 py-10 flex flex-col items-center">
  {/* Título */}
  <div className="w-full max-w-4xl mb-10">
    <h1 className="text-4xl font-extrabold text-cyan-500 text-center mb-6">
      FAVORITOS
    </h1>
  </div>

  {/* Mensaje cuando no hay favoritos */}
  {favorites.length === 0 && (
    <p className="text-gray-500 text-lg text-center mb-8">
      No hay favoritos aún. Agrega algunos ❤️
    </p>
  )}

  {/* Grid de favoritos */}
  {favorites.length > 0 && (
    <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full">
    {favorites?.map((character) => (
      <CharacterCard key={character.id} character={character} />
    ))}
  </div>
  )}
</div>

  );
};

export default Favorites;
