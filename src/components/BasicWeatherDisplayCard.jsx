function BasicWeatherCard({ weather }) {
  if (!weather) return null; // vagy egy skeleton

  const { city, tempC, conditionText, iconUrl, localtime } = weather;

  return (
    <div className="weather-card">
      <div className="temperature">{Math.round(tempC)}°C</div>
      <div className="location">
        <p>{city}</p>
        <p>{localtime}</p>
      </div>
      <div className="weather-type">
        <img src={iconUrl} alt={conditionText} width="64" height="64" />
        <p>{conditionText}</p>
      </div>
    </div>
  );
}

export default BasicWeatherCard