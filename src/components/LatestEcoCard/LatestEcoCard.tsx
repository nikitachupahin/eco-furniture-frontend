import type React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  image: string;
  title: string;
  subtitle: string;
  link: string;
  isSpecial?: boolean;
  classNameProps?: string;
}

export const LatestEcoCard: React.FC<Props> = ({
  image,
  title,
  subtitle,
  link,
  classNameProps,
  isSpecial,
}) => {
  if (isSpecial) {
    return (
      <Link
        to={link}
        className={`${classNameProps} bg-terracota bg-[url(/src/assets/images/eco-news/more-btn-background.png)] bg-center rounded-xl lg:rounded-2xl p-0 lg:p-8 
                    flex flex-col items-center justify-center xl:justify-end text-white 
                    hover:brightness-110 duration-300 ease-in-out transition-all group relative overflow-hidden`}
      >
        <div className="relative text-center">
          <h3 className="font-family-vibes text-3xl xl:text-5xl font-normal tracking-widest leading-none">
            MORE
          </h3>
          <h3 className="font-family-vibes text-3xl xl:text-5xl font-normal tracking-widest leading-none">
            ECO NEWS
          </h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-12 h-12 mx-auto group-hover:translate-x-1 transition-transform"
            viewBox="0 0 50 50"
          >
            <path
              fill="currentColor"
              d="M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17s-7.6 17-17 17m0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15s15-6.7 15-15s-6.7-15-15-15"
            />
            <path fill="currentColor" d="m24.7 34.7l-1.4-1.4l8.3-8.3l-8.3-8.3l1.4-1.4l9.7 9.7z" />
            <path fill="currentColor" d="M16 24h17v2H16z" />
          </svg>
        </div>
      </Link>
    );
  }

  return (
    <Link
      to={link}
      className={`${classNameProps} block rounded-xl lg:rounded-2xl overflow-hidden 
                  hover:shadow-2xl transition-shadow duration-300 group relative`}
    >
      <div className="w-full h-full relative">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        <div className="absolute bg-ohra-90 group-hover:bg-terracota transition-colors duration-500 opacity-90 bottom-0 left-0 right-0 p-2 md:p-4 xl:p-6 text-black group-hover:text-white">
          <h3 className="text-base lg:text-xl font-bold uppercase">{title}</h3>
          <div className="flex items-center justify-between">
            <p className="text-sm lg:text-lg">{subtitle}</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 md:w-10 md:h-10 text-white group-hover:translate-x-1 transition-transform duration-300"
              viewBox="0 0 50 50"
            >
              <path
                fill="currentColor"
                d="M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17s-7.6 17-17 17m0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15s15-6.7 15-15s-6.7-15-15-15"
              />
              <path fill="currentColor" d="m24.7 34.7l-1.4-1.4l8.3-8.3l-8.3-8.3l1.4-1.4l9.7 9.7z" />
              <path fill="currentColor" d="M16 24h17v2H16z" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
};
