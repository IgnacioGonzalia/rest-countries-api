import { useEffect, useState } from "react";
import { useThemeStore } from "./store/themeStore";
import Navbar from "./components/NavBar";
import CountryGrid from "./components/CountryGrid";
import InputSearch from "./components/InputSearch";
import countriesData from "./data/data.json";
import "./App.css";

function App() {
  const { darkMode } = useThemeStore();
  const [inputValue, setInputValue] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      if (inputValue.length >= 3 || inputValue.length === 0) {
        setSearch(inputValue);
      }
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [inputValue]);

  const filteredCountries = countriesData.filter((country) =>
    search.length >= 3
      ? country.name.toLowerCase().includes(search.toLowerCase())
      : true
  );

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-[color:var(--bg)] transition-colors duration-300">
      <Navbar />
      <InputSearch setInputValue={setInputValue} />
      <CountryGrid countries={filteredCountries} />
    </div>
  );
}

export default App;
