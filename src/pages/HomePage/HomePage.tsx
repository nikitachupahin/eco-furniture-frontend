import { BestSellersSection } from '../../components/BestSellersSection/BestSellersSection';
import { EcoNewsSection } from '../../components/EcoNewsSection';
import { HeroBanner } from '../../components/HeroBanner';
import { RoomsInspirationSection } from '../../components/RoomsInspirationSection';
import { SpecialOffersSection } from '../../components/SpecialOffersSection';
import { WhyWeEcoSection } from '../../components/WhyWeEcoSection';

import sectionImg1 from '../../assets/images/why-eco/photo-1.png';

const paragraphs = [
  'Our production is based on the principles of sustainable development — we use only certified wood from renewable forests.',
  'All materials, from varnishes to fabrics, are safe for humans and do not contain harmful chemical compounds.',
  'We minimize waste and implement raw material reuse and recycling.',
  'Each of our products is a combination of natural resources, modern design, and a conscious approach to production.',
];

export const HomePage = () => {
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
      <BestSellersSection />
      <RoomsInspirationSection />
      <SpecialOffersSection />
    </div>
  );
};
