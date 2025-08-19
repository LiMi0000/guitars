import React from "react";
import type { PaginationProps } from "../types/components";

function range(start: number, end: number) {
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}

export default function Pagination({
    page,
    total,
    pageSize,
    onChange,
    siblingCount = 1,
    className = "",
}: PaginationProps) {
    const totalPages = Math.max(1, Math.ceil(total / pageSize));
    const startIdx = (page - 1) * pageSize;
    const showingCount = total === 0 ? 0 : Math.min(pageSize, total - startIdx);

    const pagination = React.useMemo(() => {
        if (totalPages <= 7 + siblingCount * 2) {
            return range(1, totalPages);
        }

        const left = Math.max(2, page - siblingCount);
        const right = Math.min(totalPages - 1, page + siblingCount);
        const showLeftEllipsis = left > 2;
        const showRightEllipsis = right < totalPages - 1;

        const middle = range(left, right);
        const pages: Array<number | "…"> = [1];

        if (showLeftEllipsis) pages.push("…");
        pages.push(...middle);
        if (showRightEllipsis) pages.push("…");
        pages.push(totalPages);

        return pages;
    }, [page, siblingCount, totalPages]);

    const go = (p: number) => {
        const next = Math.min(totalPages, Math.max(1, p));
        if (next !== page) onChange(next);
    };

    return (
        <div className={`mt-8 flex items-center justify-between px-10 py-10 ${className}`}>
            <span className="text-sm text-gray-500">
                {total === 0
                    ? "Showing 0 results"
                    : `Showing ${showingCount} results from ${total}`}
            </span>

            <div className="flex items-center gap-2">
                <button
                    onClick={() => go(page - 1)}
                    disabled={page <= 1}
                    className="px-3 py-1 rounded border disabled:opacity-40"
                    aria-label="Previous page"
                >
                    Prev
                </button>

                {pagination.map((item, idx) =>
                    item === "…" ? (
                        <span
                            key={`dots-${idx}`}
                            className="px-2 text-gray-400 select-none"
                            aria-hidden="true"
                        >
                            …
                        </span>
                    ) : (
                        <button
                            key={item}
                            onClick={() => go(item)}
                            className={`px-3 py-1 rounded border ${item === page
                                ? "bg-white text-orange-500 font-semibold border-orange-500"
                                : ""
                                }`}
                            aria-label={`Page ${item}`}
                        >
                            {item}
                        </button>
                    )
                )}

                <button
                    onClick={() => go(page + 1)}
                    disabled={page >= totalPages}
                    className="px-3 py-1 rounded border disabled:opacity-40"
                    aria-label="Next page"
                >
                    Next
                </button>
            </div>
        </div>
    );
}
