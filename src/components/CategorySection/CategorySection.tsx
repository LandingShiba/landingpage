import Image from "next/image";
import React from "react";

export interface CategoryItem {
  title: string;
  titleColor?: string;
  content: string;
}

export interface CategorySectionProps {
  headerTitle: string;
  backgroundImage?: string;
  backgroundColor?: string;
  headerTextColor?: string;
  categories: CategoryItem[];
  className?: string;
}

const CategorySection: React.FC<CategorySectionProps> = ({
  headerTitle,
  backgroundImage,
  backgroundColor = "#7BAD4F",
  headerTextColor = "#FFFFFF",
  categories,
  className = "",
}) => {
  return (
    <div className={`w-full bg-white py-12 ${className}`}>
      <div className="max-w-[1300px] mx-auto px-4">
        {/* Header section */}
        <div
          className="relative rounded-[20px] h-24 mb-5 overflow-hidden"
          style={{ backgroundColor }}
        >
          {/* Background image */}
          {backgroundImage && (
            <div className="absolute inset-0 rounded-[20px]">
              <Image
                src={backgroundImage}
                alt="Section background"
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          {/* Title */}
          <div className="absolute inset-0 flex items-center justify-center">
            <h2
              className="text-[40px] font-bold font-montserrat leading-tight"
              style={{ color: headerTextColor }}
            >
              {headerTitle}
            </h2>
          </div>
        </div>

        {/* Content sections */}
        <div className="space-y-0">
          {categories.map((category, index) => (
            <div key={index} className="flex">
              {/* Header section */}
              <div
                className={`w-[310px] bg-[#E9FFD6] border-2 ${
                  index === 0
                    ? "border-[#ACABAB]"
                    : "border-t-0 border-[#ACABAB]"
                } rounded-none p-5 flex items-center justify-center`}
              >
                <h3
                  className="text-[30px] font-bold font-montserrat"
                  style={{ color: category.titleColor || "#00ADF2" }}
                >
                  {category.title}
                </h3>
              </div>

              {/* Content section */}
              <div
                className={`flex-1 bg-white border-2 border-l-0 ${
                  index === 0
                    ? "border-[#ACABAB]"
                    : "border-t-0 border-[#ACABAB]"
                } rounded-none p-5 flex items-center`}
              >
                <span className="text-black text-[30px] font-medium font-montserrat">
                  {category.content}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
