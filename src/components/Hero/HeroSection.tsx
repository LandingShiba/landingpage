import React from "react";
import Image from "next/image";
import { MedalsSection } from "../Medals";

export default function HeroSection() {
  return (
    <>
      {/* Desktop Hero - Hidden on mobile */}
      <section className="hidden md:block relative bg-green-600/30 h-[390px] md:h-[390px] lg:h-[624px] xl:h-[780px]">
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

        {/* Main text content */}
        <div className="absolute left-[50px] md:left-[50px] lg:left-[80px] xl:left-[100px] top-[30px] md:top-[30px] lg:top-[48px] xl:top-[60px] z-10">
          <div className="flex flex-col gap-[5.5px] md:gap-[5.5px] lg:gap-[9px] xl:gap-[11px]">
            <div className="flex items-end gap-2 md:gap-2 lg:gap-3 xl:gap-4">
              <h2 className="text-[30px] md:text-[30px] lg:text-[48px] xl:text-[60px] font-bold text-[#3C3C3C] text-right leading-tight">
                東京・千葉の
              </h2>
              <h1 className="text-[50px] md:text-[50px] lg:text-[80px] xl:text-[100px] font-black text-[#155E0B] text-right leading-[1.16]">
                不用品回収
              </h1>
            </div>
            <div className="flex items-end gap-2 md:gap-2 lg:gap-3 xl:gap-4">
              <h1 className="text-[50px] md:text-[50px] lg:text-[80px] xl:text-[100px] font-black text-[#155E0B] text-right leading-[1.16]">
                粗大ゴミ処分
              </h1>
              <h2 className="text-[30px] md:text-[30px] lg:text-[48px] xl:text-[60px] font-bold text-[#3C3C3C] text-left leading-tight">
                なら
              </h2>
            </div>
          </div>

          <div className="flex items-end gap-2 md:gap-2 lg:gap-3 xl:gap-4 mt-4 md:mt-4 lg:mt-6 xl:mt-8">
            <h1 className="text-[39px] md:text-[39px] lg:text-[62px] xl:text-[78px] font-black text-[#006E27] leading-[1.45]">
              エコ・グローバル
            </h1>
            <h2 className="text-[30px] md:text-[30px] lg:text-[48px] xl:text-[60px] font-bold text-[#3C3C3C] leading-tight">
              におまかせ！
            </h2>
          </div>

          {/* Service info */}
          <div className="flex items-center gap-4 md:gap-4 lg:gap-6 xl:gap-8 mt-4 md:mt-4 lg:mt-6 xl:mt-8">
            <span className="text-[25px] md:text-[25px] lg:text-[40px] xl:text-[50px] font-bold text-[#222222]">相談</span>
            <div className="w-0 h-[40px] md:h-[40px] lg:h-[64px] xl:h-[80px] border-l-[3px] md:border-l-[3px] lg:border-l-[5px] xl:border-l-[6px] border-[#008144]"></div>
            <span className="text-[25px] md:text-[25px] lg:text-[40px] xl:text-[50px] font-bold text-[#222222]">
              お見積り
            </span>
            <div className="w-0 h-[40px] md:h-[40px] lg:h-[64px] xl:h-[80px] border-l-[3px] md:border-l-[3px] lg:border-l-[5px] xl:border-l-[6px] border-[#008144]"></div>
            <span className="text-[25px] md:text-[25px] lg:text-[40px] xl:text-[50px] font-bold text-[#222222]">出張費</span>
          </div>
        </div>

        {/* Character image */}
        <div className="absolute top-[117px] md:top-[117px] lg:top-[220px] xl:top-[310px] w-full flex justify-end">
          <div
            // style={{ width: "300px", height: "450px", position: "relative" }}
            className="mr-0 md:w-[223px] md:h-[300px] lg:w-[357px] lg:h-[480px] xl:w-[440px] xl:h-[540px] relative"
          >
            <Image
              src="/images/banner/banner-character.png"
              alt="東京・千葉の引越し・不用品回収サービス - エコ・グローバル"
              fill
              style={{ objectFit: "contain" }}
              priority
            />
          </div>
        </div>

        {/* Medals */}
        <div className="absolute left-[39px] md:left-[39px] lg:left-[63px] xl:left-[79px] bottom-[-15px] md:bottom-[-15px] lg:bottom-[-24px] xl:bottom-[-30px] z-20 flex flex-row gap-6 md:gap-6 lg:gap-10 xl:gap-12">
          <MedalsSection text="最安値に挑戦" />
          <MedalsSection text="無料見積もり" />
          <MedalsSection text={`迅速\n丁寧`} />
        </div>
      </section>

      {/* Mobile Hero - Hidden on desktop */}
      <section className="relative md:hidden bg-green-600/30 max-[321px]:h-[250px] h-[291px] overflow-y-visible overflow-x-clip">
        <div className="absolute inset-0">
          <Image
            src="/images/banner/mobile/bg-mobile.png"
            alt="Banner background"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* TEXT */}
        <div className="absolute left-[20px] top-[32px] z-20 max-w-[calc(100%-40px)]">
          {/* Tiêu đề */}
          <div className="flex flex-col gap-[4px]">
            <div className="flex items-end gap-[6px]">
              <h2 className="max-[321px]:text-[14px] text-[18px] font-bold text-[#3C3C3C] text-right leading-[1.45] whitespace-nowrap">
                千葉の
              </h2>
              <h1 className="max-[321px]:text-[22px] text-[32px] font-black text-[#134374] text-right leading-[1.2] whitespace-nowrap">
                不用品回収
              </h1>
            </div>
            <div className="flex items-end gap-[6px]">
              <h1 className="max-[321px]:text-[22px] text-[32px] font-black text-[#134374] text-right leading-[1.2] whitespace-nowrap">
                粗大ゴミ処分
              </h1>
              <h2 className="max-[321px]:text-[14px] text-[18px] font-bold text-[#3C3C3C] text-left leading-[1.45] whitespace-nowrap">
                なら
              </h2>
            </div>
          </div>

          {/* Sub heading */}
          <div className="flex items-end gap-[6px] mt-[6px]">
            <h1 className="max-[321px]:text-[22px] text-[28px] font-black text-[#02662A] leading-[1.45] whitespace-nowrap">
              エコ・グローバル
            </h1>
            <h2 className="max-[321px]:text-[14px] text-[18px] font-bold text-[#3C3C3C] leading-[1.45] whitespace-nowrap">
              におまかせ！
            </h2>
          </div>

          {/* Service info */}
          <div className="flex items-center gap-[8px] mt-[6px]">
            <span className="max-[321px]:text-[12px] text-[16px] font-bold text-[#222222]">
              相談
            </span>
            <div className="w-0 h-[24px] border-l-[2px] border-[#02662A]" />
            <span className="max-[321px]:text-[12px] text-[16px] font-bold text-[#222222]">
              お見積り
            </span>
            <div className="w-0 h-[24px] border-l-[2px] border-[#02662A]" />
            <span className="max-[321px]:text-[12px] text-[16px] font-bold text-[#222222]">
              出張費
            </span>
          </div>
        </div>

        <div className="absolute left-1/2 bottom-0 max-[321px]:bottom-[-10px] max-[321px]:left-[175px] max-[321px]:translate-x-[10px] -translate-x-1/2 translate-y-[14px] max-[380px]:pr-[95px] pr-[120px] z-40 flex gap-2 pointer-events-none">
          {/* Medal 1 */}
          <div className="relative w-[79px] h-[74px]">
            <MedalsSection text="最安値に挑戦" />
          </div>
          {/* Medal 2 */}
          <div className="relative w-[79px] h-[74px]">
            <MedalsSection text="無料見積もり" />
          </div>
          {/* Medal 3 */}
          <div className="relative w-[79px] h-[74px]">
            <MedalsSection text="迅速丁寧" />
          </div>
        </div>

        <div className="absolute bottom-[-65px] max-[321px]:bottom-[-60px] max-[321px]:-right-2 right-0 translate-x-[clamp(12px,5vw,28px)] z-30 pointer-events-none">
          <div className="relative w-[clamp(120px,38vw,200px)] h-[clamp(150px,48vw,220px)]">
            <Image
              src="/images/macos/macos_3.png"
              alt="Shiba character"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>
    </>
  );
}
