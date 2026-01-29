'use client';

import { useState } from 'react';
import Image from 'next/image';

const products = [
  {
    id: 'mantequillas',
    label: 'Mantequillas',
    name: 'Peanut Butter Sugar Free',
    price: '₡5 040.00',
    image: '/images/peanut-butter-sugar-free.png',
  },
  {
    id: 'mezclas',
    label: 'Mezclas y varios',
    name: 'Almond Butter Protein',
    price: '₡8 925.00',
    image: '/images/almond-butter-protein.png',
  },
  {
    id: 'salty',
    label: 'Salty Snacks',
    name: 'Choco Nut Butter',
    price: '₡7 245.00',
    image: '/images/choco-nut-butter.png',
  },
];

export default function ProductTabs() {
  const [activeTab, setActiveTab] = useState(0);
  const activeProduct = products[activeTab];

  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-2xl mx-auto">
        {/* Category Tabs */}
        <div className="flex justify-center gap-8 md:gap-16 mb-10">
          {products.map((product, index) => (
            <button
              key={product.id}
              onClick={() => setActiveTab(index)}
              className={`text-base md:text-lg font-medium transition-colors ${
                index === activeTab
                  ? 'text-[#333] underline underline-offset-8 decoration-1'
                  : 'text-[#666] hover:text-[#333]'
              }`}
            >
              {product.label}
            </button>
          ))}
        </div>

        {/* Single Product Display */}
        <div className="text-center">
          {/* Product Image */}
          <div className="relative h-56 md:h-72 mb-6 flex items-center justify-center">
            <Image
              src={activeProduct.image}
              alt={activeProduct.name}
              width={220}
              height={220}
              className="object-contain max-h-full"
            />
          </div>

          {/* Product Name */}
          <h4 className="text-lg font-medium text-[#333] mb-4">{activeProduct.name}</h4>

          {/* Quantity Selector */}
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="text-sm text-[#666]">Cantidad</span>
            <input
              type="number"
              defaultValue={1}
              min={1}
              className="w-14 px-3 py-1.5 text-sm border border-gray-300 rounded text-center focus:outline-none focus:border-[#f5c964]"
            />
          </div>

          {/* Buy Button */}
          <button className="bg-[#f5c964] text-[#333] text-sm font-medium px-8 py-3 rounded-full hover:bg-[#e5b54e] transition-colors">
            {activeProduct.price} | Compre ahora
          </button>
        </div>
      </div>
    </section>
  );
}
