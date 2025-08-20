import Image from "next/image";
import React from "react";

interface ContentTableProps {
  visibleElements: Set<string>;
  contentRef: React.RefObject<HTMLDivElement | null>;
  beforeAfterRef: React.RefObject<HTMLDivElement | null>;
  staffRef: React.RefObject<HTMLDivElement | null>;
  dataCaseStudies: {
    table: {
      example: string;
      workStaff: string;
      fee: string;
    }[];
    content: string;
  };
}

const ContentTable = ({
  visibleElements,
  contentRef,
  beforeAfterRef,
  staffRef,
  dataCaseStudies,
}: ContentTableProps) => {
  const { table, content } = dataCaseStudies;
  return (
    <>
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
        className={`bg-white rounded-b-2xl border-[#ffda33] md:px-16 py-5 shadow-xl transition-all duration-800 ease-out ${
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
                    {table[0].example}
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
                    {table[0].workStaff}
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
                    {table[0].fee}
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
              <p>{content}</p>
            </div>

            {/* Small decorative packages at bottom right of text */}
            <div className="flex justify-start md:justify-end gap-2 mt-8">
              {[...Array(5)].map((_, index) => (
                <div
                  key={index}
                  className="w-[50px] h-[40px] max-[321]:w-[40px] max-[321]:h-[30px] sm:w-[60px] sm:h-[50px] md:w-[70px] md:h-[58px] lg:w-[79px] lg:h-[65px]"
                >
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
    </>
  );
};

export default ContentTable;
