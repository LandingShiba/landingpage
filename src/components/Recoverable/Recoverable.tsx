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
  const section4Ref = useRef<HTMLDivElement>(null);

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
    const elements = [headerRef, section1Ref, section2Ref, section3Ref, section4Ref];
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

  const electronicsCategories: CategoryItem[] = [
    {
      title: "大型家電",
      titleColor: "#00ADF2",
      content: "大型家電",
    },
    {
      title: "生活家電",
      titleColor: "#222222",
      content: "大型家具類",
    },
    {
      title: "小型家電",
      titleColor: "#222222",
      content: "大型家具類",
    },
    {
      title: "OA・AV機器",
      titleColor: "#222222",
      content: "大型家具類",
    },
    {
      title: "その他",
      titleColor: "#222222",
      content: "大型家具類",
    },
  ];

  const lifestyleCategories: CategoryItem[] = [
    {
      title: "生活用品",
      titleColor: "#222222",
      content: "大型家具類",
    },
    {
      title: "趣味・子ども",
      titleColor: "#222222",
      content: "大型家具類",
    },
    {
      title: "アウトドア・健康",
      titleColor: "#222222",
      content: "大型家具類",
    },
  ];

  const otherCategories: CategoryItem[] = [
    {
      title: "車両",
      titleColor: "#222222",
      content: "大型家具類",
    },
    {
      title: "農機具",
      titleColor: "#222222",
      content: "大型家具類",
    },
    {
      title: "その他",
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
        className={`pt-10 md:pt-16 lg:pt-20 flex flex-col items-center self-stretch gap-3 md:gap-4 lg:gap-5 mb-[10px] md:mb-[40px] lg:mb-[50px] transition-all duration-1000 ease-out ${
          visibleElements.has("header")
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="text-[#00A842] font-bold text-[20px] md:text-[30px] lg:text-[40px] leading-[1.219] font-montserrat text-center w-full">
          回収可能な不用品はどんな物がある？
        </h2>
        <h1 className="text-black font-bold text-[26px] md:text-[50px] lg:text-[70px] leading-[1.219] font-montserrat">
          回収可能な品目
        </h1>
      </div>

      {/* Category Sections with Individual Scroll Animation */}
      <div
        ref={section1Ref}
        data-element-id="section1"
        className={`transition-all duration-800 ease-out mb-6 md:mb-8 ${
          visibleElements.has("section1")
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-12"
        }`}
      >
        <CategorySection
          headerTitle="家具・インテリアなど"
          backgroundImage="/images/bg-overlay.png"
          backgroundColor="#00A842"
          categories={furnitureCategories}
        />
      </div>

      <div
        ref={section2Ref}
        data-element-id="section2"
        className={`transition-all duration-800 ease-out mb-6 md:mb-8 ${
          visibleElements.has("section2")
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-12"
        }`}
      >
        <CategorySection
          headerTitle="家電製品など"
          backgroundImage="/images/bg-overlay.png"
          backgroundColor="#00A842"
          categories={electronicsCategories}
        />
      </div>

      <div
        ref={section3Ref}
        data-element-id="section3"
        className={`transition-all duration-800 ease-out mb-6 md:mb-8 ${
          visibleElements.has("section3")
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-12"
        }`}
      >
        <CategorySection
          headerTitle="生活用品など"
          backgroundImage="/images/bg-overlay.png"
          backgroundColor="#00A842"
          categories={lifestyleCategories}
        />
      </div>

      <div
        ref={section4Ref}
        data-element-id="section4"
        className={`transition-all duration-800 ease-out ${
          visibleElements.has("section4")
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-12"
        }`}
      >
        <CategorySection
          headerTitle="その他の回収可能品目"
          backgroundImage="/images/bg-overlay.png"
          backgroundColor="#00A842"
          categories={otherCategories}
        />
      </div>
    </>
  );
};

export default RecoverableItems;
