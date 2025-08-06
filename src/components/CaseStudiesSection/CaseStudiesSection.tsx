"use client";

import Image from "next/image";
import React from "react";

const CaseStudiesSection: React.FC = () => {
  return (
    <section className="bg-[#E9FFD6] py-16 px-4 relative overflow-hidden min-h-screen">
      {/* Main Title */}
      <div className="text-center mb-12">
        <h2
          className="text-7xl font-bold text-[#202020]"
          style={{ fontFamily: 'Montserrat, "Noto Sans JP", sans-serif' }}
        >
          不用品回収事例
        </h2>
      </div>

      {/* Mascot character at top right - positioned absolutely */}
      <div className="absolute top-15 right-85   w-[270px] h-[366px] z-5">
        <Image
          src="/images/macos/macos_2.png"
          alt="Shiba mascot character"
          className="w-full h-full object-contain drop-shadow-xl"
          width={270}
          height={366}
        />
      </div>

      <div className="max-w-[1160px] mx-auto relative z-10">
        {/* Decorative packages in a horizontal row */}
        <div className="flex justify-start  gap-6 mb-14 overflow-x-auto">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="w-[146px] h-[120px] flex-shrink-0">
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
        <div className="bg-[#ffda33] rounded-t-2xl py-8 px-12 mb-0 shadow-xl">
          <h3
            className="text-4xl font-bold text-black text-center"
            style={{ fontFamily: 'Montserrat, "Noto Sans JP", sans-serif' }}
          >
            作業事例とスタッフによる解説
          </h3>
        </div>

        {/* White Content Area */}
        <div className="bg-white rounded-b-2xl px-16 py-16 shadow-xl">
          {/* Case Information Section */}
          <div className="mb-16">
            <div className="flex items-center gap-12 mb-10">
              <h4
                className="text-[20px] font-bold text-black"
                style={{ fontFamily: 'Montserrat, "Noto Sans JP", sans-serif' }}
              >
                S様邸
              </h4>

              {/* Information Table */}
              <div className="flex gap-0 shadow-2xl">
                {/* Column 1: 回収例 */}
                <div className="w-[310px]">
                  <div className="bg-[#E9FFD6] border-2 border-[#acabab] h-20 flex items-center justify-center">
                    <span
                      className="text-2xl font-medium text-[#222222]"
                      style={{
                        fontFamily: 'Montserrat, "Noto Sans JP", sans-serif',
                      }}
                    >
                      回収例
                    </span>
                  </div>
                  <div className="bg-white border-2 border-[#acabab] border-t-0 h-20 flex items-center justify-center">
                    <span
                      className="text-2xl font-semibold text-[#222222]"
                      style={{
                        fontFamily: 'Montserrat, "Noto Sans JP", sans-serif',
                      }}
                    >
                      回収例
                    </span>
                  </div>
                </div>

                {/* Column 2: 作業スタッフ */}
                <div className="w-[310px]">
                  <div className="bg-[#E9FFD6] border-2 border-[#acabab] border-l-0 h-20 flex items-center justify-center">
                    <span
                      className="text-2xl font-medium text-[#222222]"
                      style={{
                        fontFamily: 'Montserrat, "Noto Sans JP", sans-serif',
                      }}
                    >
                      作業スタッフ
                    </span>
                  </div>
                  <div className="bg-white border-2 border-[#acabab] border-l-0 border-t-0 h-20 flex items-center justify-center">
                    <span
                      className="text-2xl font-semibold text-[#222222]"
                      style={{
                        fontFamily: 'Montserrat, "Noto Sans JP", sans-serif',
                      }}
                    >
                      3名
                    </span>
                  </div>
                </div>

                {/* Column 3: 料金 */}
                <div className="w-[310px]">
                  <div className="bg-[#E9FFD6] border-2 border-[#acabab] border-l-0 h-20 flex items-center justify-center">
                    <span
                      className="text-2xl  font-medium text-[#222222]"
                      style={{
                        fontFamily: 'Montserrat, "Noto Sans JP", sans-serif',
                      }}
                    >
                      料金
                    </span>
                  </div>
                  <div className="bg-white border-2 border-[#acabab] border-l-0 border-t-0 h-20 flex items-center justify-center">
                    <span
                      className="text-2xl  font-semibold text-[#ea2227]"
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
          <div className="flex items-center justify-center gap-16 mb-20">
            {/* BEFORE Image */}
            <div className="relative">
              <div className="w-[380px] h-[285px] bg-gray-200 rounded-2xl border-[8px] border-[#d2d2d2] overflow-hidden shadow-2xl">
                <Image
                  src="/images/caseStudies/before.png"
                  alt="S様邸 - Before cleanup"
                  className="w-full h-full object-cover"
                  width={380}
                  height={285}
                />
              </div>
              <div className="absolute top-0 left-0 bg-[#d9d9d9] text-[#787878] px-6 py-3 rounded-br-2xl rounded-tl-2xl">
                <span
                  className="text-2xl font-bold"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  BEFORE
                </span>
              </div>
            </div>

            {/* Arrow */}
            <div className="flex items-center justify-center px-6">
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
              <div className="w-[380px] h-[285px] bg-[#00A842] rounded-2xl border-[8px] border-[#00A842] overflow-hidden shadow-2xl">
                <Image
                  src="/images/caseStudies/after.png"
                  alt="S様邸 - After cleanup"
                  className="w-full h-full object-cover"
                  width={380}
                  height={285}
                />
              </div>
              <div className="absolute top-0 left-0 bg-[#00A842] text-white px-6 py-3 rounded-br-2xl rounded-tl-2xl">
                <span
                  className="text-2xl font-bold"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  AFTER
                </span>
              </div>
            </div>
          </div>

          {/* Staff Explanation Section */}
          <div className="flex gap-12 items-start">
            {/* Mascot Character */}
            <div className="flex-shrink-0">
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
            <div className="flex-1">
              <h5
                className="text-[20px] font-medium text-black mb-6"
                style={{ fontFamily: 'Montserrat, "Noto Sans JP", sans-serif' }}
              >
                担当スタッフから
              </h5>
              <div
                className="text-[20px] text-black leading-relaxed space-y-4"
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
              <div className="flex justify-end gap-2 mt-8">
                {[...Array(5)].map((_, index) => (
                  <div key={index} className="w-[79px] h-[65px]">
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
