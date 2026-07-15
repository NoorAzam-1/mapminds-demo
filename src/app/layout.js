import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LeadForm from '@/components/LeadForm';
import Toast from '@/components/Toast';
import Icon from '@/components/Icon';

export const metadata = {
  title: 'MapMinds - NEET Counselling & Medical Admission Experts',
  description:
    'Scored low in NEET? MapMinds helps you get MBBS, BDS, BAMS admission through AIQ, State Quota and Management Quota. Get a free consultation.',
  keywords:
    'NEET counselling, medical admission, MBBS admission, BAMS admission, NEET low score, management quota, MapMinds',
  openGraph: {
    title: 'MapMinds - NEET Counselling & Medical Admission Experts',
    description:
      'MapMinds helps NEET aspirants choose the right medical college route with score, budget, and quota guidance.',
    type: 'website',
    locale: 'en_IN',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <LeadForm />
        <Toast />
        <a
          href="https://wa.me/919999999999?text=Hi%20MapMinds%2C%20I%20need%20help%20with%20NEET%20counselling"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with MapMinds on WhatsApp"
          className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-brand-700 text-white shadow-whatsapp transition hover:-translate-y-1 hover:bg-brand-800 focus:outline-none focus:ring-2 focus:ring-brand-300 focus:ring-offset-2 focus:ring-offset-paper"
        >
          <Icon name="messageCircle" className="h-6 w-6" />
        </a>
      </body>
    </html>
  );
}
