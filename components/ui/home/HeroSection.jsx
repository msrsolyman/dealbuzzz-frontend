
import Image from 'next/image';

export default function HeroSection() {
    return (
        <section className="relative w-full bg-slate-50 overflow-hidden py-16 md:py-20 lg:py-24">

            <div className="absolute inset-0 z-0 opacity-10">
                <div className="absolute top-0 right-0 w-100 h-100 bg-red-100 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-125 h-125 bg-orange-100 rounded-full blur-3xl"></div>
            </div>


            <div className="absolute bottom-0 left-0 w-full z-0 h-1/2">
                <svg viewBox="0 0 1440 320" className="absolute bottom-0 left-0 w-full h-full fill-white" preserveAspectRatio="none">
                    <path d="M0,192L48,197.3C96,203,192,213,288,192C384,171,480,117,576,101.3C672,85,768,107,864,128C960,149,1056,171,1152,165.3C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Left Content */}
                <div className="space-y-4 md:space-y-6">
                    <p className="text-pink-500 font-medium text-lg uppercase tracking-wide">
                        Trending Item
                    </p>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-950 leading-tight">
                        WOMEN&apos;S LATEST FASHION SALE
                    </h1>
                    <p className="text-slate-600 text-lg md:text-xl flex items-baseline gap-2">
                        starting at
                        <span className="text-3xl font-bold text-slate-900">$20.00</span>
                    </p>
                    <button className="inline-flex items-center gap-2 px-8 py-3 bg-pink-500 text-white rounded-md font-semibold hover:bg-pink-600 cursor-pointer transition-colors">
                        SHOP NOW
                    </button>
                </div>


                <div className="w-full h-[300px] md:h-[500px] lg:h-[600px] flex items-center justify-center relative">

                    <div className="relative w-full h-full">
                        <Image
                            src="https://i.pinimg.com/736x/62/68/27/626827391c64740114ba371f91703353.jpg"
                            alt="Fashion Models"
                            fill
                            priority
                            className="object-contain"
                        />
                    </div>

                    <span className="absolute bottom-10 left-10 md:left-20 text-xs text-pink-300 font-bold tracking-widest opacity-70">
                        JUST FOR YOU
                    </span>
                </div>
            </div>
        </section>
    );
}