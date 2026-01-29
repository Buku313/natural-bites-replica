import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function Nosotros() {
  return (
    <main className="pt-20">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[50vh] overflow-hidden">
        <Image
          src="/images/nosotros-1280w.png"
          alt="Nosotros - Natural Bites"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              NOSOTROS
            </h1>
            <p className="text-lg max-w-2xl">
              Conoce nuestra historia y pasión por lo natural
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#333] mb-6">
              Nuestra Historia
            </h2>
            <p className="text-lg text-[#666] leading-relaxed">
              En Natural Bites buscamos crear productos deliciosos y naturales que le den un sabor
              inolvidable a todas tus recetas, formando parte de un estilo de vida saludable.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-[#333] mb-4">
                Nuestra Misión
              </h3>
              <p className="text-[#666] leading-relaxed">
                Ofrecer productos naturales de la más alta calidad que complementen un estilo
                de vida saludable, sin sacrificar el sabor ni la experiencia de disfrutar
                cada bocado.
              </p>
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/images/bowl-1280w.png"
                alt="Natural ingredients"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-64 rounded-lg overflow-hidden md:order-1">
              <Image
                src="/images/banano-1280w.png"
                alt="Healthy products"
                fill
                className="object-cover"
              />
            </div>
            <div className="md:order-2">
              <h3 className="text-2xl font-bold text-[#333] mb-4">
                Nuestra Visión
              </h3>
              <p className="text-[#666] leading-relaxed">
                Ser la marca líder en snacks saludables en Centroamérica, inspirando a
                las personas a tomar decisiones más conscientes sobre su alimentación
                sin renunciar al placer de comer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#333] text-center mb-12">
            Nuestros Valores
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-[#f5c964] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#333]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#333] mb-4">Naturalidad</h3>
              <p className="text-[#666]">
                Utilizamos ingredientes 100% naturales sin aditivos artificiales ni conservantes.
              </p>
            </div>
            <div className="text-center p-8 bg-white rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-[#f5c964] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#333]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#333] mb-4">Calidad</h3>
              <p className="text-[#666]">
                Cada producto pasa por estrictos controles de calidad para garantizar la excelencia.
              </p>
            </div>
            <div className="text-center p-8 bg-white rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-[#f5c964] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#333]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#333] mb-4">Sostenibilidad</h3>
              <p className="text-[#666]">
                Comprometidos con prácticas sustentables y el cuidado del medio ambiente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nacascolo Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-[#666] mb-4">Otra empresa de</p>
          <Image
            src="/images/nacas logo-640w.png"
            alt="Nacascolo Holdings"
            width={200}
            height={60}
            className="mx-auto mb-4"
          />
          <a
            href="http://www.nacascolo.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#f5c964] hover:underline"
          >
            www.nacascolo.com
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
