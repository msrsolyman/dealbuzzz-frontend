import Image from 'next/image';

export default function FeaturedProductBanner() {
    return (

        <section className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm flex flex-wrap items-center justify-center gap-y-1.5 gap-x-10">

            {/* 2. FIXED WIDTH: Replaced w-1/3 with w-64 (256px). shrink-0 guarantees it will never get smaller than this. */}
            <div className="shrink-0 sm:w-64 max-x-64 w-full  aspect-square relative">
                <Image
                    src="https://images.unsplash.com/photo-1595225476474-87563907a212?q=80&w=600&auto=format&fit=crop"
                    alt="Shampoo, Conditioner & Facewash Packs"
                    fill
                    className="object-cover"
                />
            </div>


            <div className="flex-1  space-y-4">
                <h2 className="text-2xl font-bold text-slate-950 uppercase tracking-tight">
                    SHAMPOO, CONDITIONER & FACEWASH PACKS
                </h2>
                <p className="text-slate-600 text-sm">
                    Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur.
                </p>
                <p className="flex items-baseline gap-2">
                    <span className="text-lg text-slate-500 line-through">$200.00</span>
                    <span className="text-3xl font-bold text-slate-900">$150.00</span>
                </p>
                <div className="flex gap-2">
                    <button className="px-5 py-2 bg-pink-100 text-pink-600 rounded-md font-medium text-sm">
                        91 x 35
                    </button>
                    <button className="px-6 py-2 bg-pink-500 text-white rounded-md font-semibold text-sm hover:bg-pink-600 transition-colors uppercase cursor-pointer">
                        CART
                    </button>
                </div>
            </div>

        </section>
    );
}