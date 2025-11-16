import { EcoNewsSection } from '../../components/EcoNewsSection';
import { HeroBanner } from '../../components/HeroBanner';
import { WhyWeEcoSection } from '../../components/WhyWeEcoSection';

export const HomePage = () => {
  return (
    <div className="py-18 flex flex-col gap-20">
      <HeroBanner />
      <EcoNewsSection />
      <WhyWeEcoSection />
    </div>
  );
};
