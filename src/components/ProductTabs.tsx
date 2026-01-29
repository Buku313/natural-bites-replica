'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const products = {
  mantequillas: [
    {
      id: 1,
      name: 'Peanut Butter Sugar Free',
      price: '₡5,040.00',
      image: '/images/4839625724-640w.png',
    },
    {
      id: 2,
      name: 'Almond Butter Protein',
      price: '₡8,925.00',
      image: '/images/4839663755-640w.png',
    },
    {
      id: 3,
      name: 'Choco Nut Butter',
      price: '₡7,245.00',
      image: '/images/c5e2fd13b5928e4fac7aebc2d80fe140-640w.png',
    },
  ],
  mezclas: [
    {
      id: 4,
      name: 'Pancake and Waffle Mix',
      price: '₡2,600.00',
      image: '/images/fb33a7b2fe2c99ac52fca83182b6d115-640w.png',
    },
    {
      id: 5,
      name: 'Chocolate covered Wafer Rolls',
      price: '₡1,850.00',
      image: '/images/Untitled design (77)-640w.png',
    },
    {
      id: 6,
      name: 'Chia Seeds',
      price: '₡2,660.00',
      image: '/images/Untitled-b014d76b-640w.png',
    },
  ],
  salty: [
    {
      id: 7,
      name: 'Pita Chips Parmesano',
      price: '₡4,400.00',
      image: '/images/d37e998ca2d228b226f3d0d05ed49091-640w.png',
    },
    {
      id: 8,
      name: 'Tortilla Chips',
      price: '₡3,200.00',
      image: '/images/d37e998ca2d228b226f3d0d05ed49091-2d3c32c0-640w.png',
    },
    {
      id: 9,
      name: 'Pita Chips Original',
      price: '₡4,200.00',
      image: '/images/d37e998ca2d228b226f3d0d05ed49091-1280w.png',
    },
  ],
};

type TabKey = keyof typeof products;

export default function ProductTabs() {
  const [activeTab, setActiveTab] = useState<TabKey>('mantequillas');

  const tabs: { key: TabKey; label: string }[] = [
    { key: 'mantequillas', label: 'Mantequillas' },
    { key: 'mezclas', label: 'Mezclas y varios' },
    { key: 'salty', label: 'Salty Snacks' },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Tabs */}
        <div className="flex justify-center gap-8 md:gap-16 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`text-lg md:text-xl font-medium transition-all ${
                activeTab === tab.key
                  ? 'text-[#333] underline underline-offset-8 decoration-2'
                  : 'text-[#666] hover:text-[#333]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products[activeTab].map((product) => (
            <div key={product.id} className="text-center group">
              <div className="relative aspect-square mb-4 overflow-hidden rounded-lg bg-gray-50">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-lg font-medium text-[#333] mb-2">{product.name}</h3>
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-[#666]">Cantidad</span>
                <input
                  type="number"
                  defaultValue={1}
                  min={1}
                  className="w-16 px-3 py-1 border border-gray-300 rounded text-center"
                />
              </div>
              <button className="btn-primary w-full max-w-xs">
                {product.price} | Compre ahora
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
