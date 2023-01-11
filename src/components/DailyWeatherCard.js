import React from "react";

function DailyWeatherCard({ date, temperature }) {
  var days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const currentDate = new Date(date);
  const dayName = days[currentDate.getDay()];
  console.log(dayName);

  // const dateWOTime = currentDate.split("T")[0];

  return (
    <div class="box weather">
      <div class="icon bubble black">
        <div class="spin">
          <img src="https://dl.dropbox.com/s/0qq5anxliaopt8d/sun.png" alt="" />
        </div>
      </div>

      <h1>{dayName}</h1>
      <span class="temp">{temperature}&deg;</span>
      <span class="high-low">15&deg;/ 28&deg;</span>
    </div>
  );
}

export default DailyWeatherCard;
