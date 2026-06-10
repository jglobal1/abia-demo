"use client";

import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

const navItems: NavItem[] = [
  { label: "Home", href: "#" },
  {
    label: "e-Procurement",
    href: "#procurement",
    children: [
      { label: "Tender Advertisement", href: "#procurement" },
      { label: "Award Publications", href: "#procurement" },
      { label: "Procurement Plans", href: "#procurement" },
      { label: "Registered Vendors", href: "#procurement" },
    ],
  },
  { label: "OCDS Portal", href: "#" },
  {
    label: "About BPP",
    href: "#",
    children: [
      { label: "About BPP", href: "#" },
      { label: "BPP Team", href: "#" },
      { label: "Functions of BPP", href: "#" },
    ],
  },
  { label: "Training", href: "#" },
  { label: "Register", href: "#" },
  { label: "Login", href: "#" },
];

const linkClassName =
  "px-2 py-2 text-xs font-medium whitespace-nowrap text-[var(--black)] hover:text-[var(--wine)] sm:text-sm xl:px-2.5";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  const toggleMobileExpand = (label: string) => {
    setMobileExpanded(mobileExpanded === label ? null : label);
  };

  const renderNavLinks = () =>
    navItems.map((item) =>
      item.children ? (
        <div key={item.label} className="relative">
          <button
            type="button"
            onClick={() => toggleDropdown(item.label)}
            className={`flex items-center gap-0.5 ${linkClassName}`}
          >
            {item.label}
            <ChevronDown
              size={14}
              className={`transition-transform ${openDropdown === item.label ? "rotate-180" : ""}`}
            />
          </button>
          {openDropdown === item.label && (
            <div className="absolute top-full left-0 z-50 min-w-[200px] rounded-b border border-gray-200 bg-[var(--white)] py-1 shadow-lg">
              {item.children.map((child) => (
                <a
                  key={child.label}
                  href={child.href}
                  className="block px-4 py-2 text-sm text-[var(--black)] hover:bg-[var(--hero-bg)]"
                  onClick={() => setOpenDropdown(null)}
                >
                  {child.label}
                </a>
              ))}
            </div>
          )}
        </div>
      ) : (
        <a key={item.label} href={item.href} className={linkClassName}>
          {item.label}
        </a>
      ),
    );

  return (
    <header className="fixed top-0 right-0 left-0 z-50 overflow-visible border-b border-gray-200 bg-[var(--hero-bg)]">
      <div className="mx-auto flex h-20 items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="hidden items-center lg:flex xl:gap-10">
          <a href="#" className="flex shrink-0 items-center">
            <Image
              src="/abia-logo.png"
              alt="Abia State Government"
              width={280}
              height={280}
              className="h-64 w-64 object-contain"
            />
          </a>
          <div className="w-28 shrink-0 xl:w-36" aria-hidden="true" />
          <nav className="flex items-center gap-0.5 xl:gap-1">{renderNavLinks()}</nav>
        </div>

        <div className="flex w-full items-center justify-between lg:hidden">
          <a href="#" className="flex items-center">
            <Image
              src="/abia-logo.png"
              alt="Abia State Government"
              width={150}
              height={150}
              className="h-[150px] w-[150px] object-contain"
            />
          </a>
          <button
            type="button"
            className="rounded p-2 text-[var(--black)]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-gray-200 bg-[var(--hero-bg)] lg:hidden">
          <div className="flex flex-col px-4 py-2">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.label}>
                  <button
                    type="button"
                    onClick={() => toggleMobileExpand(item.label)}
                    className="flex w-full items-center justify-between border-b border-gray-200 py-3 text-sm font-medium text-[var(--black)]"
                  >
                    {item.label}
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${mobileExpanded === item.label ? "rotate-180" : ""}`}
                    />
                  </button>
                  {mobileExpanded === item.label && (
                    <div className="bg-[var(--white)] pl-4">
                      {item.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          className="block border-b border-gray-100 py-2.5 text-sm text-[var(--black)] last:border-b-0"
                          onClick={() => setMenuOpen(false)}
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="border-b border-gray-200 py-3 text-sm font-medium text-[var(--black)] last:border-b-0"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              ),
            )}
          </div>
        </nav>
      )}
    </header>
  );
}
