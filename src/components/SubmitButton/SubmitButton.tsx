import type React from 'react';

interface Props {
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}

export const SubmitButton: React.FC<Props> = ({ children, onClick, disabled = false }) => {
  return (
    <button
      type="submit"
      onClick={onClick}
      disabled={disabled}
      className={`
        bg-terracota hover:bg-black text-white leading-4 font-semibold py-4 rounded-[50px] 
        transition duration-300 ease-in-out w-full uppercase
        focus:outline-black focus:shadow-outline
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'shadow-md'}
      `}
    >
      {children}
    </button>
  );
};
