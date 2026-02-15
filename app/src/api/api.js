import axios from "axios";

const api = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
});

export const getCharacters = (params) =>
  api.get("/character", { params });

export const getCharacterById = (id) =>
  api.get(`/character/${id}`);
