import React from "react";
import ServiceCard from "./ServiceCard";

const ServiceCardSection: React.FC = () => {
  const services = [
    {
      title: "SSパック",
      subtitle: "ちょっとしたお部屋の整理に最適",
      vehicleType: "カゴ車",
      price: "10,000円",
      discountPrice: "5,500円～",
    },
    {
      title: "Sパック",
      subtitle: "一人暮らしの引越しに最適",
      vehicleType: "軽トラック",
      price: "15,000円",
      discountPrice: "8,800円～",
    },
    {
      title: "Mパック",
      subtitle: "小家族の引越しに最適",
      vehicleType: "2トントラック",
      price: "25,000円",
      discountPrice: "15,000円～",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4 text-center">サービスの種類</h2>
        <p className="text-xl text-gray-600 mb-12 text-center">
          お客様のニーズに合わせた多様なサービスをご用意しております
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:w-[1100px] mx-auto md:gap-8">
          {services.map((service, index) => (
            <div key={index} className="flex justify-center">
              <ServiceCard
                title={service.title}
                subtitle={service.subtitle}
                vehicleType={service.vehicleType}
                price={service.price}
                discountPrice={service.discountPrice}
                className="w-full max-w-[180px] md:max-w-[420px] h-[300px] md:h-[648px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCardSection;
