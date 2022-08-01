
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import AuthContext from "../context/AuthContext";

export default function WeatherPage({user, API_KEY}){
    const [weather, setWeather] = useState(null)
    let {authTokens, logoutUser} = useContext(AuthContext)

    let baseURL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/east%20stroudsbug?unitGroup=metric&key=HJW9DD5XBT4HPJNCGGW9K8B99&contentType=json`
    
    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setWeather(response.data);
        });
      }, []);

      if (!weather) return null;
    
      navigator.geolocation.getCurrentPosition((position) => {
        console.log( (position.coords.latitude));
        console.log( (position.coords.longitude));
      });

    return(
        <>  
            <ul>
                <li>{weather.resolvedAddress}</li>
                <li>Max Temperature: {weather.days[0].tempmax}</li>
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