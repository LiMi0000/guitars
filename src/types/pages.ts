export type LocationState = { brandId?: string };

export type Musician = {
    name: string;
    musicianImage?: string | null;
    bands: string[];
}


export type Model = {
    id: string;
    name: string;
    type: string;
    image?: string | null;
    price?: number | null;
};

export type Brand = {
    id: string;
    name: string;
    image?: string | null;
    origin?: string | null;
    categories?: string[] | null;
};