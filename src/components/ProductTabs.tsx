'use client';

import { useState } from 'react';
import Image from 'next/image';

interface Product {
  name: string;
  price: string;
  image: string;
}

interface Category {
  id: string;
  label: string;
  products: Product[];
}

const categories: Category[] = [
  {
    id: 'mantequillas',
    label: 'Mantequillas',
    products: [
      {
        name: 'Peanut Butter Sugar Free',
        price: '₡5 040.00',
        image: '/images/peanut-butter-sugar-free.png',
      },
      {
        name: 'Almond Butter Protein',
        price: '₡8 925.00',
        image: '/images/almond-butter-protein.png',
      },
      {
        name: 'Choco Nut Butter',
        price: '₡7 245.00',
        image: '/images/choco-nut-butter.png',
      },
    ],
  },
  {
    id: 'mezclas',
    label: 'Mezclas y varios',
    products: [
      {
        name: 'Trail Mix Natural',
        price: '₡4 500.00',
        image: '/images/peanut-butter-sugar-free.png',
      },
      {
        name: 'Granola Mix',
        price: '₡3 800.00',
        image: '/images/almond-butter-protein.png',
      },
    ],
  },
  {
    id: 'salty',
    label: 'Salty Snacks',
    products: [
      {
        name: 'Tortilla Chips Sea Salt',
        price: '₡2 990.00',
        image: '/images/choco-nut-butter.png',
      },
      {
        name: 'Pita Chips',
        price: '₡3 200.00',
        image: '/images/peanut-butter-sugar-free.png',
      },
    ],
  },
];

export default function ProductTabs() {
  const [activeTab, setActiveTab] = useState(0);
  const activeCategory = categories[activeTab];

  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-2xl mx-auto">
        {/* Category Tabs */}
        <div className="flex justify-center gap-8 md:gap-16 mb-12">
          {categories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(index)}
              className={`text-lg md:text-xl font-medium transition-colors ${
                index === activeTab
                  ? 'text-[#333] underline underline-offset-8 decoration-1'
                  : 'text-[#666] hover:text-[#333]'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Products List - Vertical Stack */}
        <div className="space-y-16">
          {activeCategory.products.map((product, index) => (
            <div key={index} className="text-center">
              {/* Product Image */}
              <div className="relative h-64 md:h-80 mb-6 flex items-center justify-center">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={280}
                  height={280}
                  className="object-contain max-h-full"
                />
              </div>

              {/* Product Name */}
              <h4 className="text-xl font-medium text-[#333] mb-4">{product.name}</h4>

              {/* Quantity Selector */}
              <div className="flex items-center justify-center gap-3 mb-5">
                <span className="text-base text-[#666]">Cantidad</span>
                <input
                  type="number"
                  defaultValue={1}
                  min={1}
                  className="w-16 px-3 py-2 text-base border border-gray-300 rounded text-center focus:outline-none focus:border-[#f5c964]"
                />
              </div>

              {/* Buy Button */}
              <button className="bg-[#f5c964] text-[#333] text-base font-medium px-10 py-3 rounded-full hover:bg-[#e5b54e] transition-colors">
                {product.price} | Compre ahora
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
