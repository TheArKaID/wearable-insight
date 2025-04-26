'use client';

import React from 'react';
import { DataControls } from '@/components/dashboard/data-controls';
import { Menu } from 'lucide-react'; // Keep menu icon if needed for mobile drawer
import { ThemeSwitcher } from '@/components/common/theme-switcher'; // Import the ThemeSwitcher

export function AppHeader() {
  return (
    // Using DaisyUI navbar component
    <div className="navbar bg-base-100 border-b border-base-300 sticky top-0 z-10 px-4 md:px-6">
      <div className="navbar-start">
         {/* Optional: Drawer toggle for mobile */}
         {/* <label htmlFor="my-drawer" className="btn btn-ghost drawer-button lg:hidden">
           <Menu />
         </label> */}
        <a className="btn btn-ghost text-xl md:text-2xl font-semibold">Wearable Insights</a>
      </div>
      <div className="navbar-end flex items-center gap-2"> {/* Added gap */}
        <DataControls />
        <ThemeSwitcher /> {/* Add the theme switcher button */}
        {/* Optional: User profile/settings dropdown */}
        {/* <div className="dropdown dropdown-end ml-4">
          <button tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img alt="User Avatar" src="https://picsum.photos/80/80" />
            </div>
          </button>
          <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
            <li><a>Profile</a></li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div> */}
      </div>
    </div>
  );
}
