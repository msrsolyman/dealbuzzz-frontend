import HeroSection from '@/components/ui/home/HeroSection';
import TopCategoriesBar from '@/components/ui/home/TopCategoriesBar';
import LeftSidebar from '@/components/ui/home/LeftSidebar';
import ProductGrid from '@/components/ui/home/ProductGrid';
import FeaturedProductBanner from '@/components/ui/home/FeaturedProductBanner';

export default function HomePage() {
    return (
        <div className="flex flex-col w-full min-h-screen bg-slate-50">
            <HeroSection />
            <TopCategoriesBar />
            <main className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-20 flex flex-col md:flex-row gap-10">

                <div className="w-full md:w-1/4">
                    <LeftSidebar />
                </div>

                <div className="flex-1 space-y-12">
                    <ProductGrid />
                    <FeaturedProductBanner />
                </div>

            </main>

        </div>
    );
}