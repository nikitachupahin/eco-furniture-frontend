import { Link } from 'react-router-dom';

import sectionImg from '../../assets/images/why-eco/girl.png';

export const WhyWeEcoSection = () => {
  return (
    <section className="container mx-auto px-4 lg:px-10">
      <div className="bg-yellow-100 text-white bg-[url(/src/assets/images/why-eco/why-we-eco-background.png)] bg-cover rounded-3xl shadow-xl">
        <div className="relative grid grid-cols-2 lg:grid-cols-4 p-8 lg:gap-12 place-items-center">
          <div className="col-span-1 lg:col-span-1 flex items-center justify-center">
            <div className="relative">
              <img src={sectionImg} alt="Woman in nature" className="w-full object-contain" />
            </div>
          </div>

          <h2 className="col-span-1 text-center text-5xl sm:text-8xl lg:text-6xl xl:text-8xl font-bold text-white leading-none py-12">
            WHY
            <br />
            WE
            <br />
            ECO?
          </h2>

          <div className="col-span-2 lg:col-span-2 space-y-4 text-white pl-8 py-12 lg:pl-0 pr-8">
            <p className="text-sm md:text-base leading-relaxed">
              Our production is based on the principles of sustainable development — we use only
              certified wood from renewable forests.
            </p>
            <p className="text-sm md:text-base leading-relaxed">
              All materials, from varnishes to fabrics, are safe for humans and do not contain
              harmful chemical compounds.
            </p>
            <p className="text-sm md:text-base leading-relaxed">
              We minimize waste and implement raw material reuse and recycling.
            </p>
            <p className="text-sm md:text-base leading-relaxed">
              Each of our products is a combination of natural resources, modern design, and a
              conscious approach to production.
            </p>

            <Link
              to="/about"
              className="inline-flex items-center space-x-2 text-gray-800 font-semibold hover:text-gray-900 transition-colors pt-4 group"
            >
              <span className="text-base">Read More</span>
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
