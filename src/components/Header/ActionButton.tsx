import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ActionButtonProps {
  type: "mail" | "line";
}

export default function ActionButton({ type }: ActionButtonProps) {
  const isMail = type === "mail";
  const bgColor = isMail ? "bg-[#f2751c]" : "bg-[#00a842]";
  const shadowColor = isMail ? "bg-[#793c0e]" : "bg-[#006e27]";
  const textColor = isMail ? "text-[#f2751c]" : "text-[#00a842]";
  const icon = isMail ? (
    <div className="overflow-clip relative shrink-0 size-[17px] md:size-[17px] lg:size-[27px] xl:size-[33.88px]">
      <div className="absolute bottom-[13.164%] contents left-0 right-0 top-[33.943%]">
        <div className="absolute bottom-[13.164%] left-0 right-0 top-[33.943%]">
          <Image
            alt="mail icon group"
            src="/mail-icon-group.svg"
            width={34}
            height={15}
            className="block max-w-none size-full"
          />
        </div>
      </div>
      <div className="absolute bottom-[45.041%] contents left-[0.472%] right-[0.472%] top-[13.164%]">
        <div className="absolute bottom-[45.041%] left-[0.472%] right-[0.472%] top-[13.164%]">
          <Image
            alt="mail icon group 1"
            src="/mail-icon-group-1.svg"
            width={34}
            height={15}
            className="block max-w-none size-full"
          />
        </div>
      </div>
    </div>
  ) : (
    <div className="relative shrink-0 size-[20px] md:size-[20px] lg:size-[32px] xl:size-10">
      <Image
        alt="line icon"
        src="/line-icon.svg"
        width={40}
        height={40}
        className="block max-w-none size-full"
      />
    </div>
  );
  const text = isMail ? "メールでお問い合わせ" : "LINEでお問い合わせ";

  return (
    <div className="h-[37px] md:h-[37px] lg:h-[59px] xl:h-[74px] relative shrink-0 w-[100px] md:w-[100px] lg:w-[160px] xl:w-[200px]">
      <div className="absolute bg-neutral-200 inset-0 rounded-[5px] md:rounded-[5px] lg:rounded-[8px] xl:rounded-[10px]" />
      <div
        className={`absolute bottom-[3px] md:bottom-[3px] lg:bottom-[5px] xl:bottom-1.5 left-0 right-0 rounded-[5px] md:rounded-[5px] lg:rounded-[8px] xl:rounded-[10px] top-0 ${shadowColor}`}
      />
      <div
        className={`absolute bottom-[6px] md:bottom-[6px] lg:bottom-[10px] xl:bottom-3 left-0 overflow-clip right-0 rounded-[5px] md:rounded-[5px] lg:rounded-[8px] xl:rounded-[10px] top-0 ${bgColor}`}
      >
        <div
          className="absolute top-[4px] md:top-[4px] lg:top-[6px] xl:top-2 translate-x-[-50%]"
          style={{ left: "calc(50% + 0.5px)" }}
        >
          <Link 
            href={isMail ? '/contact' : 'https://line.me/R/ti/p/0477234143'}
            target={isMail ? undefined : "_blank"}
            rel={isMail ? undefined : "noopener noreferrer"}
          >
            <div className="box-border content-stretch flex flex-row gap-[7px] md:gap-[7px] lg:gap-[11px] xl:gap-3.5 items-center justify-start p-0 relative">
              {icon}
              <div className="relative shrink-0 w-[67px] md:w-[67px] lg:w-[108px] xl:w-[135px]">
                <div className="box-border content-stretch flex flex-col gap-[3px] md:gap-[3px] lg:gap-[5px] xl:gap-1.5 items-start justify-start p-0 relative w-[67px] md:w-[67px] lg:w-[108px] xl:w-[135px]">
                  <div className="bg-[#ffffff] relative rounded-[2px] md:rounded-[2px] lg:rounded-[3px] xl:rounded-md shrink-0 w-full">
                    <div className="flex flex-row items-center justify-center relative size-full">
                      <div className="box-border content-stretch flex flex-row gap-[5px] md:gap-[5px] lg:gap-[8px] xl:gap-2.5 items-center justify-center px-[3px] md:px-[3px] lg:px-[5px] xl:px-1.5 py-[2px] md:py-[2px] lg:py-[3px] xl:py-1 relative w-full">
                        <div
                          className={`font-['Inter:Bold',_sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[6px] md:text-[6px] lg:text-[10px] xl:text-[12px] text-left text-nowrap ${textColor}`}
                        >
                          <p className="block leading-[normal] whitespace-pre">
                            24時間365日対応
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[7px] md:text-[7px] lg:text-[11px] xl:text-[14px] text-left text-nowrap">
                    <p className="block leading-[normal] whitespace-pre">
                      {text}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
