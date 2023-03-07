import { useState, useEffect } from 'react'
import { PrivateRoute } from './components/PrivateRoute'
import { supabase } from './lib/supabaseClient'
import { AuthProvider } from './contexts/Auth'
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/Create";
import ArtistsPage from "./pages/Artists";
import ArtistJoinPage from "./pages/ArtistJoin";
import ArtistPage from "./pages/Artist";
import JourneysPage from "./pages/Journeys";
import MyJourneys from "./pages/MyJourneys"
import AuthPage from "./pages/Auth"
import AccountPage from "./pages/Account"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/create"
            element={
            
                <CreatePage />
            
            }
          />
          <Route
            path="/account"
            element={
              <PrivateRoute>
                <AccountPage />
              </PrivateRoute>
            }
          />
           <Route
            path="/my-journeys"
            element={
              <PrivateRoute>
                <MyJourneys />
              </PrivateRoute>
            }
          />
          <Route path="/artists" element={<ArtistsPage />} />
          <Route path="/join" element={<ArtistJoinPage />} />
          <Route path="/artist" element={<ArtistPage />} />
          <Route path="/journeys" element={<JourneysPage />} />
          <Route path="/auth" element={<AuthPage />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
