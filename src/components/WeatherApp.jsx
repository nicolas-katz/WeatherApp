import React, { useState, useEffect } from 'react';
import WeatherForm from './WeatherForm';
import WeatherMainInfo from './WeatherMainInfo';
import '../styles/WeatherApp.css';
import Loading from './Loading';

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
                `https://api.weatherapi.com/v1/current.json?aqi=no&key=7067ce98b3f94276b6d191700221510&q=${city}`
            );
            const json = await request.json();
            setTimeout(()=> {
                setWeather(json);
            }, 2000)
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
            {weather ? <WeatherMainInfo weather={weather} /> : <Loading />}
        </div>
    )
}

export default WeatherApp;