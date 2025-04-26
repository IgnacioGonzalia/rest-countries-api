import { useEffect } from "react";
import { useThemeStore } from "./store/themeStore";
import Navbar from "./components/NavBar";
import CountryCard from "./components/CountryCard";
import "./App.css";

function App() {
  const { darkMode } = useThemeStore();

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-[color:var(--bg)] transition-colors duration-300">
      <Navbar />
      <CountryCard />
    </div>
  );
}

export default App;
