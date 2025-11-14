import type React from 'react';
import { Logo } from '../Logo';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../../app/store';
import { logout } from '../../features/auth/authSlice';
import toast from 'react-hot-toast';

import unAuthUserIcon from '../../assets/icons/unauth-user.svg';
import authUserIcon from '../../assets/icons/auth-user.svg';
import cartIcon from '../../assets/icons/cart.svg';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const Menu: React.FC<Props> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);

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
    <aside
      className={`font-family-sans fixed top-0 left-0 h-full w-screen bg-primary-100 shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="flex justify-between flex-col h-full">
        <div className="flex items-center justify-between p-4 border-b border-white/20">
          <Logo onClose={onClose} />
          <button onClick={onClose} className="text-white hover:scale-125 transition-all p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <nav className="flex flex-col items-center justify-center">
          <Link
            to="/"
            onClick={onClose}
            className="space-x-3 px-6 py-6 text-white font-normal text-3xl transition-colors uppercase relative group"
          >
            <span className="font-bold">Home</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link
            to="/catalog"
            onClick={onClose}
            className="space-x-3 px-6 py-6 text-white font-normal text-3xl transition-colors uppercase relative group"
          >
            <span className="font-bold">Shop</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link
            to="/"
            onClick={onClose}
            className="space-x-3 px-6 py-6 text-white font-normal text-3xl transition-colors uppercase relative group"
          >
            <span className="font-bold">About</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link
            to="/"
            onClick={onClose}
            className="space-x-3 px-6 py-6 text-white font-normal text-3xl transition-colors uppercase relative group"
          >
            <span className="font-bold">Contact</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </nav>
        <div className="p-6 border-t border-white/20 flex flex-row justify-between">
          <button
            onClick={handleAuthClick}
            className="flex items-center space-x-3 px-6 py-6 text-white hover:scale-125 transition-all"
            title={isAuthenticated ? 'Log Out' : 'Log In'}
          >
            <img
              className="w-10 h-10"
              src={isAuthenticated ? authUserIcon : unAuthUserIcon}
              alt="User Account Icon"
            />
            <span
              className={`font-medium text-2xl ${isAuthenticated ? 'text-terracota' : 'text-white'}`}
            >
              Profile
            </span>
          </button>
          <button
            onClick={() => navigate('/cart')}
            className="flex items-center space-x-3 px-6 py-6 text-white hover:scale-125 transition-all"
            title="Cart"
          >
            <img className="w-10 h-10" src={cartIcon} alt="Cart Icon" />
            <span className="font-medium text-2xl">Cart</span>
          </button>
        </div>
      </div>
    </aside>
  );
};
