import HeroSection from '@/components/HeroSection';
import StatsSection from '@/components/StatsSection';
import AboutSection from '@/components/AboutSection';
import Testimonials from '@/components/Testimonials';
import CTABanner from '@/components/CTABanner';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <Testimonials />
      <CTABanner />
      <ContactSection />
    </>
  );
}