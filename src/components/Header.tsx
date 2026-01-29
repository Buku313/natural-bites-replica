'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/tienda', label: 'Tienda' },
  { href: '/recetas', label: 'Recetas' },
  { href: '/contactanos', label: 'Contactanos' },
  { href: '/nosotros', label: 'Nosotros' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('/');

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16 md:h-20">
          {/* Logo - Left */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/Logo.svg"
              alt="Natural Bites"
              width={70}
              height={45}
              className="h-9 md:h-11 w-auto"
            />
          </Link>

          {/* Desktop Navigation - Center */}
          <nav className="hidden md:flex items-center gap-5 lg:gap-7 ml-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  activeLink === link.href
                    ? 'text-[#d4a84b] underline underline-offset-4 decoration-1'
                    : 'text-[#333] hover:text-[#666]'
                }`}
                onClick={() => setActiveLink(link.href)}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side - Search Field and Cart */}
          <div className="flex items-center gap-3 ml-auto">
            {/* Search Field */}
            <div className="hidden md:flex items-center border border-gray-300 rounded px-3 py-1.5">
              <input
                type="text"
                placeholder="Buscar"
                className="text-sm bg-transparent outline-none w-24 lg:w-32"
              />
              <svg className="w-4 h-4 text-[#666] ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            {/* Mobile Search Icon */}
            <button className="p-2 md:hidden hover:opacity-70 transition-opacity">
              <svg className="w-6 h-6 text-[#333]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Cart Icon */}
            <button className="p-2 hover:opacity-70 transition-opacity">
              <svg className="w-6 h-6 text-[#333]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </button>

            {/* Mobile Hamburger Menu */}
            <button
              className="p-2 md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              <svg className="w-6 h-6 text-[#333]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg rounded-lg mt-2 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-6 py-3 text-[#333] hover:bg-[#f5c964] hover:text-white transition-colors text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
