'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image - full screen */}
      <Image
        src="/images/5m1xf9vR8ePwn2rO1oQJ_VID-20250305-WA0003.v2.0000000-1920w.jpg"
        alt="Peanut butter background"
        fill
        className="object-cover"
        priority
      />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center h-full text-center px-4">
        {/* Title - positioned high, overlapping with header */}
        <h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold max-w-4xl leading-tight tracking-wide mt-16 md:mt-20"
          style={{ color: '#000000' }}
        >
          DISFRUTÁ CON
          <br />
          NATURALIDAD CADA
          <br />
          MOMENTO
        </h1>

        {/* Button - centered vertically in remaining space */}
        <div className="flex-1 flex items-center">
          <Link
            href="/tienda"
            className="inline-flex items-center px-12 py-4 border-2 border-[#333] bg-white font-medium text-[#333] hover:bg-[#333] hover:text-white transition-all duration-300 text-lg"
          >
            ¡Comienza aquí!
          </Link>
        </div>
      </div>

      {/* Wavy Bottom */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-[80px] md:h-[120px]"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H0V120Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
