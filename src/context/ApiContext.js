import { createContext, useState, useEffect, useContext } from "react";
import { useUser } from "./UserContext";
import axios from "axios";

const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const { user } = useUser();
  const [weather, setWeather] = useState([]);

  const APIKEY = "4f4ed0ffeb79b9ead4b818c34141b56c";
  const url = "https://api.openweathermap.org/data/2.5/forecast?";
  const latitude = user?.city.latitude;
  const longitude = user?.city.longitude;
  const settings = "cnt=56&appid=";

  const req_url = `${url}lat=${latitude}&lon=${longitude}&${settings}${APIKEY}`;

  useEffect(() => {
    // api with axios
    axios.get(req_url).then((value) => {
      setWeather(value.data.list);
    });
  }, [user, req_url]);

  const values = {
    weather,
    setWeather,
  };

  return <ApiContext.Provider value={values}> {children} </ApiContext.Provider>;
};

export const useApi = () => useContext(ApiContext);
