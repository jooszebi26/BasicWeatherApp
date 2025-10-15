function BasicWeatherCard({ weather, inputCity, onCityChange, onSearch, loading, error }) {
  return (
    <div className="weather-card">
      <div className="location">
        <label htmlFor="city">Search City </label>
        <input
          id="city"
          value={inputCity}
          onChange={(e) => onCityChange(e.target.value)}
          placeholder="Pl. Debrecen"
        />
        <button onClick={onSearch} disabled={loading || inputCity.trim().length < 2}>
          {loading ? "Searching..." : "Search"}
        </button>
      </div>

      {error && <p role="alert" style={{ color: "crimson" }}>{error}</p>}

      {/* Csak az időjárás rész feltételes */}
      {weather && (
        <>
          <div className="temperature">{Math.round(weather.tempC)}°C</div>
          <div className="weather-type">
            <img src={weather.iconUrl} alt={weather.conditionText} width="64" height="64" />
            <p>{weather.conditionText}</p>
          </div>
          <p>{weather.localtime}</p>
        </>
      )}
    </div>
  );
}
export default BasicWeatherCard;