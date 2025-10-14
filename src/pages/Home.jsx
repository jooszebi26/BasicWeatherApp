
import { useEffect, useState } from "react";
import { getDeviceCoords } from "../utils/geolocation.js";
import { getWeatherByCoords} from "../services/api.js";
import BasicWeatherCard from "../components/BasicWeatherDisplayCard.jsx";

function Home() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError]   = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const { lat, lon } = await getDeviceCoords();
        const dto = await getWeatherByCoords(lat, lon);
        setWeather(dto);
      } catch (e) {
        console.warn("Geo failed, fallback to city. Reason:", e);
      } finally {
        setLoading(false);
      }
    })()
  }, [])

  
  return (<BasicWeatherCard weather={weather} />)
}

export default Home
