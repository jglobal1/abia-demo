import ParticleBackground from "@/components/ParticleBackground";

const heroCards = [
  { label: "Vendor Registration", href: "#" },
  { label: "Tenders", href: "#procurement" },
  { label: "Abia OCDS Portal", href: "#" },
];

export default function HeroBanner() {
  return (
    <section className="relative isolate flex min-h-[500px] items-center overflow-hidden pt-20">
      <ParticleBackground />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-16">
        <div>
          <h1 className="text-3xl font-bold text-[var(--black)] sm:text-4xl lg:text-5xl">
            Abia State Government
          </h1>
          <p className="mt-2 text-2xl font-bold text-[var(--black)] sm:text-3xl lg:text-4xl">
            e-Procurement System
          </p>
          <p className="mt-2 text-xl font-bold text-[var(--black)] sm:text-2xl lg:text-3xl">
            OCDS Portal
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            {heroCards.map((card) => (
              <a
                key={card.label}
                href={card.href}
                className="rounded-lg bg-[#017d43] px-8 py-4 text-center text-sm font-semibold text-white hover:bg-[#015a32] sm:text-base"
              >
                {card.label}
              </a>
            ))}
          </div>
        </div>

        <div className="hidden lg:block" aria-hidden="true" />
      </div>
    </section>
  );
}
