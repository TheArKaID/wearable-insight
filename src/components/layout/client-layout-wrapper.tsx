'use client';

import React, { useState, useEffect, PropsWithChildren } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

// Revised Approach using just useEffect for simplicity:
// This version shows loading *during* the transition based on path changes,
// rather than instantly on click, avoiding the complexity of event interception.

export function ClientLayoutWrapperRevised({ children }: PropsWithChildren) {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPath = `${pathname}?${searchParams}`; // Combine path and params

  useEffect(() => {
      // Simple approach: Assume loading starts when component mounts or path changes *until* it settles
      setIsLoading(true);
      const timer = setTimeout(() => setIsLoading(false), 300); // Simulate loading time or wait for actual load signal
      // In a real scenario, you'd track pending requests or use router events if available/reliable

      // Cleanup timer on unmount or path change
      return () => clearTimeout(timer);

  }, [currentPath]); // Trigger effect when full path changes


  // Another way using previous path state to detect change start
  const [previousPath, setPreviousPath] = useState(currentPath);
  useEffect(() => {
      if (currentPath !== previousPath) {
          setIsLoading(true); // Start loading when path changes
          setPreviousPath(currentPath); // Update previous path
          // Loading will stop when the new page component renders and this effect runs again (or use a timer/event)
          const timer = setTimeout(() => setIsLoading(false), 500); // Example timeout
          return () => clearTimeout(timer);
      }
       // Turn off loading when the component initially mounts and path hasn't changed yet
       // Or after a delay to ensure content is ready
       const initialLoadTimer = setTimeout(() => {
            if (currentPath === previousPath && isLoading) {
                 setIsLoading(false);
            }
       }, 100); // Small delay for initial load settling
       return () => clearTimeout(initialLoadTimer);

  }, [currentPath, previousPath, isLoading]); // Depend on currentPath and previousPath

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-base-100/50 backdrop-blur-sm transition-opacity duration-150">
          <span className="loading loading-spinner loading-lg text-primary"></span>
          <span className="sr-only">Loading...</span>
        </div>
      )}
      {children}
    </>
  );
}

// Final choice: Using the state comparison useEffect for simplicity
export { ClientLayoutWrapperRevised as ClientLayoutWrapper };
