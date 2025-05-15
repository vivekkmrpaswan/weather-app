import { useState } from "react";
import SearchBar from "./SearchBar";
import WeatherInfo from "./WeatherInfo";
import Loading from "./Loading";
import Error from "./Error";
import useFetchWeather from "../hooks/useFetchWeather";
import './Weather.css'

const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [submittedCity, setSubmittedCity] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (city.trim() === "") return;
    setSubmittedCity(city);
    setCity("");
  };

  const { data, isLoading, error } = useFetchWeather(submittedCity);

  return (
    <div className="weather-app">
      <h1>Weather App</h1>
      <SearchBar city={city} setCity={setCity} handleSearch={handleSearch} />

      {isLoading && <Loading />}
      {error && <Error message={error} />}
      {data && <WeatherInfo weather={data} />}
    </div>
  );
};

export default WeatherApp;
