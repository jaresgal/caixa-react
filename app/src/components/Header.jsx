import { Link } from "react-router-dom";
import { useFavorites } from "../hooks/useFavorites";

const Header = () => {
  const { favorites } = useFavorites();

  return (
<header className="bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 sticky top-0 z-50">
  <div className="relative flex items-center justify-center h-16 px-6 max-w-full mx-auto">

    {/* Logo centrado */}
    <Link to="/" className="absolute left-1/2 transform -translate-x-1/2">
      <h1 className="text-2xl font-bold text-cyan-400 hover:text-cyan-300 transition">
        The Rick and Morty
      </h1>
    </Link>

    {/* Botones a la derecha del todo */}
    <div className="absolute right-6 flex items-center gap-4">
      <Link
        to="/favorites"
        className="text-white bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition flex items-center gap-2"
      >
        Favoritos
        <span className="bg-cyan-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
          {favorites.length}
        </span>
      </Link>

      <Link
        to="/"
        className="text-white bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition flex items-center gap-2"
      >
        Inicio
      </Link>
    </div>
  </div>
</header>



  );
};

export default Header;
