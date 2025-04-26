import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
     <div className="flex flex-col min-h-screen">
       {/* Skeleton Header */}
       <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
         <div className="flex items-center gap-2">
           <Skeleton className="h-6 w-32" /> {/* Title Skeleton */}
         </div>
         <div className="ml-auto flex items-center gap-4">
           <Skeleton className="h-9 w-[150px]" /> {/* Data Source Skeleton */}
           <Skeleton className="h-9 w-[240px]" /> {/* Date Range Skeleton */}
         </div>
       </header>

      {/* Main Content Area Skeleton */}
      <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
         {/* Skeleton for Back Button (often present on detail pages) */}
         <Skeleton className="h-9 w-32 mb-4" />

         {/* Skeleton for Page Title */}
         <Skeleton className="h-8 w-1/3 mb-6" />

         <div className="grid gap-4 md:gap-6 lg:gap-8">
           {/* Skeleton for Cards/Content (Representative Structure) */}
           {[...Array(3)].map((_, i) => (
              <div key={`card-skel-${i}`} className="p-6 border rounded-lg shadow-sm bg-card space-y-4">
                  <Skeleton className="h-6 w-1/2" /> {/* Card Title Skeleton */}
                  <Skeleton className="h-4 w-full" /> {/* Content Line 1 */}
                  <Skeleton className="h-4 w-5/6" /> {/* Content Line 2 */}
                  <Skeleton className="h-32 w-full" /> {/* Placeholder for chart/table */}
              </div>
           ))}
            {/* Larger chart/content block skeleton */}
           <div className="p-6 border rounded-lg shadow-sm bg-card md:col-span-2 lg:col-span-3 space-y-4">
              <Skeleton className="h-6 w-1/4" /> {/* Section Title */}
              <Skeleton className="h-[200px] w-full" /> {/* Main Chart/Content Skeleton */}
           </div>
         </div>
      </main>
    </div>
  );
}
