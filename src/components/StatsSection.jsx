'use client';

import { useEffect, useRef } from 'react';
import Icon from '@/components/Icon';

const stats = [
  { target: 5000, suffix: '+', label: 'Students Counseled', icon: 'users' },
  { target: 98, suffix: '%', label: 'Admission Success', icon: 'check' },
  { target: 20, suffix: '+', label: 'Years Experience', icon: 'clock' },
  { target: 150, suffix: '+', label: 'College Routes', icon: 'graduation' },
];

function StatCard({ target, suffix, label, icon }) {
  const ref = useRef(null);
  const counted = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || counted.current || !ref.current) return;

        counted.current = true;
        const duration = 1200;
        const step = target / (duration / 16);
        let current = 0;

        const update = () => {
          current += step;
          if (!ref.current) return;

          if (current < target) {
            ref.current.textContent = `${Math.ceil(current)}${suffix}`;
            requestAnimationFrame(update);
          } else {
            ref.current.textContent = `${target}${suffix}`;
          }
        };

        update();
      },
      { threshold: 0.25 }
    );

    const element = ref.current;
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, [target, suffix]);

  return (
    <div className="surface card-hover p-5">
      <div className="mb-4 flex items-center justify-between">
        <div className="icon-box">
          <Icon name={icon} className="h-5 w-5" />
        </div>
        <span className="h-2 w-2 rounded-full bg-accent-400" />
      </div>
      <div ref={ref} className="stat-counter text-3xl font-black text-ink-950">
        0{suffix}
      </div>
      <div className="mt-1 text-xs font-bold uppercase tracking-[0.14em] text-ink-500">
        {label}
      </div>
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="bg-white py-10">
      <div className="site-container">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
