import Image from 'next/image';
import Link from 'next/link';

export default function FeatureSection() {
  return (
    <>
      {/* Feature 1 - Snack for every moment - 2 column layout */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left - Text Content */}
            <div className="text-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#333] mb-6 leading-tight">
                UN SNACK CON
                <br />
                NATURALIDAD PARA
                <br />
                TODO MOMENTO
              </h2>
              <p className="text-base md:text-lg text-[#666] mb-8 leading-relaxed max-w-md">
                Ya sea en un momento a solas, con amigos o en un break, nuestros productos te
                acompañan en cada momento, siempre con naturalidad.
              </p>
              <Link
                href="/tienda"
                className="inline-block px-8 py-3 bg-[#f5c964] text-[#333] font-medium rounded-full hover:bg-[#e5b54e] transition-all duration-300"
              >
                Elegí tu favorito
              </Link>
            </div>

            {/* Right - Image */}
            <div className="relative">
              <Image
                src="/images/8fae07bab892bc35820ec6d8e12a552d-1280w.jpg"
                alt="Tortilla chips with dips"
                width={600}
                height={500}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* New Product Alert Banner */}
      <section className="py-8">
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

      {/* Feature 2 - Healthy snacks - 2 column layout (reversed) */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left - Image */}
            <div className="relative order-2 md:order-1">
              <Image
                src="/images/banano-1280w.png"
                alt="Muffin Mix with Banana"
                width={600}
                height={500}
                className="w-full h-auto"
              />
            </div>

            {/* Right - Text Content */}
            <div className="text-left order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#333] mb-6 leading-tight">
                SNACKS SALUDABLES
                <br />
                PARA TODO MOMENTO
              </h2>
              <p className="text-base md:text-lg text-[#666] mb-8 leading-relaxed max-w-md">
                Una deliciosa variedad de snacks saludables que todos pueden disfrutar en cualquier ocasión.
              </p>
              <Link
                href="/recetas"
                className="inline-block px-8 py-3 bg-[#f5c964] text-[#333] font-medium rounded-full hover:bg-[#e5b54e] transition-all duration-300"
              >
                Conocé nuestras recetas
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
