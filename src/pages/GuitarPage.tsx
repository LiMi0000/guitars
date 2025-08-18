import { useLocation, useParams, Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { useEffect, useMemo, useState } from "react";
import { GET_MODEL } from "../graphql/queries";
import HeroHeader from "../components/HeroHeader";


type LocationState = { brandId?: string };

type Musician = {
    name: string;
    musicianImage?: string | null;
    bands: string[];
}

export default function GuitarPage() {
    const { guitarId } = useParams<{ guitarId: string }>();
    const { state } = useLocation();
    const brandId = (state as LocationState)?.brandId || "";

    const { data, loading, error } = useQuery(GET_MODEL, {
        variables: { brandId, modelId: guitarId! },
        skip: !brandId || !guitarId,
    });

    const model = data?.findUniqueModel;
    const [tab, setTab] = useState<"specs" | "musicians">("specs");

    const [page, setPage] = useState(0);
    const pageSize = 2;
    const musicians = useMemo(() => model?.musicians ?? [], [model]);
    const totalPages = Math.ceil(musicians.length / pageSize) || 1;
    const pageSlice = useMemo(
        () => musicians.slice(page * pageSize, page * pageSize + pageSize),
        [musicians, page]
    );

    useEffect(() => {
        setPage(0);
    }, [model?.id]);


    if (!brandId) {
        return (
            <div className="max-w-5xl mx-auto px-6 py-10">
                <p className="text-red-600">Missing brandId. Open this page from the models list.</p>
                <Link to="/" className="text-orange-600 underline">Back to home</Link>
            </div>
        );
    }
    if (loading) return <div className="p-8 text-center">Loading…</div>;
    if (error) return <div className="p-8 text-center text-red-600">Error: {error.message}</div>;
    if (!model) return <div className="p-8 text-center">Model not found.</div>;

    return (
        <div className="">
            <Link to={`/brands/${brandId}`} className="absolute text-sm text-gray-500 hover:text-gray-800 p-0.5">← Back to List</Link>

            <HeroHeader
                brandLogoSrc="/assets/guitars-logo.png"
                titleTop={model.name}
                titleHighlight=""
                titleAfter=""
                description={
                    ""
                }
                rightImageSrc="/assets/orange.png"
                rightImageAlt="Guitar with amp"
                floatIconSrc="/assets/icon1.png"
            />

            {model && (
                <div className="">
                    {model.image && (
                        <img
                            src={model.image}
                            alt={model.name}
                            className="h-82 w-82 object-contain right-15 absolute top-1 -rotate-45"
                        />
                    )}
                </div>
            )}

            <div className="flex justify-around items-start">


            </div>

            <div className="my-20">
                <div className="inline-flex gap-2 justify-between p-1 rounded-lg w-full">
                    <button
                        onClick={() => setTab("specs")}
                        className={`px-4 py-2  w-full border-b-2 ${tab === "specs"
                            ? "border-orange-500 text-orange-500 font-semibold"
                            : "border-gray-300 text-gray-400"
                            }`}
                    >
                        Specification
                    </button>

                    <button
                        onClick={() => setTab("musicians")}
                        className={`px-4 py-2 w-full border-b-2 ${tab === "musicians"
                            ? "border-orange-500 text-orange-500 font-semibold"
                            : "border-gray-300 text-gray-400"
                            }`}
                    >
                        Who plays it?
                    </button>

                </div>

                {tab === "specs" ? (
                    <div className="mt-6 px-10  flex flex-col items-center">
                        {model.description && (
                            <p className="text-gray-700 leading-relaxed mb-6 text-center max-w-7xl ">{model.description}</p>
                        )}

                        <ul className="list-disc list-inside space-y-2 text-gray-700 w-8/12">
                            {model.specs?.bodyWood && <li>Body Wood: {model.specs.bodyWood}</li>}
                            {model.specs?.neckWood && <li>Neck Wood: {model.specs.neckWood}</li>}
                            {model.specs?.fingerboardWood && <li>Fingerboard: {model.specs.fingerboardWood}</li>}
                            {model.specs?.pickups && <li>Pickups: {model.specs.pickups}</li>}
                            {model.specs?.tuners && <li>Tuners: {model.specs.tuners}</li>}
                            {model.specs?.scaleLength && <li>Scale Length: {model.specs.scaleLength}</li>}
                            {model.specs?.bridge && <li>Bridge: {model.specs.bridge}</li>}
                        </ul>
                    </div>
                ) : (
                    <div className="mt-6">
                        <div className="flex flex-wrap justify-center gap-6">
                            {pageSlice.map((p: Musician, i: number) => (
                                <div
                                    key={`${p.name}-${i}`}
                                    className="p-4 flex flex-col items-center bg-[#FFEFE8] rounded-lg shadow-sm w-96"
                                >
                                    {p.musicianImage ? (
                                        <img
                                            src={p.musicianImage}
                                            alt={p.name}
                                            className="w-full aspect-[3/4] object-cover rounded-md"
                                        />
                                    ) : (
                                        <div className="w-full aspect-[3/4] bg-gray-200 rounded-md" />
                                    )}
                                    <p className="mt-3 font-semibold">{p.name}</p>
                                    {/* {!!p.bands?.length && (
                                        <p className="text-xs text-gray-500">{p.bands.join(", ")}</p>
                                    )} */}
                                </div>
                            ))}
                        </div>

                        {musicians.length > pageSize && (
                            <div className="mt-4 flex justify-center gap-2">
                                {Array.from({ length: totalPages }).map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setPage(idx)}
                                        className={`h-2 w-2 rounded-full ${idx === page ? "bg-orange-500" : "bg-gray-300"
                                            }`}
                                        aria-label={`Page ${idx + 1}`}
                                    />
                                ))}
                            </div>
                        )}
                    </div>

                )}
            </div>
        </div>
    );
}

