import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CountryPage from "./pages/CountryPage";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/country/:name" element={<CountryPage />} />
    </Routes>
  );
}

export default App;
