import { Link } from "react-router-dom";

type HeroHeaderProps = {
    backTo?: string;
    backLabel?: string;
    brandLogoSrc?: string;


    titleTop: string;
    titleHighlight: string;
    titleAfter?: string;
    description?: string;
    centerText?: boolean;


    rightImageSrc: string;
    rightImageAlt?: string;
    rightImageClassName?: string;


    floatIconSrc?: string;
    floatIconAlt?: string;
    floatIconClassName?: string;
    floatIconPositionClassName?: string;
};

export default function HeroHeader({
    backTo,
    backLabel = "Back",
    brandLogoSrc,

    titleTop,
    titleHighlight,
    titleAfter,
    description,
    centerText = true,

    rightImageSrc,
    rightImageAlt = "",
    rightImageClassName = "w-[500px] object-cover",

    floatIconSrc,
    floatIconAlt = "Icon",
    floatIconClassName = "w-16 h-16 rounded-full bg-white p-2",
    floatIconPositionClassName = "absolute -bottom-9 right-1/4 -translate-x-1/2",
}: HeroHeaderProps) {
    return (
        <header className="bg-white">
            <div className="">
                {(backTo || brandLogoSrc) && (
                    <div className="flex items-center gap-4">
                        {backTo && (
                            <Link to={backTo} className="text-sm text-gray-500 hover:text-gray-800">
                                ← {backLabel}
                            </Link>
                        )}

                    </div>
                )}

                <div className="flex justify-between items-start">
                    <div className="py-6 px-0 md:px-20 space-y-6 md:space-y-2">
                        {brandLogoSrc && !backTo && (
                            <img src={brandLogoSrc} alt="Logo" className="h-10" />
                        )}

                        <h1
                            className={[
                                "text-4xl md:text-5xl font-bold leading-tight mt-24",
                                centerText ? "text-center" : "",
                            ].join(" ")}
                        >
                            {titleTop} <br />
                            <span className="text-orange-500">{titleHighlight}</span>
                            {titleAfter ? ` ${titleAfter}` : ""}
                        </h1>

                        {description && (
                            <p className={["text-gray-600", centerText ? "text-center" : ""].join(" ")}>
                                Explore 50k+ latest collections of branded guitars <br />
                                online with VibeStrings.
                            </p>
                        )}
                    </div>

                    <div className="relative flex-shrink-0">
                        <img
                            src={rightImageSrc}
                            alt={rightImageAlt}
                            className={rightImageClassName}
                        />

                        {floatIconSrc && (
                            <div className={floatIconPositionClassName}>
                                <img
                                    src={floatIconSrc}
                                    alt={floatIconAlt}
                                    className={floatIconClassName}
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
}
