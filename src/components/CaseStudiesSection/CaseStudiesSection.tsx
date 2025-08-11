"use client";

import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";

const CaseStudiesSection: React.FC = () => {
  const [visibleElements, setVisibleElements] = useState<Set<string>>(
    new Set()
  );
  const titleRef = useRef<HTMLDivElement>(null);
  const mascotRef = useRef<HTMLDivElement>(null);
  const packagesRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const beforeAfterRef = useRef<HTMLDivElement>(null);
  const staffRef = useRef<HTMLDivElement>(null);

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
    const elements = [titleRef, mascotRef, packagesRef, contentRef, beforeAfterRef, staffRef];
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
    <section className="bg-[#E9FFD6] py-4 md:py-16 px-4 relative overflow-hidden min-h-screen">
      {/* Main Title */}
      <div 
        ref={titleRef}
        data-element-id="title"
        className={`text-center mb-4 md:mb-12 transition-all duration-1000 ease-out ${
          visibleElements.has("title")
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

      {/* Mascot character at top right - positioned absolutely */}
      <div 
        ref={mascotRef}
        data-element-id="mascot"
        className={`absolute top-10 right-5 w-[73px] md:w-[270px] h-[100px] md:h-[366px] z-5 transition-all duration-1000 ease-out ${
          visibleElements.has("mascot")
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-12"
        }`}
      >
        <Image
          src="/images/macos/macos_2.png"
          alt="Shiba mascot character"
          className="w-full h-full object-contain drop-shadow-xl animate-float"
          width={270}
          height={366}
        />
      </div>

      <div className=" md:max-w-[1160px] mx-auto relative z-10">
        {/* Decorative packages in a horizontal row */}
        <div 
          ref={packagesRef}
          data-element-id="packages"
          className={`flex justify-start ml-8 md:ml-0 gap-2 md:gap-6 mb-2 md:mb-14 overflow-x-auto transition-all duration-800 ease-out ${
            visibleElements.has("packages")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-12"
          }`}
        >
          {[...Array(5)].map((_, index) => (
            <div key={index} className="w-[40px] h-[40px] max-[321]:w-[30px] max-[321]:h-[30px] sm:w-[120px] sm:h-[100px] md:w-[146px] md:h-[120px] flex-shrink-0">
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

        {/* Yellow Header Bar */}
        <div 
          className={`bg-[#ffda33] rounded-t-2xl py-2 md:py-8 px-4 md:px-12 mb-0 shadow-xl transition-all duration-1000 ease-out ${
            visibleElements.has("content")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-12"
          }`}
        >
          <h3
            className="text-[16px] md:text-4xl font-bold text-black text-center"
            style={{ fontFamily: 'Montserrat, "Noto Sans JP", sans-serif' }}
          >
            作業事例とスタッフによる解説
          </h3>
        </div>

        {/* White Content Area */}
        <div 
          ref={contentRef}
          data-element-id="content"
          className={`bg-white rounded-b-2xl md:px-16 py-5 shadow-xl transition-all duration-800 ease-out ${
            visibleElements.has("content")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-12"
          }`}
        >
          {/* Case Information Section */}
          <div className="mb-2 md:mb-16">
            <div className="flex items-center gap-2 md:gap-12 mb-10">
              <h4
                className="text-[16px] max-[321]:text-[10px] md:text-[20px] font-bold text-black"
                style={{ fontFamily: 'Montserrat, "Noto Sans JP", sans-serif' }}
              >
                S様邸
              </h4>

              {/* Information Table */}
              <div className="flex gap-0 shadow-2xl">
                {/* Column 1: 回収例 */}
                <div className="w-[100px] max-[321]:w-[70px] md:w-[310px]">
                  <div className="bg-[#E9FFD6] border-2 border-[#acabab] h-[25px] max-[321]:h-[15px] md:h-20 flex items-center justify-center">
                    <span
                      className="text-[12px] max-[321]:text-[10px] md:text-2xl font-medium text-[#222222]"
                      style={{
                        fontFamily: 'Montserrat, "Noto Sans JP", sans-serif',
                      }}
                    >
                      回収例
                    </span>
                  </div>
                  <div className="bg-white border-2 border-[#acabab] border-t-0 h-[25px] max-[321]:h-[15px] md:h-20 flex items-center justify-center">
                    <span
                      className="text-[12px] max-[321]:text-[10px] md:text-2xl font-semibold text-[#222222]"
                      style={{
                        fontFamily: 'Montserrat, "Noto Sans JP", sans-serif',
                      }}
                    >
                      回収例
                    </span>
                  </div>
                </div>

                {/* Column 2: 作業スタッフ */}
                <div className="w-[100px] max-[321]:w-[70px] md:w-[310px]">
                  <div className="bg-[#E9FFD6] border-2 border-[#acabab] border-l-0 h-[25px] max-[321]:h-[15px] md:h-20 flex items-center justify-center">
                    <span
                      className="text-[12px] max-[321]:text-[10px] md:text-2xl font-medium text-[#222222]"
                      style={{
                        fontFamily: 'Montserrat, "Noto Sans JP", sans-serif',
                      }}
                    >
                      作業スタッフ
                    </span>
                  </div>
                  <div className="bg-white border-2 border-[#acabab] border-l-0 border-t-0 h-[25px] max-[321]:h-[15px] md:h-20 flex items-center justify-center">
                    <span
                      className="text-[12px] max-[321]:text-[10px] md:text-2xl font-semibold text-[#222222]"
                      style={{
                        fontFamily: 'Montserrat, "Noto Sans JP", sans-serif',
                      }}
                    >
                      3名
                    </span>
                  </div>
                </div>

                {/* Column 3: 料金 */}
                <div className="w-[100px] max-[321]:w-[70px] md:w-[310px]">
                  <div className="bg-[#E9FFD6] border-2 border-[#acabab] border-l-0 h-[25px] max-[321]:h-[15px] md:h-20 flex items-center justify-center">
                    <span
                      className="text-[12px] max-[321]:text-[10px] md:text-2xl font-medium text-[#222222]"
                      style={{
                        fontFamily: 'Montserrat, "Noto Sans JP", sans-serif',
                      }}
                    >
                      料金
                    </span>
                  </div>
                    <div className="bg-white border-2 border-[#acabab] border-l-0 border-t-0 h-[25px] max-[321]:h-[15px] md:h-20 flex items-center justify-center">
                    <span
                      className="text-[12px] max-[321]:text-[10px] md:text-2xl font-semibold text-[#ea2227]"
                      style={{
                        fontFamily: 'Montserrat, "Noto Sans JP", sans-serif',
                      }}
                    >
                      55,000円
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Before/After Images Section */}
          <div 
            ref={beforeAfterRef}
            data-element-id="beforeAfter"
            className={`flex flex-col md:flex-row px-2 items-center justify-center gap-5 mb-5 md:mb-20 transition-all duration-1000 ease-out ${
              visibleElements.has("beforeAfter")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            {/* BEFORE Image */}
            <div className="relative">
              <div className="w-[360px] max-[376]:w-[325px] max-[321]:w-[280px] md:w-[380px] h-[259px] max-[376]:h-[225px] max-[321]:h-[195px] sm:h-[255px] md:h-[285px] bg-gray-200 rounded-xl border-[8px] border-[#d2d2d2] overflow-hidden shadow-2xl">
                <Image
                  src="/images/caseStudies/before.png"
                  alt="S様邸 - Before cleanup"
                  className="w-full h-full object-cover border-2 border-[#d2d2d2]"
                  width={380}
                  height={285}
                />
              </div>
              <div className="absolute top-0 left-0 bg-[#d9d9d9] text-[#787878] px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-br-xl sm:rounded-br-2xl rounded-tl-xl sm:rounded-tl-2xl">
                <span
                  className="text-lg sm:text-xl md:text-2xl font-bold"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  BEFORE
                </span>
              </div>
            </div>

            {/* Arrow */}
            <div className="hidden md:flex items-center justify-center px-6">
              <div className="w-24 h-12 flex items-center justify-center">
                <svg
                  width="36"
                  height="82"
                  viewBox="0 0 36 82"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.5 81.9961V40.9961L0.5 -0.00390625L35.5 40.9961L0.5 81.9961Z"
                    fill="#FFDA33"
                  />
                </svg>
              </div>
            </div>

            {/* AFTER Image */}
            <div className="relative">
              <div className="w-[360px] max-[376]:w-[325px] max-[321]:w-[280px] md:w-[380px] h-[259px] max-[376]:h-[225px] max-[321]:h-[195px] sm:h-[255px] md:h-[285px] bg-[#00A842] rounded-2xl border-[8px] border-[#00A842] overflow-hidden shadow-2xl">
                <Image
                  src="/images/caseStudies/after.png"
                  alt="S様邸 - After cleanup"
                  className="w-full h-full object-cover"
                  width={380}
                  height={285}
                />
              </div>
              <div className="absolute top-0 left-0 bg-[#00A842] text-white px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-br-xl sm:rounded-br-2xl rounded-tl-xl sm:rounded-tl-2xl">
                <span
                  className="text-lg sm:text-xl md:text-2xl font-bold"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  AFTER
                </span>
              </div>
            </div>
          </div>

          {/* Staff Explanation Section */}
          <div 
            ref={staffRef}
            data-element-id="staff"
            className={`flex gap-12 items-start transition-all duration-1000 ease-out ${
              visibleElements.has("staff")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            {/* Mascot Character */}
            <div className="md:block hidden flex-shrink-0">
              <div className="w-[272px] h-[350px]">
                <Image
                  src="/images/macos/macos_1.png"
                  alt="担当スタッフ mascot"
                  className="w-full h-full object-contain drop-shadow-xl"
                  width={272}
                  height={350}
                />
              </div>
            </div>

            {/* Staff Text */}
            <div className="flex-1 mx-2">
              <h5
                className="text-[12px] md:text-[20px] font-medium text-black mb-6"
                style={{ fontFamily: 'Montserrat, "Noto Sans JP", sans-serif' }}
              >
                担当スタッフから
              </h5>
              <div
                className="text-[12px] md:text-[20px] text-black leading-relaxed space-y-4"
                style={{ fontFamily: 'Montserrat, "Noto Sans JP", sans-serif' }}
              >
                <p>
                  実家の遺品整理を依頼された案件がありました。お客様のお父様の部屋で、長年手を付けられていなかったため、物が溢れている状態でした。このような場合、私たちにとって最も大切なのは、故人の品々を丁寧に扱いながら、効率的に作業を進めることです。
                </p>
                <p>
                  作業を始める前に、部屋の状態をしっかりと確認し、どのように進めるか計画を立てました。故人の思い出が詰まった品々には特に注意を払い、お客様と相談しながら、どの品を保持し、どの品を処分するか決定しました。
                </p>
              </div>

              {/* Small decorative packages at bottom right of text */}
              <div className="flex justify-start md:justify-end gap-2 mt-8">
                {[...Array(5)].map((_, index) => (
                  <div key={index} className="w-[50px] h-[40px] max-[321]:w-[40px] max-[321]:h-[30px] sm:w-[60px] sm:h-[50px] md:w-[70px] md:h-[58px] lg:w-[79px] lg:h-[65px]">
                    <Image
                      src="/images/recycling/package.png"
                      alt="Package decoration"
                      className="w-full h-full object-contain drop-shadow-md"
                      width={79}
                      height={65}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
