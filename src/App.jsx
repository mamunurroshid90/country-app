import { useEffect } from "react";
import { useState } from "react";
import Countries from "./components/Countries";
import SearchCountry from "./components/SearchCountry";

function App() {
  //  state declare
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState(countries);

  const url = "https://restcountries.com/v3.1/all";

  // fetch data
  const fetchData = async (url) => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setCountries(data);
      setFilteredCountries(data);
      setIsLoading(false);
      setError(false);
    } catch (error) {
      setIsLoading(false);
      setError(error);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, []);

  const handleRemoveCountry = (name) => {
    const filter = filteredCountries.filter(
      (country) => country.name.common !== name
    );
    setFilteredCountries(filter);
  };

  const handleSearch = (searchValue) => {
    const value = searchValue.toLowerCase();
    const newCountries = countries.filter((country) => {
      const countryName = country.name.common.toLowerCase();
      return countryName.startsWith(value);
    });
    setFilteredCountries(newCountries);
  };

  return (
    <>
      <h1 className=" text-center text-4xl font-bold py-10">Country App</h1>
      <div className=" flex items-center justify-center">
        <SearchCountry onSearch={handleSearch} />
      </div>
      {isLoading && <h2>Loading...</h2>}
      {error && <h3>{error.message}</h3>}
      {countries && (
        <Countries
          countries={filteredCountries}
          onRemoveCountry={handleRemoveCountry}
        />
      )}
    </>
  );
}

export default App;
