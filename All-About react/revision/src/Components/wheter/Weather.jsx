import React, { useEffect, useState } from 'react';
import './Weter.css';
function Weather() {
  const [isLoader, setIsLoader] = useState(false);
  const [city, setCity] = useState('');
  const [weatherDetails, setWeatherDetails] = useState(null);

  const getData = (event) => {
    event.preventDefault();
    setIsLoader(true);
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=751d66e130befad396405dc13796a57c&units=metric`)
      .then((res) => res.json())
      .then((finalRes) => {
        if (finalRes.cod === "404") {
          setWeatherDetails(null);
        } else {
          setWeatherDetails(finalRes);
        }
        setIsLoader(false);
      })
      .catch((error) => {
        console.error('Error fetching weather data:', error);
        setIsLoader(false);
      });
      
    setCity('');
  }

  
  return (
    <div>
      <div className='container'>
        
        <b><h1>Simple Weather App</h1></b>
        <div className='child'>
          <form onSubmit={getData}>
            <input value={city} onChange={(e) => setCity(e.target.value)} type='text' placeholder='City Name' />
            <button className='btn' type='submit'>Submit</button>
          </form>
        </div>
      </div>

      <div className='box'>
        <img
          className='loader'
          src='https://cdn.pixabay.com/animation/2022/07/29/03/42/03-42-11-849_512.gif'
          width={100}
          style={{ display: isLoader ? 'block' : 'none' }}
          alt='Loader'
        />

        {weatherDetails !== null ? (
          <>
            <h1>{weatherDetails.name}, <span>{weatherDetails.sys.country}</span></h1>
            <h1><span>Temperature: </span>{weatherDetails.main.temp}°C</h1>
            <h2>
              <img src={`http://openweathermap.org/img/w/${weatherDetails.weather[0].icon}.png`} alt='Weather Icon' />
            </h2>
            <p>{weatherDetails.weather[0].description}</p>
          </>
        ) : (
          "No Data"
        )}

      </div>
     
    </div>
  );
}

export default Weather;