import React, { useRef, useState } from "react";
import "./Weather.css";
import WeatherService from "./WeatherService";

function Home() {
    const cityRef = useRef(null);
    const [elist, setElist] = useState(null);
    const [image,setImage]=useState("");
  
    const getDetails = () => {
      let v1 = cityRef.current.value;
      cityRef.current.value="";
      WeatherService.getDetails(v1)
        .then(response => {
          if (response.data.cod === "404") {
            setElist({ cod: "404" }); 
          } else {
            setElist(response.data);
            if(response.data.weather[0].main=="Clouds"){
                setImage("/images/clouds.png")
            }else if(response.data.weather[0].main=="Clear"){
                setImage("/images/clear.png")
            }else if(response.data.weather[0].main=="Rain"){
                setImage("/images/rain.png")
            }else if(response.data.weather[0].main=="Drizzle"){
                setImage("/images/drizzle.png")
            }else if(response.data.weather[0].main=="Mist"){
                setImage("/images/mist.png")
            }else {
                setImage("/images/clouds.png")
            }
          }
        })
        .catch(error => {
          setElist(null);
        });
    };
    let message;
    if (elist === null) {
      message = "Enter a city and click Search to get weather information.";
    } else if (elist.cod === "404") {
      message = "City not found.";
    }
  return (
    <div className='container'>
        <div className='weather'>
            <div className='search'>
                <input type='text' placeholder='Enter City Name' ref={cityRef} autoFocus/>
                <button onClick={getDetails}><img src='/images/search.png' alt='' /></button>
            </div>
            <div className='winfo'>
                <div className="title">{message}</div>
                {elist !== null && elist.cod !== "404" && (
                    <>
                        <img src={image} alt='' className="icon"/>
                        <div className="list">
                            <h2>{elist.name}</h2>
                            <h2>{elist.main.temp}°C</h2>
                            <h2> {elist.weather[0].main}</h2>
                        </div>
                        <div className='details'>
                            <div className='col'>
                                <img src='/images/humidity.png' alt='' />
                                <div className='humidity'>
                                    <p> {elist.main.humidity}%</p>
                                    <p>Humidity</p>
                                </div>
                            </div>
                            <div className='col'>
                                <img src='/images/wind.png' alt='' />
                                <div className='wind'>
                                    <p>{elist.main.pressure} hPa</p>
                                    <p>Pressure</p>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    </div>
  )
}

export default Home