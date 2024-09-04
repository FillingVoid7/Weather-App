import React, { useState, useEffect } from 'react';
import WeatherCard from './Components/WeatherCard';



const App = () => {
    // const [city, setCity] = useState('');
    // const [weatherData, setWeatherData] = useState(null);
    // // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);


    // const fetchWeatherDataByCity = async () => {
    //     if (!city) return;
    //     setLoading(true);
    //     setError(null);
    //     try {
    //         const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    //         const data = await response.json();
    //         if (data.cod === 200) {
    //             setWeatherData(data);
    //         } else {
    //             setError(data.message);
    //         }
    //     } catch (error) {
    //         setError('Failed to fetch weather data');
    //     }
    //     setLoading(false);
    // };

    // const handleSearch = () => {
    //     fetchWeatherDataByCity();
    // };

    return (
        <div className='app'>
            {/* <Search city={city} setCity={setCity} handleSearch={handleSearch} /> */}
            <WeatherCard  />
           
        </div>
    );
};

export default App;
