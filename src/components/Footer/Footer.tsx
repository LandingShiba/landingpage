import React from "react";
import Image from "next/image";
import Link from "next/link";

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <footer className={`w-full bg-[#303030] py-16 ${className || ""}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-16 lg:gap-32">
          {/* Left Column - Company Information */}
          <div className="flex flex-col gap-10">
            {/* Logo and Company Name */}
            <div className="flex flex-col gap-4">
              <h2 className="text-white font-bold text-4xl leading-tight font-montserrat text-center lg:text-left">
                不用品回収エコグローバル
              </h2>
              <div className="flex justify-center lg:justify-start">
                <div className="w-[351px] h-[135px]">
                  <Image
                    src="/images/footer/logo_ngang.png"
                    alt="Logo"
                    width={351}
                    height={135}
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="flex flex-col gap-5">
              {/* Address */}
              <div className="flex items-center gap-3">
                <div className="w-[30px] h-[30px] flex-shrink-0">
                  <Image
                    src="/images/footer/location-icon.svg"
                    alt="Location"
                    width={22}
                    height={30}
                    className="w-auto h-full"
                  />
                </div>
                <span className="text-white font-medium text-xl leading-tight">
                  〒271-0062　千葉県松戸市栄町6丁目473番地の12号
                </span>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="w-[30px] h-[30px] flex-shrink-0">
                  <Image
                    src="/images/footer/phone-icon.svg"
                    alt="Phone"
                    width={30}
                    height={30}
                    className="w-full h-full"
                  />
                </div>
                <span className="text-white font-medium text-xl leading-tight">
                  0477-234-143
                </span>
              </div>
            </div>
          </div>

          {/* Vertical Divider */}
          <div className="hidden lg:block w-[1px] h-[293px] bg-white"></div>

          {/* Right Column - Links */}
          <div className="flex gap-12">
            <Link
              href="/privacy"
              className="text-white hover:text-gray-200 text-xl transition-colors"
            >
              プライバシーポリシー
            </Link>
            <Link
              href="/contact"
              className="text-white hover:text-gray-200 text-xl transition-colors"
            >
              お問い合わせ
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 text-center">
          <p className="text-white text-xl font-medium">
            Copyright © 不用品回収エコグローバル All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
