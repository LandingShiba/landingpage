"use client";

import React from "react";

const CaseStudiesSection: React.FC = () => {
  return (
    <section className="bg-[#dcfbff] py-16 px-4 relative overflow-hidden min-h-screen">
      {/* Decorative packages at very top */}
      <div className="flex justify-center gap-6 mb-8 pt-8">
        {[...Array(5)].map((_, index) => (
          <div key={index} className="w-20 h-20">
            <img
              src="/images/recycling/package.png"
              alt="Package decoration"
              className="w-full h-full object-contain drop-shadow-lg"
            />
          </div>
        ))}
      </div>

      {/* Mascot character at top right - positioned absolutely */}
      <div className="absolute top-8 right-8 w-56 h-56 z-30">
        <img
          src="/images/teddy.png"
          alt="Shiba mascot character"
          className="w-full h-full object-contain drop-shadow-xl"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Title */}
        <div className="text-center mb-12">
          <h2
            className="text-7xl font-bold text-[#202020]"
            style={{ fontFamily: 'Montserrat, "Noto Sans JP", sans-serif' }}
          >
            不用品回収事例
          </h2>
        </div>

        {/* Yellow Header Bar */}
        <div className="bg-[#ffda33] rounded-t-3xl py-8 px-12 mb-0 shadow-xl">
          <h3
            className="text-4xl font-bold text-black text-center"
            style={{ fontFamily: 'Montserrat, "Noto Sans JP", sans-serif' }}
          >
            作業事例とスタッフによる解説
          </h3>
        </div>

        {/* White Content Area */}
        <div className="bg-white rounded-b-3xl px-16 py-16 shadow-xl">
          {/* Case Information Section */}
          <div className="mb-16">
            <div className="flex items-center gap-12 mb-10">
              <h4
                className="text-5xl font-bold text-black"
                style={{ fontFamily: 'Montserrat, "Noto Sans JP", sans-serif' }}
              >
                S様邸
              </h4>

              {/* Information Table */}
              <div className="flex gap-0 shadow-2xl">
                {/* Column 1: 回収例 */}
                <div className="w-[310px]">
                  <div className="bg-[#dcfbff] border-2 border-[#acabab] h-20 flex items-center justify-center">
                    <span
                      className="text-3xl font-medium text-[#222222]"
                      style={{
                        fontFamily: 'Montserrat, "Noto Sans JP", sans-serif',
                      }}
                    >
                      回収例
                    </span>
                  </div>
                  <div className="bg-white border-2 border-[#acabab] border-t-0 h-20 flex items-center justify-center">
                    <span
                      className="text-3xl font-semibold text-[#222222]"
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
                  <div className="bg-[#dcfbff] border-2 border-[#acabab] border-l-0 h-20 flex items-center justify-center">
                    <span
                      className="text-3xl font-medium text-[#222222]"
                      style={{
                        fontFamily: 'Montserrat, "Noto Sans JP", sans-serif',
                      }}
                    >
                      作業スタッフ
                    </span>
                  </div>
                  <div className="bg-white border-2 border-[#acabab] border-l-0 border-t-0 h-20 flex items-center justify-center">
                    <span
                      className="text-3xl font-semibold text-[#222222]"
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
                  <div className="bg-[#dcfbff] border-2 border-[#acabab] border-l-0 h-20 flex items-center justify-center">
                    <span
                      className="text-3xl font-medium text-[#222222]"
                      style={{
                        fontFamily: 'Montserrat, "Noto Sans JP", sans-serif',
                      }}
                    >
                      料金
                    </span>
                  </div>
                  <div className="bg-white border-2 border-[#acabab] border-l-0 border-t-0 h-20 flex items-center justify-center">
                    <span
                      className="text-3xl font-semibold text-[#ea2227]"
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
              <div className="w-[380px] h-[285px] bg-gray-200 rounded-3xl border-[8px] border-[#d2d2d2] overflow-hidden shadow-2xl">
                <img
                  src="/images/problems/backgroup_problem.png"
                  alt="S様邸 - Before cleanup"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/images/banner/bg.png";
                    target.onerror = () => {
                      target.style.display = "none";
                      target.parentElement!.innerHTML =
                        '<div class="w-full h-full bg-gray-300 flex items-center justify-center text-gray-600 text-2xl font-bold">BEFORE画像<br/>散らかった部屋</div>';
                    };
                  }}
                />
              </div>
              <div className="absolute top-0 left-0 bg-[#d9d9d9] text-[#787878] px-6 py-3 rounded-br-2xl rounded-tl-2xl">
                <span
                  className="text-3xl font-bold"
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
                  width="80"
                  height="40"
                  viewBox="0 0 80 40"
                  fill="none"
                  className="text-yellow-500"
                >
                  <path
                    d="M65 8L78 20L65 32M8 20H75"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            {/* AFTER Image */}
            <div className="relative">
              <div className="w-[380px] h-[285px] bg-gray-200 rounded-3xl border-[8px] border-[#539cd1] overflow-hidden shadow-2xl">
                <img
                  src="/images/banner/bg.png"
                  alt="S様邸 - After cleanup"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    target.parentElement!.innerHTML =
                      '<div class="w-full h-full bg-blue-100 flex items-center justify-center text-blue-600 text-2xl font-bold">AFTER画像<br/>整理された部屋</div>';
                  }}
                />
              </div>
              <div className="absolute top-0 left-0 bg-[#539cd1] text-white px-6 py-3 rounded-br-2xl rounded-tl-2xl">
                <span
                  className="text-3xl font-bold"
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
              <div className="w-48 h-48">
                <img
                  src="/images/caseStudies/teddy.png"
                  alt="担当スタッフ mascot"
                  className="w-full h-full object-contain drop-shadow-xl"
                />
              </div>
            </div>

            {/* Staff Text */}
            <div className="flex-1">
              <h5
                className="text-2xl font-medium text-black mb-6"
                style={{ fontFamily: 'Montserrat, "Noto Sans JP", sans-serif' }}
              >
                担当スタッフから
              </h5>
              <div
                className="text-lg text-gray-800 leading-relaxed space-y-4"
                style={{ fontFamily: '"Noto Sans JP", sans-serif' }}
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
                  <div key={index} className="w-12 h-12">
                    <img
                      src="/images/recycling/package.png"
                      alt="Package decoration"
                      className="w-full h-full object-contain drop-shadow-md"
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
