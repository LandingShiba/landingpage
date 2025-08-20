import React from "react";
import Image from "next/image";
// import { useTranslations } from "next-intl";

export default function BannerSection({ title = "" }: { title: string }) {
  // const t = useTranslations();
  const formatTitle = (title: string) => {
    if (title.includes("(/)")) {
      const parts = title.split("(/)");
      return (
        <>
          {/* Mobile/Tablet*/}
          <span className="lg:hidden">
            {parts.map((part, index) => (
              <div key={index}>{part.trim()}</div>
            ))}
          </span>

          {/* PC */}
          <span className="hidden lg:inline">{parts.join(" ")}</span>
        </>
      );
    }
    return title;
  };
  return (
    <section className="relative bg-transparent h-[144px] sm:h-[282px] lg:h-[300px] w-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#E9FFD6]" />
        <Image
          src="/images/banner/banner-bg.png"
          alt="Banner Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="flex justify-center items-center relative z-10 h-full">
        <div className="text-center">
          <h1 className="font-bold text-[20px] sm:text-[36px] lg:text-[40px]">
            {formatTitle(title)}
          </h1>
        </div>

        <div
          className="absolute top-[60px] left-4 sm:left-8 sm:top-[116px] lg:top-[128px] lg:left-40
                        w-21 h-21 size-22 sm:size-43 lg:size-[180px] z-20"
        >
          <Image
            src="/images/banner/banner-character-2.png"
            alt="Banner Character"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
