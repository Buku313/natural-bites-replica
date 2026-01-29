import Image from 'next/image';
import Link from 'next/link';

export default function NewsletterSection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-[#f5c964] rounded-2xl overflow-hidden relative">
          <div className="grid md:grid-cols-2 gap-8 items-center p-8 md:p-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#333] mb-2">
                EAT HEALTHY.
              </h2>
              <h2 className="text-3xl md:text-4xl font-bold text-[#333] mb-6">
                SMILE MORE.
              </h2>
              <p className="text-lg text-[#333] mb-8">
                Recibe tips de cocina saludable<br />
                ¡todas las semanas en tu email!
              </p>
              <Link href="/recetas" className="btn-secondary inline-block">
                ¡Suscríbete aquí!
              </Link>
            </div>
            <div className="relative flex justify-center">
              <Image
                src="/images/bowl-640w.png"
                alt="Bowl of nuts"
                width={300}
                height={300}
                className="rounded-full"
              />
            </div>
          </div>
          {/* Decorative leaf pattern in background - represented by the yellow bg */}
        </div>
      </div>
    </section>
  );
}
