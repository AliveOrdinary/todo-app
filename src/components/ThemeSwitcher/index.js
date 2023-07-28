"use client";
import React from "react";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    // conditionally render sun or moon icon based on theme
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="bg-slate-400"
    >
      {theme === "dark" ? (
        <Image
          src={"/images/icon-sun.svg"}
          alt="sun icon"
          width={20}
          height={20}
        />
      ) : (
        <Image
          src={"/images/icon-moon.svg"}
          alt="moon icon"
          width={20}
          height={20}
        />
      )}
    </button>
  );
};

export default ThemeSwitcher;
