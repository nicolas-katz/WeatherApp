import React, { useState, useEffect } from 'react';
import WeatherForm from './WeatherForm';
import WeatherMainInfo from './WeatherMainInfo';
import '../styles/WeatherApp.css';

const WeatherApp = () => {
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        loadInfo();
    }, [])

    useEffect(() => {
        document.title = `Weather | ${weather?.location.name ?? ''}`
    }, [weather])

    const loadInfo = async (city = 'london') => {
        try {
            const request = await fetch(
                `http://api.weatherapi.com/v1/current.json?aqi=no&key=7067ce98b3f94276b6d191700221510&q=${city}`
            );
            const json = await request.json();
            setWeather(json);
        } catch (err) {
            console.error(err)
        }
    }

    const handleChangeCity = (city) => {
        setWeather(null);
        loadInfo(city);
    }

    return (
        <div className='weatherAppContainer'>
            <WeatherForm handleChangeCity={handleChangeCity} />
            <WeatherMainInfo weather={weather} />
        </div>
    )
}

export default WeatherApp;