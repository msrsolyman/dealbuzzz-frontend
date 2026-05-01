"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 w-full bg-white border-b border-slate-100 shadow-sm">
            {/* --- TOP BAR / MAIN NAV --- */}
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20 gap-4">

                    {/* 1. LOGO */}
                    <Link href="/" className="flex-shrink-0 relative w-12 h-12 cursor-pointer">
                        <Image
                            src="/logo.png"
                            alt="Brand Logo"
                            fill
                            className="object-contain"
                        />
                    </Link>

                    {/* 2. SEARCH BAR */}
                    <div className="hidden md:flex flex-1 max-w-md relative">
                        <input
                            type="text"
                            placeholder="Search product..."
                            className="w-full bg-slate-100 border-none rounded-lg py-2.5 pl-4 pr-10 text-sm focus:ring-2 focus:ring-pink-500 transition-all outline-none"
                        />
                        <button className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-pink-500 transition-colors cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>
                    </div>

                    {/* 3. ACTION BUTTONS */}
                    <div className="flex items-center gap-2 md:gap-5">

                        {/* Login & Sign Up Links (Text hidden on mobile) */}
                        <div className="hidden lg:flex items-center gap-2 text-sm font-semibold">
                            <Link href="/login" className="text-slate-600 hover:text-pink-500 transition-colors cursor-pointer uppercase">
                                Login
                            </Link>
                            <span className="text-slate-300">/</span>
                            <Link href="/signup" className="text-slate-600 hover:text-pink-500 transition-colors cursor-pointer uppercase">
                                Register
                            </Link>
                        </div>

                        {/* Icons Group */}
                        <div className="flex items-center gap-3">
                            {/* User Icon (Mobile only) - Links to login on mobile */}
                            <Link href="/login" className="lg:hidden text-slate-700 hover:text-pink-500 cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </Link>

                            {/* Wishlist */}
                            <button className="relative text-slate-700 hover:text-pink-500 transition-colors cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                                <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">0</span>
                            </button>

                            {/* Cart */}
                            <button className="relative text-slate-700 hover:text-pink-500 transition-colors cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                </svg>
                                <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">0</span>
                            </button>

                            {/* Mobile Menu Toggle */}
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="md:hidden text-slate-700 hover:text-pink-500 cursor-pointer"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- CATEGORY LINKS (Desktop only) --- */}
            <div className="hidden md:block border-t border-slate-50">
                <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                    <ul className="flex items-center gap-8 h-12">
                        {["HOME", "CATEGORIES", "MEN'S", "WOMEN'S", "JEWELRY", "PERFUME", "BLOG", "HOT OFFERS"].map((link) => (
                            <li key={link}>
                                <Link href="#" className="text-[13px] font-bold text-slate-800 hover:text-pink-500 transition-colors uppercase tracking-tight cursor-pointer">
                                    {link}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* --- MOBILE SEARCH & MENU --- */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white border-t border-slate-100 p-4 space-y-4">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search product..."
                            className="w-full bg-slate-100 rounded-lg py-2 pl-4 pr-10 text-sm"
                        />
                    </div>
                    <ul className="space-y-3">
                        {["HOME", "CATEGORIES", "SHOP", "ABOUT"].map((link) => (
                            <li key={link} className="border-b border-slate-50 pb-2">
                                <Link href="#" className="text-sm font-bold text-slate-800 uppercase cursor-pointer block w-full">{link}</Link>
                            </li>
                        ))}
                        {/* Added Mobile Login/Signup to the dropdown for better UX */}
                        <li className="flex gap-4 pt-2">
                            <Link href="/login" className="text-sm font-bold text-slate-600 hover:text-pink-500 uppercase cursor-pointer">Login</Link>
                            <Link href="/signup" className="text-sm font-bold text-slate-600 hover:text-pink-500 uppercase cursor-pointer">Register</Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}