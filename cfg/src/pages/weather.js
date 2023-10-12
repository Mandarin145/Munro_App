import React, { useEffect, useState} from 'react';
import Navbar from '../Components/navbar/index';
import MiniNav from '../Components/mininav/mininav';
import styles from './weather_page_styling.css';
import weather from './weather.png';


const Weather = () => {
  const [temperature, setTemperature] = useState('');
  const [condition, setCondition] = useState('');
  const [location, setLocation] = useState('');

  const getWeatherData = (location) => {
    const apiKey = '6a3c612e55bb1ebafed67bdfd24e163c';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const weatherData = {
          temperature: data.main.temp,
          condition: data.weather[0].main,
          location: data.name,
        };
        updateUI(weatherData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const updateUI = (weatherData) => {
    setTemperature(`${weatherData.temperature}°C`);
    setCondition(weatherData.condition);
    setLocation(weatherData.location);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    const locationInput = document.querySelector('#search-bar');
    const location = locationInput.value;
    getWeatherData(location);
  };

  useEffect(() => {
    const searchBtn = document.querySelector('#search-btn');

    searchBtn.addEventListener('click', handleSearch);

    return () => {
      searchBtn.removeEventListener('click', handleSearch);
    };
  });

  return (
    <div>
      <MiniNav />
      
      <h1>Weather</h1>
      
      <div className={styles.weatherContainer}>
        <div className={styles.weatherBox}>
          <h2 id="temperature">{temperature}</h2>
          <p id="condition">{condition}</p>
          <p id="location">{location}</p>
          <img src={weather} alt="weather" classname ='weather-img'></img>
        </div>
        
        <form className={styles.searchForm} onSubmit={handleSearch}>
          <input type="text" placeholder="Enter a location" id="search-bar" />
          <button type="submit" id="search-btn">Search</button>
        </form>
      </div>
      <Navbar />
    </div>
  );
};

export default Weather;
