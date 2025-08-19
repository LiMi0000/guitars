import { useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { GET_BRANDS } from "../graphql/queries";

type Brand = {
    id: string;
    name: string;
    image?: string | null;
    origin?: string | null;
    categories?: string[] | null;
};


export default function Brands() {
    const { data, loading, error } = useQuery<{ findAllBrands: Brand[] }>(GET_BRANDS);
    const navigate = useNavigate();

    if (loading) {
        return <section className="py-40 text-center"><p>Loading brands…</p></section>;
    }

    if (error) {
        return <section className="py-40 text-center"><p className="text-red-600">Error: {error.message}</p></section>;
    }

    const brands = data?.findAllBrands ?? [];

    return (
        <section className="py-40">
            <div className="mx-auto text-center px-6">
                <h2 className="text-2xl md:text-3xl font-bold mb-2">
                    Featuring the <span className="text-orange-500">Best Brands</span>
                </h2>
                <p className="text-gray-500 mb-10">
                    Select your preferred brand and explore our exquisite collection.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-20 items-center opacity-50">
                    {brands.map((brand) => (
                        <button
                            key={brand.id}
                            onClick={() =>
                                navigate(`/brands/${brand.id}`, {
                                    state: {
                                        brandName: brand.name,
                                        brandImage: brand.image,
                                        brandOrigin: brand.origin,
                                        brandCategories: brand.categories,
                                    },
                                })
                            }
                            className="grayscale hover:grayscale-0 transition mx-auto"
                        >
                            {brand.image ? (
                                <img src={brand.image} alt={brand.name} className="h-16 object-contain cursor-pointer" />
                            ) : (
                                <span className="text-lg font-semibold">{brand.name}</span>
                            )}
                        </button>

                    ))}
                </div>
            </div>
        </section >
    );
}
