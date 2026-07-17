"use client";

import { useEffect } from "react";
import Link from "next/link";
import Icon from "@/components/Icon";

export default function PrivacyPolicy() {
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
            Google Ads & Legal Compliance
          </span>
          <h1 className="text-3xl font-black tracking-tight text-ink-950 sm:text-5xl md:text-6xl">
            Privacy Policy
          </h1>
          <p className="mt-5 text-base leading-relaxed text-ink-600 sm:text-lg">
            At MapMinds, accessible from our web domains, one of our main
            priorities is the privacy of our visitors. This Privacy Policy
            document contains types of information that is collected and
            recorded by MapMinds and how we use it, complying with standard
            global publishing protocols and ad-network requirements.
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
                  01. Consent & Scope
                </div>
                <p className="text-sm leading-7 text-ink-700 sm:text-base">
                  By using our website, you hereby consent to our Privacy Policy
                  and agree to its terms. If you do not agree to any of the
                  provisions described here, please refrain from submitting
                  personal parameters in our web portals.
                </p>
              </section>

              <hr className="border-ink-100" />

              <section className="space-y-4">
                <h2 className="text-xl font-black text-ink-950 sm:text-2xl">
                  02. Information We Collect
                </h2>
                <p className="text-sm leading-7 text-ink-700 sm:text-base">
                  The personal information that you are asked to provide, and
                  the reasons why you are asked to provide it, will be made
                  clear to you at the point we ask you to provide your personal
                  information.
                </p>
                <ul className="space-y-3.5 pl-2 text-sm leading-relaxed text-ink-700">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-800">
                      <Icon name="check" className="h-3 w-3" />
                    </span>
                    <span>
                      <strong>Direct Registrations:</strong> Name, WhatsApp
                      Number, Email Address, NEET Score, State of Domicile, and
                      reservation category eligibility.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-800">
                      <Icon name="check" className="h-3 w-3" />
                    </span>
                    <span>
                      <strong>Log Files:</strong> MapMinds follows a standard
                      procedure of using log files. These files log visitors
                      when they visit websites. The information collected by log
                      files includes internet protocol (IP) addresses, browser
                      type, Internet Service Provider (ISP), date/time stamp,
                      referring/exit pages, and click counts.
                    </span>
                  </li>
                </ul>
              </section>

              <hr className="border-ink-100" />

              <section className="space-y-4">
                <h2 className="text-xl font-black text-ink-950 sm:text-2xl">
                  03. Google Advertising & DART Cookies
                </h2>
                <p className="text-sm leading-7 text-ink-700 sm:text-base">
                  Google is one of the third-party vendors on our site. It also
                  uses cookies, known as DART cookies, to serve ads to our site
                  visitors based upon their visit to our site and other sites on
                  the internet.
                </p>
                <div className="rounded-xl border border-accent-200 bg-accent-50/50 p-5 text-sm text-accent-900 leading-relaxed">
                  <strong>AdSense Opt-Out Notice:</strong> Visitors may choose
                  to decline the use of DART cookies by visiting the Google ad
                  and content network Privacy Policy at the following URL:{" "}
                  <a
                    href="https://policies.google.com/technologies/ads"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold underline hover:text-accent-700"
                  >
                    https://policies.google.com/technologies/ads
                  </a>
                </div>
              </section>

              <hr className="border-ink-100" />

              <section className="space-y-4">
                <h2 className="text-xl font-black text-ink-950 sm:text-2xl">
                  04. Third-Party Privacy Policies
                </h2>
                <p className="text-sm leading-7 text-ink-700 sm:text-base">
                  MapMinds's Privacy Policy does not apply to other advertisers
                  or websites. Thus, we are advising you to consult the
                  respective Privacy Policies of these third-party ad servers
                  for more detailed information. It may include their practices
                  and instructions about how to opt-out of certain options.
                </p>
                <p className="text-sm leading-7 text-ink-700 sm:text-base">
                  You can choose to disable cookies through your individual
                  browser options. To know more detailed information about
                  cookie management with specific web browsers, it can be found
                  at the browsers' respective websites.
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
                    AdSense & Analytics
                  </span>
                  <h3 className="mt-1 text-xl font-black text-ink-950">
                    Tracking & Cookies
                  </h3>
                </div>
                <div className="divide-y divide-ink-100 bg-white">
                  <div className="p-5 sm:p-6 space-y-4">
                    <p className="text-sm leading-6 text-ink-600">
                      Like any other website, MapMinds uses "cookies". These
                      cookies are used to store information including visitors'
                      preferences, and the pages on the website that the visitor
                      accessed or visited.
                    </p>
                    <p className="text-sm leading-6 text-ink-600">
                      The information is used to optimize the users' experience
                      by customizing our web page content based on visitors'
                      browser type and/or other information.
                    </p>
                  </div>
                  <div className="p-5 sm:p-6 bg-paper-warm/50">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-ink-800">
                      Strict Data Protection Policy
                    </h4>
                    <p className="mt-1.5 text-xs text-ink-500 leading-5">
                      We do not share any candidate's NEET scores or reservation
                      categories with programmatic advertiser engines. All
                      personalized bidding is handled strictly via aggregate
                      browser-level cookies.
                    </p>
                  </div>
                </div>
              </div>

              <div className="surface p-6 bg-white space-y-4">
                <h3 className="text-lg font-black text-ink-950">
                  Data Protection Rights
                </h3>
                <p className="text-sm text-ink-600 leading-relaxed">
                  We want to make sure you are fully aware of all of your data
                  protection rights. Every user is entitled to the following:
                </p>
                <div className="space-y-3 pt-2">
                  <div className="flex gap-3 text-sm">
                    <span className="font-bold text-brand-700 shrink-0">
                      Access:
                    </span>
                    <span className="text-ink-600">
                      You have the right to request copies of your personal data
                      profiles.
                    </span>
                  </div>
                  <div className="flex gap-3 text-sm">
                    <span className="font-bold text-brand-700 shrink-0">
                      Correction:
                    </span>
                    <span className="text-ink-600">
                      You have the right to request that we correct any
                      information you believe is inaccurate.
                    </span>
                  </div>
                  <div className="flex gap-3 text-sm">
                    <span className="font-bold text-brand-700 shrink-0">
                      Erasure:
                    </span>
                    <span className="text-ink-600">
                      You have the right to request that we erase your personal
                      database record.
                    </span>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-ink-200 bg-white p-6 shadow-soft space-y-4">
                <h3 className="text-base font-black text-ink-950">
                  Compliance Contacts
                </h3>
                <p className="text-sm text-ink-600 leading-relaxed">
                  If you have questions about this policy, or want to raise a
                  formal request to delete/opt-out your data:
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
