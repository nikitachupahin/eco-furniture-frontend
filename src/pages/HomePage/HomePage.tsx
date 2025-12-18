import { BestSellersSection } from '../../components/BestSellersSection/BestSellersSection';
import { EcoNewsSection } from '../../components/EcoNewsSection';
import { HeroBanner } from '../../components/HeroBanner';
import { RoomsInspirationSection } from '../../components/RoomsInspirationSection';
import { SpecialOffersSection } from '../../components/SpecialOffersSection';
import { WhyWeEcoSection } from '../../components/WhyWeEcoSection';

import sectionImg1 from '../../assets/images/why-eco/photo-1.png';
import { useEffect, useState } from 'react';
import type { HomePageData } from '../../types/homePageTypes';
import { homePageApi } from '../../features/home/homePageApi';

const paragraphs = [
  'Our production is based on the principles of sustainable development — we use only certified wood from renewable forests.',
  'All materials, from varnishes to fabrics, are safe for humans and do not contain harmful chemical compounds.',
  'We minimize waste and implement raw material reuse and recycling.',
  'Each of our products is a combination of natural resources, modern design, and a conscious approach to production.',
];

export const HomePage = () => {
  const [homePageData, setHomePageData] = useState<HomePageData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadMainData = async () => {
      try {
        setIsLoading(true);
        const data = await homePageApi.getHomePageData();
        setHomePageData(data);
        setError(null);
      } catch (err) {
        console.error('Failed to fetch main page data:', err);
        setError('Unable to load data');
      } finally {
        setIsLoading(false);
      }
    };

    loadMainData();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-green-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-teal-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loadinf...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-green-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 sm:py-18 flex flex-col gap-10 sm:gap-20">
      <HeroBanner />
      <EcoNewsSection />
      <WhyWeEcoSection
        sectionImg={sectionImg1}
        title="Why we eco?"
        classNameProps="bg-ohra-90"
        paragraphs={paragraphs}
      />
      {homePageData?.bestSellers && <BestSellersSection products={homePageData.bestSellers} />}
      <RoomsInspirationSection />
      {homePageData?.specialOffers && (
        <SpecialOffersSection products={homePageData.specialOffers} />
      )}
    </div>
  );
};
