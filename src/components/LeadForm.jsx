'use client';

import { useEffect, useState } from 'react';
import Icon from '@/components/Icon';

export default function LeadForm() {
  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    window.openLeadForm = () => setOpen(true);
    return () => {
      delete window.openLeadForm;
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitting(true);

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log('Lead submitted:', data);

    setTimeout(() => {
      window.showToast?.(`Thanks ${data.name}. Our expert will call you within 30 minutes.`);
      event.target.reset();
      setSubmitting(false);
      setOpen(false);
    }, 1000);
  };

  return (
    <div
      className={`lead-overlay fixed inset-0 z-[70] flex items-center justify-center bg-ink-950/65 p-4 backdrop-blur-sm ${
        open ? 'active' : ''
      }`}
      onClick={(event) => event.target === event.currentTarget && setOpen(false)}
      aria-hidden={!open}
    >
      <div className="lead-form-container max-h-[92vh] w-full max-w-md overflow-y-auto rounded-lg bg-white shadow-lift">
        <div className="relative border-b border-ink-100 bg-brand-950 p-5 text-white">
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close consultation form"
            className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/40"
          >
            <Icon name="close" className="h-4 w-4" />
          </button>

          <div className="flex items-center gap-3 pr-10">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-white/10">
              <Icon name="compass" className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-lg font-black">Get Free Consultation</h3>
              <p className="mt-1 text-xs font-medium text-white/70">
                Our expert will call you within 30 minutes.
              </p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 p-5">
          <div>
            <label htmlFor="leadName" className="label-text">Student name *</label>
            <input
              id="leadName"
              name="name"
              type="text"
              required
              placeholder="Enter full name"
              className="form-field bg-ink-50"
            />
          </div>

          <div>
            <label htmlFor="leadPhone" className="label-text">WhatsApp number *</label>
            <div className="flex">
              <span className="inline-flex items-center rounded-l-lg border border-r-0 border-ink-200 bg-ink-50 px-3 text-sm font-bold text-ink-500">
                +91
              </span>
              <input
                id="leadPhone"
                name="phone"
                type="tel"
                required
                placeholder="Enter 10-digit number"
                maxLength={10}
                className="w-full rounded-r-lg border border-ink-200 bg-ink-50 px-4 py-3 text-sm text-ink-900 placeholder:text-ink-400 shadow-sm transition focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100"
              />
            </div>
          </div>

          <div>
            <label htmlFor="leadScore" className="label-text">NEET score</label>
            <input
              id="leadScore"
              name="score"
              type="number"
              min="0"
              max="720"
              placeholder="Example: 350"
              className="form-field bg-ink-50"
            />
          </div>

          <div className="relative">
            <label htmlFor="leadCourse" className="label-text">Preferred course</label>
            <select id="leadCourse" name="course" className="select-field bg-ink-50 pr-10">
              <option value="">Select course</option>
              <option>MBBS</option>
              <option>BDS</option>
              <option>BAMS</option>
              <option>BHMS</option>
              <option>B.Sc Nursing</option>
              <option>Not Sure - Need Guidance</option>
            </select>
            <Icon name="chevronDown" className="pointer-events-none absolute bottom-3.5 right-3 h-4 w-4 text-ink-400" />
          </div>

          <button type="submit" disabled={submitting} className="btn-accent w-full">
            {submitting ? (
              <>
                <Icon name="loader" className="h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                Get My Free Consultation
                <Icon name="arrowRight" className="h-4 w-4" />
              </>
            )}
          </button>
        </form>

        <p className="px-5 pb-5 text-center text-[11px] leading-5 text-ink-400">
          By submitting, you agree to be contacted about admission counselling. No spam.
        </p>
      </div>
    </div>
  );
}
