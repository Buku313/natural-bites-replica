import Image from 'next/image';
import Link from 'next/link';

export default function FeatureSection() {
  return (
    <>
      {/* Feature 1 - Snack for every moment */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#333] mb-6 leading-tight">
              UN SNACK CON NATURALIDAD PARA TODO MOMENTO
            </h2>
            <p className="text-lg text-[#666] mb-8">
              Ya sea en un momento a solas, con amigos o en un break, nuestros productos te
              acompañan en cada momento, siempre con naturalidad.
            </p>
            <Link href="/tienda" className="btn-primary inline-block">
              Elegí tu favorito
            </Link>
          </div>
          <div className="relative">
            <Image
              src="/images/8fae07bab892bc35820ec6d8e12a552d-1280w.jpg"
              alt="Tortilla chips with dips"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* New Product Alert Banner */}
      <section className="py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="relative rounded-2xl overflow-hidden">
            <Image
              src="/images/Banner-Nuevo-Look-1920-X-2880-1920w.jpg"
              alt="New Product Alert - 4 nuevos sabores"
              width={1920}
              height={600}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Feature 2 - Healthy snacks */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#333] mb-6 leading-tight">
              SNACKS SALUDABLES PARA TODO MOMENTO
            </h2>
            <p className="text-lg text-[#666] mb-8">
              Una deliciosa variedad de snacks saludables que todos pueden disfrutar en cualquier ocasión.
            </p>
            <Link href="/recetas" className="btn-primary inline-block">
              Conocé nuestras recetas
            </Link>
          </div>
          <div className="relative">
            <Image
              src="/images/banano-1280w.png"
              alt="Muffin Mix with Banana"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>
        </div>
      </section>
    </>
  );
}
