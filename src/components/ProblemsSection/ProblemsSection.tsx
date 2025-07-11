import Image from "next/image";
import React from "react";

interface ProblemCardProps {
  title: string;
  borderColor?: string;
  type?: "type1" | "type2"; // type1: text left, woman right; type2: text right, woman left
  isAppliance?: boolean; // Special flag for appliance card
  imageSrc?: string; // Allow passing custom image
  imageAlt?: string; // Allow passing custom alt text
}

const ProblemCard: React.FC<ProblemCardProps> = ({
  title,
  borderColor = "border-[#539CD1]",
  type = "type1",
  isAppliance = false,
  imageSrc,
  imageAlt,
}) => {
  const isType1 = type === "type1";

  // Special rendering for appliance card
  const renderText = () => {
    if (isAppliance) {
      // Split the text to highlight the red part
      const parts = title.split("自分では運び出せない");
      return (
        <p
          className="text-black text-center font-montserrat font-bold leading-[1.219]"
          style={{ fontSize: "35.29px" }}
        >
          {parts[0]}
          <span className="text-red-500">自分では運び出せない</span>
          {parts[1]}
        </p>
      );
    }

    return (
      <p
        className="text-black text-center font-montserrat font-bold leading-[1.219]"
        style={{ fontSize: "35.29px" }}
      >
        {title}
      </p>
    );
  };

  // Get the appropriate illustration - use passed imageSrc or fallback to defaults
  const getIllustrationSrc = () => {
    if (imageSrc) {
      return imageSrc;
    }
    if (isAppliance) {
      return "/images/problems/tu_lanh.png";
    }
    return "/images/problems/young_woman.png";
  };

  // Get alt text - use passed imageAlt or fallback to defaults
  const getImageAlt = () => {
    if (imageAlt) {
      return imageAlt;
    }
    return isAppliance ? "Refrigerator" : "Young woman reading";
  };

  return (
    <div
      className={`relative bg-white rounded-[20px] border-4 ${borderColor} h-[438px] w-[640px] overflow-hidden`}
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

      {/* Dark decorative shapes overlay */}
      <div
        className={`absolute top-[4] w-[448px] h-[338px] ${
          isType1 ? "left-[4px]" : "right-[14px]"
        }`}
      >
        <Image
          src="/images/problems/message.png"
          alt="Dark shapes"
          width={475}
          height={338}
          className="object-cover"
        />
      </div>

      {/* Main text content positioned over the dark background */}
      <div
        className={`absolute top-[107px] w-[330px] h-[172px] z-10 flex items-center justify-center ${
          isType1 ? "left-[42px]" : "right-[42px]"
        }`}
      >
        {renderText()}
      </div>

      {/* Character/Appliance illustration */}
      <div
        className={`absolute bottom-[35px] w-[369px] h-[244px] z-20 ${
          isType1 ? "right-[47px]" : "left-[47px]"
        }`}
      >
        <Image
          src={getIllustrationSrc()}
          alt={getImageAlt()}
          width={369}
          height={244}
          className="object-cover"
        />
      </div>
    </div>
  );
};

const ProblemsSection: React.FC = () => {
  const problems = [
    {
      title:
        "引越しや大掃除で出た不用品が多く、どのように 処分していいかわからない",
      borderColor: "border-[#539CD1]",
      type: "type1" as const,
      isAppliance: false,
      imageSrc: "/images/problems/young woman at work with laptop writing.png",
      imageAlt: "Woman thinking about disposal",
      width: 369,
      height: 244,
      fontSize: 35,
    },
    {
      title: "粗大ゴミを出す日が限られており、スケジュールが合わない",
      borderColor: "border-[#00ADF2]",
      type: "type1" as const,
      isAppliance: false,
      imageSrc: "/images/problems/confused male student.png",
      imageAlt: "Person with schedule conflict",
      width: 301,
      height: 331,
      fontSize: 35,
      right: 35,
    },
    // {
    //   title: "処分したい家具や家電が大きくて自分では運び出せない",
    //   borderColor: "border-[#00ADF2]",
    //   type: "type1" as const,
    //   isAppliance: true, // This is the special appliance card
    //   imageSrc: "/images/problems/tu_lanh.png",
    //   imageAlt: "Large refrigerator",
    // },
    // {
    //   title: "地域のゴミ処理場まで粗大ゴミや不用品を運ぶ手段がない",
    //   borderColor: "border-[#539CD1]",
    //   type: "type2" as const,
    //   isAppliance: false,
    //   imageSrc: "/images/problems/young_woman.png",
    //   imageAlt: "Person without transportation",
    // },
    // {
    //   title:
    //     "不用品をリサイクルや適切に処理してほしいがどの業者に頼めばいいか分からない",
    //   borderColor: "border-[#539CD1]",
    //   type: "type1" as const,
    //   isAppliance: false,
    //   imageSrc: "/images/problems/young_woman.png",
    //   imageAlt: "Person confused about recycling",
    // },
    // {
    //   title: "急な引越しや家の整理で、すぐに不用品を回収してほしい",
    //   borderColor: "border-[#00ADF2]",
    //   type: "type2" as const,
    //   isAppliance: false,
    //   imageSrc: "/images/problems/young_woman.png",
    //   imageAlt: "Person with urgent moving needs",
    // },
    // {
    //   title:
    //     "見積もりや追加料金が心配で、不用品回収業者に依頼するのをためらっている",
    //   borderColor: "border-[#00ADF2]",
    //   type: "type1" as const,
    //   isAppliance: false,
    //   imageSrc: "/images/problems/young_woman.png",
    //   imageAlt: "Person worried about costs",
    // },
    // {
    //   title: "不用品の中にはまだ使えるものもあり、できれば買取してほしい",
    //   borderColor: "border-[#539CD1]",
    //   type: "type2" as const,
    //   isAppliance: false,
    //   imageSrc: "/images/problems/young_woman.png",
    //   imageAlt: "Person with valuable items",
    // },
  ];

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        {/* Header matching Figma design */}
        <div className="text-center mb-16">
          <h2
            className="text-black font-montserrat font-bold mb-10 leading-[1.219]"
            style={{ fontSize: "40px" }}
          >
            不用品回収・粗大ゴミ回収で
          </h2>
          <div className="flex items-center justify-center gap-0">
            <h3
              className="text-[#539CD1] font-montserrat font-bold leading-[1.219]"
              style={{ fontSize: "70px" }}
            >
              こんなお悩み
            </h3>
            <h3
              className="text-[#222222] font-montserrat font-bold leading-[1.219]"
              style={{ fontSize: "70px" }}
            >
              はありませんか？
            </h3>
          </div>
        </div>

        {/* Problems Grid - 2 columns x 4 rows */}
        <div className="flex flex-col items-center gap-5 mb-20">
          {/* Row 1 */}
          <div className="flex justify-center gap-5">
            <ProblemCard {...problems[0]} />
            <ProblemCard {...problems[1]} />
          </div>

          {/* Row 2 */}
          {/* <div className="flex justify-center gap-5">
            <ProblemCard {...problems[2]} />
            <ProblemCard {...problems[3]} />
          </div> */}

          {/* Row 3 */}
          {/* <div className="flex justify-center gap-5">
            <ProblemCard {...problems[4]} />
            <ProblemCard {...problems[5]} />
          </div> */}

          {/* Row 4 */}
          {/* <div className="flex justify-center gap-5">
            <ProblemCard {...problems[6]} />
            <ProblemCard {...problems[7]} />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
