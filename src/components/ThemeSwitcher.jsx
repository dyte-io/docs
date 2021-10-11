import React from 'react';
import useThemeContext from '@theme/hooks/useThemeContext';
import { SunIcon, MoonIcon } from '@heroicons/react/outline';

export default function ThemeSwitcher() {
  const { isDarkTheme, setLightTheme, setDarkTheme } = useThemeContext();

  const toggleTheme = () => (isDarkTheme ? setLightTheme() : setDarkTheme());

  return (
    <button
      className="fixed z-50 bottom-[1.3rem] right-[1.3rem] w-12 h-12 p-2 cursor-pointer text-gray-100 hover:text-white transition bg-primary rounded-full shadow-md hover:shadow-xl"
      onClick={toggleTheme}
    >
      {isDarkTheme ? (
        <SunIcon className="w-full h-full text-current" />
      ) : (
        <MoonIcon className="w-full h-full text-current" />
      )}
    </button>
  );
}
