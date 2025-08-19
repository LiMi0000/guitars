import React from "react";

export const Skeleton: React.FC<{ className?: string }> = ({ className = "" }) => (
    <div className={`animate-pulse bg-gray-200 rounded ${className}`} />
);

export const ModelCardSkeleton: React.FC = () => (
    <div className="p-4 bg-white rounded-xl">
        <Skeleton className="h-40 w-full mb-3" />
        <Skeleton className="h-4 w-2/3 mb-2" />
        <Skeleton className="h-4 w-20" />
    </div>
);

export const BrandCardSkeleton: React.FC = () => (
    <div className="flex flex-col items-center gap-3">
        <Skeleton className="h-16 w-32 mb-2" /> {/* Brand logo/image */}
        <Skeleton className="h-4 w-20" />       {/* Brand name */}
    </div>
);