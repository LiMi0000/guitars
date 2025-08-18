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


            <section className="py-40">
                <div className=" mx-auto text-center px-6">
                    <h2 className="text-2xl md:text-3xl font-bold mb-2">
                        Featuring the <span className="text-orange-500">Best Brands</span>
                    </h2>
                    <p className="text-gray-500 mb-10">
                        Select your preferred brand and explore our exquisite collection.
                    </p>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x- gap-y-20 items-center">
                        <img src="/assets/brands/brand1.png" alt="Ibanez" className="grayscale hover:grayscale-0 transition mx-auto" />
                        <img src="/assets/brands/brand2.png" alt="Martin & Co." className="grayscale hover:grayscale-0 transition mx-auto" />
                        <img src="/assets/brands/brand3.png" alt="Fender" className="grayscale hover:grayscale-0 transition mx-auto" />
                        <img src="/assets/brands/brand4.png" alt="Gibson" className="grayscale hover:grayscale-0 transition mx-auto" />
                        <img src="/assets/brands/brand5.png" alt="Taylor" className="grayscale hover:grayscale-0 transition mx-auto" />
                        <img src="/assets/brands/brand6.png" alt="Gretsch" className="grayscale hover:grayscale-0 transition mx-auto" />
                        <img src="/assets/brands/brand7.png" alt="Takamine" className="grayscale hover:grayscale-0 transition mx-auto" />
                        <img src="/assets/brands/brand8.png" alt="Seagull" className="grayscale hover:grayscale-0 transition mx-auto" />
                    </div>
                </div>
            </section>


            <section className="bg-black text-white py-20 md:py-24">
                <div className="flex flex-col items-center space-y-16 sm:space-y-20">
                    <div>
                        <p className="text-3xl sm:text-4xl md:text-5xl text-center">
                            Why try <span className="text-orange-500">VibeStrings</span>
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row flex- justify-center md:justify-evenly gap-10 md:gap-20 w-full">

                        <div className="flex flex-col items-center text-center space-y-2 basis-full sm:basis-1/2 md:basis-1/3">
                            <div className="p-4 bg-[#262626] rounded-2xl mb-8">
                                <img src="/assets/icons/smooth-browsing.png" alt="" className="w-6 h-6 md:w-7 md:h-7" />
                            </div>
                            <p className="uppercase">Smooth Browsing</p>
                            <p className="text-xs sm:text-sm text-center text-gray-800">
                                Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
                            </p>
                        </div>

                        <div className="flex flex-col items-center text-center space-y-2 basis-full sm:basis-1/2 md:basis-1/3">
                            <div className="p-4 bg-[#262626] rounded-2xl mb-8">
                                <img src="/assets/icons/easy-delivery.png" alt="" className="w-6 h-6 md:w-7 md:h-7" />
                            </div>
                            <p className="uppercase">Easy Delivery</p>
                            <p className="text-xs sm:text-sm text-center text-gray-800">
                                Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
                            </p>
                        </div>

                        <div className="flex flex-col items-center text-center space-y-2 basis-full sm:basis-1/2 md:basis-1/3">
                            <div className="p-4 bg-[#262626] rounded-2xl mb-8">
                                <img src="/assets/icons/swift-payments.png" alt="" className="w-6 h-6 md:w-7 md:h-7" />
                            </div>
                            <p className="uppercase">Swift Payments</p>
                            <p className="text-xs sm:text-sm text-center text-gray-800">
                                Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
                            </p>
                        </div>

                    </div>
                </div>
            </section>


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



