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
    <div className="w-full bg-white py-20">
      <div className="max-w-[1300px] mx-auto px-4">
        {/* Header Section */}
        <div
          ref={headerRef}
          className={`flex flex-col items-center gap-[14px] mb-20 transition-all duration-1000 ease-out ${
            visibleElements.has("header")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-black font-bold text-[70px] leading-[1.219] font-montserrat text-left w-full max-w-[910px]">
            千葉県の不用品回収について
          </h2>
          <h1 className="text-[#00A842] font-bold text-[70px] leading-[1.219] font-montserrat text-center w-full max-w-[908px]">
            よくあるご質問
          </h1>
        </div>

        {/* FAQ Items */}
        <div className="flex flex-col gap-[50px] max-w-full">
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
                className="relative bg-[#7BAD4F] rounded-[20px] h-[140px] cursor-pointer transition-all duration-300 hover:bg-[#6A9B43] hover:shadow-lg"
                onClick={() => toggleExpanded(item.id)}
              >
                {/* Left accent bar - Rectangle with diagonal cut and rounded corners */}
                <div className="absolute left-0 top-0 w-[160px] h-[140px]">
                  <svg
                    width="160"
                    height="140"
                    viewBox="0 0 160 140"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 0H90L160 70L90 140H20C8.954 140 0 131.046 0 120V20C0 8.954 8.954 0 20 0Z"
                      fill="#9EDD66"
                    />
                  </svg>
                </div>

                {/* Q Icon */}
                <div className="absolute left-[23px] top-[27px] text-white font-bold text-[70px] leading-[1.219] font-montserrat">
                  Q
                </div>

                {/* Question Text */}
                <div className="absolute left-[217px] top-[46px] text-white font-semibold text-[40px] leading-[1.219] font-montserrat">
                  {item.question}
                </div>

                {/* Expand/Collapse Icon */}
                <div
                  className={`absolute right-[46px] top-[27px] text-white font-medium text-[70px] leading-[1.219] font-montserrat transition-transform duration-300 ${
                    expandedItems.has(item.id) ? "rotate-45" : ""
                  }`}
                >
                  +
                </div>
              </div>

              {/* Answer Card - Expandable */}
              {expandedItems.has(item.id) && (
                <div className="bg-white border border-[#E0E0E0] rounded-[20px] mt-2 p-8 shadow-lg animate-fade-in">
                  <div className="flex items-start gap-4">
                    <div className="text-[#00A842] font-bold text-[40px] leading-[1.219] font-montserrat">
                      A
                    </div>
                    <div className="text-[#333333] font-medium text-[32px] leading-[1.4] font-montserrat pt-2">
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
