import React from "react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative bg-green-600/30 h-[780px] overflow-hidden">
      {/* Background images */}
      <div className="absolute inset-0">
        <Image
          src="/images/banner/bg.png"
          alt="Banner background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* <Image
        src="/images/banner/banner-overlay.png"
        alt="Banner overlay"
        fill
        className="object-cover opacity-50 top-[50px]"
        priority
      /> */}

      {/* Main text content */}
      <div className="absolute left-[100px] top-[60px] z-10">
        <div className="flex flex-col gap-[11px]">
          <div className="flex items-end gap-4">
            <h2 className="text-[60px] font-bold text-[#3C3C3C] text-right leading-tight">
              千葉の
            </h2>
            <h1 className="text-[100px] font-black text-[#155E0B] text-right leading-[1.16]">
              不用品回収
            </h1>
          </div>
          <div className="flex items-end gap-4">
            <h1 className="text-[100px] font-black text-[#155E0B] text-right leading-[1.16]">
              粗大ゴミ処分
            </h1>
            <h2 className="text-[60px] font-bold text-[#3C3C3C] text-left leading-tight">
              なら
            </h2>
          </div>
        </div>

        <div className="flex items-end gap-4 mt-8">
          <h1 className="text-[78px] font-black text-[#006E27] leading-[1.45]">
            アース千葉
          </h1>
          <h2 className="text-[60px] font-bold text-[#3C3C3C] leading-tight">
            におまかせ！
          </h2>
        </div>

        {/* Service info */}
        <div className="flex items-center gap-8 mt-8">
          <span className="text-[50px] font-bold text-[#222222]">相談</span>
          <div className="w-0 h-[80px] border-l-[6px] border-[#008144]"></div>
          <span className="text-[50px] font-bold text-[#222222]">お見積り</span>
          <div className="w-0 h-[80px] border-l-[6px] border-[#008144]"></div>
          <span className="text-[50px] font-bold text-[#222222]">出張費</span>
        </div>
      </div>

      {/* Character image */}
      <div className="absolute right-0 top-[235px]">
        <Image
          src="/images/banner/banner-character.png"
          alt="Shiba character"
          width={446}
          height={687}
          priority
        />
      </div>

      {/* Medals at the bottom */}
      <div className="absolute left-[69px] bottom-[30px] flex gap-[46px]">
        {/* First medal - Lowest price challenge */}
        {/* <div className="relative w-[256px]">
          <div className="relative">
            <div className="bg-[#FFDA33] rounded-full w-[213px] h-[213px] mx-auto flex items-center justify-center">
              <div className="bg-[#FFAA17] rounded-full w-[153px] h-[153px] flex items-center justify-center">
                <div className="relative">
                  <p
                    className="absolute text-[#222222] opacity-50 font-black text-[35px] leading-tight text-center font-['Montserrat']"
                    style={{ top: "3px", left: "3px" }}
                  >
                    最安値に挑戦
                  </p>
                  <p className="relative text-white font-black text-[35px] leading-tight text-center font-['Montserrat']">
                    最安値に挑戦
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
              <div className="bg-[#E63535] w-[216px] h-[72px] rounded-sm flex items-center justify-center">
                <div className="flex gap-[26px]">
                  <div className="flex">
                    <span className="text-[#FFAA17] text-2xl">★</span>
                    <span className="text-[#FFAA17] text-2xl">★</span>
                    <span className="text-[#FFAA17] text-2xl">★</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* Second medal - Free estimate */}
        {/* <div className="relative w-[256px]">
          <div className="relative">
            <div className="bg-[#FFDA33] rounded-full w-[213px] h-[213px] mx-auto flex items-center justify-center">
              <div className="bg-[#FFAA17] rounded-full w-[153px] h-[153px] flex items-center justify-center">
                <div className="relative">
                  <p
                    className="absolute text-[#222222] opacity-50 font-black text-[35px] leading-tight text-center font-['Montserrat']"
                    style={{ top: "3px", left: "3px" }}
                  >
                    無料見積もり
                  </p>
                  <p className="relative text-white font-black text-[35px] leading-tight text-center font-['Montserrat']">
                    無料見積もり
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
              <div className="bg-[#E63535] w-[216px] h-[72px] rounded-sm flex items-center justify-center">
                <div className="flex gap-[26px]">
                  <div className="flex">
                    <span className="text-[#FFAA17] text-2xl">★</span>
                    <span className="text-[#FFAA17] text-2xl">★</span>
                    <span className="text-[#FFAA17] text-2xl">★</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* Third medal - Fast and careful */}
        {/* <div className="relative w-[256px]">
          <div className="relative">
            <div className="bg-[#FFDA33] rounded-full w-[213px] h-[213px] mx-auto flex items-center justify-center">
              <div className="bg-[#FFAA17] rounded-full w-[153px] h-[153px] flex items-center justify-center">
                <div className="relative">
                  <p
                    className="absolute text-[#222222] opacity-50 font-black text-[35px] leading-tight text-center font-['Montserrat']"
                    style={{ top: "3px", left: "3px" }}
                  >
                    迅速
                    <br />
                    丁寧
                  </p>
                  <p className="relative text-white font-black text-[35px] leading-tight text-center font-['Montserrat']">
                    迅速
                    <br />
                    丁寧
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
              <div className="bg-[#E63535] w-[216px] h-[72px] rounded-sm flex items-center justify-center">
                <div className="flex gap-[26px]">
                  <div className="flex">
                    <span className="text-[#FFAA17] text-2xl">★</span>
                    <span className="text-[#FFAA17] text-2xl">★</span>
                    <span className="text-[#FFAA17] text-2xl">★</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
