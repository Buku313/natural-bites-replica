import Image from 'next/image';
import Link from 'next/link';

export default function FeatureSection() {
  return (
    <>
      {/* Feature 1 - Snack for every moment */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#333] mb-4 leading-tight">
              UN SNACK CON<br />
              NATURALIDAD PARA<br />
              TODO MOMENTO
            </h2>
            <p className="text-base text-[#666] mb-6 leading-relaxed">
              Ya sea en un momento a solas, con amigos o en un break, nuestros productos te
              acompañan en cada momento, siempre con naturalidad.
            </p>
            <Link
              href="/tienda"
              className="inline-block px-6 py-2.5 border-2 border-[#333] text-[#333] font-medium rounded-full hover:bg-[#333] hover:text-white transition-all duration-300"
            >
              Elegí tu favorito
            </Link>
          </div>
          <div className="relative order-1 md:order-2">
            <Image
              src="/images/8fae07bab892bc35820ec6d8e12a552d-1280w.jpg"
              alt="Tortilla chips with dips"
              width={500}
              height={400}
              className="rounded-lg w-full"
            />
          </div>
        </div>
      </section>

      {/* New Product Alert Banner */}
      <section className="py-6">
        <div className="max-w-5xl mx-auto px-4">
          <div className="relative rounded-xl overflow-hidden">
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
      <section className="py-12 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#333] mb-4 leading-tight">
              SNACKS<br />
              SALUDABLES PARA<br />
              TODO MOMENTO
            </h2>
            <p className="text-base text-[#666] mb-6 leading-relaxed">
              Una deliciosa variedad de snacks saludables que todos pueden disfrutar en cualquier ocasión.
            </p>
            <Link
              href="/recetas"
              className="inline-block px-6 py-2.5 border-2 border-[#333] text-[#333] font-medium rounded-full hover:bg-[#333] hover:text-white transition-all duration-300"
            >
              Conocé nuestras recetas
            </Link>
          </div>
          <div className="relative">
            <Image
              src="/images/banano-1280w.png"
              alt="Muffin Mix with Banana"
              width={500}
              height={400}
              className="w-full"
            />
          </div>
        </div>
      </section>
    </>
  );
}
