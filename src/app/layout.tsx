import type { Metadata } from 'next';
import { Inter } from 'next/font/google'; // Using Inter as a suitable sans-serif font
import './globals.css';
import { ThemeProvider } from '@/context/theme-context'; // Import ThemeProvider
import { ClientLayoutWrapper } from '@/components/layout/client-layout-wrapper'; // Import the wrapper
import React, { Suspense } from 'react';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-geist-sans', // Keep variable name for compatibility if needed elsewhere
});

export const metadata: Metadata = {
  title: 'Wearable Insights',
  description: 'Visualize and analyze your wearable health data.',
  icons: {
    icon: '/favicon.ico', // Assuming a favicon might exist or be added later
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} min-h-screen font-sans antialiased`}>
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Suspense fallback={<div className="p-4 text-center">Loading...</div>}>
            <ClientLayoutWrapper>
              {children}
            </ClientLayoutWrapper>
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}
