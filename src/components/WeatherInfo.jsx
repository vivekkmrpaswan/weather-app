const WeatherInfo = ({ weather }) => {
  return (
    <div className="weather-info">
      <h2> <span>🌤️</span> Weather in {weather.cityName}</h2>
      <p><strong> <span>🌡️</span>Temperature:</strong> {weather.temperature}°C</p>
      <p><strong> <span>🔅</span>Condition:</strong> {weather.condition}</p>
      <p><strong> <span>💧</span>Humidity:</strong> {weather.humidity}%</p>
      <p><strong> <span>🍃</span>Wind Speed:</strong> {weather.windSpeed} m/s</p>
    </div>
  );
};

export default WeatherInfo;
