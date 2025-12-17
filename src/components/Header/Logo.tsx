import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href={'/'}>
      <div className="box-border content-stretch flex flex-row gap-[13.14px] items-end justify-start p-0 relative">
        <div className="h-[60.731px] relative shrink-0 w-[57.314px]">
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
        <div className="h-[60.27px] relative shrink-0 w-[239.545px]">

          <div className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[0] left-0 not-italic text-[#00adf2] text-[19.9621px] text-left text-nowrap top-[36.085px]">
            <p className="block leading-[normal] whitespace-pre">
              エコ・グローバル株式会社
            </p>
          </div>
          <div className="absolute h-[27.256px] left-[3.455px] top-0 w-[234.171px]">
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
