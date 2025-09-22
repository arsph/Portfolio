"use client";

import { useEffect, useState } from "react";
import { LoadingSpinner } from "@/components/ui/loading-spinner";

interface GlobalLoadingProps {
  children: React.ReactNode;
}

export function GlobalLoading({ children }: GlobalLoadingProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => setIsLoading(false), 200);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    // Ensure loading completes even if progress doesn't reach 100%
    const timeout = setTimeout(() => {
      setProgress(100);
      setTimeout(() => setIsLoading(false), 200);
    }, 2000);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(timeout);
    };
  }, []);

  if (!isLoading) {
    return <>{children}</>;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      {/* Circular Progress Bar */}
      <div className="relative w-16 h-16">
        <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 100 100">
          {/* Background circle */}
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="currentColor"
            strokeWidth="8"
            fill="none"
            className="text-muted-foreground/20"
          />
          {/* Progress circle */}
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="currentColor"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            className="text-primary transition-all duration-300 ease-out"
            strokeDasharray={`${2 * Math.PI * 45}`}
            strokeDashoffset={`${2 * Math.PI * 45 * (1 - progress / 100)}`}
          />
        </svg>
      </div>
    </div>
  );
}
