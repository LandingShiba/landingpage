"use client";

import React from "react";

interface RadioOption {
  id: string;
  value: string;
  label: string;
}

interface RadioGroupProps {
  label: string;
  name: string;
  options: RadioOption[];
  selectedValue: string;
  onChange: (value: string) => void;
  className?: string;
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  label,
  name,
  options,
  selectedValue,
  onChange,
  className = "",
}) => {
  return (
    <div className={`mb-6 ${className}`}>
      <div className="mb-2">
        <label className="font-bold text-gray-700">{label}</label>
      </div>
      <div className="flex space-x-6">
        {options.map((option) => (
          <div key={option.id} className="flex items-center">
            <input
              type="radio"
              id={option.id}
              name={name}
              checked={selectedValue === option.value}
              onChange={() => onChange(option.value)}
              className="w-5 h-5 text-blue-600"
            />
            <label htmlFor={option.id} className="ml-2 text-gray-800">
              {option.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RadioGroup;
