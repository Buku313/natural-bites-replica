import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import { SITE_SETTINGS_QUERY, NOSOTROS_PAGE_QUERY } from '@/sanity/lib/queries';
import { urlFor } from '@/sanity/lib/image';

const valueIcons: Record<string, React.ReactNode> = {
  heart: (
    <svg className="w-8 h-8 text-[#333]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  ),
  checkCircle: (
    <svg className="w-8 h-8 text-[#333]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  globe: (
    <svg className="w-8 h-8 text-[#333]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
    </svg>
  ),
  star: (
    <svg className="w-8 h-8 text-[#333]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
    </svg>
  ),
  leaf: (
    <svg className="w-8 h-8 text-[#333]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  ),
  shield: (
    <svg className="w-8 h-8 text-[#333]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
};

const defaultValues = [
  { icon: 'heart', title: 'Naturalidad', description: 'Utilizamos ingredientes 100% naturales sin aditivos artificiales ni conservantes.' },
  { icon: 'checkCircle', title: 'Calidad', description: 'Cada producto pasa por estrictos controles de calidad para garantizar la excelencia.' },
  { icon: 'globe', title: 'Sostenibilidad', description: 'Comprometidos con prácticas sustentables y el cuidado del medio ambiente.' },
];

export default async function Nosotros() {
  const [settings, pageData] = await Promise.all([
    client.fetch(SITE_SETTINGS_QUERY),
    client.fetch(NOSOTROS_PAGE_QUERY),
  ]);

  const heroImageSrc = pageData?.heroImage?.asset
    ? urlFor(pageData.heroImage).url()
    : '/images/nosotros-1280w.png';

  const missionImageSrc = pageData?.missionImage?.asset
    ? urlFor(pageData.missionImage).url()
    : '/images/bowl-1280w.png';

  const visionImageSrc = pageData?.visionImage?.asset
    ? urlFor(pageData.visionImage).url()
    : '/images/banano-1280w.png';

  const nacascoloLogoSrc = pageData?.nacascoloLogo?.asset
    ? urlFor(pageData.nacascoloLogo).url()
    : settings?.nacascoloLogo?.asset
      ? urlFor(settings.nacascoloLogo).url()
      : '/images/nacas logo-640w.png';

  const nacascoloUrl = pageData?.nacascoloUrl ?? 'http://www.nacascolo.com';
  const nacascoloText = pageData?.nacascoloText ?? 'Otra empresa de';

  const values = pageData?.values && pageData.values.length > 0
    ? pageData.values
    : defaultValues;

  return (
    <main className="pt-20">
      <Header settings={settings} />

      {/* Hero Section */}
      <section className="relative h-[50vh] overflow-hidden">
        <Image
          src={heroImageSrc}
          alt={pageData?.heroImage?.alt ?? 'Nosotros - Natural Bites'}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {pageData?.heroHeading ?? 'NOSOTROS'}
            </h1>
            <p className="text-lg max-w-2xl">
              {pageData?.heroSubtitle ?? 'Conoce nuestra historia y pasión por lo natural'}
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#333] mb-6">
              {pageData?.aboutHeading ?? 'Nuestra Historia'}
            </h2>
            <p className="text-lg text-[#666] leading-relaxed">
              {pageData?.aboutParagraph ?? 'En Natural Bites buscamos crear productos deliciosos y naturales que le den un sabor inolvidable a todas tus recetas, formando parte de un estilo de vida saludable.'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-[#333] mb-4">
                {pageData?.missionHeading ?? 'Nuestra Misión'}
              </h3>
              <p className="text-[#666] leading-relaxed">
                {pageData?.missionParagraph ?? 'Ofrecer productos naturales de la más alta calidad que complementen un estilo de vida saludable, sin sacrificar el sabor ni la experiencia de disfrutar cada bocado.'}
              </p>
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src={missionImageSrc}
                alt={pageData?.missionImage?.alt ?? 'Natural ingredients'}
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-64 rounded-lg overflow-hidden md:order-1">
              <Image
                src={visionImageSrc}
                alt={pageData?.visionImage?.alt ?? 'Healthy products'}
                fill
                className="object-cover"
              />
            </div>
            <div className="md:order-2">
              <h3 className="text-2xl font-bold text-[#333] mb-4">
                {pageData?.visionHeading ?? 'Nuestra Visión'}
              </h3>
              <p className="text-[#666] leading-relaxed">
                {pageData?.visionParagraph ?? 'Ser la marca líder en snacks saludables en Centroamérica, inspirando a las personas a tomar decisiones más conscientes sobre su alimentación sin renunciar al placer de comer.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#333] text-center mb-12">
            {pageData?.valuesHeading ?? 'Nuestros Valores'}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value: { _key?: string; icon: string; title: string; description: string }, index: number) => (
              <div key={value._key ?? index} className="text-center p-8 bg-white rounded-lg shadow-sm">
                <div className="w-16 h-16 bg-[#f5c964] rounded-full flex items-center justify-center mx-auto mb-6">
                  {valueIcons[value.icon] ?? valueIcons.heart}
                </div>
                <h3 className="text-xl font-bold text-[#333] mb-4">{value.title}</h3>
                <p className="text-[#666]">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nacascolo Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-[#666] mb-4">{nacascoloText}</p>
          <Image
            src={nacascoloLogoSrc}
            alt="Nacascolo Holdings"
            width={200}
            height={60}
            className="mx-auto mb-4"
          />
          <a
            href={nacascoloUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#f5c964] hover:underline"
          >
            {nacascoloUrl.replace(/^https?:\/\//, 'www.').replace(/\/$/, '') !== nacascoloUrl
              ? nacascoloUrl.replace(/^https?:\/\//, '')
              : nacascoloUrl.replace(/^https?:\/\//, '')}
          </a>
        </div>
      </section>

      <Footer settings={settings} />
    </main>
  );
}
