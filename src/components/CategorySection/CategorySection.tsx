// import Image from "next/image";
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
  backgroundLabelColor?: string;
  categories: CategoryItem[];
  className?: string;
}

const CategorySection: React.FC<CategorySectionProps> = ({
  headerTitle,
  backgroundImage,
  backgroundColor = "#7BAD4F",
  headerTextColor = "#FFFFFF",
  backgroundLabelColor = "#E9FFD6",
  categories,
  className = "",
}) => {
  console.log(backgroundImage);
  return (
    <div className={`w-full bg-white py-6 md:py-8 lg:py-12 ${className}`}>
      <div className="max-w-[963px] mx-auto px-4 md:px-6">
        {/* Header section */}
        <div
          className="relative rounded-[20px] h-16 md:h-24 mb-3 md:mb-5 overflow-hidden"
          style={{ backgroundColor }}
        >
          {/* Background image */}
          {/* {backgroundImage && (
            <div className="absolute inset-0 rounded-[20px]">
              <Image
                src={backgroundImage}
                alt="Section background"
                fill
                className="object-cover"
                priority
              />
            </div>
          )} */}

          {/* Title */}
          <div className="absolute inset-0 flex items-center justify-center">
            <h2
              className="text-[16px] md:text-[24px] lg:text-[40px] font-bold font-montserrat leading-tight"
              style={{ color: headerTextColor }}
            >
              {headerTitle}
            </h2>
          </div>
        </div>

        {/* Content sections */}
        <div className="md:space-y-0">
          {categories.map((category, index) => (
            <div key={index} className="flex flex-row">
              {/* Header section */}
              <div
                className={`w-[120px] sm:w-[160px] md:w-[200px] lg:w-[310px] border-2 ${
                  index === 0
                    ? "border-[#ACABAB]"
                    : "border-t-0 border-[#ACABAB]"
                } rounded-none p-5 flex items-center justify-center`}
                style={{ backgroundColor: backgroundLabelColor }}
              >
                <h3
                  className="text-[12px] md:text-[18px] lg:text-[30px] font-medium font-montserrat"
                  style={{
                    color: category.titleColor || "#00ADF2",
                    fontFamily: "montserrat",
                  }}
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
                <span
                  className="text-black text-[12px] sm:text-[12px] md:text-[18px] lg:text-[30px] font-medium font-montserrat"
                  style={{ fontFamily: "montserrat" }}
                >
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
