"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  {
    src: "/abia-state-gov.jpeg",
    alt: "Governor Otti inspects construction of new Governor's Office",
  },
  {
    src: "/abia-state-gov.2.jpeg",
    alt: "Abia State Government House construction project",
  },
];

const previewParagraphs = [
  "Abia State Governor, His Excellency, Dr. Alex Otti, OFR, on Saturday, June 6, inspected the ongoing construction of a fit-for-purpose new Governor's Office and Official Residence within the Government House complex in Umuahia, the State capital.",
  "On arrival at the project site, Governor Otti was received by site engineers from Craneburg Construction Company, the contractor handling the project.",
  "The Governor conducted a comprehensive inspection and assessment of the work done so far, engaging the site engineers with critical questions to ensure that the project is being executed in line with the approved design and specifications.",
  "Expressing satisfaction with the progress made, Governor Otti commended the quality and pace of work and urged the contractor to maintain the momentum, noting that the project is expected to be completed before the end of the year.",
];

const moreParagraphs = [
  "The construction of the new Governor's Office and Official Residence forms part of the ongoing rebuilding and modernization of the Abia State Government House, which had suffered years of neglect under previous administrations.",
  "As part of the Government House rebuilding and upgrading initiative, several projects have already been completed, including the renovation and retrofitting of the Deputy Governor's Office, the construction of a brand new Office of the Secretary to the State Government (SSG), and the remodeling, renovation, and retrofitting of the Michael Okpara Auditorium, the Protocol Building, and the Banquet Hall, among other critical infrastructures.",
  "In addition, work is progressing on other key projects within the Government House complex, including the construction of a modern Government House Clinic, a new Government House Gate, and other supporting infrastructure aimed at transforming the seat of government into a functional and befitting administrative hub.",
];

export default function ImageText() {
  const [expanded, setExpanded] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((current) => (current + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[var(--white)]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-8 px-4 py-12 sm:px-6 md:grid-cols-2 lg:gap-12 lg:px-8 lg:py-16">
        <div className="pl-6 sm:pl-10 md:pl-12 lg:pl-16">
          <div className="relative min-h-[300px] w-full sm:min-h-[360px] md:min-h-[400px]">
            <Image
              key={images[activeImage].src}
              src={images[activeImage].src}
              alt={images[activeImage].alt}
              fill
              className="rounded-lg object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        <div>
          <h2 className="mb-6 text-lg font-bold uppercase leading-snug text-[var(--black)] sm:text-xl">
            Governor Otti Inspects Ongoing Construction of New Governor&apos;s Office
            and Official Residence
          </h2>

          <div className="space-y-4 text-base leading-relaxed text-[var(--text-muted)] sm:text-lg">
            {previewParagraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}

            {expanded &&
              moreParagraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
          </div>

          <button
            type="button"
            onClick={() => setExpanded(!expanded)}
            className="mt-6 text-sm font-semibold text-[var(--brand-green)] hover:text-[var(--brand-green-dark)] sm:text-base"
          >
            {expanded ? "View Less" : "View More"}
          </button>
        </div>
      </div>
    </section>
  );
}
