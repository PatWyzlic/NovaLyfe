
import { useState, useEffect } from "react";
import axios from "axios";

export default function WeatherPage({user}){
    let latitude;
    let longitude;

    navigator.geolocation.getCurrentPosition((position) => {
        latitude = (position.coords.latitude);
        longitude = (position.coords.longitude);
    });

    
    const [weather, setWeather] = useState('')
    const [location, setLocation] = useState(latitude, longitude)

    let baseURL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=HJW9DD5XBT4HPJNCGGW9K8B99&contentType=json`


    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setWeather(response.data);
        });
    }, [baseURL]);

    if (!weather) return null;

    function getWeather(){
        baseURL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/east%20stroudsbug?unitGroup=metric&key=HJW9DD5XBT4HPJNCGGW9K8B99&contentType=json`

        axios.get(baseURL).then((response) => {
            setWeather(response.data);
        });
    }

    return(
        <>  
            <div>
                <h6>Search for weather</h6>
                <input type="text" onChange={e => setLocation(e.target.value)}></input>
                <button onSubmit={getWeather}>Search</button>
            </div>
            <ul>
                <li>{weather.resolvedAddress}</li>
                <li>Max Temperature: {weather.days[0].tempmax}</li>
                <li>Min Temperature: {weather.days[0].tempmin}</li>
            </ul>
            <div>
            {weather.days.map((day, index) => {
                return <div key={index}>
                    <ul>
                        <li>{day.datetime}</li>
                        <li>{day.description}</li>
                        <li>Feels Like: {day.feelslike}</li>
                        <li>{day.datetime}</li>
                        <div>
                        {day.hours.map((hour, index) => {
                            return <div key={hour.datetime}>
                                <ul>
                                    <li>Time: {hour.datetime}</li>
                                        <ul>
                                            <li>Temperature: {hour.temp}</li>
                                            <li>Feels Like: {hour.feelslike}</li>
                                            <li>Conditions: {hour.conditions}</li>
                                        
                                        </ul>
                                </ul>
                            </div>
                        
                        })}
                        </div>
                    </ul>
                </div>
            })
            }
            </div>
        </>
    )
}