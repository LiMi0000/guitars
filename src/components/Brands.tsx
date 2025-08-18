const brands = [
    { src: "/assets/brands/brand1.png", name: "Ibanez" },
    { src: "/assets/brands/brand2.png", name: "Martin & Co." },
    { src: "/assets/brands/brand3.png", name: "Fender" },
    { src: "/assets/brands/brand4.png", name: "Gibson" },
    { src: "/assets/brands/brand5.png", name: "Taylor" },
    { src: "/assets/brands/brand6.png", name: "Gretsch" },
    { src: "/assets/brands/brand7.png", name: "Takamine" },
    { src: "/assets/brands/brand8.png", name: "Seagull" },
];

export default function Brands() {
    return (
        <section className="py-40">
            <div className=" mx-auto text-center px-6">
                <h2 className="text-2xl md:text-3xl font-bold mb-2">
                    Featuring the <span className="text-orange-500">Best Brands</span>
                </h2>
                <p className="text-gray-500 mb-10">
                    Select your preferred brand and explore our exquisite collection.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x- gap-y-20 items-center">
                    {brands.map((brand) => (
                        <img
                            key={brand.name}
                            src={brand.src}
                            alt={brand.name}
                            className="grayscale hover:grayscale-0 transition mx-auto"
                        />
                    ))}
                    {/* <img src="/assets/brands/brand1.png" alt="Ibanez" className="grayscale hover:grayscale-0 transition mx-auto" />
                    <img src="/assets/brands/brand2.png" alt="Martin & Co." className="grayscale hover:grayscale-0 transition mx-auto" />
                    <img src="/assets/brands/brand3.png" alt="Fender" className="grayscale hover:grayscale-0 transition mx-auto" />
                    <img src="/assets/brands/brand4.png" alt="Gibson" className="grayscale hover:grayscale-0 transition mx-auto" />
                    <img src="/assets/brands/brand5.png" alt="Taylor" className="grayscale hover:grayscale-0 transition mx-auto" />
                    <img src="/assets/brands/brand6.png" alt="Gretsch" className="grayscale hover:grayscale-0 transition mx-auto" />
                    <img src="/assets/brands/brand7.png" alt="Takamine" className="grayscale hover:grayscale-0 transition mx-auto" />
                    <img src="/assets/brands/brand8.png" alt="Seagull" className="grayscale hover:grayscale-0 transition mx-auto" /> */}
                </div>
            </div>
        </section>

    );
}
