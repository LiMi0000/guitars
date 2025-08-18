export default function WhyTry() {
    return (


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
    )
}