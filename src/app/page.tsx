import Header from '@/components/Header';
import Hero from '@/components/Hero';
import SnacksSection from '@/components/SnacksSection';
import ProductTabs from '@/components/ProductTabs';
import FeatureSection from '@/components/FeatureSection';
import NewsletterSection from '@/components/NewsletterSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <SnacksSection />
      <ProductTabs />
      <FeatureSection />
      <NewsletterSection />
      <Footer />
    </main>
  );
}
