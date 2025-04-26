import React from 'react';

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {}

/**
 * A simple skeleton loading component using DaisyUI's base styles
 * and Tailwind's animate-pulse.
 */
export function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <div
      className={`animate-pulse rounded-md bg-base-300 ${className || ''}`} // Use base-300 for skeleton bg
      {...props}
    />
  );
}
