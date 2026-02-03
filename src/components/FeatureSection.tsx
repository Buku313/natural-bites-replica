import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from '@/sanity/lib/image';

interface FeatureSectionProps {
  data?: {
    feature1Heading?: string;
    feature1Paragraph?: string;
    feature1ButtonText?: string;
    feature1ButtonLink?: string;
    feature1Image?: { asset?: { _id: string; url: string }; alt?: string };
    bannerImage?: { asset?: { _id: string; url: string }; alt?: string };
    feature2Heading?: string;
    feature2Paragraph?: string;
    feature2ButtonText?: string;
    feature2ButtonLink?: string;
    feature2Image?: { asset?: { _id: string; url: string }; alt?: string };
  } | null;
}

export default function FeatureSection({ data }: FeatureSectionProps = {}) {
  const feature1Heading = data?.feature1Heading ?? 'UN SNACK CON NATURALIDAD PARA TODO MOMENTO';
  const feature1Paragraph = data?.feature1Paragraph ?? 'Ya sea en un momento a solas, con amigos o en un break, nuestros productos te acompañan en cada momento, siempre con naturalidad.';
  const feature1ButtonText = data?.feature1ButtonText ?? 'Elegí tu favorito';
  const feature1ButtonLink = data?.feature1ButtonLink ?? '/tienda';
  const feature1ImageSrc = data?.feature1Image?.asset
    ? urlFor(data.feature1Image).width(1280).url()
    : '/images/8fae07bab892bc35820ec6d8e12a552d-1280w.jpg';
  const feature1ImageAlt = data?.feature1Image?.alt ?? 'Tortilla chips with dips';

  const bannerImageSrc = data?.bannerImage?.asset
    ? urlFor(data.bannerImage).width(1920).url()
    : '/images/Banner-Nuevo-Look-1920-X-2880-1920w.jpg';
  const bannerImageAlt = data?.bannerImage?.alt ?? 'New Product Alert - 4 nuevos sabores';

  const feature2Heading = data?.feature2Heading ?? 'SNACKS SALUDABLES PARA TODO MOMENTO';
  const feature2Paragraph = data?.feature2Paragraph ?? 'Una deliciosa variedad de snacks saludables que todos pueden disfrutar en cualquier ocasión.';
  const feature2ButtonText = data?.feature2ButtonText ?? 'Conocé nuestras recetas';
  const feature2ButtonLink = data?.feature2ButtonLink ?? '/recetas';
  const feature2ImageSrc = data?.feature2Image?.asset
    ? urlFor(data.feature2Image).width(1280).url()
    : '/images/banano-1280w.png';
  const feature2ImageAlt = data?.feature2Image?.alt ?? 'Muffin Mix with Banana';

  return (
    <>
      {/* Feature 1 - Snack for every moment - 2 column layout */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left - Text Content */}
            <div className="text-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#333] mb-6 leading-tight whitespace-pre-line">
                {feature1Heading}
              </h2>
              <p className="text-base md:text-lg text-[#666] mb-8 leading-relaxed max-w-md">
                {feature1Paragraph}
              </p>
              <Link
                href={feature1ButtonLink}
                className="inline-block px-8 py-3 bg-[#f5c964] text-[#333] font-medium rounded-full hover:bg-[#e5b54e] transition-all duration-300"
              >
                {feature1ButtonText}
              </Link>
            </div>

            {/* Right - Image */}
            <div className="relative">
              <Image
                src={feature1ImageSrc}
                alt={feature1ImageAlt}
                width={600}
                height={500}
                className="w-full h-auto rounded-lg"
                unoptimized={!!data?.feature1Image?.asset}
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
              src={bannerImageSrc}
              alt={bannerImageAlt}
              width={1920}
              height={600}
              className="w-full h-auto"
              unoptimized={!!data?.bannerImage?.asset}
            />
          </div>
        </div>
      </section>

      {/* Feature 2 - Healthy snacks - 2 column layout (same as first) */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left - Text Content */}
            <div className="text-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#333] mb-6 leading-tight whitespace-pre-line">
                {feature2Heading}
              </h2>
              <p className="text-base md:text-lg text-[#666] mb-8 leading-relaxed max-w-md">
                {feature2Paragraph}
              </p>
              <Link
                href={feature2ButtonLink}
                className="inline-block px-8 py-3 bg-[#f5c964] text-[#333] font-medium rounded-full hover:bg-[#e5b54e] transition-all duration-300"
              >
                {feature2ButtonText}
              </Link>
            </div>

            {/* Right - Image */}
            <div className="relative">
              <Image
                src={feature2ImageSrc}
                alt={feature2ImageAlt}
                width={600}
                height={500}
                className="w-full h-auto"
                unoptimized={!!data?.feature2Image?.asset}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
