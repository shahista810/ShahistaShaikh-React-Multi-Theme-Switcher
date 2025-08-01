import React, { useContext } from 'react';
import { ThemeContext, Theme } from '../context/ThemeContext';
import './ThemeDropdown.css'; 

const ThemeDropdown = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <select
      className="theme-select" 
      value={theme}
      onChange={(e) => setTheme(e.target.value as Theme)}
    >
      <option value="theme1">Theme 1</option>
      <option value="theme2">Theme 2</option>
      <option value="theme3">Theme 3</option>
    </select>
  );
};

export default ThemeDropdown;
