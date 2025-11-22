import { BestSellersSection } from '../../components/BestSellersSection/BestSellersSection';
import { EcoNewsSection } from '../../components/EcoNewsSection';
import { HeroBanner } from '../../components/HeroBanner';
import { RoomsInspirationSection } from '../../components/RoomsInspirationSection';
import { SpecialOffersSection } from '../../components/SpecialOffersSection';
import { WhyWeEcoSection } from '../../components/WhyWeEcoSection';

export const HomePage = () => {
  return (
    <div className="py-12 sm:py-18 flex flex-col gap-10 sm:gap-20">
      <HeroBanner />
      <EcoNewsSection />
      <WhyWeEcoSection />
      <BestSellersSection />
      <RoomsInspirationSection />
      <SpecialOffersSection />
    </div>
  );
};
