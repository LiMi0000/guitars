import type { SkeletonProps } from "../types/components";

export function Skeleton({ className = "" }: SkeletonProps) {
    return <div className={`animate-pulse bg-gray-200 rounded ${className}`} />
}

export function ModelCardSkeleton() {
    return (
        <div className="p-4 bg-white rounded-xl">
            <Skeleton className="h-40 w-full mb-3" />
            <Skeleton className="h-4 w-2/3 mb-2" />
            <Skeleton className="h-4 w-20" />
        </div>
    )
}

export function BrandCardSkeleton() {
    return (
        <div className="flex flex-col items-center gap-3">
            <Skeleton className="h-16 w-32 mb-2" />
            <Skeleton className="h-4 w-20" />
        </div>
    )
}
