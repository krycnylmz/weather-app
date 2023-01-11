import { createContext, useState, useEffect, useContext } from "react";
import { useUser } from "./UserContext";
import { FormatDate } from "../helpers/FormatDate";
import axios from "axios";

const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const { user } = useUser();
  const [weather, setWeather] = useState([]);

  const url = "https://api.open-meteo.com/v1/forecast?";
  const latitude = user?.city.latitude;
  const longitude = user?.city.longitude;
  const settings =
    "hourly=temperature_2m,weathercode&models=best_match&daily=sunrise,sunset&timezone=Europe%2FMoscow";

  const now = new Date();
  const start_date = FormatDate(now);
  const end_date = FormatDate(now.setDate(now.getDate() + 6));
  const req_url = `${url}latitude=${latitude}&longitude=${longitude}&${settings}&start_date=${start_date}&end_date=${end_date}`;

  useEffect(() => {
    // api with axios
    axios.get(req_url).then((value) => {
      let dayByDayDate = value.data.hourly.time.filter(
        (value, index, array) => {
          return index % 25 === 0;
        }
      );
      let temperature = value.data.hourly.temperature_2m.filter(
        (value, index, array) => {
          return index % 25 === 0;
        }
      );

      //setWeather(value.data.hourly);
      let data = [];
      console.log(`panda deneme:  ${dayByDayDate}  temp: ${temperature[2]}`);
      dayByDayDate.map((value, index, array) => {
        let element = {
          day: value,
          temperature: temperature[index],
        };
        data.push(element);
      });

      //console.log(`panda : ${JSON.stringify(data[3])} `);
      setWeather(data);
      // gelen datayı parçala ve cards state içerisine yerleştir  daha sonra cardlara gönder
    });
  }, [user, req_url]);

  const values = {
    weather,
    setWeather,
  };

  return <ApiContext.Provider value={values}> {children} </ApiContext.Provider>;
};

export const useApi = () => useContext(ApiContext);
