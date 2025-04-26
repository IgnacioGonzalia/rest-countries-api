import { create } from "zustand";

interface ThemeState {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
  darkMode: localStorage.getItem("theme") === "dark" || false,
  toggleDarkMode: () =>
    set((state) => {
      const newTheme = !state.darkMode ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return { darkMode: !state.darkMode };
    }),
}));
