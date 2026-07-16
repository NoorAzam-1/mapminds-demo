'use client';

import { useState } from 'react';
import Icon from '@/components/Icon';

const states = [
  ['up', 'Uttar Pradesh'],
  ['mh', 'Maharashtra'],
  ['rj', 'Rajasthan'],
  ['mp', 'Madhya Pradesh'],
  ['ka', 'Karnataka'],
  ['tn', 'Tamil Nadu'],
  ['kl', 'Kerala'],
  ['br', 'Bihar'],
  ['other', 'Other'],
];

const pathways = [
  {
    icon: 'route',
    title: 'Quota Route',
    text: 'AIQ, state, private, management and NRI options mapped clearly.',
  },
  {
    icon: 'chart',
    title: 'College Shortlist',
    text: 'Score, fee range, state rules and course preference compared together.',
  },
  {
    icon: 'document',
    title: 'Counselling Support',
    text: 'Registration, choice filling and document checks handled step by step.',
  },
];

export default function HeroSection() {
  const [form, setForm] = useState({
    score: '',
    state: '',
    category: 'general',
  });
  const [result, setResult] = useState(null);

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const checkEligibility = (event) => {
    event.preventDefault();

    const score = Number.parseInt(form.score, 10);

    if (!score || !form.state) {
      setResult({
        type: 'warn',
        title: 'Add your score and state',
        text: 'These two details help us estimate your broad course options.',
      });
      return;
    }

    const categoryAdjustment = { sc: 50, st: 60, obc: 30, ews: 20, general: 0 };
    const effectiveScore = score + (categoryAdjustment[form.category] || 0);
    const courses = [];

    if (effectiveScore >= 450) courses.push('MBBS');
    if (effectiveScore >= 300) courses.push('BDS');
    if (effectiveScore >= 200) courses.push('BAMS', 'BHMS');
    if (effectiveScore >= 150) courses.push('B.Sc Nursing');

    if (courses.length === 0) {
      setResult({
        type: 'error',
        title: 'Needs expert review',
        text: 'Your score may need a very specific counselling strategy. Share your details and we will check practical options.',
      });
      return;
    }

    setResult({
      type: 'success',
      title: 'Possible course routes',
      text: courses.join(', '),
    });
  };

  return (
    <section id="home" className="hero-backdrop relative overflow-hidden pt-28 pb-14 md:pt-32 md:pb-20">
      <div className="soft-grid absolute inset-0" />

      <div className="site-container relative">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] xl:gap-14">
          <div>
            <div className="eyebrow mb-5">
              <Icon name="spark" className="h-3.5 w-3.5" />
              NEET counselling guidance
            </div>

            <h1 className="max-w-3xl text-4xl font-black leading-[1.05] tracking-tight text-ink-950 sm:text-5xl lg:text-6xl">
              MapMinds NEET Admission Counselling
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-ink-700 sm:text-lg">
              Low score, confusing quota rules, budget pressure, document deadlines - we turn all of it into a clear medical college roadmap for MBBS, BDS, BAMS, BHMS and nursing aspirants.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button type="button" onClick={() => window.openLeadForm?.()} className="btn-primary">
                Get Free Consultation
                <Icon name="arrowRight" className="h-4 w-4" />
              </button>
              <a
                href="https://wa.me/919999999999?text=Hi%20MapMinds%2C%20I%20need%20help%20with%20NEET%20counselling"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <Icon name="messageCircle" className="h-4 w-4" />
                Chat on WhatsApp
              </a>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                ['500+', 'Students counselled'],
                ['150+', 'College routes tracked'],
                ['1-on-1', 'Expert strategy call'],
              ].map(([value, label]) => (
                <div key={label} className="rounded-lg border border-white/80 bg-white/70 p-4 shadow-sm backdrop-blur">
                  <div className="text-2xl font-black text-ink-950">{value}</div>
                  <div className="mt-1 text-xs font-bold uppercase tracking-[0.12em] text-ink-500">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="float-animation">
            <div className="surface-tinted p-5 sm:p-6">
              <div className="flex items-start justify-between gap-4 border-b border-ink-100 pb-5">
                <div className="flex items-center gap-3">
                  <div className="icon-box">
                    <Icon name="search" className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-lg font-black text-ink-950">Quick Eligibility Checker</h2>
                    <p className="mt-1 text-sm text-ink-500">A first estimate before expert counselling.</p>
                  </div>
                </div>
                <span className="chip hidden sm:inline-flex">Free</span>
              </div>

              <form onSubmit={checkEligibility} className="mt-5 grid gap-4">
                <div>
                  <label htmlFor="neetScore" className="label-text">NEET score</label>
                  <input
                    id="neetScore"
                    name="score"
                    type="number"
                    min="0"
                    max="720"
                    value={form.score}
                    onChange={updateField}
                    placeholder="Example: 350"
                    className="form-field"
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="relative">
                    <label htmlFor="neetState" className="label-text">State</label>
                    <select
                      id="neetState"
                      name="state"
                      value={form.state}
                      onChange={updateField}
                      className="select-field pr-10"
                    >
                      <option value="">Select state</option>
                      {states.map(([value, label]) => (
                        <option key={value} value={value}>
                          {label}
                        </option>
                      ))}
                    </select>
                    <Icon name="chevronDown" className="pointer-events-none absolute bottom-3.5 right-3 h-4 w-4 text-ink-400" />
                  </div>

                  <div className="relative">
                    <label htmlFor="neetCategory" className="label-text">Category</label>
                    <select
                      id="neetCategory"
                      name="category"
                      value={form.category}
                      onChange={updateField}
                      className="select-field pr-10"
                    >
                      <option value="general">General</option>
                      <option value="obc">OBC</option>
                      <option value="sc">SC</option>
                      <option value="st">ST</option>
                      <option value="ews">EWS</option>
                    </select>
                    <Icon name="chevronDown" className="pointer-events-none absolute bottom-3.5 right-3 h-4 w-4 text-ink-400" />
                  </div>
                </div>

                <button type="submit" className="btn-accent w-full">
                  Check Course Options
                  <Icon name="arrowRight" className="h-4 w-4" />
                </button>
              </form>

              {result && (
                <div
                  className={`mt-5 rounded-lg border p-4 ${
                    result.type === 'success'
                      ? 'border-brand-200 bg-brand-50 text-brand-950'
                      : result.type === 'warn'
                        ? 'border-accent-200 bg-accent-50 text-accent-900'
                        : 'border-coral-500/25 bg-coral-50 text-coral-700'
                  }`}
                >
                  <div className="flex gap-3">
                    <Icon
                      name={result.type === 'success' ? 'check' : 'spark'}
                      className="mt-0.5 h-5 w-5 shrink-0"
                    />
                    <div>
                      <p className="text-sm font-black">{result.title}</p>
                      <p className="mt-1 text-sm leading-6">{result.text}</p>
                    </div>
                  </div>
                </div>
              )}

              <div className="mt-6 grid gap-4 border-t border-ink-100 pt-5">
                {pathways.map((item) => (
                  <div key={item.title} className="flex gap-3">
                    <div className="icon-box h-9 w-9">
                      <Icon name={item.icon} className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-black text-ink-950">{item.title}</h3>
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
