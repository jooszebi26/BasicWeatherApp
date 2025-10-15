
import { useEffect, useState } from "react";
import { getDeviceCoords } from "../utils/geolocation.js";
import { getWeatherByCoords, getWeatherByCity} from "../services/api.js";
import BasicWeatherCard from "../components/BasicWeatherDisplayCard.jsx";

function Home() {
  const [city, setCity] = useState("Budapest")
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError]   = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const { lat, lon } = await getDeviceCoords();
        const dto = await getWeatherByCoords(lat, lon);
        setWeather(dto);
        setCity(dto.city); // frissítjük a várost a valós hely szerint
      } catch (e) {
        console.warn("Geo failed, fallback to city. Reason:", e);
        try {
          const dto = await getWeatherByCity("Budapest");
          setWeather(dto);
        } catch (fallbackErr) {
          setError("Nem sikerült betölteni az alap időjárást sem.");
        }
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const onSearch = async () => {
    if (city.trim().length < 3) return;
    setLoading(true); setError(null);
    try {
      const dto = await getWeatherByCity(city);
      setWeather(dto);
    } catch (e) {
      setError("Nem sikerült lekérni az időjárást");
    } finally {
      setLoading(false);
    }
  };

  return (<BasicWeatherCard
      weather={weather}
      inputCity={city}
      onCityChange={setCity}
      onSearch={onSearch}
      loading={loading}
      error={error}
  />)
}

export default Home
