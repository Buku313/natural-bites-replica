import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from '@/sanity/lib/image';

interface NewsletterSectionProps {
  data?: {
    newsletterHeading?: string;
    newsletterParagraph?: string;
    newsletterButtonText?: string;
    newsletterButtonLink?: string;
    newsletterImage?: { asset?: { _id: string; url: string }; alt?: string };
  } | null;
}

export default function NewsletterSection({ data }: NewsletterSectionProps = {}) {
  const heading = data?.newsletterHeading ?? 'EAT HEALTHY.\nSMILE MORE.';
  const paragraph = data?.newsletterParagraph ?? 'Recibe tips de cocina saludable\n¡todas las semanas en tu email!';
  const buttonText = data?.newsletterButtonText ?? '¡Suscríbete aquí!';
  const buttonLink = data?.newsletterButtonLink ?? '/recetas';
  const imageSrc = data?.newsletterImage?.asset
    ? urlFor(data.newsletterImage).width(640).url()
    : '/images/bowl-640w.png';
  const imageAlt = data?.newsletterImage?.alt ?? 'Bowl of nuts';

  return (
    <section className="py-8 md:py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="bg-[#f5c964] rounded-xl overflow-hidden relative">
          {/* Leaf pattern background - subtle */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cpath d='M30 5C20 5 10 15 10 30s10 25 20 25c-5-5-8-15-8-25s3-20 8-25z' fill='%23333' fill-opacity='0.3'/%3E%3C/svg%3E")`,
              backgroundSize: '60px 60px',
            }}
          />

          <div className="relative grid md:grid-cols-2 gap-6 items-center p-6 md:p-10">
            <div>
              {data?.newsletterHeading ? (
                <h2 className="text-2xl md:text-3xl font-bold text-[#333] mb-4 whitespace-pre-line">
                  {heading}
                </h2>
              ) : (
                <>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#333] mb-1">
                    EAT HEALTHY.
                  </h2>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#333] mb-4">
                    SMILE MORE.
                  </h2>
                </>
              )}
              <p className="text-sm md:text-base text-[#333] mb-6 whitespace-pre-line">
                {paragraph}
              </p>
              <Link
                href={buttonLink}
                className="inline-block px-6 py-2.5 bg-[#333] text-white font-medium rounded-full hover:bg-[#222] transition-colors"
              >
                {buttonText}
              </Link>
            </div>
            <div className="relative flex justify-center md:justify-end">
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={250}
                height={250}
                className="object-contain"
                unoptimized={!!data?.newsletterImage?.asset}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
