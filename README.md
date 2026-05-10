# WeatherX - Weather Forecast App

A modern, responsive weather application built with React that provides current weather, hourly forecasts, and 7-day forecasts using the Open-Meteo API.

## Features

- 🌍 Search and save favorite locations
- 🌡️ Current weather with detailed statistics
- ⏰ 24-hour forecast
- 📅 7-day forecast
- 🌙 Dark/Light theme toggle
- °C/°F temperature unit toggle
- 💾 Persistent local storage for settings and saved locations
- 📱 Fully responsive design

## Installation

1. Clone or download this project
2. Navigate to the project directory:
   ```bash
   cd weather
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Running the App

Start the development server:
```bash
npm start
```

The app will open at `http://localhost:3000`

## Building for Production

Create an optimized production build:
```bash
npm run build
```

## Technologies Used

- **React** - UI framework
- **React Router** - Client-side routing
- **Axios** - HTTP client
- **Lucide React** - Icons
- **Open-Meteo API** - Free weather data
- **CSS3** - Styling with CSS variables and glass-morphism

## API

This app uses the free [Open-Meteo API](https://open-meteo.com/) for weather data - no API key required!

## File Structure

```
src/
  ├── components/
  │   ├── Layout.js       - Main layout wrapper
  │   └── Navbar.js       - Navigation component
  ├── context/
  │   └── WeatherContext.js - Global state management
  ├── pages/
  │   ├── Home.js         - Current weather & search
  │   ├── Daily.js        - 7-day forecast
  │   ├── Hourly.js       - 24-hour forecast
  │   ├── SavedLocations.js - Saved locations list
  │   └── Settings.js     - Theme & units settings
  ├── utils/
  │   ├── api.js          - API calls
  │   └── weatherCodes.js - Weather code mappings
  ├── App.js              - Main app component
  ├── index.js            - Entry point
  └── WeatherApp.css      - Global styles
```

## License

This project is open source and available under the MIT License.
