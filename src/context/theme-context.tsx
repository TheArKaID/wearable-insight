'use client';

// Using next-themes for easier theme management and system preference handling
import * as React from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import type { ThemeProviderProps } from 'next-themes/dist/types';

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  // Mount check to avoid hydration mismatch errors with next-themes
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Render null or a loading state on the server or before hydration
    // This ensures the initial render matches the server render
    // The actual theme is applied client-side after hydration
    return <html lang="en" suppressHydrationWarning><body className={props.forcedTheme ? `theme-${props.forcedTheme}` : ''}>{children}</body></html>;
  }

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

// We don't need a custom useTheme hook if using next-themes directly
// We can import { useTheme } from 'next-themes' in the components that need it.
