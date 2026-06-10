const usefulLinks = [
  "Company Registration",
  "Procurement Plans",
  "Tender Advertisement",
  "Award Publications",
];

const downloads = [
  "Abia State Procurement Law",
  "Standard Bidding Documents",
  "User Manual & Guide",
  "FAQ",
];

const terms = ["Terms of Service", "Privacy Policy", "Contact Us"];

export default function Footer() {
  return (
    <footer id="footer" className="bg-[#232323] text-[var(--white)]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h4 className="mb-4 text-sm font-bold tracking-wide">USEFUL LINKS</h4>
            <ul className="space-y-2">
              {usefulLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-gray-300 hover:text-[var(--white)]"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold tracking-wide">DOWNLOADS</h4>
            <ul className="space-y-2">
              {downloads.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-gray-300 hover:text-[var(--white)]"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold tracking-wide">TERMS</h4>
            <ul className="space-y-2">
              {terms.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-gray-300 hover:text-[var(--white)]"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold tracking-wide">HEAD OFFICE</h4>
            <address className="space-y-1 text-sm not-italic text-gray-300">
              <p>Abia State BPP</p>
              <p>Plot 12, Block C, Behind Government House</p>
              <p>G.R.A., Umuahia</p>
              <p>Umuahia, Abia State</p>
            </address>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-600 pt-6 text-center">
          <p className="text-xs text-gray-400 sm:text-sm">
            © 2026 Abia State BPP. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
