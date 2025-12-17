import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface Testimonial {
  id: number;
  name: string;
  gender: "male" | "female";
  age: string;
  title: string;
  content: string;
  response: string;
  avatar: string;
  position: "left" | "right";
}

// Hook để xử lý intersection observer
const useInView = (options?: IntersectionObserverInit) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
        ...options,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return { ref, isInView };
};

const ReviewsSection: React.FC = () => {
  const { ref: headerRef, isInView: headerInView } = useInView();
  const { ref: testimonialsRef, isInView: testimonialsInView } = useInView();
  const { ref: containerRef, isInView: containerInView } = useInView();

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "K様",
      gender: "female",
      age: "40代",
      title: "良い感じのスタッフさんで安心しました",
      content:
        "実家の父の部屋の遺品整理をエコ・グローバルさんに依頼しました。長年手つかずだった部屋は物が溢れ、どこから手をつけていいかわからない状態でした。エコ・グローバルさんのスタッフは、故人の品々を丁寧に扱いながら、効率的に作業を進めてくれました。作業前の写真と比較して、その変貌ぶりには本当に驚きました。部屋がすっきりとして、父の思い出も大切に整理されたことに、心から感謝しています。",
      response:
        "遺品整理は、ただ物を片付けるだけではなく、故人の思い出や歴史を丁寧に扱う作業です。私たちエコ・グローバルのスタッフは、その重要性を常に心に留め、作業にあたらせていただいております。お客様のお父様の部屋が、思い出を大切にしながらも、新たなスペースとして生まれ変わったことを嬉しく思います。今後とも、お客様の大切な思い出に寄り添いながら、最高のサービスを提供できるよう努めてまいります。この度はエコ・グローバルをご利用いただき、誠にありがとうございました",
      avatar: "/images/testimonials/avatar_female.png",
      position: "right",
    },
    {
      id: 2,
      name: "T様",
      gender: "male",
      age: "50代",
      title: "無理な日程も調整してくれました",
      content:
        "退去日が迫っているにも関わらず、引越し準備が全く進んでいませんでした。まさに最後の最後、エコ・グローバルさんに即日対応で助けを求めたところ、迅速に駆けつけてくれました。時間がない中、スタッフは非常に効率的に作業を進め、驚くほど短時間で部屋を空にしてくれました。このおかげで、退去期限に間に合い、大きなトラブルを避けることができました。",
      response:
        "お客様のご満足の声をいただき、大変嬉しく思います。引越しの準備は予想外の事態が生じやすく、特に退去日が迫っているときは、時間との戦いになります。エコ・グローバルでは、そうした緊急の状況にも柔軟に対応し、迅速なサービスを心がけております。お客様の退去期限に間に合わせることができ、安心していただけたことをスタッフ一同、喜んでおります。",
      avatar: "/images/testimonials/avatar_female.png",
      position: "right",
    },
    {
      id: 3,
      name: "M様",
      gender: "female",
      age: "60代",
      title: "他社よりも安く、説明もわかりやすい",
      content:
        "複数の業者に見積もりを依頼しましたが、エコ・グローバルさんが最も安く、スタッフの説明も非常にわかりやすかったです。作業当日も予定通りに来てくれて、丁寧に作業をしていただきました。価格だけでなく、サービスの質も良く、信頼できる業者だと思います。",
      response:
        "お客様のご満足と安心をお聞きし、大変嬉しく思います。見積もりがご予算内で収まり、ご納得いただけたこと、そしてスタッフの対応に満足していただけたこと、大変嬉しく思います。今後とも不用品回収の際は、ぜひ「エコ・グローバル」をご利用ください。",
      avatar: "/images/testimonials/avatar_female.png",
      position: "right",
    },
  ];

  return (
    <section
      id="testimonials"
      ref={containerRef}
      className={cn(
        "bg-[#E9FFD6] py-4 md:py-4 lg:py-10 xl:py-12 lg:py-12 xl:py-16 relative transition-all duration-1000 ease-out overflow-x-hidden scroll-mt-[150px]",
        containerInView
          ? "opacity-100 transform translate-y-0"
          : "opacity-0 transform translate-y-[20px]"
      )}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-4 lg:px-12 xl:px-16 xl:px-[180px]">
        {/* Header Section */}
        <div
          ref={headerRef}
          className={cn(
            "text-center mb-3 md:mb-3 lg:mb-7 xl:mb-8 lg:mb-8 xl:mb-10 transition-all duration-800 ease-out",
            headerInView
              ? "opacity-100 transform translate-y-0"
              : "opacity-0 transform translate-y-[-30px]"
          )}
        >
          <div className="mb-1.5 md:mb-1.5 lg:mb-4 xl:mb-5">
            <p className="text-[#202020] text-[12px] sm:text-[14px] md:text-[12px] lg:text-[32px] xl:text-[40px] font-bold font-['Montserrat'] leading-normal mb-1 md:mb-1 lg:mb-4 xl:mb-5">
              エコ・グローバルに寄せられた
            </p>
            <h2 className="text-[18px] sm:text-[21px] md:text-[18px] lg:text-[48px] xl:text-[60px] xl:text-[70px] font-bold font-['Montserrat'] leading-normal">
              <span className="text-black">お客様の</span>
              <span className="text-[#02662A]">クチコミ</span>
              <span className="text-black">をご紹介</span>
            </h2>
          </div>
          <p className="text-[#202020] text-[8px] sm:text-[9px] md:text-[8px] lg:text-[16px] xl:text-[20px] font-medium font-['Montserrat'] max-w-[817px] mx-auto leading-normal">
            弊社で不用品回収をご利用いただいたお客様からたくさんの口コミを頂いております。
          </p>
        </div>

        {/* Testimonials Container */}
        <div
          ref={testimonialsRef}
          className={cn(
            "bg-[E9FFD6] rounded-[10px] sm:rounded-[15px] md:rounded-[10px] lg:rounded-[32px] xl:rounded-[40px] p-2 sm:p-3 md:p-2 lg:p-[40px] xl:p-[50px] xl:p-[71px] transition-all duration-800 ease-out overflow-x-hidden",
            testimonialsInView
              ? "opacity-100 transform translate-y-0"
              : "opacity-0 transform translate-y-[30px]"
          )}
          style={{
            transitionDelay: testimonialsInView ? "300ms" : "0ms",
          }}
        >
          <div className="space-y-0">
            {testimonials.map((testimonial, index) => (
              <React.Fragment key={testimonial.id}>
                <TestimonialCard
                  testimonial={testimonial}
                  isReversed={testimonial.position === "right"}
                  index={index}
                  isInView={testimonialsInView}
                />
                <StaffResponse
                  testimonial={testimonial}
                  isReversed={testimonial.position === "left"}
                  index={index}
                  isInView={testimonialsInView}
                />
                {index < testimonials.length - 1 && (
                  <div
                    className={cn(
                      "w-full my-3 md:my-3 lg:my-10 xl:my-12 opacity-30 transition-all duration-800 ease-out",
                      testimonialsInView
                        ? "transform scale-x-100"
                        : "transform scale-x-0"
                    )}
                    style={{
                      transformOrigin: "center",
                      transitionDelay: testimonialsInView
                        ? `${1000 + index * 300}ms`
                        : "0ms",
                      borderTop: "3px dashed #00A842",
                      height: "0px",
                    }}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface TestimonialCardProps {
  testimonial: Testimonial;
  isReversed: boolean;
  index: number;
  isInView: boolean;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  testimonial,
  isReversed,
  index,
  isInView,
}) => {
  return (
    <div
      className={cn(
        "flex gap-1.5 sm:gap-2 md:gap-1.5 lg:gap-[27px] xl:gap-[34px] items-center transition-all duration-800 ease-out mb-3 md:mb-3 lg:mb-6 xl:mb-8 min-w-0",
        isReversed ? "flex-row-reverse" : "flex-row",
        isInView
          ? "opacity-100 transform translate-x-0 translate-y-0 scale-100"
          : cn(
              "opacity-0 transform scale-95",
              isReversed
                ? "translate-x-[50px] translate-y-[30px]"
                : "translate-x-[-50px] translate-y-[30px]"
            )
      )}
      style={{
        transitionDelay: isInView ? `${400 + index * 250}ms` : "0ms",
      }}
    >
      {/* Customer Avatar */}
      <div className="flex flex-col items-center gap-2.5 w-[80px] sm:w-[120px] md:w-[167px] shrink-0">
        <div className="w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] md:w-[40px] md:h-[40px] lg:w-[134px] lg:h-[134px] xl:w-[167px] xl:h-[167px] rounded-full overflow-hidden bg-gray-200 transition-all duration-300 ease-out hover:scale-110 hover:shadow-xl transform">
          <Image
            src={testimonial.avatar}
            alt={`${testimonial.name} avatar`}
            width={167}
            height={167}
            className="w-full h-full object-cover transition-all duration-300 ease-out hover:scale-105 transform"
          />
        </div>
        <p className="text-black text-[12px] sm:text-[16px] md:text-[20px] font-bold font-['Montserrat'] text-center">
          お客様
        </p>
      </div>

      {/* Speech Bubble */}
      <div className="flex-1 relative w-full min-w-0 break-words">
        <div className="bg-white border md:border lg:border-2 xl:border-2 border-[#02662A] rounded-[7.5px] sm:rounded-[9px] md:rounded-[7.5px] lg:rounded-[16px] xl:rounded-[20px] p-1.5 sm:p-2 md:p-1.5 lg:p-[36px] xl:p-[45px] relative shadow-sm transition-all duration-300 ease-out hover:shadow-lg hover:border-[#2b5d90] hover:scale-[1.02] transform">
          {/* Arrow pointing to avatar */}
          <div
            className={cn(
              "absolute top-1/2 transform -translate-y-1/2 w-0 h-0",
              isReversed
                ? "right-[-12px] sm:right-[-14px] md:right-[-16px] border-l-[12px] sm:border-l-[14px] md:border-l-[16px] border-l-[#539cd1] border-t-[12px] sm:border-t-[14px] md:border-t-[16px] border-t-transparent border-b-[12px] sm:border-b-[14px] md:border-b-[16px] border-b-transparent"
                : "left-[-12px] sm:left-[-14px] md:left-[-16px] border-r-[12px] sm:border-r-[14px] md:border-r-[16px] border-r-[#539cd1] border-t-[12px] sm:border-t-[14px] md:border-t-[16px] border-t-transparent border-b-[12px] sm:border-b-[14px] md:border-b-[16px] border-b-transparent"
            )}
          />
          <div
            className={cn(
              "absolute top-1/2 transform -translate-y-1/2 w-0 h-0",
              isReversed
                ? "right-[-10px] sm:right-[-12px] md:right-[-14px] border-l-[10px] sm:border-l-[12px] md:border-l-[14px] border-l-white border-t-[10px] sm:border-t-[12px] md:border-t-[14px] border-t-transparent border-b-[10px] sm:border-b-[12px] md:border-b-[14px] border-b-transparent"
                : "left-[-10px] sm:left-[-12px] md:left-[-14px] border-r-[10px] sm:border-r-[12px] md:border-r-[14px] border-r-white border-t-[10px] sm:border-t-[12px] md:border-t-[14px] border-t-transparent border-b-[10px] sm:border-b-[12px] md:border-b-[14px] border-b-transparent"
            )}
          />

          {/* Title */}
          <div className="mb-1 sm:mb-1.5 md:mb-1 lg:mb-5 xl:mb-6">
            <h3 className="text-[#00A842] text-[7px] sm:text-[8px] md:text-[7px] lg:text-[16px] xl:text-[20px] font-bold font-['Montserrat'] leading-normal mb-0.5 sm:mb-0.5 md:mb-0.5 lg:mb-1.5 xl:mb-2">
              {testimonial.title}
            </h3>
            <p className="text-black text-[6px] sm:text-[7px] md:text-[6px] lg:text-[16px] xl:text-[20px] font-medium font-['Montserrat']">
              （{testimonial.name}・
              {testimonial.gender === "male" ? "男性" : "女性"}・
              {testimonial.age}）
            </p>
          </div>

          {/* Content */}
          <p className="text-black text-[12px] sm:text-[14px] md:text-[20px] font-medium font-['Montserrat'] leading-normal">
            {testimonial.content}
          </p>
        </div>
      </div>
    </div>
  );
};

interface StaffResponseProps {
  testimonial: Testimonial;
  isReversed: boolean;
  index: number;
  isInView: boolean;
}

const StaffResponse: React.FC<StaffResponseProps> = ({
  testimonial,
  isReversed,
  index,
  isInView,
}) => {
  return (
    <div
      className={cn(
        "flex gap-3 sm:gap-4 md:gap-[34px] items-center transition-all duration-800 ease-out mb-6 md:mb-8",
        isReversed ? "flex-row-reverse" : "flex-row",
        isInView
          ? "opacity-100 transform translate-x-0 translate-y-0 scale-100"
          : cn(
              "opacity-0 transform scale-95",
              isReversed
                ? "translate-x-[-40px] translate-y-[20px]"
                : "translate-x-[40px] translate-y-[20px]"
            )
      )}
      style={{
        transitionDelay: isInView ? `${600 + index * 250}ms` : "0ms",
      }}
    >
      {/* Staff Avatar */}
      <div className="flex flex-col items-center gap-2.5 w-[80px] sm:w-[120px] md:w-[167px] shrink-0">
        <div className="w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] md:w-[40px] md:h-[40px] lg:w-[134px] lg:h-[134px] xl:w-[167px] xl:h-[167px] rounded-full overflow-hidden bg-gray-100 transition-all duration-300 ease-out hover:scale-110 hover:shadow-xl transform">
          <Image
            src="/images/testimonials/avatar_female.png"
            alt="Staff avatar"
            width={167}
            height={167}
            className="w-full h-full object-cover transition-all duration-300 ease-out hover:scale-105 transform"
          />
        </div>
        <p className="text-black text-[12px] sm:text-[16px] md:text-[20px] font-bold font-['Montserrat'] text-center">
          スタッフ
        </p>
      </div>

      {/* Response Speech Bubble */}
      <div className="flex-1 relative w-full">
        <div className="bg-gray-100 rounded-[7.5px] sm:rounded-[9px] md:rounded-[7.5px] lg:rounded-[16px] xl:rounded-[20px] p-1.5 sm:p-2 md:p-1.5 lg:p-[36px] xl:p-[45px] relative shadow-sm transition-all duration-300 ease-out hover:shadow-md hover:bg-gray-50 hover:scale-[1.01] transform">
          {/* Arrow pointing to avatar */}
          <div
            className={cn(
              "absolute top-1/2 transform -translate-y-1/2 w-0 h-0",
              isReversed
                ? "right-[-12px] sm:right-[-14px] md:right-[-16px] border-l-[12px] sm:border-l-[14px] md:border-l-[16px] border-l-gray-100 border-t-[12px] sm:border-t-[14px] md:border-t-[16px] border-t-transparent border-b-[12px] sm:border-b-[14px] md:border-b-[16px] border-b-transparent"
                : "left-[-12px] sm:left-[-14px] md:left-[-16px] border-r-[12px] sm:border-r-[14px] md:border-r-[16px] border-r-gray-100 border-t-[12px] sm:border-t-[14px] md:border-t-[16px] border-t-transparent border-b-[12px] sm:border-b-[14px] md:border-b-[16px] border-b-transparent"
            )}
          />

          {/* Response Content */}
          <p className="text-black text-[12px] sm:text-[14px] md:text-[20px] font-medium font-['Montserrat'] leading-normal">
            {testimonial.response}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewsSection;
