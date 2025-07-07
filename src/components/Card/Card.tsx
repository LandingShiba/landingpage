import React from "react";
import Image from "next/image";

interface CardProps {
  title: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  imageSrc,
  imageAlt = "Card image",
  className = "",
  children,
}) => {
  return (
    <div
      className={`bg-white rounded-lg shadow-md overflow-hidden ${className}`}
    >
      {imageSrc && (
        <div className="relative h-48 w-full">
          <Image src={imageSrc} alt={imageAlt} fill className="object-cover" />
        </div>
      )}
      <div className="p-5">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        {description && <p className="text-gray-600 mb-4">{description}</p>}
        {children}
      </div>
    </div>
  );
};

export default Card;
