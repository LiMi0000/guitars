import { useQuery, useLazyQuery } from "@apollo/client";
import { useParams, Link } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { GET_BRAND_MODELS, SEARCH_MODELS } from "../graphql/queries";
import { useNavigate } from "react-router-dom";
import HeroHeader from "../components/HeroHeader";
import { GET_BRANDS } from "../graphql/queries";
import Pagination from "../components/Pagination";
import type { Brand, Model } from "../types/pages";


export default function ModelsPage() {
    const { data } = useQuery<{ findAllBrands: Brand[] }>(GET_BRANDS);
    const brands = data?.findAllBrands ?? [];

    const navigate = useNavigate();
    const { brandId } = useParams<{ brandId: string }>();
    const brand = brands.find((b) => b.id === brandId);
    // const location = useLocation();
    // const brandName = (location.state as LocationState)?.brandName ?? "";

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

    const models: Model[] = useMemo(() => {
        return search.trim().length > 0
            ? (searchData?.searchModels ?? [])
            : (baseData?.findBrandModels ?? []);
    }, [search, searchData, baseData]);

    const filteredModels =
        filterType === "" || filterType === "all"
            ? models
            : models.filter((m) => m.type?.toLowerCase() === filterType.toLowerCase());


    const loading = baseLoading || searchLoading;
    const error = baseError || searchError;




    const [page, setPage] = useState(1);
    const pageSize = 6;
    useEffect(() => {
        setPage(1);
    }, [search, filterType, models]);

    // const total = filteredModels?.length;
    // const totalPages = Math.max(1, Math.ceil(total / pageSize));
    const startIdx = (page - 1) * pageSize;
    const pageItems = filteredModels?.slice(startIdx, startIdx + pageSize);

    return (
        <div className="relative">
            <Link to={`/`} className="absolute text-sm text-gray-500 hover:text-gray-800">← Back to Brands</Link>

            <HeroHeader
                brandLogoSrc="/assets/guitars-logo.png"
                titleTop="Play like a"
                titleHighlight="Rock star"
                titleAfter=""
                description={
                    "With a legacy dating back to the 1950s, Ibanez blends expert craftsmanship with cutting-edge innovation to deliver guitars that inspire creativity and elevate your performance. Trusted by top artists worldwide, Ibanez guitars are built to play fast, sound bold, and stand out on any stage. Ask ChatGPT"
                }
                rightImageSrc="/assets/orange.png"
                rightImageAlt="Guitar with amp"
                floatIconSrc="/assets/icon1.png"
            />

            {brand && (
                <div className="">
                    {brand.image && (
                        <img
                            src={brand.image}
                            alt={brand.name}
                            className="h-82 w-82 object-contain right-15 absolute top-1 opacity-40"
                        />
                    )}
                </div>
            )}


            <h1 className="text-3xl font-bold mb-6 text-center mt-20">Check out the <span className="text-orange-500">Selection</span></h1>

            <div className="flex flex-col sm:flex-row gap-4 mb-8 sm:justify-end px-10">
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

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-10">
                {pageItems.map((m) => (
                    <div
                        key={m.id}
                        className="p-4 bg-white hover:shadow-md transition"
                    >
                        {m.image && (
                            <div
                                onClick={() => navigate(`/guitars/${m.id}`, { state: { brandId } })}
                                className="p-4 bg-white transition cursor-pointer"
                            >
                                <img
                                    src={m.image}
                                    alt={m.name}
                                    className="h-40 w-full object-contain mb-3"
                                />
                            </div>
                        )}
                        <h3 className="font-semibold">{m.name}</h3>
                        <p className="font-medium text-gray-400">
                            {m.price ? `$${m.price}` : "Price N/A"}
                        </p>
                    </div>
                ))}
            </div>

            <Pagination
                page={page}
                total={filteredModels.length}
                pageSize={pageSize}
                onChange={setPage}
            />

        </div>
    );
}

