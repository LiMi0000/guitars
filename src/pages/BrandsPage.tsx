import Brands from "../components/Brands";
import HeroHeader from "../components/HeroHeader";
import WhyTry from "../components/WhyTry";

export default function BrandsPage() {
    return (
        <div className="min-h-screen bg-white flex flex-col">
            <HeroHeader
                brandLogoSrc="/assets/guitars-logo.png"
                titleTop="Browse top quality"
                titleHighlight="Guitars"
                titleAfter="online"
                description={
                    "Explore 50k+ latest collections of branded guitars \n online with VibeStrings."
                }
                rightImageSrc="/assets/unsplash_banner.png"
                rightImageAlt="Guitar with amp"
                floatIconSrc="/assets/icon1.png"
            />


            <Brands />

            <WhyTry />



            <section className="py-40">
                <div className="flex items-center justify-center space-x-20">
                    <div className="space-y-10">
                        <p className="text-center text-6xl leading-snug">Browse and buy your <br /> <span className="text-orange-500">favorite guitars</span> with <br /> VibeStrings.</p>

                        <div className="flex gap-6 mt-8">
                            <a
                                href="#"
                                className="flex items-center gap-4 bg-black text-white px-6 py-3 rounded-md shadow hover:opacity-90 transition"
                            >
                                <img
                                    src="/assets/icons/google.png"
                                    alt="Google Play"
                                    className="w-8 h-8"
                                />
                                <div className="flex flex-col leading-tight">
                                    <span className="text-xs">GET IT ON</span>
                                    <span className="font-semibold text-base">Google Play</span>
                                </div>
                            </a>


                            <a
                                href="#"
                                className="flex items-center gap-4 bg-black text-white px-6 py-3 rounded-md shadow hover:opacity-90 transition"
                            >
                                <img
                                    src="/assets/icons/apple.png"
                                    alt="App Store"
                                    className="w-auto h-8"
                                />
                                <div className="flex flex-col leading-tight">
                                    <span className="text-xs">Download on the</span>
                                    <span className="font-semibold text-base">App Store</span>
                                </div>
                            </a>
                        </div>


                    </div>
                    <div className="relative flex justify-center items-center">

                        <img src="/assets/ellipse.png" alt="Ellipse" className="w-[500px]" />


                        <div className="absolute inset-0 flex items-center justify-center">
                            <img
                                src="/assets/mobile1.png"
                                alt="Mobile 1"
                                className="w-72 md:w-80 transform -translate-y-10 -mr-12"
                            />
                            <img
                                src="/assets/mobile2.png"
                                alt="Mobile 2"
                                className="w-72 md:w-80 transform translate-y-10 -ml-12"
                            />
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
}



