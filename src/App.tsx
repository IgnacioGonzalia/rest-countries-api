import { useEffect } from "react";
import "./App.css";
import Navbar from "./components/NavBar";
import { useThemeStore } from "./store/themeStore";

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
    </div>
  );
}

export default App;
