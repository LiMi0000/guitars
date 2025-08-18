// src/components/BrandCard.tsx
type BrandCardProps = {
    name: string;
    logo?: string | null;
    onClick: () => void;
};

export default function BrandCard({ name, logo, onClick }: BrandCardProps) {
    return (
        <button
            onClick={onClick}
            className="group w-full rounded-xl border border-gray-200 p-6 hover:shadow-md transition flex items-center gap-4 bg-white"
        >
            {logo ? (
                <img src={logo} alt={name} className="h-10 w-auto object-contain" />
            ) : (
                <div className="h-10 w-10 rounded bg-gray-100" />
            )}
            <span className="text-lg font-medium group-hover:text-orange-500">
                {name}
            </span>
        </button>
    );
}
