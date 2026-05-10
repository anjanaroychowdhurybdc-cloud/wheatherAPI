import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { WeatherProvider } from './context/WeatherContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import Daily from './pages/Daily';
import Hourly from './pages/Hourly';
import SavedLocations from './pages/SavedLocations';
import Settings from './pages/Settings';
import './WeatherApp.css';

function App() {
  return (
    <Router>
      <WeatherProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/daily" element={<Daily />} />
            <Route path="/hourly" element={<Hourly />} />
            <Route path="/locations" element={<SavedLocations />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </Layout>
      </WeatherProvider>
    </Router>
  );
}

export default App;
