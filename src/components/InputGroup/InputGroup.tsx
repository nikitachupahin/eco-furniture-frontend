interface Props {
  label: string;
  id: string;
  type: 'text' | 'email' | 'password';
  placeholder: string;
  value: string;
  error?: string | null;
  className?: string | null;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputGroup: React.FC<Props> = ({
  label,
  id,
  type,
  placeholder,
  error,
  className = '',
  value,
  onChange,
}) => {
  return (
    <div className={className || 'mb-4'}>
      <label htmlFor={id} className="block text-gray-700 text-base font-bold mb-2 leading-4">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`shadow appearance-none border ${error ? 'border-red-500' : 'border-primary-50'} rounded-[50px] w-full py-3 px-4 placeholder-primary-80 text-gray-700 leading-0 focus:border-transparent focus:outline-terracota outline-2 outline-transparent hover:outline-terracota hover:border-transparent transition duration-300 ease-in-out`}
      />
      {error && <p className="text-red-500 text-xs italic mt-1">{error}</p>}
    </div>
  );
};
