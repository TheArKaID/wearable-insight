'use client';

import React from 'react';
import { DataControls } from '@/components/dashboard/data-controls';
import { Menu } from 'lucide-react'; // Keep menu icon if needed for mobile drawer
import { ThemeSwitcher } from '@/components/common/theme-switcher'; // Import the ThemeSwitcher

export function AppHeader() {
  return (
    // Using DaisyUI navbar component
    <div className="navbar bg-base-100 border-b border-base-300 sticky top-0 z-10 px-2 md:px-6 h-16"> {/* Reduced padding on small screens */}
      <div className="navbar-start">
         {/* Optional: Drawer toggle for mobile */}
         {/* <label htmlFor="my-drawer" className="btn btn-ghost drawer-button lg:hidden">
           <Menu />
         </label> */}
        <a className="btn btn-ghost text-lg md:text-xl font-semibold whitespace-nowrap">LingkarWaras</a> {/* Adjusted text size and added nowrap */}
      </div>
      <div className="navbar-end flex items-center gap-1 md:gap-2"> {/* Reduced gap on small screens */}
        <DataControls />
        <ThemeSwitcher /> {/* Add the theme switcher button */}
      </div>
    </div>
  );
}
