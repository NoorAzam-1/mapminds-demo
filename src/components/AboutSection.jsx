'use client';

import { useEffect } from 'react';
import Icon from '@/components/Icon';

const strengths = [
  'Data-backed college shortlist',
  'Quota and category route planning',
  'Budget-sensitive admission options',
  'Document and deadline guidance',
];

const roadmap = [
  {
    step: '01',
    title: 'Profile Audit',
    text: 'Score, category, state, budget and course preference are reviewed together.',
  },
  {
    step: '02',
    title: 'Route Mapping',
    text: 'AIQ, state quota, private, deemed and management options are compared.',
  },
  {
    step: '03',
    title: 'Choice Filling',
    text: 'You get a practical order of choices with risk level and fee clarity.',
  },
  {
    step: '04',
    title: 'Admission Follow-up',
    text: 'Registration, documents and round-wise decisions stay organized.',
  },
];

export default function AboutSection() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.about-anim').forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="section-pad bg-paper">
      <div className="site-container">
        <div className="grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr] xl:gap-16">
          <div className="about-anim slide-up">
            <div className="eyebrow mb-5">
              <Icon name="compass" className="h-3.5 w-3.5" />
              About MapMinds
            </div>
            <h2 className="max-w-2xl text-3xl font-black leading-tight tracking-tight text-ink-950 md:text-5xl">
              We do not guess. We map your strongest admission path.
            </h2>
            <p className="mt-5 text-base leading-7 text-ink-700">
              Many NEET aspirants miss seats because counselling choices are rushed or based on incomplete information. MapMinds brings counsellors, admission data and document support into one clear plan.
            </p>
            <p className="mt-4 text-base leading-7 text-ink-700">
              Whether your route is AIQ, state quota, private college, management seat or an allied medical course, we help you understand the tradeoffs before you commit.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {strengths.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-800">
                    <Icon name="check" className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-sm font-semibold leading-6 text-ink-700">{item}</span>
                </div>
              ))}
            </div>

            <button type="button" onClick={() => window.openLeadForm?.()} className="btn-primary mt-8">
              Talk to an Expert
              <Icon name="arrowRight" className="h-4 w-4" />
            </button>
          </div>

          <div className="about-anim slide-up" style={{ transitionDelay: '140ms' }}>
            <div className="surface overflow-hidden">
              <div className="border-b border-ink-100 bg-white px-5 py-5 sm:px-6">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-700">
                      Admission Roadmap
                    </p>
                    <h3 className="mt-1 text-xl font-black text-ink-950">From score to seat strategy</h3>
                  </div>
                  <div className="hidden rounded-lg bg-accent-100 px-3 py-2 text-sm font-black text-accent-800 sm:block">
                    4 steps
                  </div>
                </div>
              </div>

              <div className="divide-y divide-ink-100">
                {roadmap.map((item) => (
                  <div key={item.step} className="grid gap-4 px-5 py-5 sm:grid-cols-[72px_1fr] sm:px-6">
                    <div className="flex items-center gap-3 sm:block">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-ink-950 text-sm font-black text-white">
                        {item.step}
                      </div>
                      <div className="h-px flex-1 bg-ink-100 sm:mt-4 sm:h-10 sm:w-px sm:bg-brand-200" />
                    </div>
                    <div>
                      <h4 className="text-base font-black text-ink-950">{item.title}</h4>
                      <p className="mt-1 text-sm leading-6 text-ink-600">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
