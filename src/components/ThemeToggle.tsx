"use client";

import { useEffect, useState } from "react";
import Icon from "./Icon";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = savedTheme || (prefersDark ? "dark" : "light");
    setTheme(initialTheme);
    
    if (!document.documentElement.classList.contains("light") && !document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.add(initialTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(newTheme);
  };

  if (!mounted) return null;

  return (
    <button
      onClick={toggleTheme}
      aria-label={theme === "dark" ? "עבור למצב בהיר" : "עבור למצב כהה"}
      className="fixed bottom-6 end-6 z-50 w-14 h-14 rounded-full bg-gradient-to-r from-primary to-primary-container text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group active:scale-95 border-2 border-primary/20"
    >
      <div className="relative w-6 h-6">
        <Icon
          name="light_mode"
          className={`absolute inset-0 transition-all duration-300 ${
            theme === "light"
              ? "opacity-100 rotate-0 scale-100"
              : "opacity-0 rotate-180 scale-50"
          }`}
          size={24}
        />
        <Icon
          name="dark_mode"
          className={`absolute inset-0 transition-all duration-300 ${
            theme === "dark"
              ? "opacity-100 rotate-0 scale-100"
              : "opacity-0 -rotate-180 scale-50"
          }`}
          size={24}
        />
      </div>
    </button>
  );
}
