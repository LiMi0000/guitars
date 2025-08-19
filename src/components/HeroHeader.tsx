import type { HeroHeaderProps } from '../types/components';

export default function HeroHeader({
    brandLogoSrc,
    backTo,
    // backLabel = "Back To Home",
    titleTop,
    titleHighlight,
    titleAfter,
    description,
    centerText,
    rightImageSrc,
    rightImageAlt,
    rightImageClassName = "w-[500px] object-cover",
    floatIconSrc,
    floatIconAlt = "icon",
    floatIconClassName = "w-16 h-16 rounded-full bg-white p-2",
    floatIconPositionClassName = "absolute -bottom-9 right-1/4 -translate-x-1/2",
    keepHighlightTogether = true,
    forceBreak = false,
}: HeroHeaderProps) {
    const highlightText = keepHighlightTogether
        ? titleHighlight.replace(/ /g, "\u00A0")
        : titleHighlight;

    return (
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
                    {titleTop}  {forceBreak ? <br /> : ""}
                    <span
                        className={[
                            "text-orange-500",
                            keepHighlightTogether ? "whitespace-nowrap" : "",
                        ].join(" ")}
                    >
                        {highlightText}
                    </span>
                    {titleAfter ? ` ${titleAfter}` : ""}
                </h1>

                {description && (
                    <p
                        className={[
                            "text-gray-600 max-w-2xl",
                            centerText ? "mx-auto text-center" : "",
                        ].join(" ")}
                    >
                        {description}
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
    );
}
