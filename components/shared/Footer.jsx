'use client'
import Image from "next/image";
import Link from "next/link";
import { BsFacebook } from "react-icons/bs";
import { FaCcMastercard, FaCcPaypal, FaFacebook, FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GrVisa } from "react-icons/gr";
import { RiVisaFill } from "react-icons/ri";

const quickLinks = ["About Us", "Categories", "Shop", "Contact", "Blog"];
const customerService = ["Help & FAQs", "Returns & Exchanges", "Shipping Info", "Track Order", "Terms & Conditions"];

export default function Footer() {
    return (
        <footer className="bg-slate-50 pt-16 pb-8 border-t border-slate-200 mt-auto w-full">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

                {/* --- MAIN FOOTER GRID --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-16">

                    {/* 1. BRAND & SOCIAL MEDIA */}
                    <div className="space-y-6">
                        <Link href="/" className="inline-block relative w-16 h-16 cursor-pointer">
                            <Image
                                src="/logo.png"
                                alt="Brand Logo"
                                fill
                                className="object-contain"
                            />
                        </Link>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            Discover the latest trends in women&apos;s fashion, beauty, and accessories. Premium quality items curated just for you.
                        </p>

                        {/* Social Icons */}
                        <div className="flex items-center gap-4">
                            {/* Facebook */}
                            <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-slate-600 shadow-sm border border-slate-100 hover:text-white hover:bg-pink-500 hover:border-pink-500 transition-all cursor-pointer">
                                <FaFacebookF />
                            </a>
                            {/* Instagram */}
                            <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-slate-600 shadow-sm border border-slate-100 hover:text-white hover:bg-pink-500 hover:border-pink-500 transition-all cursor-pointer">
                                <FaInstagram />
                            </a>
                            {/* Twitter/X */}
                            <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-slate-600 shadow-sm border border-slate-100 hover:text-white hover:bg-pink-500 hover:border-pink-500 transition-all cursor-pointer">
                                <FaXTwitter />
                            </a>
                        </div>
                    </div>

                    {/* 2. QUICK MENU */}
                    <div>
                        <h3 className="text-slate-900 font-bold uppercase tracking-tight mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link}>
                                    <Link href="#" className="text-slate-600 hover:text-pink-500 text-sm transition-colors cursor-pointer inline-flex items-center gap-2 group">
                                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-pink-500 transition-colors"></span>
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* 3. CUSTOMER SERVICE */}
                    <div>
                        <h3 className="text-slate-900 font-bold uppercase tracking-tight mb-6">Customer Service</h3>
                        <ul className="space-y-3">
                            {customerService.map((link) => (
                                <li key={link}>
                                    <Link href="#" className="text-slate-600 hover:text-pink-500 text-sm transition-colors cursor-pointer inline-flex items-center gap-2 group">
                                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-pink-500 transition-colors"></span>
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* 4. SUBSCRIPTION */}
                    <div>
                        <h3 className="text-slate-900 font-bold uppercase tracking-tight mb-6">Newsletter</h3>
                        <p className="text-slate-600 text-sm mb-4">
                            Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
                        </p>
                        <form className="flex flex-col sm:flex-row gap-2" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full bg-white border border-slate-200 rounded-md py-2.5 px-4 text-sm focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none transition-all"
                                required
                            />
                            <button
                                type="submit"
                                className="bg-pink-500 text-white font-semibold text-sm py-2.5 px-6 rounded-md hover:bg-pink-600 transition-colors cursor-pointer whitespace-nowrap"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>

                </div>

                {/* --- BOTTOM BAR --- */}
                <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-slate-500 text-sm text-center md:text-left">
                        © {new Date().getFullYear()} YourStore. All Rights Reserved.
                    </p>
                    <div className="flex gap-2 text-slate-400 text-sm">
                        {/* Payment Icons Placeholder */}

                        <RiVisaFill className="cursor-pointer" size={24} />
                        <FaCcMastercard className="cursor-pointer" size={24} />
                        <FaCcPaypal className="cursor-pointer" size={24} />
                    </div>
                </div>

            </div>
        </footer>
    );
}