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
    <div className={`relative rounded-[10px] md:rounded-[10px] lg:rounded-[16px] xl:rounded-[20px] bg-white shadow-md ${className}`}>
      {/* Main image and cart image */}
      <div className="relative w-[90%] mx-auto pt-[7.5px] md:pt-[7.5px] lg:pt-[20px] xl:pt-[26px]">
        <div className="relative w-full h-[105px] md:h-[132px] lg:h-[212px] xl:h-[265px] rounded-t-[9px] md:rounded-t-[9px] lg:rounded-t-[14px] xl:rounded-t-[18px] overflow-hidden">
          <Image
            src="/images/service-card/service-card-bg.png"
            alt={title}
            fill
            className="object-cover"
          />
        </div>

        {/* Cart image overlay */}
        {/* <div className="absolute right-[10px] md:right-[25px] top-[80px] md:top-[190px]">
          <Image
            src="/images/service-card/service-cart.png"
            alt="Service cart"
            width={50}
            height={70}
            className="w-[50px] h-auto md:w-[110px] md:h-[151px]"
          />
        </div> */}

        {/* Vehicle type and price info */}
        <div className="mt-[15px] md:mt-[15px] lg:mt-[40px] xl:mt-[50px] flex flex-col gap-1 md:gap-1 lg:gap-4 xl:gap-5">
          {/* Vehicle type row */}
          <div className="items-center gap-1 md:gap-1 lg:gap-4 xl:gap-5 justify-center flex">
            <div className="bg-[#7BAD4F] px-1 md:px-1 lg:px-4 xl:px-5 py-0.5 md:py-0.5 lg:py-2 xl:py-2.5 rounded-lg hidden">
              <span className="text-white font-semibold text-[6px] md:text-[6px] lg:text-base xl:text-xl">
                対応車
              </span>
            </div>
            <span className="text-black font-semibold text-[7px] md:text-[9px] lg:text-2xl xl:text-3xl">
              {vehicleType}
            </span>
          </div>

          {/* Price row */}
          <div className="flex items-center gap-1 md:gap-1 lg:gap-4 xl:gap-5 justify-center">
            <div className="relative w-[27.5px] h-[21.5px] md:w-[27.5px] md:h-[21.5px] lg:w-[97px] lg:h-[70px] xl:w-[121px] xl:h-[87px] bg-white">
              <Image
                src="/images/service-card/price-icon.svg"
                alt="Price icon"
                width={113}
                height={78}
                className="absolute top-[1.5px] md:top-[1.5px] lg:top-[2.4px] xl:top-[3px] left-[1.5px] md:left-[1.5px] lg:left-[2.4px] xl:left-[3px] w-[27.5px] h-auto md:w-[27.5px] lg:w-[90px] xl:w-[113px]"
              />
              <span className="absolute top-[6px] md:top-[6px] lg:top-[19px] xl:top-6 left-[7.5px] md:left-[7.5px] lg:left-[24px] xl:left-[30px] text-white font-semibold text-[7px] md:text-[7px] lg:text-2xl xl:text-3xl">
                料金
              </span>
            </div>

            <div className="flex flex-col">
              {discountPrice && (
                <span className="text-black font-medium text-[7px] md:text-[7px] lg:text-xl xl:text-2xl line-through italic">
                  {price}
                </span>
              )}
              <span className="text-[#EA2227] font-bold text-[8px] md:text-[9px] lg:text-2xl xl:text-3xl">
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
      <div className="absolute bottom-0 left-0 w-full h-[35px] md:h-[35px] lg:h-[94px] xl:h-[118px] overflow-hidden rounded-b-[10px] md:rounded-b-[10px] lg:rounded-b-[16px] xl:rounded-b-[20px]">
        <Image
          src="/images/service-card/btn-bg.png"
          alt="Background"
          fill
          className="object-cover"
        />
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-[5px] md:px-[5px] lg:px-[24px] xl:px-[30px] gap-[1px] md:gap-[1px] lg:gap-2 xl:gap-2.5">
          <h3 className="text-white font-semibold text-[8px] md:text-[8px] lg:text-2xl xl:text-3xl text-center">
            {title}
          </h3>
          <p className="text-white font-semibold text-[5px] md:text-[5px] lg:text-base xl:text-lg text-center">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
