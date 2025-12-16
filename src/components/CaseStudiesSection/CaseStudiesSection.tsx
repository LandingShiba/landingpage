"use client";

import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import ContentTable from "./Component/ContentTable";

interface CaseStudiesSectionProps {
  isWorkPage?: boolean;
  // TODO: add listItem to show how many items in the list

  dataCaseStudies: {
    table: {
      example: string;
      workStaff: string;
      fee: string;
    }[];
    content: string;
  }[];
}

const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({
  isWorkPage = false,
  dataCaseStudies,
}) => {
  const [visibleElements, setVisibleElements] = useState<Set<string>>(
    new Set(["title", "content", "beforeAfter", "staff"]) // Pre-load all main sections
  );
  const titleRef = useRef<HTMLDivElement>(null);
  const mascotRef = useRef<HTMLDivElement>(null);
  const packagesRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const beforeAfterRef = useRef<HTMLDivElement>(null);
  const staffRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.05, // Trigger when just 5% of element is visible
      rootMargin: "0px 0px -10px 0px", // Start animation earlier when element approaches viewport
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
    const elements = [
      titleRef,
      mascotRef,
      packagesRef,
      contentRef,
      beforeAfterRef,
      staffRef,
    ];
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
  return (
    <section
      className={`${isWorkPage ? "bg-white" : "bg-[#E9FFD6]"
        } py-4 md:py-16 px-4 relative overflow-hidden min-h-screen`}
    >
      {/* Main Title */}
      <div
        ref={titleRef}
        data-element-id="title"
        className={`text-center mb-4 md:mb-12 transition-all duration-1000 ease-out ${visibleElements.has("title")
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8"
          }`}
      >
        <h2
          className="text-[26px] md:text-7xl font-bold text-[#202020]"
          style={{ fontFamily: 'Montserrat, "Noto Sans JP", sans-serif' }}
        >
          不用品回収事例
        </h2>
      </div>

      <div className=" md:max-w-[1160px] mx-auto relative z-10">
        {/* Decorative packages in a horizontal row */}
        <div
          ref={packagesRef}
          data-element-id="packages"
          className={` ${isWorkPage ? "hidden" : ""
            } flex items-end justify-start ml-8 md:ml-0 gap-2 md:gap-4 lg:gap-6 mb-2  lg:mb-8 overflow-x-auto transition-all duration-800 ease-out ${visibleElements.has("packages")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-12"
            }`}
        >
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className="w-[40px] h-[40px] max-[321]:w-[30px] max-[321]:h-[30px] sm:w-[100px] sm:h-[83px] md:w-[100px] md:h-[100px] lg:w-[146px] lg:h-[100px] flex-shrink-0"
            >
              <Image
                src="/images/caseStudies/packages/package-icon.png"
                alt="Package decoration"
                className="w-full h-full object-contain"
                width={146}
                height={120}
              />
            </div>
          ))}
        </div>

        {/* Mascot character - absolute positioned */}
        {!isWorkPage && (
          <div
            ref={mascotRef}
            data-element-id="mascot"
            className={`absolute top-[-25px] right-[20px] md:top-[-40px] md:right-[30px] lg:top-[-100px] lg:right-[40px] w-[60px] md:w-[120px] lg:w-[200px] h-[81px] md:h-[162px] lg:h-[270px] z-0 transition-all duration-1000 ease-out ${visibleElements.has("mascot")
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-12"
              }`}
          >
            <Image
              src="/images/macos/macos_2.png"
              alt="Shiba mascot character"
              className="w-full h-full object-contain drop-shadow-xl animate-float"
              fill
            />
          </div>
        )}

        {/* Content Table */}
        {dataCaseStudies.length > 0 &&
          dataCaseStudies.map((item, index) => (
            <div
              key={index}
              className={
                index < dataCaseStudies.length - 1 ? "mb-16 md:mb-24" : ""
              }
            >
              <ContentTable
                dataCaseStudies={item}
                visibleElements={visibleElements}
                contentRef={contentRef}
                beforeAfterRef={beforeAfterRef}
                staffRef={staffRef}
              />
            </div>
          ))}
      </div>
    </section>
  );
};

export default CaseStudiesSection;
