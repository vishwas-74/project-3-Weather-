import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox({updateinfo}) {
  let [city, setCity] = useState("");
  let [error,setError] = useState(false);

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_key = "92b0b2582a8fa345f6b6a5662e5fce1e";

  let getWeatherInfo = async () => {
  try {
      let response = await fetch(
      `${API_URL}?q=${city}&appid=${API_key}&units=metric`
    );
    let jsonresponse = await response.json();
    console.log(jsonresponse);

    let result = {
      city: city,
      temp: jsonresponse.main.temp,
      tempMin: jsonresponse.main.temp_min,
      tempMax: jsonresponse.main.temp_max,
      humidity: jsonresponse.main.humidity,
      feelsLike: jsonresponse.main.feels_like,
      description: jsonresponse.weather[0].description,
    };
    console.log(result);
    return result;// async function h remember

  }catch(err){
    throw err;
  }

  };

  let handleInput = (evt) => {
    setCity(evt.target.value);
  
  };

  let handleSubmit = async (evt) => {
   try{ 
    evt.preventDefault();
    console.log(city);
    setCity("");
    let newinfo=await getWeatherInfo();
    setError(false);
    updateinfo(newinfo);
   } catch(err){
    setError(true);
   }
  };

  return (
    <div className="search">
    
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="city name"
          variant="outlined"
          required
          value={city}
          onChange={handleInput}
        />
        <br />
        <br />
        <Button variant="contained" type="Submit">
          Search
        </Button>
        {error && <p style={{color:"red"}}>No such place exits</p>}
      </form>
    </div>
  );
}
