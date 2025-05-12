import { ReactNode } from 'react';
import { SlArrowDown } from 'react-icons/sl';

type SelectProps = { children: ReactNode } & React.HTMLProps<HTMLSelectElement>;

const Select = ({ children, ...props }: SelectProps) => {
  return (
    <div className="relative">
      <select
        {...props}
        className="appearance-none w-full h-16 bg-white rounded-full px-[30px] text-fitmealBlack placeholder:text-gray-600 outline-none"
      >
        {children}
      </select>
      <SlArrowDown
        size={14}
        className="absolute right-[30px] top-1/2 -translate-y-1/2"
      />
    </div>
  );
};

export default Select;
