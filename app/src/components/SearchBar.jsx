import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [form, setForm] = useState({
    name: "",
    species: "",
    location: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(form);
  };

  return (
    <form
  onSubmit={handleSubmit}
  className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-3xl mx-auto"
>
  <input
    name="name"
    placeholder="Nombre"
    onChange={handleChange}
    className="flex-1 px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
  />
  
  <input
    name="species"
    placeholder="Especie"
    onChange={handleChange}
    className="flex-1 px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
  />
  
  <input
    name="location"
    placeholder="Planeta"
    onChange={handleChange}
    className="flex-1 px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
  />
  
  <button
    type="submit"
    className="flex-1 px-4 py-2 rounded-lg  bg-white text-gray-800 "
  >
    Search
  </button>
</form>

  );
};

export default SearchBar;
