'use client';

import React from 'react';
// Removed SidebarTrigger import
import { Button } from '@/components/ui/button';
import { DataControls } from '@/components/dashboard/data-controls';

export function AppHeader() {
  return (
    <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <div className="flex items-center gap-2">
         {/* Removed SidebarTrigger */}
        <h1 className="text-xl font-semibold md:text-2xl">Wearable Insights</h1>
      </div>
      <div className="ml-auto flex items-center gap-4">
        <DataControls />
        {/* Add User profile/settings dropdown if needed */}
        {/* <Button variant="ghost" size="icon" className="rounded-full">
          <User className="h-5 w-5" />
          <span className="sr-only">User Profile</span>
        </Button> */}
      </div>
    </header>
  );
}
