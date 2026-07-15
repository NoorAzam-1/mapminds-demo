'use client';

import { useEffect, useState } from 'react';
import Icon from '@/components/Icon';

export default function Toast() {
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    window.showToast = (msg) => {
      setMessage(msg);
      setVisible(true);
    };

    return () => {
      delete window.showToast;
    };
  }, []);

  useEffect(() => {
    if (!visible) return undefined;

    const timer = setTimeout(() => setVisible(false), 4000);
    return () => clearTimeout(timer);
  }, [visible]);

  return (
    <div
      className={`toast fixed bottom-5 left-4 z-[80] flex max-w-sm items-center gap-3 rounded-lg border border-white/10 bg-ink-950 px-4 py-3 text-white shadow-lift sm:left-5 ${
        visible ? 'show' : ''
      }`}
      role="status"
      aria-live="polite"
    >
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-brand-200">
        <Icon name="check" className="h-4 w-4" />
      </span>
      <span className="text-sm font-semibold leading-5">{message}</span>
    </div>
  );
}
