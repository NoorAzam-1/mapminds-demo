import Icon from "@/components/Icon";
import Link from "next/link";

const footerLinks = {
  quick: [
    { label: "About Us", href: "#about" },
    { label: "Student Stories", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy_policy" },
    { label: "Terms of Service", href: "/terms_and_condition" },
    { label: "Refund Policy", href: "/refund_policy" },
  ],
};

const socialLinks = [
  { label: "Instagram", icon: "spark", href: "#" },
  { label: "YouTube", icon: "chart", href: "#" },
  { label: "Facebook", icon: "users", href: "#" },
  {
    label: "WhatsApp",
    icon: "messageCircle",
    href: "https://wa.me/9590417660",
  },
];

export default function Footer() {
  return (
    <footer className="bg-ink-950 text-white">
      <div className="site-container py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-600 text-white">
                <Icon name="compass" className="h-5 w-5" />
              </div>
              <span className="text-lg font-black">
                Map<span className="text-brand-300">Minds</span>
              </span>
            </div>
            <p className="max-w-sm text-sm leading-5 6ext-white/60">
              NEET counselling and medical admission guidance for students who
              need a clear route from score to seat.
            </p>
            <div className="mt-3 flex items-center gap-2">
              {socialLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  target={link.href !== "#" ? "_blank" : undefined}
                  rel={link.href !== "#" ? "noopener noreferrer" : undefined}
                  aria-label={link.label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/10 text-white/75 transition hover:bg-brand-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/40"
                >
                  <Icon name={link.icon} className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-black uppercase tracking-[0.16em] text-white/70">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {footerLinks.quick.map((link) => (
                <li key={link.href}>
                  <Link
                    className="text-sm font-medium text-white/60 transition hover:text-white"
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-black uppercase tracking-[0.16em] text-white/70">
              Legal
            </h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    className="text-sm font-medium text-white/60 transition hover:text-white"
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-black uppercase tracking-[0.16em] text-white/70">
              Contact
            </h4>
            <div className="space-y-2 text-sm text-white/60">
              <p className="flex items-start gap-3">
                <Icon
                  name="phone"
                  className="mt-0.5 h-4 w-4 shrink-0 text-brand-300"
                />
                <span>+91 9590417660</span>
              </p>
              <p className="flex items-start gap-3">
                <Icon
                  name="mail"
                  className="mt-0.5 h-4 w-4 shrink-0 text-brand-300"
                />
                <span>mapminds.digital@gmail.com</span>
              </p>
              <p className="flex items-start gap-3">
                <Icon
                  name="mapPin"
                  className="mt-0.5 h-4 w-4 shrink-0 text-brand-300"
                />
                <span>
                  Chandra complex Baglur main road at BSF ,STS
                  stop Landmark:Reva University Bangalore-560063
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-xs font-medium text-white/40">
            Copyright {new Date().getFullYear()} MapMinds. All rights reserved.
          </p>
          <p className="text-xs font-medium text-white/40">
            Built for NEET aspirants and their families.
          </p>
        </div>
      </div>
    </footer>
  );
}
