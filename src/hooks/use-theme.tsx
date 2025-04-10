import { useState, useEffect } from 'react';

// Define theme options
type Theme = 'dark' | 'light';

export function useTheme() {
  // Initialize with user's preferred color scheme or 'dark' as default
  const [theme, setTheme] = useState<Theme>(() => {
    // Check if theme is stored in local storage
    const storedTheme = localStorage.getItem('theme') as Theme | null;
    if (storedTheme) {
      return storedTheme;
    }
    // Otherwise use the user's preference from system
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  // Effect for initial setup and theme change
  useEffect(() => {
    const root = window.document.documentElement;
    
    // Remove the old theme class and add the new one
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    
    // Save the theme to localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Function to toggle between themes
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return { theme, toggleTheme, isDarkMode: theme === 'dark' };
}
