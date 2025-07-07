import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export interface RecyclingSectionProps {
  className?: string;
}

// Hook để xử lý intersection observer
const useInView = (options?: IntersectionObserverInit) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
        ...options,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return { ref, isInView };
};

const RecyclingSection: React.FC<RecyclingSectionProps> = ({ className }) => {
  const { ref: headerRef, isInView: headerInView } = useInView();
  const { ref: illustrationRef, isInView: illustrationInView } = useInView();
  const { ref: contentRef, isInView: contentInView } = useInView();

  return (
    <div className={cn("w-full bg-[#F7F6E8] py-16 px-4", className)}>
      <div className="max-w-[1440px] mx-auto relative h-[1333px]">
        {/* Top Left - Illustration */}
        <div
          ref={illustrationRef}
          className={cn(
            "absolute top-[39px] left-[70px] transition-all duration-700 ease-out",
            illustrationInView
              ? "opacity-100 transform translate-x-0"
              : "opacity-0 transform translate-x-[-50px]"
          )}
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
          className={cn(
            "absolute top-[100px] left-[60%] transform -translate-x-1/2 w-[751px] transition-all duration-800 ease-out",
            headerInView
              ? "opacity-100 transform -translate-x-1/2 translate-y-0"
              : "opacity-0 transform -translate-x-1/2 translate-y-[-30px]"
          )}
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
          className={cn(
            "absolute top-[378px] left-[70px] w-[1300px] transition-all duration-700 ease-out",
            contentInView
              ? "opacity-100 transform scale-100"
              : "opacity-0 transform scale-95"
          )}
          style={{
            transitionDelay: contentInView ? "300ms" : "0ms",
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
              {/* Green Highlight Text */}
              <div className="text-center mb-[50px]">
                <p className="text-[#006E27] font-bold text-[30px] leading-[1.2] font-['Montserrat']">
                  再利用により処分費用を大幅削減
                </p>
              </div>

              {/* Two Column Layout */}
              <div className="grid grid-cols-2 gap-[42px]">
                {/* Left Column */}
                <div className="space-y-[40px]">
                  <div>
                    <h4 className="text-black font-bold text-[30px] leading-[1.2] mb-[40px] font-['Montserrat']">
                      積極的な再利用・再活用への取り組み
                    </h4>
                    <p className="text-black font-medium text-[20px] leading-[1.4] font-['Montserrat']">
                      不用品・粗大ゴミの廃棄処分は別途料金がかかってお客様に負担をかけるうえ、処分工程でどうしても環境に悪影響が出てしまいます。そのため、アース千葉では廃棄処分量を減らし、回収品の適切な再利用に努めています。こうした廃棄処分を減らす試みで環境に配慮し、浮いた処分費を低価格の不用品・粗大ゴミ回収サービスとしてお客様に還元することで、信頼してお任せいただける回収業者を目指します。不用品・粗大ゴミの回収後は、品種ごとに仕分けるのはもちろん、廃品・家具・家電のように処分方法が定められている品種もお客様に代わり適切に対応します。
                    </p>
                  </div>

                  {/* Additional Image */}
                  <div className="w-[540px] h-[334px] bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                    <span className="text-gray-500 font-medium">
                      Additional Image
                    </span>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-[40px]">
                  {/* Recycling Process Icons */}
                  <div className="w-full h-[71px] border-b border-[#008144] relative">
                    <div className="absolute bottom-0 left-0 w-full h-[71px] flex items-center">
                      <div className="flex items-center space-x-4">
                        <div className="w-[86px] h-[70px] bg-[#FFAC43] rounded-lg flex items-center justify-center">
                          <div className="w-8 h-8 bg-white rounded-full"></div>
                        </div>
                        <div className="text-[#008144] text-2xl font-bold">
                          →
                        </div>
                        <div className="w-[86px] h-[70px] bg-[#00A842] rounded-lg flex items-center justify-center">
                          <div className="w-8 h-8 bg-white rounded-full"></div>
                        </div>
                        <div className="text-[#008144] text-2xl font-bold">
                          →
                        </div>
                        <div className="w-[86px] h-[70px] bg-[#006E27] rounded-lg flex items-center justify-center">
                          <div className="w-8 h-8 bg-white rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Long Text Content */}
                  <div>
                    <p className="text-black font-medium text-[20px] leading-[1.4] font-['Montserrat']">
                      アース千葉は不用品であっても安易な廃棄処分を行わず、千葉県を含む全国のリサイクルショップで再販、オークションや海外への輸出を通して収益化し、着物や家具は多少の破損であれば、リメイクを施して再活用するなど、品種に合わせた不用品の再利用を徹底しています。回収した粗大ゴミ・不用品の再利用を徹底する事は環境への配慮はもちろん、処分にかかる費用を削減する狙いもあります。作業料金から処分費を削減することで不用品回収にかかる料金の低価格化を実現、回収した不用品・廃品を適切に再利用して、次のお客様に還元するサイクルでアース千葉は千葉県内を対象に、お客様と環境の両方に優しい不用品回収を実現しています。
                    </p>
                  </div>
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
