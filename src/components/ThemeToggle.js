import React from 'react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        id="theme-toggle"
        onChange={toggleTheme}
        checked={theme === 'dark'}
        className="toggle-checkbox hidden"
      />
      <label
        htmlFor="theme-toggle"
        className="toggle-label cursor-pointer w-12 h-6 bg-gray-300 rounded-full flex items-center relative"
      >
        <span className={`toggle-ball w-6 h-6 rounded-full shadow-md transform transition-all duration-300 ${theme === 'dark' ? 'translate-x-6 bg-blue-500' : 'bg-white'}`} />
      </label>
    </div>
  );
};

export default ThemeToggle;
