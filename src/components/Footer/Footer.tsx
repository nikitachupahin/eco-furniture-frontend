import { Link } from 'react-router-dom';
import { Logo } from '../Logo';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-primary-100 text-white bg-[url(/src/assets/images/footer-background.png)] bg-cover">
      <div className="bg-black border-b border-white/20">
        <button
          onClick={scrollToTop}
          className="w-full py-4 flex items-center justify-center space-x-2 cursor-pointer hover:bg-white/20 duration-300 ease-in-out transition-colors"
        >
          <span className="text-sm font-light tracking-widest uppercase">To Top</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      </div>

      <div className="container mx-auto py-6 px-7 md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12 justify-items-center">
          <div className="space-y-4 text-center md:text-left">
            <Logo />
            <div className="text-base md:text-xl mt-8 text-primary-20 space-y-1 font-normal">
              <p>Khreshatyk sr. 104.</p>
              <p>310202, Kyiv</p>
              <p>Ukraine</p>
            </div>
          </div>

          <div className="space-y-4 text-center md:text-left">
            <h3 className="text-base md:text-xl font-normal tracking-widest text-primary-50 mb-3 md:mb-10">
              Links
            </h3>
            <nav className="flex flex-col gap-3 md:gap-10">
              <Link
                to="/"
                className="block text-base md:text-xl font-normal hover:text-white/80 transition-colors uppercase tracking-wide"
              >
                Home
              </Link>
              <Link
                to="/catalog"
                className="block text-base md:text-xl font-normal hover:text-white/80 transition-colors uppercase tracking-wide"
              >
                Shop
              </Link>
              <Link
                to="/about"
                className="block text-base md:text-xl font-normal hover:text-white/80 transition-colors uppercase tracking-wide"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="block text-base md:text-xl font-normal hover:text-white/80 transition-colors uppercase tracking-wide"
              >
                Contact
              </Link>
            </nav>
          </div>

          <div className="space-y-4 text-center md:text-left">
            <h3 className="text-base md:text-xl font-normal tracking-widest text-primary-50 mb-3 md:mb-10">
              Help
            </h3>
            <nav className="flex flex-col gap-3 md:gap-10">
              <Link
                to="/payment-options"
                className="block text-base md:text-xl font-normal hover:text-white/80 transition-colors uppercase tracking-wide"
              >
                Payment Options
              </Link>
              <Link
                to="/returns"
                className="block text-base md:text-xl font-normal hover:text-white/80 transition-colors uppercase tracking-wide"
              >
                Returns
              </Link>
              <Link
                to="/privacy-policies"
                className="block text-base md:text-xl font-normal hover:text-white/80 transition-colors uppercase tracking-wide"
              >
                Privacy Policies
              </Link>
            </nav>
          </div>

          <div className="space-y-4 text-center md:text-left">
            <h3 className="text-base md:text-xl font-normal tracking-widest text-primary-50 mb-3 md:mb-10">
              Newsletter
            </h3>
            <Link
              to="/subscribe"
              className="inline-block text-base md:text-xl font-normal hover:text-white/80 transition-colors uppercase tracking-wide border-b border-white pb-1"
            >
              Subscribe
            </Link>

            <div className="flex items-center flex-wrap gap-4 pt-6">
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white/80 transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white/80 transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white/80 transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                </svg>
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white/80 transition-colors"
                aria-label="Pinterest"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white/80 transition-colors"
                aria-label="Twitter"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
