'use client';

import { useEffect } from 'react';
import Icon from '@/components/Icon';
import Link from 'next/link';

export default function CTABanner() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('cta-anim');
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative overflow-hidden bg-ink-950 py-16 text-white md:py-20">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'linear-gradient(90deg, rgba(255,255,255,0.16) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px)',
          backgroundSize: '44px 44px',
        }}
      />

      <div id="cta-anim" className="slide-up site-container relative">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-brand-100">
            <Icon name="clock" className="h-3.5 w-3.5" />
            Before choice filling
          </div>
          <h2 className="text-3xl font-black tracking-tight md:text-5xl">
            Do not let a confusing counselling round waste your score.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/70">
            Talk to a MapMinds expert and get a practical route for course, quota, fee range, documents and next counselling steps.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <button type="button" onClick={() => window.openLeadForm?.()} className="btn-accent">
              Get Free Consultation
              <Icon name="arrowRight" className="h-4 w-4" />
            </button>
            <Link
              href="https://wa.me/919590417660?text=Hi%20MapMinds%2C%20I%20need%20NEET%20counselling%20help"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/10 px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/40"
            >
              <Icon name="messageCircle" className="h-4 w-4" />
              Chat on WhatsApp
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
