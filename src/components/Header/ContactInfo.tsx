import { useContact } from "@/hooks/useTranslations";
import Image from "next/image";

export default function ContactInfo() {
  const contactT = useContact();

  return (
    <>
      {/* Desktop version - hidden on mobile */}
      <div className="hidden md:block relative shrink-0">
        <div className="box-border flex flex-row gap-2 md:gap-2 lg:gap-2.5 xl:gap-3 items-center justify-start p-0 relative">
          <div className="pl-[14px] md:pl-[14px] lg:pl-[22px] xl:pl-7 pr-[5px] md:pr-[5px] lg:pr-[8px] xl:pr-2.5 py-[3px] md:py-[3px] lg:py-[5px] xl:py-1.5 bg-[#E60012] rounded-tl-[17px] md:rounded-tl-[17px] lg:rounded-tl-[27px] xl:rounded-tl-[34px] rounded-bl-[17px] md:rounded-bl-[17px] lg:rounded-bl-[27px] xl:rounded-bl-[34px] inline-flex flex-col justify-start items-start gap-[1px] md:gap-[1px] lg:gap-[1.5px] xl:gap-0.5 overflow-hidden">
            <div className="self-stretch justify-start text-white text-[8px] md:text-[8px] lg:text-[13px] xl:text-base font-bold font-['Roboto'] leading-tight">
              {contactT("phone")}
            </div>
            <div className="self-stretch inline-flex justify-between items-center">
              <div className="w-[8px] md:w-[8px] lg:w-[13px] xl:w-4 justify-start text-white text-[7px] md:text-[7px] lg:text-[11px] xl:text-sm font-bold font-['Roboto'] leading-none">
                最大
              </div>
              <div className="justify-start flex items-baseline">
                <span className="text-[#FFFF00] text-[19px] md:text-[19px] lg:text-[30px] xl:text-[38px] font-bold font-['Roboto_Condensed'] leading-none">
                  50%
                </span>
                <span className="text-[#FFFF00] text-[7.5px] md:text-[7.5px] lg:text-[12px] xl:text-[15px] font-bold font-['Roboto_Condensed'] ml-0.5 leading-none">
                  割引
                </span>
              </div>
            </div>
          </div>

          <div className="relative shrink-0">
            <div className="box-border flex flex-col gap-[1px] md:gap-[1px] lg:gap-[1.5px] xl:gap-0.5 items-start justify-start p-0 relative">
              <div className="relative shrink-0 w-[148px] md:w-[148px] lg:w-[237px] xl:w-[297px]">
                <div className="box-border flex flex-row items-center justify-between p-0 relative w-full">
                  <div className="relative shrink-0 w-[21px] md:w-[21px] lg:w-[33px] xl:w-[42px]">
                    <div className="box-border flex flex-col gap-[1px] md:gap-[1px] lg:gap-[1.5px] xl:gap-0.5 items-center justify-start p-0 relative w-[21px] md:w-[21px] lg:w-[33px] xl:w-[42px]">
                      <div className="h-[13px] md:h-[13px] lg:h-[21px] xl:h-[26px] relative shrink-0 w-[21px] md:w-[21px] lg:w-[33px] xl:w-[42px] flex items-center justify-center">
                        <Image
                          alt="hotline"
                          src="/hotline.svg"
                          width={42}
                          height={26}
                          className="block max-w-none"
                        />
                      </div>
                      <div
                        className="font-['Roboto'] font-bold min-w-full relative shrink-0 text-[#00A83C] text-[3px] md:text-[3px] lg:text-[5px] xl:text-[6px] text-center"
                        style={{
                          width: "min-content",
                        }}
                      >
                        フリーダイヤル
                      </div>
                    </div>
                  </div>
                  <div className="font-['Roboto'] font-bold leading-none relative shrink-0 text-black text-[18.5px] md:text-[18.5px] lg:text-[29.5px] xl:text-[37px] text-left text-nowrap">
                    0477-234-143
                  </div>
                </div>
              </div>
              <div className="font-['Roboto'] font-bold leading-tight relative shrink-0 text-[#222222] text-[6.5px] md:text-[6.5px] lg:text-[10.5px] xl:text-[13px] text-left text-nowrap mt-[1px] md:mt-[1px] lg:mt-[1.5px] xl:mt-0.5">
                ご相談お見積もり無料（24時間365日対応付中)
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile version - hidden on desktop */}
      <div className="md:hidden flex items-center gap-1 min-[420px]:gap-1 sm:gap-2">
        {/* Discount tag - compact on small screens */}
        <div className="bg-[#FF000C] rounded-l-[20px] max-[420px]:rounded-l-[14px] py-[5px] max-[420px]:py-[2.5px] sm:py-1 pl-[20px] max-[420px]:pl-[12px] sm:pl-3 pr-[4px] max-[420px]:pr-[2.5px] sm:pr-1 flex flex-col">
          <p className="text-white text-[5px] min-[420px]:text-[6.6px] sm:text-xs font-bold font-['Roboto'] leading-[1.17]">
            電話問合せ限定!
          </p>
          <div className="flex justify-between items-center">
            <p className="text-white text-[4.5px] min-[420px]:text-[5.8px] sm:text-[10px] font-bold font-['Roboto'] leading-[1.17] w-[5px] min-[420px]:w-[7px] sm:w-auto sm:mr-1">
              最大
            </p>
            <div className="flex items-baseline">
              <span className="text-[#FFF236] text-[11px] min-[420px]:text-[14.9px] sm:text-xl font-bold font-['Roboto'] leading-[1.17]">
                50%
              </span>
              <span className="text-[#FFF236] text-[11px] min-[420px]:text-[14.9px] sm:text-xl font-bold font-['Roboto'] leading-[1.17]">
                割引
              </span>
            </div>
          </div>
        </div>

        {/* Phone section - more compact for small screens */}
        <div className="flex flex-col gap-[1px] min-[420px]:gap-[2.5px] sm:gap-1">
          <div className="flex items-center gap-0.5 min-[420px]:gap-1 sm:gap-2">
            <div className="flex flex-col items-center">
              <div className="bg-[#00A842] w-[18px] h-[15px] max-[420px]:w-[17.38px] max-[420px]:h-[10.76px] sm:w-6 sm:h-4 relative">
                <Image
                  src="/images/header/hotline-icon-mobile.svg"
                  alt="Phone"
                  fill
                  className="absolute bottom-[1.5px] max-[420px]:bottom-[2.07px] sm:bottom-[0.1rem] w-full h-auto"
                />
              </div>
              <p className="text-[#00A842] text-[2px] min-[420px]:text-[2.48px] sm:text-[7px] font-bold font-['Roboto'] leading-[1.17]">
                フリーダイヤル
              </p>
            </div>
            <p className="text-black text-[15px] max-[420px]:text-[13.3px] sm:text-lg font-bold font-['Roboto'] leading-[1.17]">
              0477-234-143
            </p>
          </div>
          <p className="text-[#222222] text-[5.79px] min-[420px]:text-[5.8px] sm:text-xs font-bold font-['Roboto'] leading-[1.17]">
            ご相談お見積もり無料（24時間365日対応付中)
          </p>
        </div>
      </div>
    </>
  );
}
