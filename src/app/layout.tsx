import type { Metadata } from 'next';
import { Inter } from 'next/font/google'; // Using Inter as a suitable sans-serif font
import './globals.css';
import { cn } from '@/lib/utils';
// Removed SidebarProvider import
import { Toaster } from '@/components/ui/toaster';

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
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          inter.variable
        )}
      >
        {/* Removed SidebarProvider wrapper */}
        {children}
        <Toaster />
      </body>
    </html>
  );
}
