import React from "react";
import Image from "next/image";

interface ServiceCardProps {
  title: string;
  subtitle: string;
  vehicleType: string;
  price: string;
  discountPrice?: string;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  subtitle,
  vehicleType,
  price,
  discountPrice,
  className = "",
}) => {
  return (
    <div
      className={`relative w-[420px] h-[648px] rounded-[20px] bg-white shadow-md ${className}`}
    >
      {/* Main image and cart image */}
      <div className="relative w-[370px] mx-auto pt-[26px]">
        <div className="relative w-full h-[265px] rounded-t-[18px] overflow-hidden">
          <Image
            src="/images/service-card/service-card-bg.png"
            alt={title}
            fill
            className="object-cover"
          />
        </div>

        {/* Cart image overlay */}
        <div className="absolute right-[25px] top-[190px]">
          <Image
            src="/images/service-card/service-cart.png"
            alt="Service cart"
            width={110}
            height={151}
          />
        </div>

        {/* Vehicle type and price info */}
        <div className="mt-[50px] flex flex-col gap-5">
          {/* Vehicle type row */}
          <div className="flex items-center gap-5">
            <div className="bg-[#7BAD4F] px-5 py-2.5 rounded-lg">
              <span className="text-white font-semibold text-xl">対応車</span>
            </div>
            <span className="text-black font-semibold text-3xl">
              {vehicleType}
            </span>
          </div>

          {/* Price row */}
          <div className="flex items-center gap-5">
            <div className="relative w-[121px] h-[87px] bg-white">
              <Image
                src="/images/service-card/price-icon.svg"
                alt="Price icon"
                width={113}
                height={78}
                className="absolute top-[3px] left-[3px]"
              />
              <span className="absolute top-6 left-[30px] text-white font-semibold text-3xl">
                料金
              </span>
            </div>

            <div className="flex flex-col">
              {discountPrice && (
                <span className="text-black font-medium text-3xl line-through italic">
                  {price}
                </span>
              )}
              <span className="text-[#EA2227] font-bold text-4xl">
                {discountPrice || price}
              </span>
            </div>
          </div>

          {/* Button with background image */}
          <div className="mt-8 relative">
            <button className="w-full py-4 px-8 relative overflow-hidden rounded-[20px]">
              <Image
                src="/images/service-card/btn-bg.png"
                alt="Button background"
                fill
                className="object-cover"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom green section with title */}
      <div className="absolute bottom-0 left-0 w-full h-[118px] overflow-hidden rounded-b-[20px]">
        <Image
          src="/images/service-card/btn-bg.png"
          alt="Background"
          fill
          className="object-cover"
        />
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-[30px] gap-2.5">
          <h3 className="text-white font-semibold text-4xl text-center">
            {title}
          </h3>
          <p className="text-white font-semibold text-2xl text-center">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
