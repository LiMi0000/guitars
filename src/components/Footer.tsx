export default function Footer() {
    return (
        <footer className="bg-[#eeeeee]">
            <div className="max-w-6xl mx-auto px-6 py-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <img src="/assets/guitars-logo.png" alt="VibeStrings" className="h-7 w-auto" />
                        </div>
                        <ul className="space-y-3 text-sm text-gray-600">
                            <li className="flex items-center gap-3">
                                <img src="/assets/icons/mail.png" alt="" width={20} height={20} />
                                <span>Enquiry@VibeStrings.com</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <img src="/assets/icons/location.png" alt="" width={20} height={20} />
                                <span>San Francisco</span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-semibold tracking-wide text-gray-900 mb-4">PAGES</h4>
                        <ul className="space-y-3 text-sm text-gray-600">
                            <li><a href="#" className="hover:text-gray-900">Store</a></li>
                            <li><a href="#" className="hover:text-gray-900">Collections</a></li>
                            <li><a href="#" className="hover:text-gray-900">Support</a></li>
                        </ul>
                    </div>


                    <div>
                        <h4 className="text-sm font-semibold tracking-wide text-gray-900 mb-4">PRODUCT</h4>
                        <ul className="space-y-3 text-sm text-gray-600">
                            <li><a href="#" className="hover:text-gray-900">Terms</a></li>
                            <li><a href="#" className="hover:text-gray-900">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-gray-900">Copyright</a></li>
                        </ul>
                    </div>


                    <div>
                        <h4 className="text-sm font-semibold tracking-wide text-gray-900 mb-4">FOLLOW US</h4>
                        <div className="flex items-center gap-5 text-gray-700">
                            <a href="#" aria-label="Facebook" className="hover:text-black">
                                <img src="/assets/icons/fb.png" alt="" width={25} height={25} />
                            </a>
                            <a href="#" aria-label="Twitter" className="hover:text-black">
                                <img src="/assets/icons/x.png" alt="" width={25} height={25} />
                            </a>
                            <a href="#" aria-label="Instagram" className="hover:text-black">
                                <img src="/assets/icons/ig.png" alt="" width={25} height={25} />
                            </a>
                        </div>
                    </div>
                </div>


                <div className="mt-10 border-gray-300 pt-6">
                    <p className="text-center text-sm text-gray-600">© {new Date().getFullYear()} Copyright.VibeStrings</p>
                </div>
            </div>
        </footer>
    );
}
