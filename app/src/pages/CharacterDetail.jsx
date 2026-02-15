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
    <div>
      <img src={character.image} />
      <h2>{character.name}</h2>
      <p>Status: {character.status}</p>
      <p>Species: {character.species}</p>
      <p>Type: {character.type || "Unknown"}</p>
      <p>Gender: {character.gender}</p>
      <p>Location: {character.location.name}</p>
    </div>
  );
};

export default CharacterDetail;
