"use client";

import React from "react";

interface CheckboxOption {
  id: string;
  name: string;
  label: string;
  checked: boolean;
}

interface CheckboxGroupProps {
  label: string;
  options: CheckboxOption[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  label,
  options,
  onChange,
  className = "",
}) => {
  return (
    <div className={`mb-6 ${className}`}>
      <div className="mb-2">
        <label className="font-bold text-gray-700">{label}</label>
      </div>
      <div className="space-y-2">
        {options.map((option) => (
          <div key={option.id} className="flex items-center">
            <input
              type="checkbox"
              id={option.id}
              name={option.name}
              checked={option.checked}
              onChange={onChange}
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

export default CheckboxGroup;
