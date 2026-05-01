
import Image from "next/image";

export default function ProductCard({ product }) {
    return (
        <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition group cursor-pointer w-full">

            <div className="relative h-48 w-full overflow-hidden bg-slate-200">
                <Image
                    src={product.imageUrl}
                    alt={product.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition duration-500"
                />
            </div>


            <div className="p-5">
                <span className="text-xs text-slate-500 uppercase tracking-wider">
                    {product.category}
                </span>
                <h3 className="font-semibold text-lg mt-1 mb-2 line-clamp-1">
                    {product.title}
                </h3>
                <p className="font-bold text-slate-900">
                    ${product.price.toFixed(2)}
                </p>
            </div>
        </div>
    );
}