"use client";

import { useEffect, useState } from "react";
import Icon from "@/components/Icon";
import Link from "next/link";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Stories", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const openLeadForm = () => window.openLeadForm?.();

  return (
    <>
      <nav className="fixed left-0 right-0 top-3 z-50 px-3 sm:px-4">
        <div
          className={`mx-auto flex h-16 max-w-7xl items-center justify-between rounded-lg border px-3 transition-all duration-300 sm:px-5 ${
            scrolled
              ? "border-ink-200/90 bg-white/95 shadow-lift backdrop-blur-xl"
              : "border-white/80 bg-white/90 shadow-soft backdrop-blur-xl"
          }`}
        >
          <Link
            href="/"
            className="flex min-w-0 items-center gap-2 rounded-lg pr-2 focus:outline-none focus:ring-2 focus:ring-brand-200"
            onClick={() => setMenuOpen(false)}
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-700 text-white shadow-sm">
              <Icon name="compass" className="h-5 w-5" />
            </span>
            <span className="text-lg font-black tracking-tight text-ink-950">
              Map<span className="text-brand-700">Minds</span>
            </span>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm font-bold text-ink-700 transition hover:bg-brand-50 hover:text-brand-800 focus:outline-none focus:ring-2 focus:ring-brand-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden items-center lg:flex">
            <button
              type="button"
              onClick={openLeadForm}
              className="btn-primary px-4 py-2.5 cursor-pointer"
            >
              Free Consultation
              <Icon name="arrowRight" className="h-4 w-4" />
            </button>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open navigation menu"
            className="flex h-10 w-10 items-center justify-center rounded-lg text-ink-800 transition hover:bg-ink-50 focus:outline-none focus:ring-2 focus:ring-brand-200 lg:hidden"
          >
            <Icon name="menu" className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <>
          <button
            type="button"
            aria-label="Close navigation menu"
            className="fixed inset-0 z-40 bg-ink-950/35 backdrop-blur-sm lg:hidden"
            onClick={() => setMenuOpen(false)}
          />
          <aside className="fixed bottom-0 right-0 top-0 z-50 w-full bg-white p-4 shadow-lift lg:hidden">
            <div className="flex items-center justify-between">
              <Link
                href="#home"
                className="flex items-center gap-2"
                onClick={() => setMenuOpen(false)}
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-700 text-white">
                  <Icon name="compass" className="h-5 w-5" />
                </span>
                <span className="text-lg font-black text-ink-950">
                  Map<span className="text-brand-700">Minds</span>
                </span>
              </Link>
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                aria-label="Close navigation menu"
                className="flex h-10 w-10 items-center justify-center rounded-lg text-ink-700 transition hover:bg-ink-50 focus:outline-none focus:ring-2 focus:ring-brand-200"
              >
                <Icon name="close" className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-8 grid gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg border border-transparent px-4 py-3 text-sm font-bold text-ink-700 transition hover:border-brand-100 hover:bg-brand-50 hover:text-brand-800"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="mt-8 grid gap-3">
              <button
                type="button"
                onClick={() => {
                  openLeadForm();
                  setMenuOpen(false);
                }}
                className="btn-primary w-full"
              >
                Free Consultation
                <Icon name="arrowRight" className="h-4 w-4" />
              </button>
              <a
                href="https://wa.me/919999999999?text=Hi%20MapMinds%2C%20I%20need%20NEET%20counselling%20help"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary w-full"
              >
                <Icon name="messageCircle" className="h-4 w-4" />
                WhatsApp Us
              </a>
            </div>
          </aside>
        </>
      )}
    </>
  );
}
