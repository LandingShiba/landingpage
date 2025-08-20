"use client";

import React from "react";

interface PostalCodeInputProps {
  label: string;
  value1: string;
  value2: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  error?: boolean;
  errorMessage?: string;
  className?: string;
}

const PostalCodeInput: React.FC<PostalCodeInputProps> = ({
  label,
  value1,
  value2,
  onChange,
  required = false,
  error = false,
  errorMessage = "",
  className = "",
}) => {
  return (
    <div className={`mb-6 ${className}`}>
      <div className="flex items-center mb-2">
        <label htmlFor="postalCode1" className="font-bold text-gray-700">
          {label}
        </label>
        {required && (
          <span className="ml-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
            必須
          </span>
        )}
      </div>
      <div className="flex items-center">
        <input
          type="text"
          id="postalCode1"
          name="postalCode-1"
          value={value1}
          onChange={onChange}
          placeholder="例) 012"
          className={`w-1/3 p-4 border ${
            error ? "border-red-500" : "border-gray-300"
          } rounded`}
          maxLength={3}
        />
        <span className="mx-2 text-xl text-gray-400">-</span>
        <input
          type="text"
          id="postalCode2"
          name="postalCode-2"
          value={value2}
          onChange={onChange}
          placeholder="例) 3456"
          className={`w-1/3 p-4 border ${
            error ? "border-red-500" : "border-gray-300"
          } rounded`}
          maxLength={4}
        />
      </div>
      {error && errorMessage && (
        <p className="text-red-500 text-sm mt-1">{errorMessage}</p>
      )}
    </div>
  );
};

export default PostalCodeInput;
