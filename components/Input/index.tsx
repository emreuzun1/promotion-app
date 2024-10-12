import { useState } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon?: string;
}

const Input = (props: InputProps) => {
  const { label, name, value, ...restProps } = props;
  const [focused, setFocused] = useState<boolean>(false);

  const handleFocus = () => setFocused(true);
  const handleBlur = () => {
    if (value === '') {
      setFocused(false);
    }
  };
  return (
    <div className="relative w-full mt-4">
      <input
        name={name}
        {...restProps}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={`peer w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-gray-600`}
        placeholder=""
      />
      <label
        className={`absolute left-3 top-4 text-gray-500 transition-all 
          duration-300 transform peer-placeholder-shown:top-4 peer-placeholder-shown:left-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 
          peer-focus:-top-5 peer-focus:left-2 peer-focus:text-sm peer-focus:text-blue-500 
          ${focused || value ? '-top-5 left-2 text-sm text-blue-500 scale-90' : ''}`}
        htmlFor={name}
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
