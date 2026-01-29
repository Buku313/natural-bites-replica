'use client';

import { useState } from 'react';
import Image from 'next/image';

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
    <section className="py-8 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Tabs */}
        <div className="flex justify-center gap-8 md:gap-16 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`text-base md:text-lg font-medium transition-all ${
                activeTab === tab.key
                  ? 'text-[#333] underline underline-offset-8 decoration-1'
                  : 'text-[#666] hover:text-[#333]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {products[activeTab].map((product) => (
            <div key={product.id} className="text-center">
              {/* Product Image */}
              <div className="relative h-40 md:h-48 mb-4 flex items-center justify-center">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={160}
                  height={160}
                  className="object-contain max-h-full"
                />
              </div>

              {/* Product Name */}
              <h3 className="text-base font-medium text-[#333] mb-3">{product.name}</h3>

              {/* Quantity Selector */}
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="text-sm text-[#666]">Cantidad</span>
                <input
                  type="number"
                  defaultValue={1}
                  min={1}
                  className="w-14 px-2 py-1 text-sm border border-gray-300 rounded text-center focus:outline-none focus:border-[#f5c964]"
                />
              </div>

              {/* Buy Button */}
              <button className="bg-[#f5c964] text-[#333] text-sm font-medium px-6 py-2.5 rounded-full hover:bg-[#e5b54e] transition-colors">
                {product.price} | Compre ahora
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
