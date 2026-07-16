'use client';

import { useEffect, useState } from 'react';
import Icon from '@/components/Icon';

const contactCards = [
  {
    icon: 'phone',
    title: 'Call Us',
    link: 'tel:+919999999999',
    linkText: '+91 99999 99999',
    sub: 'Mon-Sat, 9 AM - 8 PM',
  },
  {
    icon: 'messageCircle',
    title: 'WhatsApp',
    link: 'https://wa.me/919999999999',
    linkText: 'Start chat',
    sub: 'Fast response for counselling queries',
    external: true,
  },
  {
    icon: 'mapPin',
    title: 'Office Address',
    text: 'MapMinds Office, Sector 15, Noida, UP - 201301',
  },
  {
    icon: 'mail',
    title: 'Email',
    link: 'mailto:hello@mapminds.in',
    linkText: 'hello@mapminds.in',
  },
];

export default function ContactSection() {
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.contact-anim').forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitting(true);

    const data = Object.fromEntries(new FormData(event.target));
    console.log('Contact enquiry:', data);

    setTimeout(() => {
      window.showToast?.('Your enquiry has been submitted. We will get back to you soon.');
      event.target.reset();
      setSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="section-pad bg-paper">
      <div className="site-container">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <div className="eyebrow mb-4">
            <Icon name="send" className="h-3.5 w-3.5" />
            Contact Us
          </div>
          <h2 className="text-3xl font-black tracking-tight text-ink-950 md:text-5xl">
            Let us build your admission plan.
          </h2>
          <p className="mt-4 text-base leading-7 text-ink-600">
            Share your score, preferred course and location. The MapMinds team will help you understand the next practical move.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-5">
          <div className="grid gap-4 lg:col-span-2">
            {contactCards.map((card, index) => (
              <div
                key={card.title}
                className="contact-anim slide-up surface p-5"
                style={{ transitionDelay: `${index * 70}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="icon-box">
                    <Icon name={card.icon} className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-black text-ink-950">{card.title}</h3>
                    {card.link ? (
                      <a
                        href={card.link}
                        target={card.external ? '_blank' : undefined}
                        rel={card.external ? 'noopener noreferrer' : undefined}
                        className="mt-1 inline-flex text-sm font-bold text-brand-700 transition hover:text-brand-900"
                      >
                        {card.linkText}
                      </a>
                    ) : (
                      <p className="mt-1 text-sm leading-6 text-ink-600">{card.text}</p>
                    )}
                    {card.sub && <p className="mt-1 text-xs font-semibold text-ink-400">{card.sub}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="contact-anim slide-up lg:col-span-3" style={{ transitionDelay: '120ms' }}>
            <form onSubmit={handleSubmit} className="surface p-5 sm:p-7">
              <div className="mb-6 flex items-start justify-between gap-4 border-b border-ink-100 pb-5">
                <div>
                  <h3 className="text-xl font-black text-ink-950">Send Your Query</h3>
                  <p className="mt-1 text-sm text-ink-500">Our counsellor will review your details.</p>
                </div>
                <div className="hidden rounded-lg bg-accent-100 px-3 py-2 text-xs font-black uppercase tracking-[0.12em] text-accent-800 sm:block">
                  Free
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="contactName" className="label-text">Student name *</label>
                  <input
                    id="contactName"
                    name="name"
                    type="text"
                    required
                    placeholder="Enter full name"
                    className="form-field"
                  />
                </div>
                <div>
                  <label htmlFor="contactPhone" className="label-text">WhatsApp number *</label>
                  <input
                    id="contactPhone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="Enter 10-digit number"
                    className="form-field"
                  />
                </div>
                <div>
                  <label htmlFor="contactScore" className="label-text">NEET score</label>
                  <input
                    id="contactScore"
                    name="score"
                    type="number"
                    min="0"
                    max="720"
                    placeholder="Example: 350"
                    className="form-field"
                  />
                </div>
                <div className="relative">
                  <label htmlFor="contactCourse" className="label-text">Preferred course</label>
                  <select id="contactCourse" name="course" className="select-field pr-10">
                    <option value="">Select course</option>
                    <option>MBBS</option>
                    <option>BDS</option>
                    <option>BAMS</option>
                    <option>BHMS</option>
                    <option>B.Sc Nursing</option>
                    <option>Not Sure</option>
                  </select>
                  <Icon name="chevronDown" className="pointer-events-none absolute bottom-3.5 right-3 h-4 w-4 text-ink-400" />
                </div>
              </div>

              <div className="mt-4">
                <label htmlFor="contactMessage" className="label-text">Your message</label>
                <textarea
                  id="contactMessage"
                  name="message"
                  rows={4}
                  placeholder="Tell us your target state, budget or counselling concern."
                  className="form-field resize-none"
                />
              </div>

              <button type="submit" disabled={submitting} className="btn-primary mt-6 w-full">
                {submitting ? (
                  <>
                    <Icon name="loader" className="h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Submit Enquiry
                    <Icon name="arrowRight" className="h-4 w-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        <div className="contact-anim slide-up surface mt-8 overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.1!2d77.31!3d28.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM0JzQ4LjAiTiA3N8KwMTgnMzYuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="320"
            className="block"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="MapMinds Office Location"
          />
        </div>
      </div>
    </section>
  );
}
