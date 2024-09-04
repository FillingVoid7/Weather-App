import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import './weather.css';
import search from '../assets/search.png';
import humidity from '../assets/humidity.png';
import wind from '../assets/wind.png';
import clear from '../assets/clear.png';
import snow from '../assets/snow.png';
import rain from '../assets/rain.jpeg';
import cloud from '../assets/cloud.jpeg';
import drizzle from '../assets/drizzle.png';

const WeatherCard = () => {
    
    const [weatherData , setWeatherData] = useState(false);
    const inputRef = useRef()
        const allIcons = {
            '01d': clear,
            '01n': clear,
            '02d': cloud,
            '02n': cloud,
            '03d': cloud,
            '03n': cloud,
            '04d': cloud,
            '04n': cloud,
            '09d': drizzle,
            '09n': drizzle,
            '10d': rain,
            '10n': rain,
            '11d': rain,
            '11n': rain,
            '13d': snow,
            '13n': snow,
            '50d': cloud,
            '50n': cloud,
        };
    
    const searchByCity = async(city) =>{
        try{
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_API_KEY_ID}`
            const response = await fetch(url);
            const data = await response.json();

            if (!response.ok) {
                alert(data.message);
                return;
            }

            console.log(data);
            const icon = allIcons[data.weather[0].icon] || clear ; 
            setWeatherData({
                humidity : data.main.humidity , 
                windSpeed: data.wind.speed , 
                temperature: Math.floor(data.main.temp),
                location : data.name , 
                icon : icon  ,
            })
        }catch(error){
            setWeatherData(false);
            console.error("Error in fetching weather data") ;
        }
    }
    

    useEffect(()=>{
        searchByCity("");
    },[])

    return (
        <div className='weather-card'>
            <div className='search-section'>
                <input 
                    type="text"
                    ref={inputRef}
                    className='search-input'
                    placeholder='Enter city name'
                />
                <img src ={search} alt="Search Icon" className='search-icon' onClick={()=>searchByCity(inputRef.current.value)} />
            </div>
            <div className='weather-info'>
                <div className='weather-item clear-weather'>
                    <img src={weatherData.icon} alt="Clear Weather" className='weather big-icon no-border'></img>
                    <h1 className="temperature">{weatherData.temperature}	°C</h1>
                    <h2 className="location">{weatherData.location}</h2>
                </div>
                <div className='weather-item'>
                    <div className="humidity-info">
                        <img src={humidity} alt="Humidity" className='weather-icon no-border'></img>
                        <p> Humidity : {weatherData.humidity} g/kg</p>
                    </div>
                    <div className="wind-info">
                        <img src={wind} alt="Wind Speed" className='weather-icon no-border'></img>
                        <p>Wind Speed : {weatherData.windSpeed} km/hr</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeatherCard;
