import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import { SITE_SETTINGS_QUERY, ALL_PRODUCTS_QUERY } from '@/sanity/lib/queries';
import { urlFor } from '@/sanity/lib/image';

export default async function Tienda() {
  const [settings, products] = await Promise.all([
    client.fetch(SITE_SETTINGS_QUERY),
    client.fetch(ALL_PRODUCTS_QUERY),
  ]);

  return (
    <main className="pt-20">
      <Header settings={settings} />

      {/* Hero Section */}
      <section className="bg-[#f5c964] py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#333] mb-4">
            TIENDA
          </h1>
          <p className="text-lg text-[#333]">
            Encuentra todos nuestros productos naturales y saludables
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product: {
              _id: string;
              name: string;
              image?: { asset?: { url?: string }; alt?: string };
              category?: { title?: string };
              price?: number;
            }) => (
              <div key={product._id} className="text-center group">
                <div className="relative aspect-square mb-4 overflow-hidden rounded-lg bg-gray-50">
                  {product.image?.asset && (
                    <Image
                      src={urlFor(product.image).width(400).height(400).url()}
                      alt={product.image.alt || product.name}
                      fill
                      className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                      unoptimized
                    />
                  )}
                </div>
                {product.category?.title && (
                  <span className="text-sm text-[#f5c964] font-medium">{product.category.title}</span>
                )}
                <h3 className="text-lg font-medium text-[#333] mb-2">{product.name}</h3>
                {product.price != null && (
                  <p className="text-[#666] mb-4">
                    ₡{product.price.toLocaleString('es-CR', { minimumFractionDigits: 2 })}
                  </p>
                )}
                <button className="btn-primary w-full">
                  Agregar al carrito
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer settings={settings} />
    </main>
  );
}
