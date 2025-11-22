import { Link } from 'react-router-dom';

import sectionImg from '../../assets/images/why-eco/girl.png';

export const WhyWeEcoSection = () => {
  return (
    <section className="container mx-auto px-4 lg:px-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-4">
          <div className="bg-ohra-90 rounded-3xl overflow-hidden shadow-xl h-full">
            <div className="flex items-end justify-center h-full">
              <img
                src={sectionImg}
                alt="Woman in nature"
                className="w-full max-w-2xs lg:max-w-none object-contain"
              />
            </div>
          </div>
        </div>

        <div className="lg:col-span-8">
          <div className="bg-ohra-90 text-white bg-[url(/src/assets/images/why-eco/why-we-eco-background.png)] bg-cover rounded-3xl overflow-hidden shadow-xl h-full">
            <div className="p-8 md:p-12 h-full flex flex-col justify-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
                <div className="flex items-center justify-center">
                  <h2 className="text-6xl sm:text-7xl xl:text-8xl font-bold text-white leading-tight text-center">
                    WHY
                    <br />
                    WE
                    <br />
                    ECO?
                  </h2>
                </div>
                <div className="space-y-4 text-white">
                  <p className="text-sm xl:text-base leading-tight">
                    Our production is based on the principles of sustainable development — we use
                    only certified wood from renewable forests.
                  </p>
                  <p className="text-sm xl:text-base leading-tight">
                    All materials, from varnishes to fabrics, are safe for humans and do not contain
                    harmful chemical compounds.
                  </p>
                  <p className="text-sm xl:text-base leading-tight">
                    We minimize waste and implement raw material reuse and recycling.
                  </p>
                  <p className="text-sm xl:text-base leading-tight">
                    Each of our products is a combination of natural resources, modern design, and a
                    conscious approach to production.
                  </p>
                  <div className="pt-4 flex justify-end">
                    <Link
                      to="/about"
                      className="inline-flex items-center space-x-2 text-black font-semibold hover:text-gray-700 transition-colors pt-4 group"
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
