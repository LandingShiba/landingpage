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
      <section className="md:hidden relative bg-green-600/30 h-[291px]">
        {/* Background images */}
        <div className="absolute inset-0">
          <Image
            src="/images/banner/mobile/bg-mobile.png"
            alt="Banner background"
            fill
            className="object-cover opacity-[0.12]"
            priority
          />
        </div>

        {/* Main text content */}
        <div className="absolute left-[57px] top-[32px] z-10">
          <div className="flex flex-col gap-[4px]">
            <div className="flex items-end gap-[6px]">
              <h2 className="text-[20px] font-bold text-[#3C3C3C] text-right leading-[1.45]">
                千葉の
              </h2>
              <h1 className="text-[36px] font-black text-[#134374] text-right leading-[1.2]">
                不用品回収
              </h1>
            </div>
            <div className="flex items-end gap-[6px]">
              <h1 className="text-[36px] font-black text-[#134374] text-right leading-[1.2]">
                粗大ゴミ処分
              </h1>
              <h2 className="text-[20px] font-bold text-[#3C3C3C] text-left leading-[1.45]">
                なら
              </h2>
            </div>
          </div>

          <div className="flex items-end gap-[6px] mt-[6px]">
            <h1 className="text-[30px] font-black text-[#02662A] leading-[1.45]">
              アース千葉
            </h1>
            <h2 className="text-[20px] font-bold text-[#3C3C3C] leading-[1.45]">
              におまかせ！
            </h2>
          </div>

          {/* Service info */}
          <div className="flex items-center gap-[12px] mt-[6px]">
            <span className="text-[18px] font-bold text-[#222222]">相談</span>
            <div className="w-0 h-[30px] border-l-[2px] border-[#02662A]"></div>
            <span className="text-[18px] font-bold text-[#222222]">
              お見積り
            </span>
            <div className="w-0 h-[30px] border-l-[2px] border-[#02662A]"></div>
            <span className="text-[18px] font-bold text-[#222222]">出張費</span>
          </div>
        </div>

        {/* Character image */}
        <div className="absolute top-[150px] w-full flex justify-end pr-0">
          <div
            style={{ width: "200px", height: "200px", position: "relative" }}
            className="mr-0"
          >
            <Image
              src="/images/macos/macos_3.png"
              alt="Shiba character"
              fill
              style={{ objectFit: "contain" }}
              priority
            />
          </div>
        </div>

        {/* Medals */}
        <div className="absolute left-[15px] bottom-[50px] z-20 flex flex-row gap-2">
          <MedalsSection text="最安値に挑戦" />
          <MedalsSection text="無料見積もり" />
          <MedalsSection text={`迅速\n丁寧`} />
        </div>
      </section>
    </>
  );
}
