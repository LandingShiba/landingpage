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
        "実家の父の部屋の遺品整理をエコグローバルさんに依頼しました。長年手つかずだった部屋は物が溢れ、どこから手をつけていいかわからない状態でした。エコグローバルさんのスタッフは、故人の品々を丁寧に扱いながら、効率的に作業を進めてくれました。作業前の写真と比較して、その変貌ぶりには本当に驚きました。部屋がすっきりとして、父の思い出も大切に整理されたことに、心から感謝しています。",
      response:
        "遺品整理は、ただ物を片付けるだけではなく、故人の思い出や歴史を丁寧に扱う作業です。私たちネコの手のスタッフは、その重要性を常に心に留め、作業にあたらせていただいております。お客様のお父様の部屋が、思い出を大切にしながらも、新たなスペースとして生まれ変わったことを嬉しく思います。今後とも、お客様の大切な思い出に寄り添いながら、最高のサービスを提供できるよう努めてまいります。この度はエコグローバルをご利用いただき、誠にありがとうございました",
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
        "退去日が迫っているにも関わらず、引越し準備が全く進んでいませんでした。まさに最後の最後、エコグローバルさんに即日対応で助けを求めたところ、迅速に駆けつけてくれました。時間がない中、スタッフは非常に効率的に作業を進め、驚くほど短時間で部屋を空にしてくれました。このおかげで、退去期限に間に合い、大きなトラブルを避けることができました。",
      response:
        "お客様のご満足の声をいただき、大変嬉しく思います。引越しの準備は予想外の事態が生じやすく、特に退去日が迫っているときは、時間との戦いになります。ネコの手では、そうした緊急の状況にも柔軟に対応し、迅速なサービスを心がけております。お客様の退去期限に間に合わせることができ、安心していただけたことをスタッフ一同、喜んでおります。",
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
        "複数の業者に見積もりを依頼しましたが、エコグローバルさんが最も安く、スタッフの説明も非常にわかりやすかったです。作業当日も予定通りに来てくれて、丁寧に作業をしていただきました。価格だけでなく、サービスの質も良く、信頼できる業者だと思います。",
      response:
        "お客様のご満足と安心をお聞きし、大変嬉しく思います。見積もりがご予算内で収まり、ご納得いただけたこと、そしてスタッフの対応に満足していただけたこと、大変嬉しく思います。今後とも不用品回収の際は、ぜひ「エコグローバル」をご利用ください。",
      avatar: "/images/testimonials/avatar_female.png",
      position: "right",
    },
  ];

  return (
    <section
      ref={containerRef}
      className={cn(
        "bg-[#dcfbff] py-16 relative transition-all duration-1000 ease-out",
        containerInView
          ? "opacity-100 transform translate-y-0"
          : "opacity-0 transform translate-y-[20px]"
      )}
    >
      <div className="max-w-[1440px] mx-auto px-[180px]">
        {/* Header Section */}
        <div
          ref={headerRef}
          className={cn(
            "text-center mb-10 transition-all duration-800 ease-out",
            headerInView
              ? "opacity-100 transform translate-y-0"
              : "opacity-0 transform translate-y-[-30px]"
          )}
        >
          <div className="mb-5">
            <p className="text-[#202020] text-[40px] font-bold font-['Montserrat'] leading-normal mb-5">
              ネコの手に寄せられた
            </p>
            <h2 className="text-[70px] font-bold font-['Montserrat'] leading-normal">
              <span className="text-black">お客様の</span>
              <span className="text-[#2b5d90]">クチコミ</span>
              <span className="text-black">をご紹介</span>
            </h2>
          </div>
          <p className="text-[#202020] text-[20px] font-medium font-['Montserrat'] max-w-[817px] mx-auto leading-normal">
            弊社で不用品回収をご利用いただいたお客様からたくさんの口コミを頂いております。
          </p>
        </div>

        {/* Testimonials Container */}
        <div
          ref={testimonialsRef}
          className={cn(
            "bg-white rounded-[40px] p-[71px] transition-all duration-800 ease-out",
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
                {/* Staff Response */}
                <StaffResponse
                  testimonial={testimonial}
                  isReversed={testimonial.position === "left"}
                  index={index}
                  isInView={testimonialsInView}
                />
                {/* Divider line except for the last item */}
                {index < testimonials.length - 1 && (
                  <div
                    className={cn(
                      "w-full my-12 opacity-30 transition-all duration-800 ease-out",
                      testimonialsInView
                        ? "transform scale-x-100"
                        : "transform scale-x-0"
                    )}
                    style={{
                      transformOrigin: "center",
                      transitionDelay: testimonialsInView
                        ? `${1000 + index * 300}ms`
                        : "0ms",
                      borderTop: "3px dashed #539cd1",
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
        "flex gap-[34px] items-center transition-all duration-800 ease-out mb-8",
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
      <div className="flex flex-col items-center gap-2.5 w-[167px]">
        <div className="w-[167px] h-[167px] rounded-full overflow-hidden bg-gray-200 transition-all duration-300 ease-out hover:scale-110 hover:shadow-xl transform">
          <Image
            src={testimonial.avatar}
            alt={`${testimonial.name} avatar`}
            width={167}
            height={167}
            className="w-full h-full object-cover transition-all duration-300 ease-out hover:scale-105 transform"
            // onError={(e) => {
            //   // Fallback to a default avatar if image doesn't exist
            //   const target = e.target as HTMLImageElement;
            //   target.src = "/images/default-avatar.png";
            // }}
          />
        </div>
        <p className="text-black text-[20px] font-bold font-['Montserrat'] text-center">
          お客様
        </p>
      </div>

      {/* Speech Bubble */}
      <div className="flex-1 relative">
        <div className="bg-white border-2 border-[#539cd1] rounded-[20px] p-[45px] relative shadow-sm transition-all duration-300 ease-out hover:shadow-lg hover:border-[#2b5d90] hover:scale-[1.02] transform">
          {/* Arrow pointing to avatar */}
          <div
            className={cn(
              "absolute top-1/2 transform -translate-y-1/2 w-0 h-0",
              isReversed
                ? "right-[-16px] border-l-[16px] border-l-[#539cd1] border-t-[16px] border-t-transparent border-b-[16px] border-b-transparent"
                : "left-[-16px] border-r-[16px] border-r-[#539cd1] border-t-[16px] border-t-transparent border-b-[16px] border-b-transparent"
            )}
          />
          <div
            className={cn(
              "absolute top-1/2 transform -translate-y-1/2 w-0 h-0",
              isReversed
                ? "right-[-14px] border-l-[14px] border-l-white border-t-[14px] border-t-transparent border-b-[14px] border-b-transparent"
                : "left-[-14px] border-r-[14px] border-r-white border-t-[14px] border-t-transparent border-b-[14px] border-b-transparent"
            )}
          />

          {/* Title */}
          <div className="mb-6">
            <h3 className="text-[#539cd1] text-[20px] font-bold font-['Montserrat'] leading-normal mb-2">
              {testimonial.title}
            </h3>
            <p className="text-black text-[20px] font-medium font-['Montserrat']">
              （{testimonial.name}・
              {testimonial.gender === "male" ? "男性" : "女性"}・
              {testimonial.age}）
            </p>
          </div>

          {/* Content */}
          <p className="text-black text-[20px] font-medium font-['Montserrat'] leading-normal">
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
        "flex gap-[34px] items-center transition-all duration-800 ease-out mb-8",
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
      <div className="flex flex-col items-center gap-2.5 w-[167px]">
        <div className="w-[167px] h-[167px] rounded-full overflow-hidden bg-gray-100 transition-all duration-300 ease-out hover:scale-110 hover:shadow-xl transform">
          <Image
            src="/images/testimonials/avatar_female.png"
            alt="Staff avatar"
            width={167}
            height={167}
            className="w-full h-full object-cover transition-all duration-300 ease-out hover:scale-105 transform"
            // onError={(e) => {
            //   // Fallback to a default staff avatar
            //   const target = e.target as HTMLImageElement;
            //   target.src = "/images/avatar_female.png";
            // }}
          />
        </div>
        <p className="text-black text-[20px] font-bold font-['Montserrat'] text-center">
          スタッフ
        </p>
      </div>

      {/* Response Speech Bubble */}
      <div className="flex-1 relative">
        <div className="bg-gray-100 rounded-[20px] p-[45px] relative shadow-sm transition-all duration-300 ease-out hover:shadow-md hover:bg-gray-50 hover:scale-[1.01] transform">
          {/* Arrow pointing to avatar */}
          <div
            className={cn(
              "absolute top-1/2 transform -translate-y-1/2 w-0 h-0",
              isReversed
                ? "right-[-16px] border-l-[16px] border-l-gray-100 border-t-[16px] border-t-transparent border-b-[16px] border-b-transparent"
                : "left-[-16px] border-r-[16px] border-r-gray-100 border-t-[16px] border-t-transparent border-b-[16px] border-b-transparent"
            )}
          />

          {/* Response Content */}
          <p className="text-black text-[20px] font-medium font-['Montserrat'] leading-normal">
            {testimonial.response}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewsSection;
