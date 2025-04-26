'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes'; // Import useTheme from next-themes

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Ensure the component is mounted before rendering theme-specific UI
  React.useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  // Render a placeholder or nothing until mounted to avoid hydration mismatch
  if (!mounted) {
    return (
        <button className="btn btn-ghost btn-circle">
             <span className="loading loading-spinner loading-sm"></span>
        </button>
    );
  }

  return (
    <button
      className="btn btn-ghost btn-circle" // DaisyUI button styles
      onClick={toggleTheme}
      aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
    >
      {theme === 'light' ? (
        <Moon className="h-[1.2rem] w-[1.2rem]" />
      ) : (
        <Sun className="h-[1.2rem] w-[1.2rem]" />
      )}
    </button>
  );
}
