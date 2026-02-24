import React from "react";

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <div
      className={`animate-pulse rounded-md bg-gray-200 dark:bg-gray-800 ${className}`}
      {...props}
    />
  );
}

export function CourseCardSkeleton() {
  return (
    <div className="flex flex-col space-y-4 border dark:border-gray-800 p-6 rounded-lg w-full">
      <Skeleton className="h-6 w-3/4" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-2/3" />
      <div className="pt-4">
        <Skeleton className="h-2 w-full rounded-full" />
        <div className="flex justify-between mt-2">
           <Skeleton className="h-4 w-12" />
           <Skeleton className="h-8 w-24 rounded-md" />
        </div>
      </div>
    </div>
  );
}
