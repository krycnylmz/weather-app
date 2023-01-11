import React from "react";
import { FormatDate } from "../helpers/FormatDate";
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
  console.log(`pandaDailyWeather ${JSON.stringify(datas)}`);
  const dayName = days[new Date(datas.dt_txt).getDay()];
  const temperature = KelvinToCel(datas.main.temp);
  const temperatureMin = KelvinToCel(datas.main.temp_min);
  const temperatureMax = KelvinToCel(datas.main.temp_max);

  console.log(`panda333 ${datas.weather[0].icon}`);
  const iconUrl = `https://openweathermap.org/img/wn/${datas.weather[0].icon}@2x.png`;
  console.log(`panda444 ${iconUrl}`);
  // const dateWOTime = currentDate.split("T")[0];

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
