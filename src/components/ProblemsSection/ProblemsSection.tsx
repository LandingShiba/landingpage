import Image from "next/image";
import React, { useState, useEffect } from "react";

interface ProblemCardProps {
  title: string;
  borderColor?: string;
  type?: "left" | "right"; // left: message on left, image on right; right: message on right, image on left
  imageSrc?: string;
  imageAlt?: string;
  textColor?: string;
  messageSrc?: string; // For message bubble image
  widthImage?: number;
  positionImage?: string;
  heightImage?: number;
}

const ProblemCard: React.FC<ProblemCardProps> = ({
  title,
  borderColor = "border-[#00A842]",
  type = "left",
  imageSrc,
  imageAlt,
  textColor = "text-black",
  messageSrc = "/images/problems/message.png",
  widthImage,
  positionImage,
  heightImage,
}) => {
  const isLeft = type === "left";

  // Card layout with message bubble and image
  return (
    <div
      className={`relative bg-white rounded-[11.28px] md:rounded-[17.75px] border-[2.5px] md:border-4 ${borderColor} h-[244px] md:h-[384px] w-full md:w-[568px] max-w-[568px] overflow-hidden`}
    >
      {/* Background decorative pattern with polka dots */}
      <div className="absolute inset-0 opacity-20">
        <Image
          src="/images/problems/backgroup_problem.png"
          alt="Polka dot pattern"
          width={1000}
          height={1000}
          className="object-cover"
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </div>

      {/* Message bubble */}
      <div
        className={`absolute ${
          isLeft
            ? "top-[4px] left-[4px] md:top-[4px] md:left-[4px]"
            : "top-[8px] right-[15px] md:top-[8px] md:right-[15px]"
        }`}
      >
        <Image
          src={messageSrc}
          alt="Message bubble"
          width={isLeft ? 475 : 277}
          height={261}
          sizes="(max-width: 768px) 225px, 475px"
          className="object-cover"
        />
      </div>

      {/* Text content positioned over the message bubble */}
      <div
        className={`absolute z-10 flex items-center justify-center ${
          isLeft
            ? "top-[71px] w-[178px] left-[33px] h-[80px] md:top-[112px] md:w-[280px] md:left-[52px] md:h-[128px]"
            : "top-[71px] h-[80px] w-[178px] right-[20px] md:top-[112px] md:h-[30px] md:w-[220px] md:right-[35px]"
        }`}
      >
        <p
          className={`${textColor} text-center font-montserrat font-bold leading-[1.219]`}
          style={{ fontSize: "clamp(16px, 3vw, 26px)" }}
        >
          {title}
        </p>
      </div>

      {/* Character/Appliance illustration */}
      <div
        className={`absolute z-20 ${
          isLeft
            ? positionImage ||
              "bottom-[10px] right-[-10px] md:bottom-[-5px] md:right-[-10px] h-[138px] md:h-[217px]"
            : positionImage ||
              "bottom-[50px] left-[-15px] md:bottom-[100px] md:left-[-30px] h-[125px] md:h-[250px]"
        }`}
      >
        <Image
          src={imageSrc || "/images/problems/young_woman.png"}
          alt={imageAlt || "Problem illustration"}
          width={widthImage || 327}
          height={heightImage || 217}
          sizes="(max-width: 768px) 208px, 327px"
          className="object-contain"
        />
      </div>
    </div>
  );
};

const ProblemsSection: React.FC = () => {
  const problems: ProblemCardProps[] = [
    // Example cards with left/right message bubbles
    {
      title:
        "引越しや大掃除で出た不用品が多く、どのように 処分していいかわからない",
      borderColor: "border-[#00A842]",
      type: "left",
      imageSrc: "/images/problems/young-woman-laptop.png",
      imageAlt: "Woman thinking about disposal",
      messageSrc: "/images/problems/message.png",
    },
    {
      title: "粗大ゴミを出す日が限られており、スケジュールが合わない",
      borderColor: "border-[#00ADF2]",
      type: "left",
      imageSrc: "/images/problems/confused-male-student.png",
      imageAlt: "Person with schedule conflict",
      widthImage: 267,
      positionImage: "right-[-40px]",
      messageSrc: "/images/problems/message.png",
    },
    {
      title: "処分したい家具や家電が大きくて自分では運び出せない",
      borderColor: "border-[#00A842]",
      type: "right",
      imageSrc: "/images/problems/furniture-appliance.png",
      imageAlt: "Large furniture and appliances",
      messageSrc: "/images/problems/message_2.png",
      widthImage: 349,
      heightImage: 349,
    },
    {
      title: "地域のゴミ処理場まで粗大ゴミや不用品を運ぶ手段がない",
      borderColor: "border-[#00A842]",
      type: "right",
      imageSrc: "/images/problems/transportation-problem.png",
      imageAlt: "Person without transportation",
      messageSrc: "/images/problems/message_2.png",
    },
    {
      title: "地域のゴミ処理場まで粗大ゴミや不用品を運ぶ手段がない",
      borderColor: "border-[#00A842]",
      type: "right",
      imageSrc: "/images/problems/thoughtful-man.png",
      imageAlt: "Person without transportation",
      messageSrc: "/images/problems/message_2.png",
      widthImage: 245,
      heightImage: 287,
      positionImage: "bottom-[-10px] left-[50px]",
    },
    {
      title: "地域のゴミ処理場まで粗大ゴミや不用品を運ぶ手段がない",
      borderColor: "border-[#00A842]",
      type: "right",
      imageSrc: "/images/problems/girl-gift-boxes.png",
      imageAlt: "Person without transportation",
      messageSrc: "/images/problems/message_2.png",
      // widthImage: 245,
      // heightImage: 287,
      positionImage: "bottom-[-10px] left-[95px]",
    },
    {
      title: "地域のゴミ処理場まで粗大ゴミや不用品を運ぶ手段がない",
      borderColor: "border-[#00A842]",
      type: "right",
      imageSrc: "/images/problems/transportation-problem.png",
      imageAlt: "Person without transportation",
      messageSrc: "/images/problems/message_2.png",
    },
    {
      title:
        "不用品をリサイクルや適切に処理してほしいがどの業者に頼めばいいか分からない",
      borderColor: "border-[#00A842]",
      type: "left",
      imageSrc: "/images/problems/thoughtful-man.png",
      imageAlt: "Person confused about recycling",
      messageSrc: "/images/problems/message.png",
    },
    {
      title: "急な引越しや家の整理で、すぐに不用品を回収してほしい",
      borderColor: "border-[#00ADF2]",
      type: "right",
      imageSrc: "/images/problems/girl-gift-boxes.png",
      imageAlt: "Person with urgent moving needs",
      messageSrc: "/images/problems/message_2.png",
    },
    {
      title:
        "見積もりや追加料金が心配で、不用品回収業者に依頼するのをためらっている",
      borderColor: "border-[#00ADF2]",
      type: "left",
      imageSrc: "/images/problems/checklist-credit-card.png",
      imageAlt: "Person worried about costs",
      textColor: "text-[#EA2227]",
      messageSrc: "/images/problems/message.png",
    },
    {
      title: "不用品の中にはまだ使えるものもあり、できれば買取してほしい",
      borderColor: "border-[#00A842]",
      type: "right",
      imageSrc: "/images/problems/luxury-bags.png",
      imageAlt: "Person with valuable items",
      messageSrc: "/images/problems/message_2.png",
    },
  ];

  return (
    <section className="bg-white py-10 md:py-20">
      <div className="container mx-auto px-4">
        {/* Header matching Figma design */}
        <div className="text-center mb-16">
          <h2
            className="text-black font-montserrat font-bold mb-5 md:mb-10 leading-[1.219]"
            style={{ fontSize: "clamp(28px, 5vw, 40px)" }}
          >
            不用品回収・粗大ゴミ回収で
          </h2>
          <div className="flex items-center justify-center gap-0">
            <h3
              className="text-[#00A842] font-montserrat font-bold leading-[1.219]"
              style={{ fontSize: "clamp(40px, 8vw, 70px)" }}
            >
              こんなお悩み
            </h3>
            <h3
              className="text-[#222222] font-montserrat font-bold leading-[1.219]"
              style={{ fontSize: "clamp(40px, 8vw, 70px)" }}
            >
              はありませんか？
            </h3>
          </div>
        </div>

        {/* Problems Grid - 2 columns on desktop, 1 column on mobile */}
        <div className="flex flex-col items-center gap-6 mb-20">
          {/* Desktop: 2 columns, Mobile: 1 column */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full max-w-[1200px]">
            {problems.slice(0, 6).map((problem, index) => (
              <div key={index} className="flex justify-center">
                <ProblemCard {...problem} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
