import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ConfigProvider } from "antd";
import App from "./App.tsx";
import "./app.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ConfigProvider
      theme={{
        token: {
          fontFamily: "'Nunito Sans', sans-serif",
          colorText: "var(--text)",
          colorTextPlaceholder: "var(--placeholder)",
        },
      }}
    >
      <App />
    </ConfigProvider>
  </StrictMode>
);
