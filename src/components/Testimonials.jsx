'use client';

import { useEffect } from 'react';
import Icon from '@/components/Icon';

const reviews = [
  {
    name: 'Noor Azam',
    tag: 'MBBS, Bihar',
    initials: 'PS',
    text: 'I scored 412 and thought MBBS was out of reach. MapMinds helped us compare state quota and private college options with a clear fee plan.',
  },
  {
    name: 'Rajesh Verma',
    tag: 'Parent, BAMS Admission',
    initials: 'RV',
    text: 'The team explained every round patiently. We knew what to fill, what to avoid and which documents had to be ready before the deadline.',
  },
  {
    name: 'Anita Kumari',
    tag: 'BDS, Delhi',
    initials: 'AK',
    text: 'Their college shortlist was practical. I did not waste choices on unrealistic seats and got a BDS option that matched my budget.',
  },
];

export default function Testimonials() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.testi-anim').forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="testimonials" className="section-pad bg-white">
      <div className="site-container">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <div className="eyebrow mb-4">
            <Icon name="star" className="h-3.5 w-3.5" />
            Student Stories
          </div>
          <h2 className="text-3xl font-black tracking-tight text-ink-950 md:text-5xl">
            Clear counselling changes the admission outcome.
          </h2>
          <p className="mt-4 text-base leading-7 text-ink-600">
            Real decisions need more than cutoff screenshots. Students and parents come to MapMinds for clarity before each round.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {reviews.map((review, index) => (
            <article
              key={review.name}
              className="testi-anim slide-up surface card-hover p-6"
              style={{ transitionDelay: `${index * 90}ms` }}
            >
              <div className="mb-5 flex items-center gap-1 text-accent-400">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Icon key={starIndex} name="star" className="h-4 w-4" />
                ))}
              </div>

              <p className="text-sm leading-7 text-ink-700">&quot;{review.text}&quot;</p>

              <div className="mt-6 flex items-center gap-3 border-t border-ink-100 pt-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-100 text-sm font-black text-brand-800">
                  {review.initials}
                </div>
                <div>
                  <h3 className="text-sm font-black text-ink-950">{review.name}</h3>
                  <p className="mt-0.5 text-xs font-semibold uppercase tracking-widest text-ink-400">
                    {review.tag}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
