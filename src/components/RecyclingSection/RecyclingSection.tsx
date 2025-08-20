import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export interface RecyclingSectionProps {
  className?: string;
}

const RecyclingSection: React.FC<RecyclingSectionProps> = ({ className }) => {
  const [visibleElements, setVisibleElements] = useState<Set<string>>(
    new Set()
  );
  // Desktop refs
  const headerRef = useRef<HTMLDivElement>(null);
  const illustrationRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const recyclingTextRef = useRef<HTMLDivElement>(null);
  const firstParagraphRef = useRef<HTMLDivElement>(null);
  const secondParagraphRef = useRef<HTMLDivElement>(null);

  // Mobile refs
  const mobileHeaderRef = useRef<HTMLDivElement>(null);
  const mobileIllustrationRef = useRef<HTMLDivElement>(null);
  const mobileContentRef = useRef<HTMLDivElement>(null);
  const mobileRecyclingTextRef = useRef<HTMLDivElement>(null);
  const mobileFirstParagraphRef = useRef<HTMLDivElement>(null);
  const mobileSecondParagraphRef = useRef<HTMLDivElement>(null);
  const mobileRecyclingTextContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Start with no elements visible - they will appear on scroll
    setVisibleElements(new Set());

    const observerOptions = {
      threshold: 0.2, // Trigger when 20% of element is visible
      rootMargin: "0px 0px -10px 0px", // Start animation 10px before element enters viewport
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const elementId = entry.target.getAttribute("data-element-id");
        if (elementId) {
          if (entry.isIntersecting) {
            // Add element to visible set when it enters viewport
            setVisibleElements((prev) => new Set([...prev, elementId]));
          } else {
            // Remove element from visible set when it leaves viewport
            setVisibleElements((prev) => {
              const newSet = new Set([...prev]);
              newSet.delete(elementId);
              return newSet;
            });
          }
        }
      });
    }, observerOptions);

    // Observe all elements
    const desktopElements = [
      headerRef,
      illustrationRef,
      contentRef,
      recyclingTextRef,
      firstParagraphRef,
      secondParagraphRef,
    ];

    const mobileElements = [
      mobileHeaderRef,
      mobileIllustrationRef,
      mobileContentRef,
      mobileRecyclingTextRef,
      mobileFirstParagraphRef,
      mobileSecondParagraphRef,
      mobileRecyclingTextContentRef,
    ];

    [...desktopElements, ...mobileElements].forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      [...desktopElements, ...mobileElements].forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  return (
    <div className={cn("w-full bg-[#F7F6E8] py-8 md:py-16 px-4", className)}>
      {/* Desktop version */}
      <div className="hidden md:flex flex-col max-w-[1440px] mx-auto relative h-[1333px]">
        {/* Top Left - Illustration */}
        <div
          ref={illustrationRef}
          data-element-id="illustration"
          className={`absolute top-[39px] left-[70px] transition-all duration-700 ease-out p-3 ${
            visibleElements.has("illustration")
              ? "opacity-100 transform translate-x-0"
              : "opacity-0 transform translate-x-[-50px]"
          }`}
        >
          <div className="w-[374px] h-[481px]">
            <Image
              src="/images/recycling/giang-giai.png"
              alt="Recycling Process Illustration - 回収した不用品のリサイクルについて"
              className="w-full h-full object-cover"
              width={374}
              height={481}
            />
          </div>
        </div>

        {/* Center Top - Header Section */}
        <div
          ref={headerRef}
          data-element-id="header"
          className={`absolute top-[100px] left-[60%] transform -translate-x-1/2 w-[751px] transition-all duration-800 ease-out ${
            visibleElements.has("header")
              ? "opacity-100 transform -translate-x-1/2 translate-y-0"
              : "opacity-0 transform -translate-x-1/2 translate-y-[-30px]"
          }`}
        >
          <div className="flex flex-col items-center space-y-[10px]">
            <div className="flex items-center gap-[14px]">
              {/* Decorative icons */}
              <div className="w-[59px] h-[57px] flex items-center justify-center">
                <Image
                  src="/images/recycling/decorative-triangle-left.svg"
                  alt="Decorative triangle"
                  width={59}
                  height={57}
                />
              </div>

              <h2 className="text-black font-bold text-[70px] leading-[1.2] font-['Montserrat']">
                回収した不用品の
              </h2>

              <div className="w-[59px] h-[57px] flex items-center justify-center">
                <Image
                  src="/images/recycling/decorative-triangle-right.svg"
                  alt="Decorative triangle"
                  width={59}
                  height={57}
                />
              </div>
            </div>

            <h1 className="text-[#00A842] font-bold text-[80px] leading-[1.2] font-['Montserrat']">
              リサイクルについて
            </h1>
          </div>
        </div>

        {/* Bottom Full Width - Content Card */}
        <div
          ref={contentRef}
          data-element-id="content"
          className={`absolute top-[378px] left-0 right-0 mx-auto max-w-[1200px] w-full transition-all duration-700 ease-out ${
            visibleElements.has("content")
              ? "opacity-100 transform scale-100"
              : "opacity-0 transform scale-95"
          }`}
          style={{
            transitionDelay: visibleElements.has("content") ? "300ms" : "0ms",
          }}
        >
          <div className="bg-white border-[10px] border-[#FFDA33] rounded-[30px]">
            {/* Yellow Header */}
            <div className="bg-[#FFDA33] rounded-t-[20px] py-[31px] px-8">
              <h3 className="text-black font-bold text-[40px] leading-[1.2] text-center font-['Montserrat']">
                当社独自の販売ルートを確立
              </h3>
            </div>

            {/* White Content Area */}
            <div className="bg-white rounded-b-[20px] px-[50px] py-[50px]">
              {/* Row 1: Two Column Layout */}
              <div className="grid grid-cols-2 gap-[42px] mb-[40px]">
                {/* Left Column */}
                <div>
                  <h4 className="text-black font-bold text-[30px] leading-[1.2] mb-[40px] font-['Montserrat']">
                    <span className="text-[#006E27]">
                      積極的な再利用・再活用
                    </span>
                    への取り組み
                  </h4>
                  <p
                    ref={firstParagraphRef}
                    data-element-id="firstParagraph"
                    className={`text-black font-medium text-[20px] leading-[1.4] font-['Montserrat'] transition-all duration-700 ease-out ${
                      visibleElements.has("firstParagraph")
                        ? "opacity-100 transform translate-x-0"
                        : "opacity-0 transform translate-x-[50px]"
                    }`}
                    style={{
                      transitionDelay: visibleElements.has("firstParagraph")
                        ? "500ms"
                        : "0ms",
                    }}
                  >
                    不用品・粗大ゴミの廃棄処分は別途料金がかかってお客様に負担をかけるうえ、処分工程でどうしても環境に悪影響が出てしまいます。そのため、エコグローバルでは廃棄処分量を減らし、回収品の適切な再利用に努めています。こうした廃棄処分を減らす試みで環境に配慮し、浮いた処分費を低価格の不用品・粗大ゴミ回収サービスとしてお客様に還元することで、信頼してお任せいただける回収業者を目指します。不用品・粗大ゴミの回収後は、品種ごとに仕分けるのはもちろん、廃品・家具・家電のように処分方法が定められている品種もお客様に代わり適切に対応します。
                  </p>
                </div>

                {/* Right Column */}
                <div>
                  {/* Additional Image */}
                  <div className="w-full h-[334px] bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                    <Image
                      src="/images/recycling/tau.png"
                      alt="Recycling Process"
                      width={540}
                      height={334}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Row 2: Full Width Column */}
              <div className="w-full">
                <div
                  ref={recyclingTextRef}
                  data-element-id="recyclingText"
                  className="w-full h-[71px] relative mb-[40px]"
                >
                  <div className="absolute bottom-0 -left-10 w-full h-[71px] flex items-center justify-center">
                    <Image
                      src="/images/recycling/recycling-process.svg"
                      alt="Recycling Process - Package Illustration"
                      width={1106}
                      height={71}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div
                    className={`absolute bottom-3 left-28 w-full transition-all duration-1000 ease-out ${
                      visibleElements.has("recyclingText")
                        ? "opacity-100 transform translate-x-0"
                        : "opacity-0 transform translate-x-[50px]"
                    }`}
                    style={{
                      transitionDelay: visibleElements.has("recyclingText")
                        ? "500ms"
                        : "0ms",
                    }}
                  >
                    <span className="text-[#006E27] font-bold text-[30px] leading-[1.4] font-['Montserrat']">
                      再利用により処分費用を大幅削減
                    </span>
                  </div>
                </div>
                <p
                  ref={secondParagraphRef}
                  data-element-id="secondParagraph"
                  className={`text-black font-medium text-[20px] leading-[1.4] font-['Montserrat'] transition-all duration-700 ease-out ${
                    visibleElements.has("secondParagraph")
                      ? "opacity-100 transform translate-x-0"
                      : "opacity-0 transform translate-x-[50px]"
                  }`}
                  style={{
                    transitionDelay: visibleElements.has("secondParagraph")
                      ? "500ms"
                      : "0ms",
                  }}
                >
                  エコグローバルは不用品であっても安易な廃棄処分を行わず、千葉県を含む全国のリサイクルショップで再販、オークションや海外への輸出を通して収益化し、着物や家具は多少の破損であれば、リメイクを施して再活用するなど、品種に合わせた不用品の再利用を徹底しています。回収した粗大ゴミ・不用品の再利用を徹底する事は環境への配慮はもちろん、処分にかかる費用を削減する狙いもあります。作業料金から処分費を削減することで不用品回収にかかる料金の低価格化を実現、回収した不用品・廃品を適切に再利用して、次のお客様に還元するサイクルでエコグローバルは千葉県内を対象に、お客様と環境の両方に優しい不用品回収を実現しています。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile version */}
      <div className="block md:hidden mx-auto relative min-h-[800px] pb-4">
        {/* Top Left - Illustration */}
        <div
          ref={mobileIllustrationRef}
          data-element-id="mobile-illustration"
          className={`absolute left-[10px] transition-all duration-700 ease-out ${
            visibleElements.has("mobile-illustration")
              ? "opacity-100 transform translate-x-0"
              : "opacity-0 transform translate-x-[-50px]"
          }`}
        >
          <Image
            src="/images/recycling/giang-giai.png"
            alt="Recycling Process Illustration - 回収した不用品のリサイクルについて"
            className="w-full h-full object-contain"
            width={100}
            height={129}
          />
        </div>

        {/* Center Top - Header Section */}
        <div
          ref={mobileHeaderRef}
          data-element-id="mobile-header"
          className={`absolute top-[8px] left-[68%] transform -translate-x-1/2 max-w-[300px] w-full transition-all duration-800 ease-out ${
            visibleElements.has("mobile-header")
              ? "opacity-100 transform -translate-x-1/2 translate-y-0"
              : "opacity-0 transform -translate-x-1/2 translate-y-[-30px]"
          }`}
        >
          <div className="flex flex-col items-center space-y-[10px]">
            <div className="flex items-center gap-[14px]">
              {/* Decorative icons */}
              <div className="w-[15.9px] h-[15.3px] flex items-center justify-center">
                <Image
                  src="/images/recycling/decorative-triangle-left.svg"
                  alt="Decorative triangle"
                  width={16}
                  height={15}
                />
              </div>

              <h2 className="text-black font-bold text-[26px] leading-[1.2] font-['Montserrat']">
                回収した不用品の
              </h2>

              <div className="w-[15.9px] h-[15.3px] flex items-center justify-center">
                <Image
                  src="/images/recycling/decorative-triangle-right.svg"
                  alt="Decorative triangle"
                  width={16}
                  height={15}
                />
              </div>
            </div>

            <h1 className="text-[#00A842] font-bold text-[26px] leading-[1.2] font-['Montserrat']">
              リサイクルについて
            </h1>
          </div>
        </div>

        {/* <div className="flex z-5">
            <div
              ref={illustrationRef}
              className={cn(
                "mx-auto w-[140px] h-[150px] mb-8 transition-all duration-700 ease-out",
                illustrationInView
                  ? "opacity-100 transform translate-x-0"
                  : "opacity-0 transform translate-x-[-20px]"
              )}
            >
              <Image
                src="/images/recycling/giang-giai.png"
                alt="Recycling Process Illustration - 回収した不用品のリサイクルについて"
                className="w-full h-full object-contain"
                width={140}
                height={150}
              />
            </div>

            <div
              ref={headerRef}
              className={cn(
                "flex flex-col items-center mb-8 transition-all duration-800 ease-out",
                headerInView
                  ? "opacity-100 transform translate-y-0"
                  : "opacity-0 transform translate-y-[-20px]"
              )}
            >
              <div className="flex flex-col items-center space-y-[2.7px]">
                <div className="flex items-center gap-[3.8px]">
                  <div className="w-[15.9px] h-[15.3px] flex items-center justify-center">
                    <Image
                      src="/images/recycling/decorative-triangle-left.svg"
                      alt="Decorative triangle"
                      width={16}
                      height={15}
                    />
                  </div>

                  <h2 className="text-black font-bold text-[26px] leading-[1.2] font-['Montserrat']">
                    回収した不用品の
                  </h2>

                  <div className="w-[15.9px] h-[15.3px] flex items-center justify-center">
                    <Image
                      src="/images/recycling/decorative-triangle-right.svg"
                      alt="Decorative triangle"
                      width={16}
                      height={15}
                    />
                  </div>
                </div>

                <h1 className="text-[#00A842] font-bold text-[26px] leading-[1.2] font-['Montserrat']">
                  リサイクルについて
                </h1>
              </div>
            </div>

          </div> */}
        {/* Bottom Full Width - Content Card */}

        <div
          ref={mobileContentRef}
          data-element-id="mobile-content"
          className={`absolute top-[120px] transition-all duration-700 ease-out z-10 ${
            visibleElements.has("mobile-content")
              ? "opacity-100 transform scale-100"
              : "opacity-0 transform scale-95"
          }`}
          style={{
            transitionDelay: visibleElements.has("mobile-content")
              ? "300ms"
              : "0ms",
          }}
        >
          <div className="bg-white border-[2.7px] border-[#FFDA33] rounded-[10px]">
            {/* Yellow Header */}
            <div className="bg-[#FFDA33] rounded-t-[10px] py-[5px] px-[10px]">
              <h3 className="text-black font-bold text-[20px] leading-[1.2] text-center font-['Montserrat']">
                当社独自の販売ルートを確立
              </h3>
            </div>

            {/* White Content Area */}
            <div className="bg-white rounded-b-[10px] px-[22px] py-[16px]">
              {/* Mobile Content */}
              <div className="space-y-4">
                {/* First Section */}
                <div>
                  <h4 className="text-black font-bold text-[12px] leading-[1.2] mb-[11px] font-['Montserrat']">
                    <span className="text-[#006E27]">
                      積極的な再利用・再活用
                    </span>
                    への取り組み
                  </h4>
                  <p
                    ref={mobileFirstParagraphRef}
                    data-element-id="mobile-firstParagraph"
                    className={`text-black font-medium text-[12px] leading-[1.2] font-['Montserrat'] transition-all duration-700 ease-out ${
                      visibleElements.has("mobile-firstParagraph")
                        ? "opacity-100 transform translate-x-0"
                        : "opacity-0 transform translate-x-[20px]"
                    }`}
                    style={{
                      transitionDelay: visibleElements.has(
                        "mobile-firstParagraph"
                      )
                        ? "500ms"
                        : "0ms",
                    }}
                  >
                    不用品・粗大ゴミの廃棄処分は別途料金がかかってお客様に負担をかけるうえ、処分工程でどうしても環境に悪影響が出てしまいます。そのため、エコグローバルでは廃棄処分量を減らし、回収品の適切な再利用に努めています。こうした廃棄処分を減らす試みで環境に配慮し、浮いた処分費を低価格の不用品・粗大ゴミ回収サービスとしてお客様に還元することで、信頼してお任せいただける回収業者を目指します。不用品・粗大ゴミの回収後は、品種ごとに仕分けるのはもちろん、廃品・家具・家電のように処分方法が定められている品種もお客様に代わり適切に対応します。
                  </p>
                </div>

                {/* Mobile Image */}
                <div className="w-full h-[195px] bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                  <Image
                    src="/images/recycling/tau.png"
                    alt="Recycling Process"
                    width={300}
                    height={195}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Second Section */}
                <div>
                  <div
                    ref={mobileRecyclingTextRef}
                    data-element-id="mobile-recyclingText"
                    className="relative h-[19px] mb-[11px]"
                  >
                    <div className="w-full">
                      <Image
                        src="/images/recycling/recycling-process.svg"
                        alt="Recycling Process - Package Illustration"
                        width={317}
                        height={19}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div
                      ref={mobileRecyclingTextContentRef}
                      data-element-id="mobile-recyclingTextContent"
                      className={`absolute top-0 left-8 w-full transition-all duration-1000 ease-out ${
                        visibleElements.has("mobile-recyclingTextContent")
                          ? "opacity-100 transform translate-x-0"
                          : "opacity-0 transform translate-x-[20px]"
                      }`}
                      style={{
                        transitionDelay: visibleElements.has(
                          "mobile-recyclingTextContent"
                        )
                          ? "500ms"
                          : "0ms",
                      }}
                    >
                      <span className="text-[#02662A] font-bold text-[12px] leading-[1.2] font-['Montserrat']">
                        再利用により処分費用を大幅削減
                      </span>
                    </div>
                  </div>
                  <p
                    ref={mobileSecondParagraphRef}
                    data-element-id="mobile-secondParagraph"
                    className={`text-black font-medium text-[12px] leading-[1.2] font-['Montserrat'] transition-all duration-700 ease-out ${
                      visibleElements.has("mobile-secondParagraph")
                        ? "opacity-100 transform translate-x-0"
                        : "opacity-0 transform translate-x-[20px]"
                    }`}
                    style={{
                      transitionDelay: visibleElements.has(
                        "mobile-secondParagraph"
                      )
                        ? "500ms"
                        : "0ms",
                    }}
                  >
                    エコグローバルは不用品であっても安易な廃棄処分を行わず、千葉県を含む全国のリサイクルショップで再販、オークションや海外への輸出を通して収益化し、着物や家具は多少の破損であれば、リメイクを施して再活用するなど、品種に合わせた不用品の再利用を徹底しています。回収した粗大ゴミ・不用品の再利用を徹底する事は環境への配慮はもちろん、処分にかかる費用を削減する狙いもあります。作業料金から処分費を削減することで不用品回収にかかる料金の低価格化を実現、回収した不用品・廃品を適切に再利用して、次のお客様に還元するサイクルでエコグローバルは千葉県内を対象に、お客様と環境の両方に優しい不用品回収を実現しています。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecyclingSection;
