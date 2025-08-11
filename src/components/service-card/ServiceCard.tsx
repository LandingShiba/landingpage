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
    <div className={`relative rounded-[20px] bg-white shadow-md ${className}`}>
      {/* Main image and cart image */}
      <div className="relative w-[90%] mx-auto pt-[15px] md:pt-[26px]">
        <div className="relative w-full h-[105px] md:h-[265px] rounded-t-[18px] overflow-hidden">
          <Image
            src="/images/service-card/service-card-bg.png"
            alt={title}
            fill
            className="object-cover"
          />
        </div>

        {/* Cart image overlay */}
        <div className="absolute right-[10px] md:right-[25px] top-[80px] md:top-[190px]">
          <Image
            src="/images/service-card/service-cart.png"
            alt="Service cart"
            width={50}
            height={70}
            className="w-[50px] h-auto md:w-[110px] md:h-[151px]"
          />
        </div>

        {/* Vehicle type and price info */}
        <div className="mt-[30px] md:mt-[50px] flex flex-col gap-2 md:gap-5">
          {/* Vehicle type row */}
          <div className="items-center gap-2 md:gap-5 justify-center flex">
            <div className="bg-[#7BAD4F] px-2 md:px-5 py-1 md:py-2.5 rounded-lg hidden">
              <span className="text-white font-semibold text-xs md:text-xl">
                対応車
              </span>
            </div>
            <span className="text-black font-semibold text-sm md:text-3xl">
              {vehicleType}
            </span>
          </div>

          {/* Price row */}
          <div className="flex items-center gap-2 md:gap-5 justify-center">
            <div className="relative w-[55px] h-[43px] md:w-[121px] md:h-[87px] bg-white">
              <Image
                src="/images/service-card/price-icon.svg"
                alt="Price icon"
                width={113}
                height={78}
                className="absolute top-[3px] left-[3px] w-[55px] h-auto md:w-[113px]"
              />
              <span className="absolute top-3 md:top-6 left-[15px] md:left-[30px] text-white font-semibold text-sm md:text-3xl">
                料金
              </span>
            </div>

            <div className="flex flex-col">
              {discountPrice && (
                <span className="text-black font-medium text-sm md:text-3xl line-through italic">
                  {price}
                </span>
              )}
              <span className="text-[#EA2227] font-bold text-base md:text-4xl">
                {discountPrice || price}
              </span>
            </div>
          </div>

          {/* Button with background image */}
          {/* <div className="mt-3 md:mt-8 relative">
            <button className="w-full py-2 md:py-4 px-4 md:px-8 relative overflow-hidden rounded-[10px] md:rounded-[20px]">
              <Image
                src="/images/service-card/btn-bg.png"
                alt="Button background"
                fill
                className="object-cover"
              />
            </button>
          </div> */}
        </div>
      </div>

      {/* Bottom green section with title */}
      <div className="absolute bottom-0 left-0 w-full h-[70px] md:h-[118px] overflow-hidden rounded-b-[20px]">
        <Image
          src="/images/service-card/btn-bg.png"
          alt="Background"
          fill
          className="object-cover"
        />
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-[10px] md:px-[30px] gap-0.5 md:gap-2.5">
          <h3 className="text-white font-semibold text-base md:text-4xl text-center">
            {title}
          </h3>
          <p className="text-white font-semibold text-[10px] md:text-2xl text-center">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
