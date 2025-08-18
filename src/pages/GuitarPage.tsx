import { useLocation, useParams, Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { useMemo, useState } from "react";
import { GET_MODEL } from "../graphql/queries";


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
        <div className="max-w-6xl mx-auto px-6 py-10">
            <div className="flex justify-between items-start">
                <div className="max-w-xl">
                    <Link to={`/brands/${brandId}`} className="text-sm text-gray-500 hover:text-gray-800">← Back to List</Link>
                    <h1 className="mt-4 text-3xl md:text-4xl font-bold leading-tight">
                        {model.name}
                        <span className="block text-lg text-gray-500">{model.type}</span>
                    </h1>
                    {model.description && <p className="mt-4 text-gray-600">{model.description}</p>}
                </div>
                {model.image && (
                    <img src={model.image} alt={model.name} className="w-[420px] max-w-full object-contain rounded-xl bg-white" />
                )}
            </div>

            <div className="mt-10">
                <div className="inline-flex gap-2 bg-gray-100 p-1 rounded-lg">
                    <button onClick={() => setTab("specs")} className={`px-4 py-2 rounded-md ${tab === "specs" ? "bg-white shadow" : "text-gray-600"}`}>Specification</button>
                    <button onClick={() => setTab("musicians")} className={`px-4 py-2 rounded-md ${tab === "musicians" ? "bg-white shadow" : "text-gray-600"}`}>Who plays it?</button>
                </div>

                {tab === "specs" ? (
                    <ul className="mt-6 space-y-2 text-sm max-w-xl">
                        <Spec label="Body Wood" value={model.specs?.bodyWood} />
                        <Spec label="Neck Wood" value={model.specs?.neckWood} />
                        <Spec label="Fingerboard" value={model.specs?.fingerboardWood} />
                        <Spec label="Pickups" value={model.specs?.pickups} />
                        <Spec label="Tuners" value={model.specs?.tuners} />
                        <Spec label="Scale Length" value={model.specs?.scaleLength} />
                        <Spec label="Bridge" value={model.specs?.bridge} />
                    </ul>
                ) : (
                    <div className="mt-6">
                        <div className="grid sm:grid-cols-2 gap-6">
                            {pageSlice.map((p: Musician, i: number) => (
                                <div key={`${p.name}-${i}`} className="rounded-xl border p-4 bg-white">
                                    <div className="flex items-center gap-4">
                                        {p.musicianImage ? (
                                            <img className="w-16 h-16 rounded-lg object-cover" src={p.musicianImage} alt={p.name} />
                                        ) : (
                                            <div className="w-16 h-16 rounded-lg bg-gray-200" />
                                        )}
                                        <div>
                                            <p className="font-semibold">{p.name}</p>
                                            {!!p.bands?.length && (
                                                <p className="text-xs text-gray-500">{p.bands.join(", ")}</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {musicians.length > pageSize && (
                            <div className="mt-4 flex items-center gap-2">
                                {Array.from({ length: totalPages }).map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setPage(idx)}
                                        className={`h-2 w-2 rounded-full ${idx === page ? "bg-orange-500" : "bg-gray-300"}`}
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

function Spec({ label, value }: { label: string; value?: string | null }) {
    return (
        <li className="flex justify-between border-b py-2">
            <span className="text-gray-500">{label}</span>
            <span className="font-medium">{value || "—"}</span>
        </li>
    );
}
