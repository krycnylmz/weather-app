import React from "react";
import { KelvinToCel } from "../helpers/KelvinToCel";

function DailyWeatherCard({ datas }) {
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const dayName = days[new Date(datas.dt_txt).getDay()];
  const temperature = KelvinToCel(datas.main.temp);
  const temperatureMin = KelvinToCel(datas.main.temp_min);
  const temperatureMax = KelvinToCel(datas.main.temp_max);

  const iconUrl = `https://openweathermap.org/img/wn/${datas.weather[0].icon}@2x.png`;

  return (
    <div class="box weather">
      <div class="icon bubble black">
        <div class="spin">
          <img src={iconUrl} alt="" />
        </div>
      </div>

      <h1>{dayName}</h1>
      <span class="temp">{temperature}&deg;</span>
      <span class="high-low">
        {temperatureMin}&deg;/ {temperatureMax}&deg;
      </span>
    </div>
  );
}

export default DailyWeatherCard;
