import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';

const rooms = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80',
    title: 'Luxury Home Gym',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=800&q=80',
    title: 'Cozy Living Space',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=800&q=80',
    title: 'Minimalist Bedroom',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&q=80',
    title: 'Natural Kitchen',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1615873968403-89e068629265?w=800&q=80',
    title: 'Elegant Office',
  },
];

export const RoomsInspirationSection = () => {
  return (
    <section className="bg-terracota py-12">
      <div className="container mx-auto px-4 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-4 text-white">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 leading-tight">
              25+ BEAUTIFUL
              <br />
              ROOMS INSPIRATION
            </h2>
            <p className="text-sm sm:text-lg font-normal mb-6">
              Our designer already made a lot of beautiful prototype of rooms that inspire you
            </p>
            <Link to="/catalog" className="inline-flex items-center justify-center group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12 md:w-18 md:h-18 text-white group-hover:translate-x-2 transition-transform duration-300"
                viewBox="0 0 50 50"
              >
                <path
                  fill="currentColor"
                  d="M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17s-7.6 17-17 17m0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15s15-6.7 15-15s-6.7-15-15-15"
                />
                <path
                  fill="currentColor"
                  d="m24.7 34.7l-1.4-1.4l8.3-8.3l-8.3-8.3l1.4-1.4l9.7 9.7z"
                />
                <path fill="currentColor" d="M16 24h17v2H16z" />
              </svg>
            </Link>
          </div>

          <div className="lg:col-span-8">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}
              freeMode={true}
              loop={true}
              speed={5000}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 2.5,
                  spaceBetween: 20,
                },
              }}
              className="ease-linear"
            >
              {rooms.map(room => (
                <SwiperSlide key={room.id}>
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl group cursor-pointer h-[300px] sm:h-[370px] lg:h-[520px]">
                    <img
                      src={room.image}
                      alt={room.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-6 left-6 right-6">
                        <h3 className="text-white text-xl font-semibold">{room.title}</h3>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};
