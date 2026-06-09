import Image from "next/image";

export default function ImageText() {
  return (
    <section className="bg-[var(--white)]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 md:grid-cols-2">
        <div className="relative min-h-[300px] md:min-h-[400px]">
          <Image
            src="/abia-state-gov.jpeg"
            alt="Abia State Government"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex items-center px-6 py-10 sm:px-10 lg:px-16">
          <p className="text-base leading-relaxed text-[var(--text-muted)] sm:text-lg">
            Expressing satisfaction with the progress made, Governor Otti commended
            the quality and pace of work and urged the contractor to maintain the
            momentum, noting that the project is expected to be completed before the
            end of the year.
          </p>
        </div>
      </div>
    </section>
  );
}
