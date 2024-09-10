"use client";
import { useEffect, useState } from "react";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";

const ThemeComponent = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);
  return (
    <button
      onClick={toggleDarkMode}
      // className="border bg-black text-white px-4 py-2 rounded-lg"
    >
      {isDarkMode ? (
        <MdOutlineLightMode className="size-6" />
      ) : (
        <MdDarkMode className="size-6" />
      )}
    </button>
  );
};

export default ThemeComponent;
