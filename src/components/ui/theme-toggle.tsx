"use client";

import { useTheme } from "@/lib/theme";
import { ThemeSwitcher } from "./theme-switcher";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center">
      <ThemeSwitcher
        value={theme}
        onChange={setTheme}
        className="shadow-sm backdrop-blur"
      />
    </div>
  );
};
