'use client';

import Image from 'next/image';

const categories = [
  {
    id: 'mantequillas',
    label: 'Mantequillas',
    product: {
      name: 'Peanut Butter Sugar Free',
      price: '₡5,040.00',
      image: '/images/4839625724-640w.png',
    },
  },
  {
    id: 'mezclas',
    label: 'Mezclas y varios',
    product: {
      name: 'Almond Butter Protein',
      price: '₡8,925.00',
      image: '/images/4839663755-640w.png',
    },
  },
  {
    id: 'salty',
    label: 'Salty Snacks',
    product: {
      name: 'Choco Nut Butter',
      price: '₡7,245.00',
      image: '/images/c5e2fd13b5928e4fac7aebc2d80fe140-640w.png',
    },
  },
];

export default function ProductTabs() {
  return (
    <section className="py-6 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Products Grid - 3 columns with category + product */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {categories.map((category, index) => (
            <div key={category.id} className="text-center">
              {/* Category Label */}
              <h3 className={`text-base md:text-lg font-medium mb-6 ${
                index === 0
                  ? 'text-[#333] underline underline-offset-8 decoration-1'
                  : 'text-[#666]'
              }`}>
                {category.label}
              </h3>

              {/* Product Image */}
              <div className="relative h-36 md:h-44 mb-4 flex items-center justify-center">
                <Image
                  src={category.product.image}
                  alt={category.product.name}
                  width={140}
                  height={140}
                  className="object-contain max-h-full"
                />
              </div>

              {/* Product Name */}
              <h4 className="text-sm font-medium text-[#333] mb-3">{category.product.name}</h4>

              {/* Quantity Selector */}
              <div className="flex items-center justify-center gap-2 mb-3">
                <span className="text-xs text-[#666]">Cantidad</span>
                <input
                  type="number"
                  defaultValue={1}
                  min={1}
                  className="w-12 px-2 py-0.5 text-xs border border-gray-300 rounded text-center focus:outline-none focus:border-[#f5c964]"
                />
              </div>

              {/* Buy Button */}
              <button className="bg-[#f5c964] text-[#333] text-xs font-medium px-5 py-2 rounded-full hover:bg-[#e5b54e] transition-colors">
                {category.product.price} | Compre ahora
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
