// src/app/loading.tsx
import { Skeleton } from "@/components/common/skeleton"; // Uses bg-base-300 and animate-pulse

export default function Loading() {
  // This component handles the initial loading state during server rendering
  // and before the page component is fully hydrated/rendered on the client.
  // The ClientLayoutWrapper handles the *transition* loading state for client-side navigation.
  return (
     // Use DaisyUI background
     <div className="flex flex-col min-h-screen bg-base-200">
       {/* Skeleton Header using DaisyUI navbar structure */}
       <header className="navbar bg-base-100 border-b border-base-300 sticky top-0 z-10 px-4 md:px-6 h-16">
          <div className="navbar-start">
            {/* Title Skeleton */}
            <Skeleton className="h-6 w-32" />
          </div>
          <div className="navbar-end flex items-center gap-4">
            {/* Data Source Skeleton */}
            <Skeleton className="h-9 w-[150px]" />
            {/* Date Range Skeleton */}
            <Skeleton className="h-9 w-[240px]" />
            {/* Theme Switcher Skeleton */}
            <Skeleton className="h-9 w-9 rounded-full" /> {/* Match ThemeSwitcher button shape */}
          </div>
       </header>

      {/* Main Content Area Skeleton */}
      <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
         {/* Skeleton for Navigation Buttons */}
         <div className="mb-6 flex flex-wrap gap-2">
            <Skeleton className="h-9 w-40" />
            <Skeleton className="h-9 w-36" />
            <Skeleton className="h-9 w-40" />
            <Skeleton className="h-9 w-36" />
         </div>


         <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-6 lg:gap-8">
           {/* Skeleton for Overview Cards */}
           {[...Array(4)].map((_, i) => (
              <div key={`card-skel-${i}`} className="bg-base-100 p-4 rounded-lg shadow-sm space-y-3 border border-base-300">
                  <div className="flex justify-between items-center">
                      <Skeleton className="h-5 w-1/2" /> {/* Card Title Skeleton */}
                      <Skeleton className="h-4 w-4" /> {/* Icon Skeleton */}
                  </div>
                  <Skeleton className="h-6 w-1/3" /> {/* Main value Skeleton */}
                  <Skeleton className="h-3 w-3/4" /> {/* Subtext Skeleton */}
              </div>
           ))}
            {/* Larger chart/content block skeleton */}
           <div className="bg-base-100 p-6 rounded-lg shadow-sm md:col-span-2 lg:col-span-3 xl:col-span-4 space-y-4 border border-base-300">
              <Skeleton className="h-6 w-1/4" /> {/* Section Title */}
              <Skeleton className="h-[200px] w-full" /> {/* Main Chart/Content Skeleton */}
           </div>
           {/* AI Insights skeleton */}
            <div className="bg-base-100 p-6 rounded-lg shadow-sm md:col-span-2 lg:col-span-3 xl:col-span-4 space-y-4 border border-base-300">
              <Skeleton className="h-6 w-1/3 mb-4" /> {/* Section Title */}
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
              <Skeleton className="h-4 w-full mt-4" />
               <Skeleton className="h-4 w-4/5" />
           </div>
         </div>
      </main>
    </div>
  );
}
