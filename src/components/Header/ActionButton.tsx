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
    <div className="overflow-clip relative shrink-0 size-[33.88px]">
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
    <div className="relative shrink-0 size-10">
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
    <div className="h-[74px] relative shrink-0 w-[200px]">
      <div className="absolute bg-neutral-200 inset-0 rounded-[10px]" />
      <div
        className={`absolute bottom-1.5 left-0 right-0 rounded-[10px] top-0 ${shadowColor}`}
      />
      <div
        className={`absolute bottom-3 left-0 overflow-clip right-0 rounded-[10px] top-0 ${bgColor}`}
      >
        <div
          className="absolute top-2 translate-x-[-50%]"
          style={{ left: "calc(50% + 0.5px)" }}
        >
          <Link 
            href={isMail ? '/contact' : 'https://line.me/R/ti/p/0477234143'}
            target={isMail ? undefined : "_blank"}
            rel={isMail ? undefined : "noopener noreferrer"}
          >
            <div className="box-border content-stretch flex flex-row gap-3.5 items-center justify-start p-0 relative">
              {icon}
              <div className="relative shrink-0 w-[135px]">
                <div className="box-border content-stretch flex flex-col gap-1.5 items-start justify-start p-0 relative w-[135px]">
                  <div className="bg-[#ffffff] relative rounded-md shrink-0 w-full">
                    <div className="flex flex-row items-center justify-center relative size-full">
                      <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-1.5 py-1 relative w-full">
                        <div
                          className={`font-['Inter:Bold',_sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[12px] text-left text-nowrap ${textColor}`}
                        >
                          <p className="block leading-[normal] whitespace-pre">
                            24時間365日対応
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap">
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
