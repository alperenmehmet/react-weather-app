import React, { useState } from 'react';
import {BASE_URL} from "./constants/api"
import {dateMapper} from "./utils/dateMapper";

function App() {
    const [query, setQuery] = useState("ankara");
    const [weather, setWeather] = useState({});

    const search = evt => {
        if (evt.key === "Enter") {
            fetch(`${BASE_URL}weather?q=${query}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
                .then(res => res.json())
                .then(result => {
                    setWeather(result);
                    setQuery('');
                    console.log(result);
                });
        }
    }

    return (
        <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 10) ? 'app warm' : 'app') : 'app'}>
            <main>
                <div className="search-box">
                    <input
                        type="text"
                        className="search-bar"
                        placeholder="Search..."
                        onChange={e => setQuery(e.target.value)}
                        value={query}
                        onKeyPress={search}
                    />
                </div>
                {(typeof weather.main != "undefined") ? (
                    <div>
                        <div className="location-box">
                            <div className="location">{weather.name}, {weather.sys.country}</div>
                            <div className="date">{dateMapper(new Date())}</div>
                        </div>
                        <div className="weather-icon">
                            <img  src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}/>
                        </div>
                        <div className="weather-box">
                            <div className="temp">
                                {Math.round(weather.main.temp)}°C
                            </div>
                            <div className="weather">{weather.weather[0].main}</div>
                        </div>
                    </div>
                ) : (<div className="warning-title">The city you are looking for could not be found. Please try again.</div>)}
            </main>
        </div>
    );
}

export default App;