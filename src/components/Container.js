import { useEffect, useState } from "react";
import { useUser } from "../context/UserContext";
import { useApi } from "../context/ApiContext";
import useApiContext from "../context/ApiContext";
import DailyWeatherCard from "./DailyWeatherCard";

function Container() {
  const { user, setUser } = useUser();
  const { weather, setWeather } = useApi();
  const [cards, setCards] = useState({});

  return (
    <div className={"cards"}>
      <DailyWeatherCard
        date={weather[0]?.day}
        temperature={weather[0]?.temperature}
      />
      <DailyWeatherCard
        date={weather[1]?.day}
        temperature={weather[1]?.temperature}
      />
      <DailyWeatherCard
        date={weather[2]?.day}
        temperature={weather[2]?.temperature}
      />
      <DailyWeatherCard
        date={weather[3]?.day}
        temperature={weather[3]?.temperature}
      />
      <DailyWeatherCard
        date={weather[4]?.day}
        temperature={weather[4]?.temperature}
      />
      <DailyWeatherCard
        date={weather[5]?.day}
        temperature={weather[5]?.temperature}
      />
      <DailyWeatherCard
        date={weather[6]?.day}
        temperature={weather[6]?.temperature}
      />
    </div>
  );
}

export default Container;
