import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href={'/'}>
      <div className="box-border content-stretch flex flex-row gap-[6.5px] md:gap-[6.5px] lg:gap-[10px] xl:gap-[13.14px] items-end justify-start p-0 relative">
        <div className="h-[30px] md:h-[30px] lg:h-[48px] xl:h-[60.731px] relative shrink-0 w-[28px] md:w-[28px] lg:w-[45px] xl:w-[57.314px]">
          <div className="absolute bottom-[-1.679%] left-[-1.779%] right-[-1.779%] top-0">
            <Image
              alt="logo icon"
              src="/logo-icon.svg"
              width={60}
              height={60}
              className="block max-w-none size-full"
            />
          </div>
        </div>
        <div className="h-[30px] md:h-[30px] lg:h-[48px] xl:h-[60.27px] relative shrink-0 w-[120px] md:w-[120px] lg:w-[190px] xl:w-[239.545px]">

          <div className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[0] left-0 not-italic text-[#00adf2] text-[10px] md:text-[10px] lg:text-[16px] xl:text-[19.9621px] text-left text-nowrap top-[18px] md:top-[18px] lg:top-[29px] xl:top-[36.085px]">
            <p className="block leading-[normal] whitespace-pre">
              エコ・グローバル株式会社
            </p>
          </div>
          <div className="absolute h-[13.5px] md:h-[13.5px] lg:h-[22px] xl:h-[27.256px] left-[1.7px] md:left-[1.7px] lg:left-[2.7px] xl:left-[3.455px] top-0 w-[117px] md:w-[117px] lg:w-[187px] xl:w-[234.171px]">
            <Image
              alt="logo text"
              src="/logo-text.svg"
              width={234}
              height={27}
              className="block max-w-none size-full"
            />
          </div>
        </div>
      </div>
    </Link>
  );
}
