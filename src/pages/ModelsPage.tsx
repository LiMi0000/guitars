import { useQuery, useLazyQuery } from "@apollo/client";
import { useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { GET_BRAND_MODELS, SEARCH_MODELS } from "../graphql/queries";

type Model = {
    id: string;
    name: string;
    type: string;
    image?: string | null;
    price?: number | null;
};

type LocationState = { brandName?: string };

export default function ModelsPage() {
    const { brandId } = useParams<{ brandId: string }>();
    const location = useLocation();
    const brandName = (location.state as LocationState)?.brandName ?? "";

    const [search, setSearch] = useState("");
    const [filterType, setFilterType] = useState("");

    const {
        data: baseData,
        loading: baseLoading,
        error: baseError,
    } = useQuery<{ findBrandModels: Model[] }>(GET_BRAND_MODELS, {
        variables: { id: brandId!, sortBy: { field: "name", order: "ASC" } },
    });


    const [
        runSearch,
        { data: searchData, loading: searchLoading, error: searchError },
    ] = useLazyQuery<{ searchModels: Model[] }>(SEARCH_MODELS, {
        fetchPolicy: "cache-and-network",
    });


    useEffect(() => {
        const q = search.trim();
        if (!q) return;

        const t = setTimeout(() => {
            runSearch({ variables: { brandId: brandId!, name: q } });
        }, 300);

        return () => clearTimeout(t);
    }, [search, brandId, runSearch]);

    const models =
        search.trim().length > 0
            ? searchData?.searchModels ?? []
            : baseData?.findBrandModels ?? [];

    const filteredModels =
        filterType === "" || filterType === "all"
            ? models
            : models.filter((m) => m.type?.toLowerCase() === filterType.toLowerCase());


    const loading = baseLoading || searchLoading;
    const error = baseError || searchError;

    return (
        <div className="max-w-10/12 mx-auto px-6 py-12">
            <h1 className="text-3xl font-bold mb-6 text-center">Check out the <span className="text-orange-500">Selection</span></h1>

            <div className="flex flex-col sm:flex-row gap-4 mb-8 sm:justify-end">
                <select
                    value={filterType}
                    onChange={(e) => setFilterType(e.target.value)}
                    className="border rounded-lg border-gray-300 px-3 py-2 w-full sm:w-44"
                >
                    <option value="" disabled>
                        Filter by type
                    </option>
                    <option value="all">All Types</option>
                    <option value="electric">Electric</option>
                    <option value="acoustic">Acoustic</option>
                    <option value="bass">Bass</option>
                </select>

                <div className="relative w-full sm:w-80">
                    <img
                        src="/assets/icons/search.png"
                        width={16}
                        height={16}
                        className="absolute left-3 top-1/2 -translate-y-1/2"
                        alt="search"
                    />
                    <input
                        type="text"
                        placeholder="Search by name"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full border rounded-lg border-gray-300 pl-10 pr-4 py-2"
                    />
                </div>
            </div>


            {loading && <p>Loading models…</p>}
            {error && (
                <p className="text-red-600">Error loading models: {error.message}</p>
            )}

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {filteredModels.map((m) => (
                    <div
                        key={m.id}
                        className="p-4 bg-white hover:shadow-md transition"
                    >
                        {m.image && (
                            <img
                                src={m.image}
                                alt={m.name}
                                className="h-40 w-full object-contain mb-3"
                            />
                        )}
                        <h3 className="font-semibold">{m.name}</h3>
                        <p className="font-medium text-gray-400">
                            {m.price ? `$${m.price}` : "Price N/A"}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
