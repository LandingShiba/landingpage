import React, { useState, useEffect, useRef } from "react";

interface FAQItem {
  id: string;
  question: string;
  answer?: string;
}

const FAQ: React.FC = () => {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());
  const [visibleElements, setVisibleElements] = useState<Set<string>>(
    new Set()
  );
  const headerRef = useRef<HTMLDivElement>(null);
  const faqRefs = useRef<Map<string, HTMLDivElement>>(new Map());

  const faqData: FAQItem[] = [
    {
      id: "q1",
      question: "回収した不用品はどうしていますか？",
      answer:
        "回収した不用品は、リサイクル可能なものは再利用し、適切に処分いたします。",
    },
    {
      id: "q2",
      question: "土日祝日も対応してますか？",
      answer: "はい、土日祝日も対応しております。事前にご相談ください。",
    },
    {
      id: "q3",
      question: "見積もりだけでも来ていただけるのでしょうか？",
      answer:
        "はい、見積もりだけでもお伺いいたします。無料で見積もりを行っております。",
    },
    {
      id: "q4",
      question: "不用品を無料で処分する方法はありませんか？",
      answer:
        "自治体の回収サービスやリサイクルショップでの買取などがございます。",
    },
    {
      id: "q5",
      question: "個人情報の取り扱いはどうしていますか？",
      answer: "個人情報保護法に基づき、適切に管理・保護しております。",
    },
    {
      id: "q6",
      question: "支払い方法は何に対応していますか？",
      answer: "現金、クレジットカード、銀行振込に対応しております。",
    },
    {
      id: "q7",
      question: "事前にやっておくことはありますか？",
      answer: "回収品の整理と、貴重品の取り出しをお願いいたします。",
    },
    {
      id: "q8",
      question: "時間も指定できますか？",
      answer: "はい、ご希望の時間帯をお聞きして調整いたします。",
    },
    {
      id: "q9",
      question: "不用品の量が少なくても来てくれますか？",
      answer: "はい、少量でもお伺いいたします。お気軽にご相談ください。",
    },
    {
      id: "q10",
      question: "回収できない物はありますか？",
      answer: "危険物や特殊な廃棄物は回収できない場合がございます。",
    },
  ];

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const elementId = entry.target.getAttribute("data-element-id");
          if (elementId) {
            setVisibleElements((prev) => new Set([...prev, elementId]));
          }
        }
      });
    }, observerOptions);

    // Observe header
    if (headerRef.current) {
      headerRef.current.setAttribute("data-element-id", "header");
      observer.observe(headerRef.current);
    }

    // Observe FAQ items
    faqData.forEach((item, index) => {
      const element = faqRefs.current.get(item.id);
      if (element) {
        element.setAttribute("data-element-id", `faq-${index}`);
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  const toggleExpanded = (id: string) => {
    setExpandedItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const setFaqRef = (id: string) => (el: HTMLDivElement | null) => {
    if (el) {
      faqRefs.current.set(id, el);
    } else {
      faqRefs.current.delete(id);
    }
  };

  return (
    <div className="w-full bg-white py-5 md:py-20">
      <div className="max-w-[1300px] mx-auto px-4">
        {/* Header Section */}
        <div
          ref={headerRef}
          className={`flex flex-col text-center items-center justify-center gap-[14px] mb-5 md:mb-20 transition-all duration-1000 ease-out ${
            visibleElements.has("header")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-black font-bold text-[26px] md:text-[70px] leading-[1.219] font-montserrat text-left w-full max-w-[910px]">
            千葉県の不用品回収について
          </h2>
          <h1 className="text-[#00A842] font-bold text-[26px] md:text-[70px] leading-[1.219] font-montserrat text-center w-full max-w-[908px]">
            よくあるご質問
          </h1>
        </div>

        {/* FAQ Items */}
        <div className="flex flex-col gap-[20px] md:gap-[50px] max-w-full">
          {faqData.map((item, index) => (
            <div
              key={item.id}
              ref={setFaqRef(item.id)}
              className={`transition-all duration-700 ease-out ${
                visibleElements.has(`faq-${index}`)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Question Card */}
              <div
                className="relative bg-[#00A842] rounded-[8px] md:rounded-[20px] h-[52.54px] md:h-[140px] cursor-pointer transition-all duration-300 hover:bg-[#00A842] hover:shadow-lg flex justify-between items-center px-[9px] md:px-4"
                onClick={() => toggleExpanded(item.id)}
              >
                {/* Left part with Q icon and question */}
                <div className="flex items-center gap-[9px] md:gap-6">
                  {/* Q Icon with background */}
                  <div className="relative w-[52.54px] h-[52.54px] md:w-[140px] md:h-[140px] flex-shrink-0">
                    {/* Left accent bar - Rectangle with diagonal cut and rounded corners */}
                    <div className="absolute -left-4 top-0 w-[52.54px] h-[52.54px] md:w-[160px] md:h-[140px]">
                      <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 134 140"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                      >
                        <path
                          d="M0 19.9961C0 8.9504 8.95431 -0.00390625 20 -0.00390625H69.6746C75.4419 -0.00390625 80.9284 2.48571 84.7262 6.82601L128.476 56.826C135.074 64.3665 135.074 75.6257 128.476 83.1662L84.7262 133.166C80.9284 137.506 75.4419 139.996 69.6746 139.996H20C8.9543 139.996 0 131.042 0 119.996V19.9961Z"
                          fill="#7BAD4F"
                        />
                      </svg>
                    </div>
                    <div className="absolute inset-0 right-10 md:right-6 flex items-center justify-center text-white font-bold text-[26px] md:text-[70px] leading-[1.219] font-montserrat z-10">
                      Q
                    </div>
                  </div>

                  {/* Question Text */}
                  <div className="text-white font-semibold text-[12px] md:text-[40px] leading-[1.219] font-montserrat">
                    {item.question}
                  </div>
                </div>

                {/* Expand/Collapse Icon */}
                <div
                  className={`text-white font-medium text-[26px] md:text-[70px] leading-[1.219] font-montserrat transition-transform duration-300 ${
                    expandedItems.has(item.id) ? "rotate-45" : ""
                  }`}
                >
                  +
                </div>
              </div>

              {/* Answer Card - Expandable */}
              {expandedItems.has(item.id) && (
                <div className="bg-white border border-[#E0E0E0] rounded-[8px] md:rounded-[20px] mt-2 p-4 md:p-8 shadow-lg animate-fade-in">
                  <div className="flex items-start gap-2 md:gap-4">
                    <div className="text-[#00A842] font-bold text-[20px] md:text-[40px] leading-[1.219] font-montserrat">
                      A
                    </div>
                    <div className="text-[#333333] font-medium text-[14px] md:text-[32px] leading-[1.4] font-montserrat pt-1 md:pt-2">
                      {item.answer}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default FAQ;
