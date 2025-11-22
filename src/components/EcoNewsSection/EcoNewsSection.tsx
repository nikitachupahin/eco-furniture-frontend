import { LatestEcoCard } from '../LatestEcoCard';

import img1 from '../../assets/images/eco-news/photo-1.png';
import img2 from '../../assets/images/eco-news/photo-2.png';
import img3 from '../../assets/images/eco-news/photo-3.png';
import img4 from '../../assets/images/eco-news/photo-4.png';
import img5 from '../../assets/images/eco-news/photo-5.png';
import img6 from '../../assets/images/eco-news/photo-6.png';

export const EcoNewsSection = () => {
  return (
    <section className="container mx-auto px-4 lg:px-10">
      <h2 className="font-family-vibes text-4xl md:text-5xl font-normal text-primary-100 mb-8">
        ECO NEWS
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 md:grid-rows-6 h-188 w-full gap-4">
        <LatestEcoCard
          image={img1}
          title="MONSTERRO"
          subtitle="Ecoplastic chair"
          link="/product/monsterro"
          classNameProps="md:row-start-1 md:row-end-5 md:col-start-1 md:col-end-2"
        />

        <LatestEcoCard
          image={img2}
          title="BAMBOOCHA"
          subtitle="Rattan chandelier"
          link="/product/bamboocha"
          classNameProps="md:row-start-1 md:row-end-5 md:col-start-2 md:col-end-3"
        />

        <LatestEcoCard
          image={img3}
          title="RATTANTHRONN"
          subtitle="Rattan chair"
          link="/product/rattanthronn"
          classNameProps="md:row-start-1 md:row-end-5 md:col-start-3 md:col-end-4"
        />

        <LatestEcoCard
          image=""
          title=""
          subtitle=""
          link="/news"
          isSpecial={true}
          classNameProps="md:row-start-1 md:row-end-3 md:col-start-4 md:col-end-5 order-7 md:order-none"
        />

        <LatestEcoCard
          image={img4}
          title="COUBS"
          subtitle="Bamboo boxes"
          link="/product/coubs"
          classNameProps="md:row-start-5 md:row-end-7 md:col-start-1 md:col-end-2"
        />

        <LatestEcoCard
          image={img5}
          title="RELAXATOR"
          subtitle="Eco textile sofa"
          link="/product/relaxator"
          classNameProps="col-span-2 md:row-start-5 md:row-end-7 md:col-start-2 md:col-end-4"
        />

        <LatestEcoCard
          image={img6}
          title="TIMEKILLER"
          subtitle="Rattan rocking chair"
          link="/product/timekiller"
          classNameProps="md:row-start-3 md:row-end-7 md:col-start-4 md:col-end-5"
        />
      </div>
    </section>
  );
};
