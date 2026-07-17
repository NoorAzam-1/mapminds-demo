"use client";

import { useEffect } from "react";
import Icon from "@/components/Icon";

export default function RefundPolicy() {
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
            Billing, Cancellations & Fees
          </span>
          <h1 className="text-3xl font-black tracking-tight text-ink-950 sm:text-5xl md:text-6xl">
            Refund Policy
          </h1>
          <p className="mt-5 text-base leading-relaxed text-ink-600 sm:text-lg">
            At MapMinds, we aim to provide high-quality counselling resources, database
            insights, and digital utilities. Because our platforms process instantly generated
            reports and structural analytics, we follow a specific billing and cancellation model.
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
                  01. Digital Products Policy
                </div>
                <p className="text-sm leading-7 text-ink-700 sm:text-base">
                  All digital products, including counselling prediction summaries, customized rank reports, 
                  and automated database queries, are generated instantly in real-time. Because these assets 
                  cannot be returned or reused once delivered, we generally follow a <strong>No Refund Policy</strong> 
                  on successful generation of digital profiles.
                </p>
              </section>

              <hr className="border-ink-100" />

              <section className="space-y-4">
                <h2 className="text-xl font-black text-ink-950 sm:text-2xl">
                  02. Exceptions & Refundable Events
                </h2>
                <p className="text-sm leading-7 text-ink-700 sm:text-base">
                  While direct purchase transactions are final, we process refunds in full under the 
                  following specific billing anomalies:
                </p>
                <ul className="space-y-3.5 pl-2 text-sm leading-relaxed text-ink-700">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-800">
                      <Icon name="check" className="h-3 w-3" />
                    </span>
                    <span>
                      <strong>Duplicate Transactions:</strong> If our payment gateway logs multiple 
                      charges for the exact same package or portal access within 24 hours.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-800">
                      <Icon name="check" className="h-3 w-3" />
                    </span>
                    <span>
                      <strong>Unfulfilled Delivery:</strong> If a technical database error prevents your 
                      counselling parameters or tools from being assigned to your profile.
                    </span>
                  </li>
                </ul>
              </section>

              <hr className="border-ink-100" />

              <section className="space-y-4">
                <h2 className="text-xl font-black text-ink-950 sm:text-2xl">
                  03. Professional Counselling Sessions
                </h2>
                <p className="text-sm leading-7 text-ink-700 sm:text-base">
                  Payments made towards scheduled one-on-one virtual counselling or career guidance sessions are 
                  non-refundable. If you cannot attend your scheduled time, we support flexible management options:
                </p>
                <div className="rounded-xl border border-accent-200 bg-accent-50/50 p-5 text-sm text-accent-900 leading-relaxed">
                  <strong>Rescheduling Protocol:</strong> You are entitled to a one-time rescheduling 
                  at no extra charge, provided you submit a request at least 24 hours prior to the original 
                  slotted session time. Late requests will result in forfeiture of the session fee.
                </div>
              </section>

              <hr className="border-ink-100" />

              <section className="space-y-4">
                <h2 className="text-xl font-black text-ink-950 sm:text-2xl">
                  04. Refund Timelines & Channels
                </h2>
                <p className="text-sm leading-7 text-ink-700 sm:text-base">
                  When a refund request is validated and approved by our accounts department, the payment is initiated 
                  immediately. It takes approximately <strong>7 to 14 working days</strong> for the funds to reflect in 
                  your account, strictly returned to the original source payment method (Card, UPI, NetBanking) used 
                  during transaction checkout.
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
                    Resolution Window
                  </span>
                  <h3 className="mt-1 text-xl font-black text-ink-950">
                    Dispute & Claims
                  </h3>
                </div>
                <div className="divide-y divide-ink-100 bg-white">
                  <div className="p-5 sm:p-6 space-y-4">
                    <p className="text-sm leading-6 text-ink-600">
                      All transaction disputes or requests for refund must be filed within <strong>7 working days</strong> 
                      from the date of purchase.
                    </p>
                    <p className="text-sm leading-6 text-ink-600">
                      We require valid payment receipts, transaction IDs, and registered user profiles to initiate 
                      any verification procedures.
                    </p>
                  </div>
                  <div className="p-5 sm:p-6 bg-paper-warm/50">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-ink-800">
                      Third-Party Processing Delays
                    </h4>
                    <p className="mt-1.5 text-xs text-ink-500 leading-5">
                      Occasionally, settlement delays are caused by bank treasury protocols or gateway batch 
                      cycles. We will provide reference IDs (UTR numbers) so you can check pending status with 
                      your financial institution.
                    </p>
                  </div>
                </div>
              </div>

              <div className="surface p-6 bg-white space-y-4">
                <h3 className="text-lg font-black text-ink-950">
                  Verification Requirements
                </h3>
                <p className="text-sm text-ink-600 leading-relaxed">
                  To ensure fraudulent refund prevention, all requests must include:
                </p>
                <div className="space-y-3 pt-2">
                  <div className="flex gap-3 text-sm">
                    <span className="font-bold text-brand-700 shrink-0">
                      Order ID:
                    </span>
                    <span className="text-ink-600">
                      Your unique transaction reference number from the payment confirmation.
                    </span>
                  </div>
                  <div className="flex gap-3 text-sm">
                    <span className="font-bold text-brand-700 shrink-0">
                      Identity Proof:
                    </span>
                    <span className="text-ink-600">
                      Matching name and email address registered on your active counselling profile.
                    </span>
                  </div>
                  <div className="flex gap-3 text-sm">
                    <span className="font-bold text-brand-700 shrink-0">
                      Error Proof:
                    </span>
                    <span className="text-ink-600">
                      Screenshot or logs showing product delivery failure, if applicable.
                    </span>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-ink-200 bg-white p-6 shadow-soft space-y-4">
                <h3 className="text-base font-black text-ink-950">
                  Compliance Contacts
                </h3>
                <p className="text-sm text-ink-600 leading-relaxed">
                  If you have been double-charged, or want to raise a claim for an unreceived digital purchase:
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