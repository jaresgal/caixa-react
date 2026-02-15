import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCharacterById } from "../api/api";

const CharacterDetail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    getCharacterById(id)
      .then(res => setCharacter(res.data));
  }, [id]);

  if (!character) return <p>Loading...</p>;

  return (
  <div className="min-h-screen flex justify-center items-start px-6 py-12 ">
  <div className="bg-gray-800 rounded-2xl shadow-2xl max-w-md w-full overflow-hidden">
    
    {/* Imagen */}
    <img
      src={character.image}
      alt={character.name}
      className="w-full h-80 object-cover"
    />

    {/* Contenido */}
    <div className="p-6 flex flex-col gap-3">
      <h2 className="text-3xl font-bold text-cyan-400 text-center">
        {character.name}
      </h2>

      <p className="text-gray-300"><span className="font-semibold text-white">Estado:</span> {character.status}</p>
      <p className="text-gray-300"><span className="font-semibold text-white">Especie:</span> {character.species}</p>
      <p className="text-gray-300"><span className="font-semibold text-white">Tipo:</span> {character.type || "Unknown"}</p>
      <p className="text-gray-300"><span className="font-semibold text-white">Género:</span> {character.gender}</p>
      <p className="text-gray-300"><span className="font-semibold text-white">Planeta:</span> {character.location.name}</p>
    </div>
  </div>
</div>

  );
};

export default CharacterDetail;
