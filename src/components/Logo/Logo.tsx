import { Link } from 'react-router-dom';
import logoIcon from '../../assets/images/logo.png';
import type React from 'react';

interface Props {
  onClose: () => void;
}

export const Logo: React.FC<Props> = ({ onClose }) => {
  return (
    <Link
      onClick={onClose}
      to="/"
      className="w-[170px] lg:w-[197px] hover:scale-110 transition-all"
    >
      <img src={logoIcon} alt="Logo" />
    </Link>
  );
};
