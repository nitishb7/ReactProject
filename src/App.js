import './App.css';
import React, { useState } from 'react';
import request from 'browser-request';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [cityName, setCityName] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const apiKey = 'eb819c14c08ff9e4cf99ba3381655186';

  const fetchWeatherData = () => {
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

    request({ url: apiUrl, json: true }, (error, response, body) => {
      if (error) {
        console.error('Error fetching data:', error);
      } else if (response.statusCode === 200) {
        setWeatherData(body);
      } else {
        console.error('Unable to fetch data:', response.statusCode);
      }
    });
  };

  const renderWeatherData = () => {
    if (weatherData) {
      const weatherDescription = weatherData.weather[0].description;
      const temperature = weatherData.main.temp;

      return (
        <div>
          Weather in {cityName}: {weatherDescription}, {temperature}°C
        </div>
      );
    }
    return null;
  };

  return (
      <div className="container mt-5">
        <h1 className="text-center mb-4">Weather App</h1>
        <div className="d-flex justify-content-center">
          <input
            type="text"
            className="form-control w-50"
            value={cityName}
            onChange={(e) => setCityName(e.target.value)}
            placeholder="Enter city name"
          />
          <button className="btn btn-primary ms-3" onClick={fetchWeatherData}>
            Get Weather
          </button>
        </div>
        <div className="text-center mt-4">{renderWeatherData()}</div>
      </div>
  );
}

export default App;
