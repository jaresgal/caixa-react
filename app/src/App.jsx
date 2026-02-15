import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CharacterDetail from "./pages/CharacterDetail";
import Favorites from "./pages/Favorites";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <div className="w-full min-h-screen flex flex-col  ">
        {/* Header ahora está dentro del Router */}
        <Header />

        {/* Contenido principal */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/character/:id" element={<CharacterDetail />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
