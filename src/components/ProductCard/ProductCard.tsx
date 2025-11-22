import React from 'react';
import { Link } from 'react-router-dom';

import cartIcon from '../../assets/icons/cart.svg';
import discountImg from '../../assets/images/discount.png';

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  fullPrice?: number;
  image: string;
  mode?: 'discount' | undefined;
  onAddToCart?: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  description,
  price,
  image,
  mode,
  fullPrice,
  onAddToCart,
}) => {
  return (
    <article className="relative bg-gray-20 rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col h-full group">
      <Link to={`/product/${id}`} className="block overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-64 md:h-97 object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </Link>

      <div className="p-6 flex gap-2 md:gap-4 flex-col flex-1 text-black">
        <Link to={`/product/${id}`}>
          <h3 className="text-xl md:text-2xl font-bold uppercase group-hover:text-terracota transition-colors duration-300">
            {name}
          </h3>
        </Link>
        <p className="text-gray-100 text-base md:text-xl">{description}</p>

        <div>
          <span className="text-3xl md:text-4xl font-bold">{price}</span>
          <span className="text-2xl font-bold align-super">.99</span>
          {mode === 'discount' && (
            <>
              <span className="ml-4 text-3xl md:text-4xl font-bold text-gray-100 line-through">
                {fullPrice}
              </span>
              <span className="text-2xl font-bold align-super text-gray-100">.99</span>
            </>
          )}
        </div>

        <Link
          to={`/product/${id}`}
          className="text-gray-100 hover:text-black transition-colors flex items-center group"
        >
          <span className="text-base md:text-xl">More</span>
          <svg
            className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>

        <button
          onClick={onAddToCart}
          className={`
            ${mode === 'discount' ? 'w-1/2' : 'w-full'} 
            bg-terracota hover:bg-black text-white leading-4 font-semibold py-4 rounded-[50px] 
            transition duration-300 ease-in-out uppercase
            focus:outline-black focus:shadow-outline flex items-start justify-center gap-2
          `}
        >
          <span className="text-sm md:text-base uppercase">Add to Cart</span>
          <img className="w-5 h-5" src={cartIcon} alt="Cart Icon" />
        </button>
      </div>

      {mode === 'discount' && (
        <img
          className="absolute bottom-0 right-0 w-40 sm:w-50 lg:w-3xs"
          src={discountImg}
          alt="Discount Img"
        />
      )}
    </article>
  );
};

export default ProductCard;
