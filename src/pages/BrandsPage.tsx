import Brands from "../components/Brands";
import WhyTry from "../components/WhyTry";

export default function BrandsPage() {
    return (
        <div className="min-h-screen bg-white flex flex-col">
            <div className="">
                <div className="flex justify-between items-start ">
                    <div className="py-6 px-30 space-y-28">
                        <img src="/assets/guitars-logo.png" alt="Logo" className="h-10" />
                        <h1 className="text-4xl md:text-5xl font-bold text-center leading-tight mt-6 mb-4">
                            Browse top quality <br />
                            <span className="text-orange-500">Guitars</span> online
                        </h1>
                        <p className="text-gray-600 text-center">
                            Explore 50k+ latest collections of branded guitars <br /> online with
                            VibeStrings.
                        </p>
                    </div>

                    <div className="relative flex-shrink-0">
                        <img
                            src="/assets/unsplash_banner.png"
                            alt="Guitar with amp"
                            className="w-[500px] object-cover"
                        />

                        <div className="absolute -bottom-9 right-1/4 -translate-x-1/2">
                            <img
                                src="/assets/icon1.png"
                                alt="Icon1"
                                className="w-16 h-16 rounded-full bg-white p-2"
                            />
                        </div>
                    </div>

                </div>
            </div>


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



