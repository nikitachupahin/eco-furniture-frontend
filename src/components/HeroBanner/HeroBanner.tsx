import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { useNavigate } from 'react-router-dom';

import photo1 from '../../assets/images/banner/photo-1.jpg';
import photo2 from '../../assets/images/banner/photo-2.jpeg';
import photo3 from '../../assets/images/banner/photo-3.jpg';

const slides = [
  {
    id: 1,
    title: 'ECO STYLE, ECO CRAFT, ECO HOME',
    subtitle: 'VIEW CATALOGUE 2026',
    image: photo1,
  },
  {
    id: 2,
    title: 'NATURAL MATERIALS',
    subtitle: 'SUSTAINABLE LIVING',
    image: photo2,
  },
  {
    id: 3,
    title: 'HANDCRAFTED FURNITURE',
    subtitle: 'MADE WITH LOVE',
    image: photo3,
  },
];

export const HeroBanner = () => {
  const navigate = useNavigate();

  return (
    <section className="relative w-full">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        effect="fade"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          bulletClass: 'swiper-pagination-bullet !bg-white/25',
          bulletActiveClass: 'swiper-pagination-bullet-active !bg-white/100',
        }}
        loop={true}
        className="hero-swiper"
      >
        {slides.map(slide => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${slide.image})`,
                }}
              >
                <div className="absolute inset-0 bg-black/25" />
              </div>

              <div className="relative h-full flex items-start justify-end pt-11 px-6 md:px-12 lg:px-24">
                <div className="text-right max-w-5xl">
                  <h1 className=" font-family-vibes text-2xl md:text-5xl font-normal text-white mb-2 tracking-wider leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-sm md:text-base text-black mb-4 md:mb-8 tracking-widest font-normal underline">
                    {slide.subtitle}
                  </p>
                  <button
                    onClick={() => navigate('/catalog')}
                    className="text-sm md:text-base bg-white/90 hover:bg-white text-gray-800 font-semibold px-4 py-1.5 md:px-8 md:py-3 rounded-[50px] transition-all duration-300 hover:scale-105 shadow-lg"
                  >
                    Learn more
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <style>{`
        .hero-swiper .swiper-pagination {
          bottom: 30px !important;
        }
        
        .hero-swiper .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          margin: 0 6px !important;
          opacity: 1;
        }
      `}</style>
    </section>
  );
};
