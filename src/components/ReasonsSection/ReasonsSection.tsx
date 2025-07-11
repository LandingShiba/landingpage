import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ReasonCard {
  id: number;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
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

const ReasonsSection: React.FC = () => {
  const { ref: headerRef, isInView: headerInView } = useInView();
  const { ref: cardsRef, isInView: cardsInView } = useInView();
  const { ref: specialCardRef, isInView: specialCardInView } = useInView();
  const { ref: decorativeRef, isInView: decorativeInView } = useInView();

  const reasons: ReasonCard[] = [
    {
      id: 1,
      title: "回収料金がリーズナブル",
      description:
        "アース千葉は格安料金で不用品・粗大ゴミ回収に対応！引越しゴミなど大量の廃品処分も安心してお任せください！",
      image: "/images/reason/image_6.png",
      imageAlt: "Affordable pricing illustration",
    },
    {
      id: 2,
      title: "迅速・丁寧な\n高水準の作業対応",
      description:
        "回収する状況・不用品に合わせて適切な方法で対応しますので、千葉県内のマンション高層階からのご依頼もご安心を！",
      image: "/images/reason/image_5.png",
      imageAlt: "Professional service illustration",
    },
    {
      id: 3,
      title: "見積もり無料",
      description:
        "アース千葉ではお見積もりを無料で承ります。回収可能な不用品の種類や引き取り日程などの疑問点もご相談ください。",
      image: "/images/reason/image_4.png",
      imageAlt: "Free estimate illustration",
    },
    {
      id: 4,
      title: "高価買取",
      description:
        "品種を問わず幅広い品種を買取査定！熟練のスタッフが回収品の中に含まれた買取品も見逃さずに適正査定します！",
      image: "/images/reason/image_7.png",
      imageAlt: "High-value purchase illustration",
    },
    {
      id: 5,
      title: "少量から\n家まるごとまでOK",
      description:
        "アース千葉では廃品・粗大ゴミの量を問わず対応します。不用品1点から家具・家電を含む大量の廃棄品までお任せを。",
      image: "/images/reason/image_8.png",
      imageAlt: "Flexible volume service illustration",
    },
    {
      id: 6,
      title: "見積もり後の\n追加料金なし",
      description:
        "アース千葉はご契約成立後にお客様に許可を得ず作業・料金を追加することは一切ありません。安心してお任せください。",
      image: "/images/reason/image_4.png",
      imageAlt: "No hidden fees illustration",
    },
  ];

  const ReasonCard: React.FC<{ reason: ReasonCard }> = ({ reason }) => {
    return (
      <div className="bg-white rounded-[20px] shadow-[0px_8px_4px_0px_rgba(0,0,0,0.15)] relative overflow-hidden h-[624px] w-[420px]">
        {/* Number badge */}
        <div className="absolute top-0 left-0 z-10">
          <div className="w-[123.5px] h-[129px] relative">
            {/* Background image */}
            <Image
              src="/images/reason/Rectangle_67.png"
              alt="Number badge background"
              width={123.5}
              height={129}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-[15px] left-[31px] transform -translate-x-1/2">
              <span className="text-white font-bold text-[60px] font-['Montserrat'] leading-none">
                {reason.id}
              </span>
            </div>
          </div>
        </div>

        {/* Card content */}
        <div className="flex flex-col h-full">
          {/* Image section */}
          <div className="h-[259px] w-full rounded-t-[20px]">
            <Image
              src={reason.image}
              alt={reason.imageAlt}
              width={420}
              height={259}
              className="object-cover"
            />
          </div>

          {/* Content section */}
          <div className="flex flex-col gap-[5px] p-5 pt-[30px] flex-1">
            {/* Title */}
            <h3 className="text-[#539cd1] font-bold text-[40px] leading-tight text-center font-['Montserrat'] whitespace-pre-line">
              {reason.title}
            </h3>

            {/* Description */}
            <div className="flex-1 flex items-center">
              <p className="text-black font-medium text-[30px] leading-normal text-center font-['Montserrat']">
                {reason.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="bg-[#f7f6e8] relative">
      {/* Full-width banner section at the top */}
      <div className="w-full relative">
        {/* Background image */}
        <Image
          src="/images/reason/bg-top.png"
          alt="Top banner background"
          width={1440}
          height={250}
          className="w-full h-auto"
          priority
        />

        {/* Banner content - centered text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex items-center justify-center transform ">
            <div className="flex items-center">
              <span className="text-white font-bold text-[70px] font-['Montserrat'] leading-none">
                不用品回収アース千葉
              </span>
              <span className="text-[#222222] font-bold text-[70px] font-['Montserrat'] leading-none">
                にお任せください！？
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main content section */}
      <div className="py-16 relative">
        {/* Background decorative elements */}
        <div
          ref={decorativeRef}
          className={cn(
            "absolute top-[92px] left-[185px] w-[374px] h-[481px] transition-all duration-1000 ease-out",
            decorativeInView
              ? "opacity-100 transform translate-x-0 scale-100"
              : "opacity-0 transform translate-x-[-50px] scale-95"
          )}
        >
          <Image
            src="/images/recycling/giang-giai.png"
            alt="Background decoration"
            width={374}
            height={481}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-[1440px] mx-auto px-[70px] relative">
          {/* Header Section */}
          <div
            ref={headerRef}
            className={cn(
              "text-right mb-[50px] relative transition-all duration-800 ease-out ml-auto mr-0 max-w-[800px]",
              headerInView
                ? "opacity-100 transform translate-y-0"
                : "opacity-0 transform translate-y-[-30px]"
            )}
          >
            {/* Main title */}
            <div className="pt-16 mb-4">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="w-[59px] h-[57px] flex items-center justify-center transform rotate-12">
                  <Image
                    src="/images/recycling/decorative-triangle-left.svg"
                    alt="Decorative triangle"
                    width={59}
                    height={57}
                  />
                </div>
                <h2 className="text-black font-bold text-[70px] leading-tight font-['Montserrat']">
                  アース千葉が
                </h2>
                <div className="w-[59px] h-[57px] flex items-center justify-center transform -rotate-12">
                  <Image
                    src="/images/recycling/decorative-triangle-right.svg"
                    alt="Decorative triangle"
                    width={59}
                    height={57}
                  />
                </div>
              </div>

              <div className="flex items-center justify-center">
                <h1 className="text-[#539cd1] font-bold text-[80px] leading-tight font-['Montserrat']">
                  選ばれる
                </h1>
                <span className="text-[#ea2227] font-bold text-[120px] leading-tight font-['Montserrat'] mx-2">
                  7
                </span>
                <span className="text-[#539cd1] font-bold text-[80px] leading-tight font-['Montserrat']">
                  つの理由
                </span>
              </div>
            </div>
          </div>

          {/* Cards Grid */}
          <div
            ref={cardsRef}
            className={cn(
              "space-y-[50px] transition-all duration-700 ease-out",
              cardsInView
                ? "opacity-100 transform translate-y-0"
                : "opacity-0 transform translate-y-[50px]"
            )}
            style={{
              transitionDelay: cardsInView ? "300ms" : "0ms",
            }}
          >
            {/* First row - 3 cards */}
            <div className="flex justify-center gap-5">
              {reasons.slice(0, 3).map((reason, index) => (
                <div
                  key={reason.id}
                  className={cn(
                    "transition-all duration-600 ease-out",
                    cardsInView
                      ? "opacity-100 transform translate-y-0"
                      : "opacity-0 transform translate-y-[30px]"
                  )}
                  style={{
                    transitionDelay: cardsInView
                      ? `${400 + index * 100}ms`
                      : "0ms",
                  }}
                >
                  <ReasonCard reason={reason} />
                </div>
              ))}
            </div>

            {/* Second row - 3 cards */}
            <div className="flex justify-center gap-5">
              {reasons.slice(3, 6).map((reason, index) => (
                <div
                  key={reason.id}
                  className={cn(
                    "transition-all duration-600 ease-out",
                    cardsInView
                      ? "opacity-100 transform translate-y-0"
                      : "opacity-0 transform translate-y-[30px]"
                  )}
                  style={{
                    transitionDelay: cardsInView
                      ? `${700 + index * 100}ms`
                      : "0ms",
                  }}
                >
                  <ReasonCard reason={reason} />
                </div>
              ))}
            </div>

            {/* Third row - Special card (7th reason) */}
            <div
              ref={specialCardRef}
              className={cn(
                "flex justify-center transition-all duration-700 ease-out",
                specialCardInView
                  ? "opacity-100 transform scale-100"
                  : "opacity-0 transform scale-95"
              )}
              style={{
                transitionDelay: specialCardInView ? "1000ms" : "0ms",
              }}
            >
              <div className="bg-white rounded-[20px] shadow-[0px_8px_4px_0px_rgba(0,0,0,0.15)] relative overflow-hidden h-[419px] w-[1300px]">
                {/* Number badge */}
                <div className="absolute top-0 left-0 z-10">
                  <div className="w-[123.5px] h-[129px] relative">
                    {/* Background image */}
                    <Image
                      src="/images/reason/Rectangle_67.png"
                      alt="Number badge background"
                      width={123.5}
                      height={129}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-[25px] left-[31px] transform -translate-x-1/2">
                      <span className="text-white font-bold text-[60px] font-['Montserrat'] leading-none">
                        7
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex h-full">
                  {/* Image section */}
                  <div className="w-[560px] h-full">
                    <Image
                      src="/images/reason/image_10.png"
                      alt="100% in-house staff illustration"
                      width={560}
                      height={419}
                      className="w-full h-full object-cover rounded-l-[20px]"
                    />
                  </div>

                  {/* Content section */}
                  <div className="flex-1 flex flex-col justify-center items-center px-[50px] gap-2.5">
                    <div className="text-[#ea2227] font-bold text-[70px] leading-tight font-['Montserrat']">
                      100%
                    </div>
                    <h3 className="text-[#539cd1] font-bold text-[40px] leading-tight text-center font-['Montserrat']">
                      自社スタッフ
                    </h3>
                    <p className="text-black font-medium text-[30px] leading-normal text-left font-['Montserrat'] max-w-[585px]">
                      回収作業はすべてアース千葉のスタッフが行いますので、仲介料が発生する心配はいりません。千葉県、松戸市内の現場に伺い、家具・家電のような搬出が困難な品も回収します。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReasonsSection;
