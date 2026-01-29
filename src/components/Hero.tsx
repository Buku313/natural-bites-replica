'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/5m1xf9vR8ePwn2rO1oQJ_VID-20250305-WA0003.v2.0000000-1920w.jpg"
        alt="Peanut butter background"
        fill
        className="object-cover"
        priority
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 pt-20">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#333] mb-8 max-w-4xl leading-tight tracking-wide">
          DISFRUTÁ CON NATURALIDAD CADA MOMENTO
        </h1>
        <Link
          href="/tienda"
          className="inline-flex items-center px-8 py-3 border-2 border-[#333] text-[#333] font-medium hover:bg-[#333] hover:text-white transition-all duration-300"
        >
          ¡Comienza aquí!
        </Link>
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
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 85L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
