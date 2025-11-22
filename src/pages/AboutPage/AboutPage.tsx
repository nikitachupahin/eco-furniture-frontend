import { WhyWeEcoSection } from '../../components/WhyWeEcoSection';

import sectionImg1 from '../../assets/images/why-eco/photo-1.png';
import sectionImg2 from '../../assets/images/why-eco/photo-2.png';
import sectionImg3 from '../../assets/images/why-eco/photo-3.png';

const paragraphs = [
  [
    'Our production is based on the principles of sustainable development — we use only certified wood from renewable forests.',
    'All materials, from varnishes to fabrics, are safe for humans and do not contain harmful chemical compounds.',
    'We minimize waste and implement raw material reuse and recycling.',
    'Each of our products is a combination of natural resources, modern design, and a conscious approach to production.',
  ],
  [
    'Our eco-friendly furniture factory brings together a team of professionals who create products from natural and safe materials.',
    'Experienced designers develop modern and stylish models that combine aesthetics and environmental friendliness.',
    'Technologists and engineers control every stage of production, ensuring the quality and durability of our furniture.',
    'Master carpenters bring ideas to life, carefully crafting every detail by hand.',
    'A team of ecologists and certification specialists ensures that our products comply with international standards of sustainable production.',
  ],
  [
    'Our eco-furniture factory specializes in creating products from natural materials, combining modern technologies with traditional craftsmanship.',
    'We use wood from responsibly managed forests that have international sustainability certificates. We use environmentally friendly adhesives, oils, and varnishes that do not contain toxic substances and are safe for humans and the environment.',
    'Thanks to energy-efficient equipment and waste processing systems, we minimize our impact on nature. We take care of every stage — from purchasing raw materials to packaging finished products — to ensure that our furniture is as environmentally friendly and durable as possible.',
  ],
];

export const AboutPage = () => {
  return (
    <div className="py-12 sm:py-18 flex flex-col gap-10 sm:gap-20">
      <WhyWeEcoSection
        isAboutSection={true}
        sectionImg={sectionImg1}
        title="Why we eco?"
        classNameProps="bg-ohra-90"
        paragraphs={paragraphs[0]}
      />
      <WhyWeEcoSection
        isReversed={true}
        isAboutSection={true}
        sectionImg={sectionImg2}
        title="Who we are?"
        classNameProps="bg-primary-50"
        paragraphs={paragraphs[1]}
      />
      <WhyWeEcoSection
        isAboutSection={true}
        sectionImg={sectionImg3}
        title="Eco wood craft"
        classNameProps="bg-terracota"
        paragraphs={paragraphs[2]}
      />
    </div>
  );
};
