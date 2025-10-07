import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
    let [info,setinfo]=useState( {
    city: "Delhi",
    temp: 25.05,
    tempMin: 25.05,
    tempMax: 25.05,
    humidity: 47,
    feelsLike: 24.84,
    description: "Haze",
  } )

  let updateinfo= (newinfo)=>{
     setinfo(newinfo);
  }

    return (
        <div style={{textAlign:"center"}}>
      <h2>WEATHER APP</h2>
      <SearchBox updateinfo={updateinfo}/>
      <InfoBox  info={info}/>
        </div>
    
    );
}