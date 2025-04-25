import { useEffect } from "react";
import { useThemeStore } from "./store/themeStore";
import { Flex, Switch, Typography } from "antd";
import "./App.css";

function App() {
  const { darkMode, toggleDarkMode } = useThemeStore();
  const { Title } = Typography;

  useEffect(() => {
    if (darkMode) document.documentElement.setAttribute("data-theme", "dark");
    else document.documentElement.setAttribute("data-theme", "light");
  }, [darkMode]);

  return (
    <Flex
      vertical
      justify="center"
      align="center"
      gap={"20px"}
      className="min-h-screen bg-[color:var(--bg)] transition-colors duration-300"
    >
      <Title>Hola mundo!</Title>
      <Switch
        checked={darkMode}
        onChange={toggleDarkMode}
        checkedChildren="🌙"
        unCheckedChildren="☀️"
      />
    </Flex>
  );
}

export default App;
