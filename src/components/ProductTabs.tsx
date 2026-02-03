'use client';

import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';

interface SanityProduct {
  _id: string;
  name: string;
  price: number;
  image?: { asset?: { _id: string; url: string }; alt?: string };
  category?: { _id: string; title: string };
}

interface ProductTabsProps {
  data?: {
    featuredProducts?: SanityProduct[];
    featuredProductsQuantityLabel?: string;
    featuredProductsBuyButtonTemplate?: string;
  } | null;
}

const defaultProducts = [
  {
    category: 'Mantequillas',
    isActive: true,
    name: 'Peanut Butter Sugar Free',
    price: '₡5 040.00',
    image: '/images/peanut-butter-sugar-free.png',
  },
  {
    category: 'Mezclas y varios',
    isActive: false,
    name: 'Almond Butter Protein',
    price: '₡8 925.00',
    image: '/images/almond-butter-protein.png',
  },
  {
    category: 'Salty Snacks',
    isActive: false,
    name: 'Choco Nut Butter',
    price: '₡7 245.00',
    image: '/images/choco-nut-butter.png',
  },
];

export default function ProductTabs({ data }: ProductTabsProps = {}) {
  const quantityLabel = data?.featuredProductsQuantityLabel ?? 'Cantidad';
  const buttonTemplate = data?.featuredProductsBuyButtonTemplate ?? '{price} | Compre ahora';
  const hasSanityProducts = data?.featuredProducts && data.featuredProducts.length > 0;

  return (
    <section className="py-8 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {hasSanityProducts
            ? data!.featuredProducts!.map((product, index) => {
                const formattedPrice = `₡${product.price.toLocaleString('es-CR', { minimumFractionDigits: 2 })}`;
                const buttonText = buttonTemplate.replace('{price}', formattedPrice);
                const imgSrc = product.image?.asset
                  ? urlFor(product.image).width(360).height(360).url()
                  : '/images/peanut-butter-sugar-free.png';
                return (
                  <div key={product._id} className="text-center">
                    <h3
                      className={`text-xl md:text-2xl font-medium mb-4 md:mb-8 ${
                        index === 0
                          ? 'text-[#333] underline underline-offset-8 decoration-1'
                          : 'text-[#333]'
                      }`}
                    >
                      {product.category?.title ?? product.name}
                    </h3>
                    <div className="relative h-40 md:h-48 lg:h-56 mb-6 flex items-center justify-center">
                      <Image
                        src={imgSrc}
                        alt={product.image?.alt ?? product.name}
                        width={180}
                        height={180}
                        className="object-contain max-h-full"
                        unoptimized={!!product.image?.asset}
                      />
                    </div>
                    <h4 className="text-base md:text-lg font-medium text-[#333] mb-4">{product.name}</h4>
                    <div className="flex items-center justify-center gap-3 mb-4">
                      <span className="text-sm text-[#666]">{quantityLabel}</span>
                      <input
                        type="number"
                        defaultValue={1}
                        min={1}
                        className="w-14 px-2 py-1.5 text-sm border border-gray-300 rounded text-center focus:outline-none focus:border-[#f5c964]"
                      />
                    </div>
                    <button className="bg-[#f5c964] text-[#333] text-sm font-medium px-6 py-2.5 rounded-full hover:bg-[#e5b54e] transition-colors">
                      {buttonText}
                    </button>
                  </div>
                );
              })
            : defaultProducts.map((product, index) => (
                <div key={index} className="text-center">
                  <h3
                    className={`text-xl md:text-2xl font-medium mb-4 md:mb-8 ${
                      product.isActive
                        ? 'text-[#333] underline underline-offset-8 decoration-1'
                        : 'text-[#333]'
                    }`}
                  >
                    {product.category}
                  </h3>
                  <div className="relative h-40 md:h-48 lg:h-56 mb-6 flex items-center justify-center">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={180}
                      height={180}
                      className="object-contain max-h-full"
                    />
                  </div>
                  <h4 className="text-base md:text-lg font-medium text-[#333] mb-4">{product.name}</h4>
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <span className="text-sm text-[#666]">{quantityLabel}</span>
                    <input
                      type="number"
                      defaultValue={1}
                      min={1}
                      className="w-14 px-2 py-1.5 text-sm border border-gray-300 rounded text-center focus:outline-none focus:border-[#f5c964]"
                    />
                  </div>
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
