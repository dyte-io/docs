import React from 'react';
import useThemeContext from '@theme/hooks/useThemeContext';
import { SunIcon, MoonIcon } from '@heroicons/react/outline';

export default function ThemeSwitcher() {
  const { isDarkTheme, setLightTheme, setDarkTheme } = useThemeContext();

  const toggleTheme = () => (isDarkTheme ? setLightTheme() : setDarkTheme());

  return (
    <button
      className="fixed bottom-[1.3rem] right-[1.3rem] z-50 h-12 w-12 cursor-pointer rounded-full bg-primary p-2 text-gray-100 shadow-md transition hover:text-white hover:shadow-xl"
      onClick={toggleTheme}
    >
      {isDarkTheme ? (
        <SunIcon className="h-full w-full text-current" />
      ) : (
        <MoonIcon className="h-full w-full text-current" />
      )}
    </button>
  );
}
