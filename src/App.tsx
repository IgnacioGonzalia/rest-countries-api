import { useEffect, useState } from "react";
import { useThemeStore } from "./store/themeStore";
import { Flex } from "antd";
import Navbar from "./components/NavBar";
import CountryGrid from "./components/CountryGrid";
import InputSearch from "./components/InputSearch";
import DropdownSearch from "./components/DropdownSearch";
import countriesData from "./data/data.json";
import "./App.css";

function App() {
  const { darkMode } = useThemeStore();
  const [inputValue, setInputValue] = useState("");
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");

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

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  const filteredCountries = countriesData.filter((country) => {
    const matchesSearch =
      search.length >= 3
        ? country.name.toLowerCase().includes(search.toLowerCase())
        : true;

    const matchesRegion = region
      ? country.region.toLowerCase() === region.toLowerCase()
      : true;

    return matchesSearch && matchesRegion;
  });

  const clearFilters = () => {
    setInputValue("");
    setSearch("");
    setRegion("");
  };

  return (
    <div className="min-h-screen bg-[color:var(--bg)] transition-colors duration-300">
      <Navbar clearFilters={clearFilters} />
      <Flex className="!mt-6 flex-col items-center gap-10 lg:flex-row lg:!mt-12 lg:justify-between lg:max-w-7xl lg:!mx-auto lg:!px-10 xl:!px-0">
        <InputSearch inputValue={inputValue} setInputValue={setInputValue} />
        <DropdownSearch region={region} setRegion={setRegion} />
      </Flex>
      <CountryGrid countries={filteredCountries} />
    </div>
  );
}

export default App;
