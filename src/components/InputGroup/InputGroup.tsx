interface Props {
  label: string;
  id: string;
  type: 'text' | 'email' | 'password';
  placeholder: string;
  value: string;
  error?: string | null;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputGroup: React.FC<Props> = ({
  label,
  id,
  type,
  placeholder,
  error,
  value,
  onChange,
}) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-gray-700 text-sm font-bold mb-2">
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        required
        onChange={onChange}
        className={`shadow appearance-none border ${error ? 'border-red-500' : 'border-gray-200'} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:ring-2 focus:ring-blue-400 focus:outline-none`}
      />
      {error && <p className="text-red-500 text-xs italic mt-1">{error}</p>}
    </div>
  );
};
