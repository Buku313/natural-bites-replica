import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import { SITE_SETTINGS_QUERY, ALL_RECIPES_QUERY } from '@/sanity/lib/queries';
import { urlFor } from '@/sanity/lib/image';

export default async function Recetas() {
  const [settings, recipes] = await Promise.all([
    client.fetch(SITE_SETTINGS_QUERY),
    client.fetch(ALL_RECIPES_QUERY),
  ]);

  return (
    <main className="pt-20">
      <Header settings={settings} />

      {/* Hero Section */}
      <section className="relative h-[50vh] overflow-hidden">
        <Image
          src="/images/Portada recetas-1280w.png"
          alt="Recetas Natural Bites"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              RECETAS
            </h1>
            <p className="text-lg max-w-2xl">
              Descubre deliciosas recetas saludables con nuestros productos
            </p>
          </div>
        </div>
      </section>

      {/* Recipes Grid */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {recipes.map((recipe: {
              _id: string;
              title: string;
              description?: string;
              image?: { asset?: { url?: string }; alt?: string };
              category?: { title?: string };
            }) => (
              <article key={recipe._id} className="group cursor-pointer">
                <div className="relative aspect-video mb-4 overflow-hidden rounded-lg">
                  {recipe.image?.asset && (
                    <Image
                      src={urlFor(recipe.image).width(640).height(360).url()}
                      alt={recipe.image.alt || recipe.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      unoptimized
                    />
                  )}
                  {recipe.category?.title && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#f5c964] text-[#333] px-3 py-1 rounded-full text-sm font-medium">
                        {recipe.category.title}
                      </span>
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-bold text-[#333] mb-2 group-hover:text-[#f5c964] transition-colors">
                  {recipe.title}
                </h3>
                {recipe.description && (
                  <p className="text-[#666]">{recipe.description}</p>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 px-4 bg-[#f5c964]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#333] mb-4">
            ¿Quieres más recetas?
          </h2>
          <p className="text-lg text-[#333] mb-8">
            Suscríbete y recibe nuevas recetas saludables cada semana
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Tu email"
              className="flex-1 px-4 py-3 rounded-full border-2 border-[#333] focus:outline-none focus:border-[#333]"
            />
            <button className="btn-secondary">
              Suscribirme
            </button>
          </div>
        </div>
      </section>

      <Footer settings={settings} />
    </main>
  );
}
