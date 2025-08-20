"use client";

import React from "react";

interface FormFieldProps {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  required?: boolean;
  error?: boolean;
  errorMessage?: string;
  subLabel?: string;
  maxLength?: number;
  className?: string;
  isTextarea?: boolean;
}

const FormField: React.FC<FormFieldProps> = ({
  id,
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  required = false,
  error = false,
  errorMessage = "",
  subLabel,
  maxLength,
  className = "",
  isTextarea = false,
}) => {
  return (
    <div className={`mb-6 ${className}`}>
      <div className="flex items-center mb-2">
        <label htmlFor={id} className="font-bold text-gray-700">
          {label}
        </label>
        {required && (
          <span className="ml-2 bg-[#D31E3C] text-white text-xs px-2 py-1 rounded-[6px]">
            必須
          </span>
        )}
      </div>

      {subLabel && (
        <div className="mb-1">
          <span className="text-xs text-gray-600">{subLabel}</span>
        </div>
      )}

      {isTextarea ? (
        <textarea
          id={id}
          name={id}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full p-4 border ${
            error ? "border-red-500" : "border-gray-300"
          } rounded min-h-[100px]`}
        />
      ) : (
        <input
          type={type}
          id={id}
          name={id}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          maxLength={maxLength}
          className={`w-full p-4 border ${
            error ? "border-red-500" : "border-gray-300"
          } rounded`}
        />
      )}

      {error && errorMessage && (
        <p className="text-red-500 text-sm mt-1">{errorMessage}</p>
      )}
    </div>
  );
};

export default FormField;
