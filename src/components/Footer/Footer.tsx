import React from "react";
import Image from "next/image";

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <div
      className={`relative w-full bg-[#303030] py-[115px] px-[69px] ${
        className || ""
      }`}
      style={{ minHeight: "450px" }}
    >
      <div className="flex flex-col gap-10 max-w-[464px]">
        {/* Company Information */}
        <div className="flex flex-col gap-[15px] max-w-[360px]">
          <h2 className="text-white font-bold text-[40px] leading-[1.22] font-montserrat">
            不用品回収ネコの手
          </h2>
          <p className="text-white font-normal text-[30px] leading-[1.22] font-montserrat">
            エスポワール合同会社
          </p>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col gap-5 w-full">
          {/* Address */}
          <div className="flex items-center gap-3">
            <div className="w-[30px] h-[30px] flex-shrink-0">
              <Image
                src="/images/location-icon.svg"
                alt="Location"
                width={30}
                height={30}
                className="w-full h-full"
              />
            </div>
            <span className="text-white font-medium text-[20px] leading-[1.22] font-montserrat">
              〒285-0804 千葉県佐倉市馬渡１１６６番地５
            </span>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-4">
            <div className="w-[30px] h-[30px] flex-shrink-0">
              <Image
                src="/images/phone-icon.svg"
                alt="Phone"
                width={30}
                height={30}
                className="w-full h-full"
              />
            </div>
            <span className="text-white font-medium text-[20px] leading-[1.22] font-montserrat">
              0120-526-843
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
