import { useState } from 'react';

export const useTheme = () => {
  const [darkMode, setDarkMode] = useState(false);
  return { darkMode, setDarkMode };
};
