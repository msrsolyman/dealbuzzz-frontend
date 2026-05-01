import { Diamond, DiamondIcon, Footprints, Gem, Glasses, Handbag, Milk, MirrorRound, MoveRight, PillBottle, Shirt } from 'lucide-react';
import Image from 'next/image';

const categoryListData = [
    { id: 1, name: 'Clothes', icon: <Shirt /> },
    { id: 2, name: 'Footwear', icon: <Footprints /> },
    { id: 3, name: 'Jewelry', icon: <Gem /> },
    { id: 4, name: 'Perfume', icon: <Milk /> },
    { id: 5, name: 'Cosmetics', icon: <MirrorRound /> },
    { id: 6, name: 'Glasses', icon: <Glasses /> },
    { id: 7, name: 'Bags', icon: <Handbag /> },
];

const bestSellersData = [
    { id: 101, title: 'Baby Fabric Shoes', price: '$4.00', oldPrice: '$5.00', image: 'https://i.pinimg.com/1200x/ff/70/02/ff70020fad24fdd332e27f7252e24b19.jpg' },
    { id: 102, title: 'Men\'s Hoodies T-Shirt', price: '$7.00', oldPrice: '$17.00', image: 'https://i.pinimg.com/1200x/ff/70/02/ff70020fad24fdd332e27f7252e24b19.jpg' },
    { id: 103, title: 'Girls T-Shirt', price: '$3.00', oldPrice: '$5.00', image: 'https://i.pinimg.com/1200x/ff/70/02/ff70020fad24fdd332e27f7252e24b19.jpg' },
    { id: 104, title: 'Woolen Hat For Men', price: '$12.00', oldPrice: '$15.00', image: 'https://i.pinimg.com/1200x/ff/70/02/ff70020fad24fdd332e27f7252e24b19.jpg' },
];

export default function LeftSidebar() {
    return (
        <aside className="w-full space-y-12">

            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                <h2 className="text-xl font-bold text-slate-900 mb-6 uppercase tracking-tight">Category</h2>
                <ul className="space-y-4">
                    {categoryListData.map((item) => (
                        <li key={item.id} className="flex items-center gap-3 text-slate-700 hover:text-pink-600 transition-colors cursor-pointer group">
                            <span className="text-xl">{item.icon}</span>
                            <span className="text-sm font-medium flex-1">{item.name}</span>
                            <span className="text-slate-400 group-hover:text-pink-400 text-xs">
                                <MoveRight />
                            </span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Best Sellers Sidebar */}
            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                <h2 className="text-xl font-bold text-slate-900 mb-6 uppercase tracking-tight">Best Sellers</h2>
                <ul className="space-y-5">
                    {bestSellersData.map((product) => (
                        <li key={product.id} className="flex gap-4 items-center group cursor-pointer">
                            <div className="flex-shrink-0 w-16 h-16 bg-slate-100 rounded-md overflow-hidden relative border border-slate-100">
                                <Image src={product.image} alt={product.title} fill className="object-cover" />
                            </div>
                            <div>
                                <h3 className="text-sm font-semibold text-slate-800 group-hover:text-pink-600 line-clamp-1">
                                    {product.title}
                                </h3>
                                <p className="text-slate-500 text-xs mt-1">
                                    <span className="line-through">{product.oldPrice}</span> <span className="font-bold text-slate-900 text-sm ml-1">{product.price}</span>
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    );
}