"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="p-2.5 text-white hover:text-primary transition-all rounded-full hover:bg-white/10 dark:hover:bg-white/10"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? <FiSun size={24} /> : <FiMoon size={24} />}
    </button>
  );
}
