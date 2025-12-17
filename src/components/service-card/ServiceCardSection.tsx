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
    {
      title: "Lパック",
      subtitle: "家族（普通）の引越しに最適",
      vehicleType: "2t箱車(半)",
      price: "50,000円",
    },
    {
      title: "LLパック",
      subtitle: "家族（大量）の引越しに最適",
      vehicleType: "2t箱車",
      price: "100,000円",
    },
    {
      title: "その他",
      subtitle: "ゴミ屋敷一軒まるごとの整理など",
      vehicleType: "要相談",
      price: "要相談",
    }
  ];

  return (
    <section id="pricing" className="py-8 md:py-8 lg:py-12 xl:py-16 bg-gray-50 scroll-mt-[150px]">
      <div className="container mx-auto px-4 md:px-4 lg:px-6 xl:px-4">
        <h2 className="text-2xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-2 md:mb-2 lg:mb-3 xl:mb-4 text-center animate-fade-in-up">サービスの種類</h2>
        <p className="text-[10px] md:text-[10px] lg:text-base xl:text-xl text-gray-600 mb-6 md:mb-6 lg:mb-9 xl:mb-12 text-center animate-fade-in-up delay-200">
          お客様のニーズに合わせた多様なサービスをご用意しております
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-4 lg:gap-6 xl:gap-8 md:w-[550px] lg:w-[880px] xl:w-[1100px] mx-auto">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="flex justify-center animate-fade-in-up"
              style={{ animationDelay: `${0.3 + index * 0.2}s` }}
            >
              <ServiceCard
                title={service.title}
                subtitle={service.subtitle}
                vehicleType={service.vehicleType}
                price={service.price}
                discountPrice={service.discountPrice}
                className="w-full max-w-[180px] md:max-w-[210px] lg:max-w-[336px] xl:max-w-[420px] h-[300px] md:h-[250px] lg:h-[518px] xl:h-[648px] hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCardSection;
