import { useContact } from "@/hooks/useTranslations";
import Image from "next/image";

export default function ContactInfo() {
  const contactT = useContact();
  return (
    <div className="relative shrink-0">
      <div className="box-border flex flex-row gap-3 items-center justify-start p-0 relative">
        <div className="pl-7 pr-2.5 py-1.5 bg-[#E60012] rounded-tl-[34px] rounded-bl-[34px] inline-flex flex-col justify-start items-start gap-0.5 overflow-hidden">
          <div className="self-stretch justify-start text-white text-base font-bold font-['Roboto'] leading-tight">
            {contactT("phone")}
          </div>
          <div className="self-stretch inline-flex justify-between items-center">
            <div className="w-4 justify-start text-white text-sm font-bold font-['Roboto'] leading-none">
              最大
            </div>
            <div className="justify-start flex items-baseline">
              <span className="text-[#FFFF00] text-[38px] font-bold font-['Roboto_Condensed'] leading-none">
                50%
              </span>
              <span className="text-[#FFFF00] text-[15px] font-bold font-['Roboto_Condensed'] ml-0.5 leading-none">
                割引
              </span>
            </div>
          </div>
        </div>

        <div className="relative shrink-0">
          <div className="box-border flex flex-col gap-0.5 items-start justify-start p-0 relative">
            <div className="relative shrink-0 w-[297px]">
              <div className="box-border flex flex-row items-center justify-between p-0 relative w-full">
                <div className="relative shrink-0 w-[42px]">
                  <div className="box-border flex flex-col gap-0.5 items-center justify-start p-0 relative w-[42px]">
                    <div className="h-[26px] relative shrink-0 w-[42px] flex items-center justify-center">
                      <Image
                        alt="hotline"
                        src="/hotline.svg"
                        width={42}
                        height={26}
                        className="block max-w-none"
                      />
                    </div>
                    <div
                      className="font-['Roboto'] font-bold min-w-full relative shrink-0 text-[#00A83C] text-[6px] text-center"
                      style={{
                        width: "min-content",
                      }}
                    >
                      フリーダイヤル
                    </div>
                  </div>
                </div>
                <div className="font-['Roboto'] font-bold leading-none relative shrink-0 text-black text-[37px] text-left text-nowrap">
                  0120-526-843
                </div>
              </div>
            </div>
            <div className="font-['Roboto'] font-bold leading-tight relative shrink-0 text-[#222222] text-[13px] text-left text-nowrap mt-0.5">
              ご相談お見積もり無料（24時間365日対応付中)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
