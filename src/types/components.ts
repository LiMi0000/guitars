export type BrandCardProps = {
    name: string;
    logo?: string | null;
    onClick: () => void;
};

export type Brand = {
    id: string;
    name: string;
    image?: string | null;
    origin?: string | null;
    categories?: string[] | null;
};


export type HeroHeaderProps = {
    brandLogoSrc?: string;
    backTo?: string;
    backLabel?: string;
    titleTop: string;
    titleHighlight: string;
    titleAfter?: string;
    description?: string;
    centerText?: boolean;

    rightImageSrc: string;
    rightImageAlt?: string;
    rightImageClassName?: string;

    floatIconSrc?: string;
    floatIconAlt?: string;
    floatIconClassName?: string;
    floatIconPositionClassName?: string;

    keepHighlightTogether?: boolean;
    forceBreak?: boolean;
};

export type PaginationProps = {
    page: number;
    total: number;
    pageSize: number;
    onChange: (nextPage: number) => void;
    siblingCount?: number;
    className?: string;
};
