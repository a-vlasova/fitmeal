'use client';

import { useState } from 'react';

type RadioGroupProps = {
  name: string;
  values: string[];
  labels: string[];
  onChange: (value: string) => void;
  checkedId?: string;
};

const RadioGroup = ({
  name,
  values,
  labels,
  onChange,
  checkedId,
}: RadioGroupProps) => {
  const [checked, setChecked] = useState(checkedId || values[0]);

  const handleChange = (id: string) => {
    setChecked(id);
    onChange(id);
  };

  return (
    <>
      {values.map((value, index) => (
        <div key={value} className="flex items-center gap-1 mb-1.5">
          <span className="block relative w-4 h-4">
            <input
              type="radio"
              name={name}
              id={value}
              value={value}
              onChange={(e) => handleChange(e.target.value)}
              className="appearance-none block w-full h-full border-2 border-fitmealGreen rounded-full"
            />
            {value === checked && (
              <span className="absolute block w-2 h-2 rounded-full bg-fitmealGreen top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
            )}
          </span>
          <label htmlFor={value} className="text-sm leading-none">
            {labels[index] ?? value.split('-').join(' ')}
          </label>
        </div>
      ))}
    </>
  );
};

export default RadioGroup;
