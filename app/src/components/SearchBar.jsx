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
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" onChange={handleChange} />
      <input name="species" placeholder="Species" onChange={handleChange} />
      <input name="location" placeholder="Location" onChange={handleChange} />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
