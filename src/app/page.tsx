import Header from '@/components/Header';
import Hero from '@/components/Hero';
import SnacksSection from '@/components/SnacksSection';
import ProductTabs from '@/components/ProductTabs';
import FeatureSection from '@/components/FeatureSection';
import NewsletterSection from '@/components/NewsletterSection';
import Footer from '@/components/Footer';
import { client } from '@/sanity/lib/client';
import { SITE_SETTINGS_QUERY, HOME_PAGE_QUERY } from '@/sanity/lib/queries';

export default async function Home() {
  const [settings, pageData] = await Promise.all([
    client.fetch(SITE_SETTINGS_QUERY),
    client.fetch(HOME_PAGE_QUERY),
  ]);

  return (
    <main>
      <Header settings={settings} />
      <Hero data={pageData} />
      <SnacksSection data={pageData} />
      <ProductTabs data={pageData} />
      <FeatureSection data={pageData} />
      <NewsletterSection data={pageData} />
      <Footer settings={settings} />
    </main>
  );
}
