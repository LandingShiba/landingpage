import React from "react";
import Image from "next/image";
import { cn, useInView } from "@/lib/utils";

interface ReasonCard {
  id: number;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

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
        "エコ・グローバルは格安料金で不用品・粗大ゴミ回収に対応！引越しゴミなど大量の廃品処分も安心してお任せください！",
      image: "/images/reason/reason-macos.png",
      imageAlt: "Affordable pricing illustration",
    },
    {
      id: 2,
      title: "迅速・丁寧な\n高水準の作業対応",
      description:
        "回収する状況・不用品に合わせて適切な方法で対応しますので、千葉県内のマンション高層階からのご依頼もご安心を！",
      image: "/images/reason/reason-macos.png",
      imageAlt: "Professional service illustration",
    },
    {
      id: 3,
      title: "見積もり無料",
      description:
        "エコ・グローバルではお見積もりを無料で承ります。回収可能な不用品の種類や引き取り日程などの疑問点もご相談ください。",
      image: "/images/reason/reason-macos.png",
      imageAlt: "Free estimate illustration",
    },
    {
      id: 4,
      title: "高価買取",
      description:
        "品種を問わず幅広い品種を買取査定！熟練のスタッフが回収品の中に含まれた買取品も見逃さずに適正査定します！",
      image: "/images/reason/reason-macos.png",
      imageAlt: "High-value purchase illustration",
    },
    {
      id: 5,
      title: "少量から\n家まるごとまでOK",
      description:
        "エコ・グローバルでは廃品・粗大ゴミの量を問わず対応します。不用品1点から家具・家電を含む大量の廃棄品までお任せを。",
      image: "/images/reason/reason-macos.png",
      imageAlt: "Flexible volume service illustration",
    },
    {
      id: 6,
      title: "見積もり後の\n追加料金なし",
      description:
        "エコ・グローバルはご契約成立後にお客様に許可を得ず作業・料金を追加することは一切ありません。安心してお任せください。",
      image: "/images/reason/reason-macos.png",
      imageAlt: "No hidden fees illustration",
    },
  ];

  const ReasonCard: React.FC<{ reason: ReasonCard }> = ({ reason }) => {
    return (
      <div className="bg-white rounded-[8.3px] md:rounded-[20px] shadow-[0px_3.32px_1.66px_0px_rgba(0,0,0,0.15)] md:shadow-[0px_8px_4px_0px_rgba(0,0,0,0.15)] relative overflow-hidden w-[172px] md:w-[420px]">
        {/* Number badge */}
        <div className="absolute top-0 left-0 z-10">
          <div className="w-[51.2px] h-[53.5px] md:w-[123.5px] md:h-[129px] relative">
            <Image
              src="/images/reason/Rectangle_67.png"
              alt="Number badge background"
              width={123.5}
              height={129}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-[2.9px] left-[8.8px] md:top-[15px] md:left-[20px]">
              <span className="text-white font-bold text-[18.6px] md:text-[50px] font-['Montserrat'] leading-[1.219]">
                {reason.id}
              </span>
            </div>
          </div>
        </div>

        {/* Card content */}
        <div className="flex flex-col">
          {/* Image section */}
          <div className="h-[106px] md:h-[259px] w-full rounded-t-[8.3px] md:rounded-t-[20px]">
            <Image
              src={reason.image}
              alt={reason.imageAlt}
              width={420}
              height={259}
              className="object-contain w-full h-full"
            />
          </div>

          {/* Content section */}
          <div className="flex flex-col gap-[12px] md:gap-[5px] p-[8px] md:p-5 md:pt-[30px]">
            {/* Title */}
            <h3 className="text-[#00A842] font-bold text-[16px] md:text-[40px] leading-[1.219] text-center font-['Montserrat'] whitespace-pre-line">
              {reason.title}
            </h3>

            {/* Description */}
            <div className="flex items-center justify-center px-[8px] pb-[8px] md:pb-0 md:px-0">
              <p className="text-black font-medium text-[12px] md:text-[30px] leading-[1.219] text-center font-['Montserrat']">
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
        <div className="h-[91px] md:h-[200px] w-full">
          <Image
            src="/images/reason/BG.png"
            alt="Top banner background"
            fill
            // className="w-full h-auto"
            priority
          />
        </div>

        {/* Banner content - centered text */}
        <div className="absolute inset-0 flex items-center justify-center mb-[15px] md:hidden">
          <div className="flex items-center justify-center transform ">
            <div className="flex flex-col items-center">
              <span className="text-white font-bold text-[26px] font-['Montserrat'] leading-[1.219]">
                不用品回収エコ・グローバル
              </span>
              <span className="text-[#222222] font-bold text-[26px] font-['Montserrat'] leading-[1.219]">
                にお任せください！？
              </span>
            </div>
          </div>
        </div>

        <div className="absolute inset-0  items-center justify-center mb-[15px] hidden md:flex">
          <div className="flex items-center justify-center transform ">
            <div className="text-center mb-8">
              <span className="text-white font-bold text-[60px] font-['Montserrat'] leading-[1.219]">
                不用品回収アース千葉
              </span>
              <span className="text-[#222222] font-bold text-[60px] font-['Montserrat'] leading-[1.219]">
                にお任せください！？
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main content section */}
      <div className="md:py-16 relative">
        {/* Background decorative elements */}
        <div
          ref={decorativeRef}
          className={cn(
            "hidden md:block absolute top-[92px] left-[185px] md:left-[645px] w-[374px] h-[481px] transition-all duration-1000 ease-out",
            decorativeInView
              ? "opacity-100 transform translate-x-0 scale-100"
              : "opacity-0 transform translate-x-[-50px] scale-95"
          )}
        >
          <Image
            src="/images/recycling/giang-giai.png"
            alt="エコ・グローバルを選ぶ理由を紹介するイメージ"
            width={374}
            height={481}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="md:max-w-[1440px] mx-auto px-4 md:px-[70px] relative">
          {/* Header Section */}
          <div
            ref={headerRef}
            className={cn(
              "text-right md:left-[130px] mb-[30px] md:mb-[50px] relative transition-all duration-800 ease-out mx-auto max-w-[354px] md:max-w-[800px]",
              headerInView
                ? "opacity-100 transform translate-y-0"
                : "opacity-0 transform translate-y-[-30px]"
            )}
          >
            {/* Main title */}
            <div className="pt-2 md:pt-16 mb-4">
              {/* First row - エコ・グローバルが */}

              <div className="flex items-center justify-center gap-[7.4px] md:gap-4 mb-[7.4px] md:mb-4">
                <div className="w-[30.9px] h-[29.5px] md:w-[59px] md:h-[57px] flex items-center justify-center transform rotate-12">
                  <Image
                    src="/images/recycling/decorative-triangle-left.svg"
                    alt="Decorative triangle"
                    fill
                  />
                </div>
                <h2 className="text-black font-bold text-[26px] md:text-[70px] leading-[1.219] font-['Montserrat']">
                  エコ・グローバルが
                </h2>
                <div className="w-[30.9px] h-[29.5px] md:w-[59px] md:h-[57px] flex items-center justify-center transform -rotate-12">
                  <Image
                    src="/images/recycling/decorative-triangle-right.svg"
                    alt="Decorative triangle"
                    fill
                  />
                </div>
              </div>

              {/* Second row - 選ばれる7つの理由 */}
              <div className="flex items-center justify-center gap-[19px] md:gap-2">
                <h1 className="text-[#00A842] font-bold text-[32px] md:text-[80px] leading-[1.219] font-['Montserrat']">
                  選ばれる
                </h1>
                <span className="text-[#ea2227] font-bold text-[50px] md:text-[120px] leading-[1.219] font-['Montserrat']">
                  7
                </span>
                <span className="text-[#00A842] font-bold text-[32px] md:text-[80px] leading-[1.219] font-['Montserrat']">
                  つの理由
                </span>
              </div>
            </div>
          </div>

          {/* Cards Grid */}
          <div
            ref={cardsRef}
            className={cn(
              "transition-all duration-700 ease-out",
              cardsInView
                ? "opacity-100 transform translate-y-0"
                : "opacity-0 transform translate-y-[50px]"
            )}
            style={{
              transitionDelay: cardsInView ? "300ms" : "0ms",
            }}
          >
            {/* Grid layout - 2 columns on mobile, 3 columns on desktop */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5 max-w-[360px] md:max-w-none mx-auto">
              {reasons.map((reason, index) => (
                <div
                  key={reason.id}
                  className={cn(
                    "transition-all duration-600 ease-out flex justify-center",
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

            {/* Special card (7th reason) */}
            <div
              ref={specialCardRef}
              className={cn(
                "flex justify-center transition-all duration-700 ease-out mt-8 md:mt-0",
                specialCardInView
                  ? "opacity-100 transform scale-100"
                  : "opacity-0 transform scale-95"
              )}
              style={{
                transitionDelay: specialCardInView ? "1000ms" : "0ms",
              }}
            >
              {/* Mobile view */}
              <div className="md:hidden flex flex-col bg-white rounded-[8px] border-[0.4px] border-[#539CD1] shadow-[0px_3.32px_1.66px_0px_rgba(0,0,0,0.15)] relative overflow-hidden w-[360px] mx-auto mb-6">
                {/* Number badge */}
                <div className="absolute top-0 left-0 z-10">
                  <div className="w-[56.6px] h-[59.1px] relative">
                    <Image
                      src="/images/reason/Rectangle_67.png"
                      alt="Number badge background"
                      width={123.5}
                      height={129}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-[3.2px] left-[8.1px]">
                      <span className="text-white font-bold text-[20.6px] font-['Montserrat'] leading-[1.219]">
                        7
                      </span>
                    </div>
                  </div>
                </div>

                {/* Image section */}
                <div className="w-full h-[153px]">
                  <Image
                    src="/images/reason/reason-macos.png"
                    alt="100% in-house staff illustration"
                    width={360}
                    height={153}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Content section */}
                <div className="flex flex-col items-center gap-1 p-4">
                  <div className="text-[#ea2227] font-bold text-[16px] leading-[1.219] font-['Montserrat']">
                    100%
                  </div>
                  <h3 className="text-[#00A842] font-bold text-[16px] leading-[1.219] text-center font-['Montserrat']">
                    自社スタッフ
                  </h3>
                  <p className="text-black font-medium text-[12px] leading-[1.219] text-left font-['Montserrat']">
                    回収作業はすべてエコ・グローバルのスタッフが行いますので、仲介料が発生する心配はいりません。千葉県、松戸市内の現場に伺い、家具・家電のような搬出が困難な品も回収します。
                  </p>
                </div>
              </div>

              {/* Desktop view */}
              <div className="hidden md:block bg-white mt-10 rounded-[20px] shadow-[0px_8px_4px_0px_rgba(0,0,0,0.15)] relative overflow-hidden h-[419px] w-[1300px]">
                {/* Number badge */}
                <div className="absolute top-0 left-0 z-10 ">
                  <div className="w-[123.5px] h-[129px] relative">
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
                      src="/images/reason/reason-macos.png"
                      alt="100% in-house staff illustration"
                      width={560}
                      height={419}
                      className="w-full h-full object-contain rounded-l-[20px]"
                    />
                  </div>

                  {/* Content section */}
                  <div className="flex-1 flex flex-col justify-center items-center px-[50px] gap-2.5">
                    <div className="text-[#ea2227] font-bold text-[70px] leading-tight font-['Montserrat']">
                      100%
                    </div>
                    <h3 className="text-[#00a842] font-bold text-[40px] leading-tight text-center font-['Montserrat']">
                      自社スタッフ
                    </h3>
                    <p className="text-black font-medium text-[30px] leading-normal text-left font-['Montserrat'] max-w-[585px]">
                      回収作業はすべてエコ・グローバルのスタッフが行いますので、仲介料が発生する心配はいりません。千葉県、松戸市内の現場に伺い、家具・家電のような搬出が困難な品も回収します。
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
