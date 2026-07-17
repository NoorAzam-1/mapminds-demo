"use client";

import { useEffect } from "react";
import Icon from "@/components/Icon";

export default function TermsAndConditions() {
  const lastUpdated = "July 17, 2026";

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );

    document
      .querySelectorAll(".privacy-anim")
      .forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen text-ink-800 py-12 md:py-20 mt-12 md:mt-6 scroll-m-12">
      <div className="site-container">
        <div className="privacy-anim max-w-3xl">
          <span className="eyebrow mb-4">
            <Icon name="check" className="h-3 w-3" />
            User Agreement & Legal Terms
          </span>
          <h1 className="text-3xl font-black tracking-tight text-ink-950 sm:text-5xl md:text-6xl">
            Terms & Conditions
          </h1>
          <p className="mt-5 text-base leading-relaxed text-ink-600 sm:text-lg">
            Welcome to MapMinds. These terms and conditions outline the rules 
            and regulations for the use of our web domains and platforms. By 
            accessing this website, we assume you accept these terms and conditions 
            in full.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-ink-100 px-4 py-1.5 text-xs font-bold text-ink-600">
            <span>Last updated: {lastUpdated}</span>
          </div>
        </div>
      </div>

      <main className="section-pad">
        <div className="site-container">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] xl:gap-16">
            <div className="privacy-anim slide-up space-y-5">
              <section className="space-y-4">
                <div className="eyebrow bg-ink-50 border-ink-200 text-ink-800">
                  01. Acceptance of Terms
                </div>
                <p className="text-sm leading-7 text-ink-700 sm:text-base">
                  By accessing, browsing, or registering on MapMinds, you agree to comply 
                  with and be bound by these Terms and Conditions. If you disagree with 
                  any part of these terms, you must discontinue using our services 
                  and web portals immediately.
                </p>
              </section>

              <hr className="border-ink-100" />

              <section className="space-y-4">
                <h2 className="text-xl font-black text-ink-950 sm:text-2xl">
                  02. User Accounts & Information Accuracy
                </h2>
                <p className="text-sm leading-7 text-ink-700 sm:text-base">
                  When you register an account or submit data on our platforms, you agree 
                  to provide accurate, current, and complete credentials. This includes 
                  proper reporting of:
                </p>
                <ul className="space-y-3.5 pl-2 text-sm leading-relaxed text-ink-700">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-800">
                      <Icon name="check" className="h-3 w-3" />
                    </span>
                    <span>
                      <strong>Educational Metadata:</strong> Accurate reporting of your 
                      NEET scores, state of domicile, and reservation category 
                      eligibility for fair admissions analysis.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-800">
                      <Icon name="check" className="h-3 w-3" />
                    </span>
                    <span>
                      <strong>Contact Details:</strong> Valid WhatsApp numbers and email 
                      addresses to receive algorithmic analysis reports and legal 
                      compliance updates.
                    </span>
                  </li>
                </ul>
              </section>

              <hr className="border-ink-100" />

              <section className="space-y-4">
                <h2 className="text-xl font-black text-ink-950 sm:text-2xl">
                  03. Service Access Limits
                </h2>
                <p className="text-sm leading-7 text-ink-700 sm:text-base">
                  We grant you a limited, non-exclusive, non-transferable license to access 
                  and use our digital counselling utilities. Any form of systematic data scraping, 
                  unauthorized reverse-engineering of our prediction tools, or automated query 
                  spamming is strictly prohibited and will result in instant account suspension.
                </p>
                <div className="rounded-xl border border-accent-200 bg-accent-50/50 p-5 text-sm text-accent-900 leading-relaxed">
                  <strong>Verification Notice:</strong> MapMinds reserves the right to request 
                  official proof-of-score cards to verify self-reported NEET scores if an account 
                  activity pattern flags potential system abuse or bad faith processing.
                </div>
              </section>

              <hr className="border-ink-100" />

              <section className="space-y-4">
                <h2 className="text-xl font-black text-ink-950 sm:text-2xl">
                  04. Limitation of Liability
                </h2>
                <p className="text-sm leading-7 text-ink-700 sm:text-base">
                  All counselling projections, database predictions, and trends provided by 
                  MapMinds are for educational guidance only. While we keep our algorithms strictly 
                  updated, actual admissions remain subject to independent university selection 
                  boards, and we accept no liability for any losses incurred due to final 
                  allocation differences.
                </p>
              </section>
            </div>

            <div
              className="privacy-anim slide-up space-y-8"
              style={{ transitionDelay: "140ms" }}
            >
              <div className="surface overflow-hidden">
                <div className="border-b border-ink-100 bg-white px-5 py-5 sm:px-6">
                  <span className="text-xs font-bold uppercase tracking-[0.16em] text-brand-700">
                    Proprietary Rights
                  </span>
                  <h3 className="mt-1 text-xl font-black text-ink-950">
                    Intellectual Property
                  </h3>
                </div>
                <div className="divide-y divide-ink-100 bg-white">
                  <div className="p-5 sm:p-6 space-y-4">
                    <p className="text-sm leading-6 text-ink-600">
                      Unless otherwise stated, MapMinds owns the intellectual property 
                      rights for all content, visual frameworks, layout formats, and calculation 
                      systems hosted on our web domains.
                    </p>
                    <p className="text-sm leading-6 text-ink-600">
                      All intellectual property rights are reserved. You may view and print pages 
                      from our portals for your own personal use, subject to restrictions set in 
                      these terms.
                    </p>
                  </div>
                  <div className="p-5 sm:p-6 bg-paper-warm/50">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-ink-800">
                      Content Reproduction Restriction
                    </h4>
                    <p className="mt-1.5 text-xs text-ink-500 leading-5">
                      You must not republish materials, sell, rent, sub-license, duplicate, 
                      copy, or redistribute MapMinds system predictions or proprietary UI designs 
                      without direct written permission from our administration.
                    </p>
                  </div>
                </div>
              </div>

              <div className="surface p-6 bg-white space-y-4">
                <h3 className="text-lg font-black text-ink-950">
                  User Conduct Protocols
                </h3>
                <p className="text-sm text-ink-600 leading-relaxed">
                  To ensure a safe and secure database experience for all candidates, you 
                  agree to the following basic guidelines:
                </p>
                <div className="space-y-3 pt-2">
                  <div className="flex gap-3 text-sm">
                    <span className="font-bold text-brand-700 shrink-0">
                      No Abuse:
                    </span>
                    <span className="text-ink-600">
                      You will not post defamatory, abusive, or culturally inappropriate 
                      content in public support interfaces or feedback channels.
                    </span>
                  </div>
                  <div className="flex gap-3 text-sm">
                    <span className="font-bold text-brand-700 shrink-0">
                      Legality:
                    </span>
                    <span className="text-ink-600">
                      You will not use our platform to bypass any national verification systems 
                      or falsify state or governmental registration procedures.
                    </span>
                  </div>
                  <div className="flex gap-3 text-sm">
                    <span className="font-bold text-brand-700 shrink-0">
                      Accuracy:
                    </span>
                    <span className="text-ink-600">
                      You will not intentionally feed invalid test scores or reservation details 
                      to corrupt programmatic system data aggregates.
                    </span>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-ink-200 bg-white p-6 shadow-soft space-y-4">
                <h3 className="text-base font-black text-ink-950">
                  Compliance Contacts
                </h3>
                <p className="text-sm text-ink-600 leading-relaxed">
                  If you have questions about these terms, need clarification on usage limits, 
                  or wish to raise disputes regarding system access:
                </p>
                <div className="grid gap-3 pt-2 text-sm text-ink-600 sm:grid-cols-2">
                  <div className="flex items-center gap-2">
                    <Icon
                      name="mail"
                      className="h-4 w-4 text-brand-600 shrink-0"
                    />
                    <a
                      href="mailto:mapminds.digital@gmail.com"
                      className="font-semibold text-ink-900 hover:underline"
                    >
                      mapminds.digital@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon
                      name="phone"
                      className="h-4 w-4 text-brand-600 shrink-0"
                    />
                    <a
                      href="tel:+919590417660"
                      className="font-semibold text-ink-900 hover:underline"
                    >
                      +91 95904 17660
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-ink-100 bg-white py-8">
        <div className="site-container text-center text-xs font-medium text-ink-400">
          <p>© {new Date().getFullYear()} MapMinds. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}