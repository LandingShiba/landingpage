import React from "react";
import Image from "next/image";

interface MedalsSectionProps {
  text?: string;
}

export default function MedalsSection({
  text = "最安値に挑戦",
}: MedalsSectionProps) {
  return (
    <>
      {/* Desktop Medals - Hidden on mobile */}
      <div className="hidden md:block relative">
        <div className="relative">
          <Image
            src="/images/medels.svg"
            alt="Medals"
            width={90}
            height={90}
            priority
            style={{ position: "relative", zIndex: 30 }}
            className="w-[90px] h-[90px] md:w-[90px] md:h-[90px] lg:w-[144px] lg:h-[144px] xl:w-[180px] xl:h-[180px]"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 w-[80%]">
            <p className="text-white font-black text-[11px] md:text-[11px] lg:text-[17.6px] xl:text-[22px] leading-tight text-center font-['Montserrat'] whitespace-pre-line break-words">
              {text}
            </p>
          </div>
        </div>
      </div>

      {/* Mobile Medals - Hidden on desktop */}
      <div className="block md:hidden">
        <div className="relative">
          <div className="relative">
            <Image
              src="/images/medels.svg"
              alt="Medals"
              width={80}
              height={74}
              priority
              className="relative z-30"
            />
            <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 w-[60%]">
              <p className="text-white font-black text-[11px] leading-tight text-center font-['Montserrat'] whitespace-pre-line break-words">
                {text}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
