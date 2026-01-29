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

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo - Left (White version for hero overlay) */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/nb logo white lowdef-640w.png"
              alt="Natural Bites"
              width={100}
              height={60}
              className="h-12 md:h-14 w-auto"
            />
          </Link>

          {/* Center - Search and Cart Icons */}
          <div className="flex items-center gap-8">
            {/* Search Icon */}
            <button className="p-2 hover:opacity-70 transition-opacity">
              <div className="w-9 h-9 rounded-full border-2 border-white/80 flex items-center justify-center bg-white/20">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </button>

            {/* Cart Icon */}
            <button className="p-2 hover:opacity-70 transition-opacity">
              <svg className="w-8 h-8 text-[#333]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </button>
          </div>

          {/* Hamburger Menu - Right */}
          <button
            className="p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            <svg className="w-8 h-8 text-[#333]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="bg-white shadow-lg rounded-lg mt-2 py-4">
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
