import React, { useState } from 'react'

function WeatherForm({handleChangeCity}) {
    const [city, setCity] = useState('');

    const handleChange = (e) => {
        if(e.target.value !== '') {
            setCity(e.target.value);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        handleChangeCity(city);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                onChange={handleChange}
                type="text" 
                name="city" 
                id="city" 
                placeholder='Enter your city...' 
                required />
        </form>
    )
}

export default WeatherForm