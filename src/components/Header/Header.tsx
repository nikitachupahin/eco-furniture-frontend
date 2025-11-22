import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../../app/store';
import { logout } from '../../features/auth/authSlice';
import toast from 'react-hot-toast';

import unAuthUserIcon from '../../assets/icons/unauth-user.svg';
import authUserIcon from '../../assets/icons/auth-user.svg';
import cartIcon from '../../assets/icons/cart.svg';
import { Menu } from '../Menu';
import { Logo } from '../Logo';

export const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleAuthClick = () => {
    if (isAuthenticated) {
      dispatch(logout());
      toast.success('Logout successful');
      navigate('/login');
    } else {
      navigate('/login');
    }
  };

  return (
    <>
      <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <header className="bg-primary-100 font-family-sans">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <Logo onClose={() => setIsMenuOpen(false)} />
            <button className="md:hidden" type="button" onClick={() => setIsMenuOpen(true)}>
              <svg
                className="w-6 h-6 text-primary-50 hover:text-white transition-colors cursor-pointer"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            <nav className="hidden md:flex items-center gap-8">
              <Link
                to="/"
                className="text-white font-normal text-base transition-colors uppercase relative group"
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                to="/catalog"
                className="text-white font-normal text-base transition-colors uppercase relative group"
              >
                Shop
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                to="/about"
                className="text-white font-normal text-base transition-colors uppercase relative group"
              >
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                to="/"
                className="text-white font-normal text-base transition-colors uppercase relative group"
              >
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </nav>
            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={handleAuthClick}
                className="hover:scale-125 transition-all"
                title={isAuthenticated ? 'Log Out' : 'Log In'}
              >
                <img
                  className="w-6 h-6 "
                  src={isAuthenticated ? authUserIcon : unAuthUserIcon}
                  alt="User Account Icon"
                />
              </button>
              <button
                onClick={() => navigate('/cart')}
                className="hover:scale-125 transition-all"
                title="Cart"
              >
                <img className="w-6 h-6" src={cartIcon} alt="Cart Icon" />
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
