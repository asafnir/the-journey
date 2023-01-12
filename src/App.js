import HomePage from "./pages/HomePage";
import CreatePage from "./pages/Create";
import ArtistsPage from "./pages/Artists";
import ArtistPage from "./pages/Artist";
import JourneysPage from "./pages/Journeys";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/artists" element={<ArtistsPage />} />
        <Route path="/artist" element={<ArtistPage />} />
        <Route path="/journeys" element={<JourneysPage />} />
      </Routes>
    </Router>
  );
}

export default App;
