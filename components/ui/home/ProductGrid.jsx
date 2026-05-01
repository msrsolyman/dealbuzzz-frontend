import ProductCard from './ProductCard';

const arrivalsProducts = [
    { id: 201, title: 'Item 1', category: 'Clothing', price: 20.00, imageUrl: 'https://i.pinimg.com/736x/d4/9b/00/d49b00238d420dae241c2c10d460471e.jpg' },
    { id: 202, title: 'Item 2', category: 'Clothing', price: 25.00, imageUrl: 'https://i.pinimg.com/736x/ee/f9/5f/eef95fa7ccb0e7c3cce286dcdf8e5b81.jpg' },
    { id: 203, title: 'Item 3', category: 'Clothing', price: 30.00, imageUrl: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=300&h=300' }
];

const gridSections = [
    { id: 1, title: 'New Arrivals', products: arrivalsProducts },
    { id: 2, title: 'Trending', products: arrivalsProducts },
    { id: 3, title: 'Top Rated', products: arrivalsProducts },
];

function SectionRow({ title, products }) {
    return (
        <div className="mb-4 w-full">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 uppercase tracking-tight border-b border-slate-200 pb-3">
                {title}
            </h2>

            <div className="flex flex-wrap -mx-4">
                {products.map((product) => (
                    <div key={product.id} className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
                        <ProductCard product={product} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function ProductGrid() {
    return (
        <section className="flex-grow w-full">
            <div className="flex flex-col">
                {gridSections.map((section) => (
                    <SectionRow
                        key={section.id}
                        title={section.title}
                        products={section.products}
                    />
                ))}
            </div>
        </section>
    );
}