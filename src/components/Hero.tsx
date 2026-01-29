'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative w-full h-[75vh] md:h-[85vh] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/5m1xf9vR8ePwn2rO1oQJ_VID-20250305-WA0003.v2.0000000-1920w.jpg"
        alt="Peanut butter background"
        fill
        className="object-cover"
        priority
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2d2d2d] mb-16 max-w-4xl leading-tight tracking-wide">
          DISFRUTÁ CON NATURALIDAD CADA<br className="hidden md:block" /> MOMENTO
        </h1>
        <Link
          href="/tienda"
          className="inline-flex items-center px-12 py-3.5 border border-[#444] text-[#333] bg-white/70 font-medium hover:bg-[#333] hover:text-white transition-all duration-300"
        >
          ¡Comienza aquí!
        </Link>
      </div>

      {/* Wavy Bottom */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-[60px] md:h-[100px]"
          preserveAspectRatio="none"
        >
          <path
            d="M0 100L60 90C120 80 240 60 360 50C480 40 600 40 720 45C840 50 960 60 1080 65C1200 70 1320 70 1380 70L1440 70V100H0V100Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
