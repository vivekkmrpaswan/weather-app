const WeatherInfo = ({ weather }) => {
  return (
    <div className="weather-info">
      <h2>Weather in {weather.cityName}</h2>
      <p><strong>Temperature:</strong> {weather.temperature}°C</p>
      <p><strong>Condition:</strong> {weather.condition}</p>
      <p><strong>Humidity:</strong> {weather.humidity}%</p>
      <p><strong>Wind Speed:</strong> {weather.windSpeed} m/s</p>
    </div>
  );
};

export default WeatherInfo;
