import { useApi } from "../context/ApiContext";
import DailyWeatherCard from "./DailyWeatherCard";
import { FormatDate } from "../helpers/FormatDate";

function Container() {
  const { weather } = useApi();

  let newList = [];
  let sameDates = [];
  weather.map((value, index, array) => {
    let uniqueElementDate = FormatDate(value.dt_txt);
    if (!sameDates.includes(uniqueElementDate)) {
      newList.push(value);
      sameDates.push(uniqueElementDate);
    }
  });
  const isNight = new Date().getHours() > 18 || new Date().getHours() < 6;

  return (
    <>
      <div className={`cards ${isNight ? "night" : "morning"}`}>
        {newList.map((value, key, array) => (
          <DailyWeatherCard key={key} datas={value} />
        ))}
      </div>
    </>
  );
}

export default Container;
