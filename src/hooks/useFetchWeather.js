import { useState, useEffect } from "react";

const API_KEY = "7ac373cfc2a4486579d00ce89d480723"; 

const useFetchWeather = (city) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!city) return;

    const fetchWeather = async () => {
      setIsLoading(true);
      setError(null);
      setData(null);

      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
            city
          )}&appid=${API_KEY}&units=metric`
        );

        if (!response.ok) {
          throw new Error("City not found or API error.");
        }

        const result = await response.json();

        const transformed = {
          cityName: result.name,
          temperature: result.main.temp,
          condition: result.weather[0].main,
          humidity: result.main.humidity,
          windSpeed: result.wind.speed,
        };

        setData(transformed);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchWeather();
  }, [city]);

  return { data, isLoading, error };
};

export default useFetchWeather;
