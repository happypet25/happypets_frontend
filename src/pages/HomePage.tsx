import Hero from '../components/Hero';
import ServicesSection from '../components/ServicesSection';
import VideoReviews from '../components/VideoReviews';
import WhyChooseUs from '../components/WhyChooseUs';
import FeaturesSection from '../components/FeaturesSection';
import TeamSection from '../components/TeamSection';
import HomeGallery from '../components/HomeGallery';
import FAQ from '../components/FAQ';
import CTABanner from '../components/CTABanner';
import { BoneDivider } from '../components/GlobalPawWatermark';

export default function HomePage() {
  return (
    <>
      <Hero />
      <BoneDivider />
      <ServicesSection />
      <BoneDivider flip />
      <VideoReviews />
      <BoneDivider />
      <WhyChooseUs />
      <BoneDivider />
      <FeaturesSection />
      <BoneDivider flip />
      <TeamSection />
      <BoneDivider />
      <HomeGallery />
      <BoneDivider flip />
      <FAQ />
      <CTABanner />
    </>
  );
}
