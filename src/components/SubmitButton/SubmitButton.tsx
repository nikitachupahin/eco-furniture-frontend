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
        bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded 
        transition duration-300 ease-in-out w-full
        focus:outline-none focus:shadow-outline
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'shadow-md'}
      `}
    >
      {children}
    </button>
  );
};
