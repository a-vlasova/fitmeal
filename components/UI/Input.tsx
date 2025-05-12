import { InputHTMLAttributes } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  variant?: 'default' | 'outline';
};

const Input = ({ variant, ...props }: InputProps) => {
  return (
    <input
      {...props}
      className={`w-full h-16 bg-white rounded-full px-[30px] text-fitmealBlack placeholder:text-gray-600 outline-none ${
        variant === 'outline' && 'border border-gray-500'
      }`}
    />
  );
};

export default Input;
