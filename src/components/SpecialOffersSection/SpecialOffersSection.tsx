import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import ProductCard from '../ProductCard/ProductCard';
import toast from 'react-hot-toast';
import type { ProductItem } from '../../types/homePageTypes';
import type React from 'react';

interface Props {
  products: ProductItem[];
}

export const SpecialOffersSection: React.FC<Props> = ({ products }) => {
  const handleAddToCart = (productName: string) => {
    toast.success(`${productName} added to cart!`);
  };

  const nextElClass = '.best-sellers-next-btn';
  const prevElClass = '.best-sellers-prev-btn';

  return (
    <section className="container mx-auto px-4 lg:px-10">
      <div className="flex items-start justify-between mb-8">
        <h2 className="font-family-vibes text-4xl md:text-5xl font-normal text-primary-100 leading-tight uppercase">
          Special Offers
        </h2>
        <div className="flex gap-3">
          <button
            className={`best-sellers-prev-btn p-3 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100 transition ${prevElClass.substring(1)}`}
            aria-label="Previous slide"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            className={`best-sellers-next-btn p-3 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100 transition ${nextElClass.substring(1)}`}
            aria-label="Next slide"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <Swiper
        modules={[Navigation]}
        spaceBetween={16}
        slidesPerView={1}
        loop={true}
        navigation={{
          prevEl: prevElClass,
          nextEl: nextElClass,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1.5,
            spaceBetween: 16,
          },
          1280: {
            slidesPerView: 2,
            spaceBetween: 16,
          },
        }}
        className="best-sellers-swiper"
      >
        {products.map(product => (
          <SwiperSlide key={product.id.toString()}>
            <ProductCard
              id={product.id.toString()}
              name={product.name}
              description={product.category}
              price={product.priceWithDiscount}
              fullPrice={product.price}
              image={product.mainImageUrl}
              mode="discount"
              onAddToCart={() => handleAddToCart(product.name)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
