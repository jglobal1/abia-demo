const cards = [
  {
    title: "Functions of Abia State BPP",
    content:
      "The Bureau shall: (a) formulate the general policies and guidelines relating to public sector procurement for the approval of the Council; (b) assist procuring entities in implementing an efficient procurement management system; (c) conduct research and disseminate information on procurement.",
    href: "#",
  },
  {
    title: "Abia State BPP Team",
    content:
      "The Council shall: (a) consider, approve and amend the monetary and prior review threshold for the application of the provisions of this Law by procuring entities; (b) receive and consider for approval the procurement plans of procuring entities.",
    href: "#",
  },
  {
    title: "e-Procurement Training Manual",
    content:
      "Complete tendering process; from advertising to receiving and submitting tender-related information are done online. This enables firms to be more efficient as paper-based transactions are reduced or eliminated, facilitating faster procurement cycles and greater transparency.",
    href: "#",
  },
];

export default function InfoCards() {
  return (
    <section className="bg-[var(--white)] py-12 sm:py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
        {cards.map((card) => (
          <div
            key={card.title}
            className="flex flex-col rounded border border-gray-200 bg-[var(--white)] shadow-sm"
          >
            <div className="flex flex-1 flex-col p-6">
              <h3 className="mb-3 text-sm font-bold text-[var(--wine)] sm:text-base">
                {card.title}
              </h3>
              <p className="flex-1 text-sm leading-relaxed text-[var(--text-muted)]">
                {card.content}
              </p>
            </div>
            <div className="border-t border-gray-100 bg-[var(--gray-light)] px-6 py-3">
              <a
                href={card.href}
                className="text-sm font-medium text-[var(--text-muted)] hover:text-[var(--wine)]"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
