import WeatherDTO from "../dtos/BasicWeatherInfo"

const API_KEY = "8f8fa69c38374626b65171919251410"
const BASE_URL = "https://api.weatherapi.com/v1"

export async function getWeatherByCoords(lat, lon) {
  const url = `${BASE_URL}/current.json?key=${API_KEY}&q=${lat},${lon}`

  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status}`)
  const json = await res.json()
  return new WeatherDTO(json)
}

export async function getWeatherByCity(city) {
  const url = `${BASE_URL}/current.json?key=${API_KEY}&q=${city}`
  const res = await fetch(url)

  if (!res.ok) throw new Error(`HTTP ${res.status}`)
  const json = await res.json()
  return new WeatherDTO(json)
}