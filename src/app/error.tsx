'use client'; // Error components must be Client Components

import { useEffect } from 'react';
import { AlertTriangle } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center bg-base-200">
       {/* Using DaisyUI Alert for error display */}
       <div role="alert" className="alert alert-error max-w-md flex flex-col items-center">
           <AlertTriangle className="w-16 h-16 mb-4" /> {/* Keep icon */}
            <h2 className="text-2xl font-semibold mb-2">Something went wrong!</h2>
            <p className="text-base-content opacity-80 mb-6">
                {error.message || 'An unexpected error occurred.'}
            </p>
             {/* DaisyUI Button */}
            <button
                className="btn btn-primary" // Use primary color for action
                onClick={
                // Attempt to recover by trying to re-render the segment
                () => reset()
                }
            >
                Try again
            </button>
       </div>
    </div>
  );
}
