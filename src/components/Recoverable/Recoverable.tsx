import React, { useEffect, useState, useRef } from "react";
import CategorySection from "../CategorySection";
import { CategoryItem } from "../CategorySection";

const RecoverableItems: React.FC = () => {
  const [visibleElements, setVisibleElements] = useState<Set<string>>(
    new Set()
  );
  const headerRef = useRef<HTMLDivElement>(null);
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2, // Trigger when 20% of element is visible
      rootMargin: "0px 0px -50px 0px", // Start animation 50px before element enters viewport
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const elementId = entry.target.getAttribute("data-element-id");
          if (elementId) {
            setVisibleElements((prev) => new Set([...prev, elementId]));
          }
        }
      });
    }, observerOptions);

    // Observe all elements
    const elements = [headerRef, section1Ref, section2Ref, section3Ref];
    elements.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      elements.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  const furnitureCategories: CategoryItem[] = [
    {
      title: "大型家具類",
      titleColor: "#00ADF2",
      content: "大型家具類",
    },
    {
      title: "中型・小型家具類",
      titleColor: "#222222",
      content: "大型家具類",
    },
  ];

  return (
    <>
      {/* Header Section with Scroll-triggered Animation */}
      <div
        ref={headerRef}
        data-element-id="header"
        className={`pt-20 flex flex-col items-center self-stretch gap-5 mb-[50px] transition-all duration-1000 ease-out ${
          visibleElements.has("header")
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="text-[#00A842] font-bold text-[40px] leading-[1.219] font-montserrat text-center w-full">
          回収可能な不用品はどんな物がある？
        </h2>
        <h1 className="text-black font-bold text-[70px] leading-[1.219] font-montserrat">
          回収可能な品目
        </h1>
      </div>

      {/* Category Sections with Individual Scroll Animation */}
      <div
        ref={section1Ref}
        data-element-id="section1"
        className={`transition-all duration-800 ease-out ${
          visibleElements.has("section1")
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-12"
        }`}
      >
        <CategorySection
          headerTitle="家具・インテリアなど"
          backgroundImage="/images/bg-overlay.png"
          backgroundColor="#7BAD4F"
          categories={furnitureCategories}
        />
      </div>

      <div
        ref={section2Ref}
        data-element-id="section2"
        className={`transition-all duration-800 ease-out ${
          visibleElements.has("section2")
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-12"
        }`}
      >
        <CategorySection
          headerTitle="家具・インテリアなど"
          backgroundImage="/images/bg-overlay.png"
          backgroundColor="#7BAD4F"
          categories={furnitureCategories}
        />
      </div>

      <div
        ref={section3Ref}
        data-element-id="section3"
        className={`transition-all duration-800 ease-out ${
          visibleElements.has("section3")
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-12"
        }`}
      >
        <CategorySection
          headerTitle="家具・インテリアなど"
          backgroundImage="/images/bg-overlay.png"
          backgroundColor="#7BAD4F"
          categories={furnitureCategories}
        />
      </div>
    </>
  );
};

export default RecoverableItems;
