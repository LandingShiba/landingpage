import React from "react";
import Image from "next/image";
import { MedalsSection } from "../Medals";

export default function HeroSection() {
  return (
    <>
      {/* Desktop Hero - Hidden on mobile */}
      <section className="hidden md:block relative bg-green-600/30 h-[780px]">
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
              エコグローバル
            </h1>
            <h2 className="text-[60px] font-bold text-[#3C3C3C] leading-tight">
              におまかせ！
            </h2>
          </div>

          {/* Service info */}
          <div className="flex items-center gap-8 mt-8">
            <span className="text-[50px] font-bold text-[#222222]">相談</span>
            <div className="w-0 h-[80px] border-l-[6px] border-[#008144]"></div>
            <span className="text-[50px] font-bold text-[#222222]">
              お見積り
            </span>
            <div className="w-0 h-[80px] border-l-[6px] border-[#008144]"></div>
            <span className="text-[50px] font-bold text-[#222222]">出張費</span>
          </div>
        </div>

        {/* Character image */}
        <div className="absolute top-[235px] w-full flex justify-end">
          <div
            style={{ width: "446px", height: "600px", position: "relative" }}
            className="mr-0"
          >
            <Image
              src="/images/banner/banner-character.png"
              alt="Shiba character"
              fill
              style={{ objectFit: "contain" }}
              priority
            />
          </div>
        </div>

        {/* Medals */}
        <div className="absolute left-[79px] bottom-[-30px] z-20 flex flex-row gap-12">
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
        <div className="absolute left-[57px] top-[32px] z-20">
          {/* Tiêu đề */}
          <div className="flex flex-col gap-[4px]">
            <div className="flex items-end gap-[6px]">
              <h2 className="max-[321px]:text-[16px] text-[20px] font-bold text-[#3C3C3C] text-right leading-[1.45]">
                千葉の
              </h2>
              <h1 className="max-[321px]:text-[25px] text-[36px] font-black text-[#134374] text-right leading-[1.2]">
                不用品回収
              </h1>
            </div>
            <div className="flex items-end gap-[6px]">
              <h1 className="max-[321px]:text-[25px] text-[36px] font-black text-[#134374] text-right leading-[1.2]">
                粗大ゴミ処分
              </h1>
              <h2 className="max-[321px]:text-[16px] text-[20px] font-bold text-[#3C3C3C] text-left leading-[1.45]">
                なら
              </h2>
            </div>
          </div>

          {/* Sub heading */}
          <div className="flex items-end gap-[6px] mt-[6px]">
            <h1 className="max-[321px]:text-[25px] text-[30px] font-black text-[#02662A] leading-[1.45]">
              エコグローバル
            </h1>
            <h2 className="max-[321px]:text-[16px] text-[20px] font-bold text-[#3C3C3C] leading-[1.45]">
              におまかせ！
            </h2>
          </div>

          {/* Service info */}
          <div className="flex items-center gap-[12px] mt-[6px]">
            <span className="max-[321px]:text-[14px] text-[18px] font-bold text-[#222222]">
              相談
            </span>
            <div className="w-0 h-[30px] border-l-[2px] border-[#02662A]" />
            <span className="max-[321px]:text-[14px] text-[18px] font-bold text-[#222222]">
              お見積り
            </span>
            <div className="w-0 h-[30px] border-l-[2px] border-[#02662A]" />
            <span className="max-[321px]:text-[14px] text-[18px] font-bold text-[#222222]">
              出張費
            </span>
          </div>
        </div>

        <div className="absolute left-1/2 bottom-0 max-[321px]:bottom-[-10px] max-[321px]:left-[175px] max-[321px]:translate-x-[10px] -translate-x-1/2 translate-y-[14px] max-[380]:pr-[95px] pr-[120px] z-40 flex gap-2 pointer-events-none">
          {/* Medal 1 */}
          <div className="relative   w-[79px] h-[74px]">
            <MedalsSection text="最安値に挑戦" />
          </div>
          {/* Medal 2 */}
          <div className="relative w-[79px] h-[74px]">
            <MedalsSection text="最安値に挑戦" />
          </div>
          {/* Medal 3 */}
          <div className="relative w-[79px] h-[74px]">
            <MedalsSection text="最安値に挑戦" />
          </div>
        </div>

        {/* <div className="absolute -bottom-[65px] right-0 translate-x-[20%] z-30 pointer-events-none">
          <div className="relative w-[200px] h-[200px]">
            <Image
              src="/images/macos/macos_3.png"
              alt="Shiba character"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div> */}

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
