interface SnacksSectionProps {
  data?: {
    snacksHeading?: string;
    snacksParagraph?: string;
  } | null;
}

export default function SnacksSection({ data }: SnacksSectionProps = {}) {
  const heading = data?.snacksHeading ?? 'SNACKS SALUDABLES';
  const paragraph = data?.snacksParagraph ?? 'En Natural Bites buscamos crear productos deliciosos y naturales que le den un sabor inolvidable a todas tus recetas, formando parte de un estilo de vida saludable.';

  return (
    <section className="py-10 px-4 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#333] mb-4">
          {heading}
        </h2>
        <p className="text-base md:text-lg text-[#666] leading-relaxed">
          {paragraph}
        </p>
      </div>
    </section>
  );
}
