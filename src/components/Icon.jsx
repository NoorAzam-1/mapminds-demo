const strokeIcons = {
  menu: (
    <>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </>
  ),
  close: (
    <>
      <path d="m6 6 12 12" />
      <path d="M18 6 6 18" />
    </>
  ),
  arrowRight: (
    <>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </>
  ),
  messageCircle: (
    <>
      <path d="M21 11.5a8.5 8.5 0 0 1-12.53 7.48L4 20l1.03-4.24A8.5 8.5 0 1 1 21 11.5Z" />
      <path d="M8 10.5h8" />
      <path d="M8 14h5" />
    </>
  ),
  phone: (
    <path d="M20 16.8v2.1a1.4 1.4 0 0 1-1.52 1.4A15.6 15.6 0 0 1 4.7 6.52 1.4 1.4 0 0 1 6.1 5h2.1a1.4 1.4 0 0 1 1.38 1.12l.46 2.28a1.4 1.4 0 0 1-.4 1.29L8.7 10.6a11.2 11.2 0 0 0 4.7 4.7l.91-.94a1.4 1.4 0 0 1 1.29-.4l2.28.46A1.4 1.4 0 0 1 20 16.8Z" />
  ),
  mail: (
    <>
      <path d="M4 6h16v12H4z" />
      <path d="m4 7 8 6 8-6" />
    </>
  ),
  mapPin: (
    <>
      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
      <path d="M12 10.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
    </>
  ),
  check: (
    <path d="m5 12 4 4L19 6" />
  ),
  chevronDown: (
    <path d="m6 9 6 6 6-6" />
  ),
  search: (
    <>
      <path d="M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z" />
      <path d="m20 20-3.5-3.5" />
    </>
  ),
  compass: (
    <>
      <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
      <path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" />
    </>
  ),
  route: (
    <>
      <path d="M6 19a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
      <path d="M18 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
      <path d="M8.5 14.5 15.5 9.5" />
    </>
  ),
  users: (
    <>
      <path d="M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
      <path d="M9.5 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </>
  ),
  graduation: (
    <>
      <path d="m3 8.5 9-4 9 4-9 4-9-4Z" />
      <path d="M7 11v4c2.9 2.1 7.1 2.1 10 0v-4" />
      <path d="M21 9v5" />
    </>
  ),
  shield: (
    <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" />
  ),
  clock: (
    <>
      <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z" />
      <path d="M12 6v6l4 2" />
    </>
  ),
  document: (
    <>
      <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9l-6-6Z" />
      <path d="M14 3v6h6" />
      <path d="M8 13h8" />
      <path d="M8 17h5" />
    </>
  ),
  send: (
    <>
      <path d="m22 2-7 20-4-9-9-4 20-7Z" />
      <path d="M22 2 11 13" />
    </>
  ),
  chart: (
    <>
      <path d="M4 19V5" />
      <path d="M4 19h16" />
      <path d="M8 15v-4" />
      <path d="M12 15V8" />
      <path d="M16 15v-6" />
    </>
  ),
  spark: (
    <>
      <path d="M13 2 9.8 9.8 2 13l7.8 3.2L13 22l3.2-5.8L22 13l-5.8-3.2L13 2Z" />
      <path d="M5 3v4" />
      <path d="M3 5h4" />
    </>
  ),
  loader: (
    <>
      <path d="M21 12a9 9 0 1 1-6.2-8.56" />
    </>
  ),
};

const fillIcons = {
  star: (
    <path d="m12 2.7 2.85 5.78 6.38.93-4.62 4.5 1.09 6.36L12 17.27l-5.7 3 1.09-6.36-4.62-4.5 6.38-.93L12 2.7Z" />
  ),
};

export default function Icon({ name, className = 'h-5 w-5', title }) {
  const filled = fillIcons[name];
  const stroked = strokeIcons[name];

  return (
    <svg
      aria-hidden={title ? undefined : 'true'}
      className={className}
      fill={filled ? 'currentColor' : 'none'}
      focusable="false"
      role={title ? 'img' : undefined}
      stroke={filled ? 'none' : 'currentColor'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={filled ? undefined : 1.9}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      {title && <title>{title}</title>}
      {filled || stroked || strokeIcons.compass}
    </svg>
  );
}
