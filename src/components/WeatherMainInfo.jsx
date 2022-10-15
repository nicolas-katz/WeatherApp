import React from 'react'

function WeatherMainInfo({weather}) {
  return (
    <div className='weatherMainInfo'>
        <h2>{weather?.location.name}</h2>
        <h3>{weather?.location.country}</h3>
        <img 
            src={`http:${weather?.current.condition.icon}`} 
            alt={weather?.current.condition.text} 
            width="128" 
        />
        <p>{weather?.current.condition.text} - {weather?.current.temp_c}°</p>
        <iframe 
        src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d782101.2221541137!2d${weather?.location.lon}4!3d${weather?.location.lat}5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1665867771976!5m2!1ses-419!2sar`}
        allowFullScreen="" 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade">
        </iframe>
    </div>
  )
}

export default WeatherMainInfo