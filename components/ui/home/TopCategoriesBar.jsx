
import Image from 'next/image';

const topCategoriesData = [
    { id: 1, name: 'DRESS & FROCK', count: '(53)', icon: 'https://i.pinimg.com/1200x/7a/1b/1f/7a1b1f55e212f2dcef53edd4fbc098b0.jpg' },
    { id: 2, name: 'WINTER WEAR', count: '(58)', icon: 'https://i.pinimg.com/736x/ff/1e/03/ff1e03aaad0f062d4b1a0dcf87492194.jpg' },
    { id: 3, name: 'GLASSES & LENS', count: '(58)', icon: 'https://i.pinimg.com/736x/9a/ae/ce/9aaeceaca2312f5c7e2a2aae38712d1d.jpg' },
    { id: 4, name: 'SHORTS & JEANS', count: '(84)', icon: 'https://i.pinimg.com/736x/b3/a6/4f/b3a64fbc01976e683a8511307f724a33.jpg' },
];

export default function TopCategoriesBar() {
    return (
        <section className="bg-slate-50 border-t border-slate-100 py-8">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    {topCategoriesData.map((category) => (
                        <div key={category.id} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-center gap-5 hover:border-slate-200 transition-colors cursor-pointer group">
                            <div className="flex-shrink-0 w-16 h-16 bg-slate-100 rounded-full overflow-hidden flex items-center justify-center border border-slate-200 relative">


                                <Image alt={category.name} src={category.icon} sizes='200px' fill />

                            </div>
                            <div className="flex-1">
                                <p className="text-sm font-semibold text-slate-800 uppercase tracking-tight group-hover:text-pink-600 transition-colors">
                                    {category.name}
                                </p>
                                <p className="text-xs text-slate-500">{category.count}</p>
                                <span className="text-pink-500 font-medium text-xs mt-1 block group-hover:underline">Show All</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}