import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export interface ProcessStep {
  stepNumber: number;
  title: string;
  description: string;
}

export interface ProcessFlowProps {
  title?: string;
  subtitle?: string;
  steps: ProcessStep[];
  className?: string;
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
          // Một khi đã hiện thì không cần observe nữa
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

// Desktop version of the step card
const DesktopProcessStepCard: React.FC<{ step: ProcessStep; index: number }> = ({
  step,
  index,
}) => {
  const { ref, isInView } = useInView();

  return (
    <div
      ref={ref}
      className={cn(
        "relative flex items-center w-full transition-all duration-700 ease-out",
        isInView
          ? "opacity-100 transform translate-x-0"
          : "opacity-0 transform translate-x-[-50px]"
      )}
      style={{
        transitionDelay: isInView ? `${index * 200}ms` : "0ms",
      }}
    >
      {/* Step Circle Badge */}
      <div
        className={cn(
          "w-[200px] h-[200px] bg-white rounded-full border-8 border-[#7BAD4F] flex flex-col items-center justify-center z-10 flex-shrink-0 transition-all duration-500 ease-out",
          isInView
            ? "opacity-100 transform scale-100"
            : "opacity-0 transform scale-75"
        )}
        style={{
          transitionDelay: isInView ? `${index * 200 + 100}ms` : "0ms",
        }}
      >
        <span className="text-[#008144] font-bold text-[40px] leading-none font-['Montserrat']">
          Step
        </span>
        <span className="text-black font-bold text-[70px] leading-none font-['Montserrat']">
          {step.stepNumber}
        </span>
      </div>

      {/* Content Card */}
      <div
        className={cn(
          "bg-[#E9FFD6] h-[200px] flex-1 rounded-none rounded-r-[80px] -ml-[100px] pl-[142px] pr-[32px] flex flex-col justify-center transition-all duration-600 ease-out",
          isInView
            ? "opacity-100 transform translate-x-0"
            : "opacity-0 transform translate-x-[30px]"
        )}
        style={{
          transitionDelay: isInView ? `${index * 200 + 200}ms` : "0ms",
        }}
      >
        <h3 className="text-[#008144] font-bold text-[40px] leading-[1.2] mb-5 font-['Montserrat']">
          {step.title}
        </h3>
        <p className="text-black font-medium text-[20px] leading-[1.2] font-['Montserrat']">
          {step.description}
        </p>
      </div>
    </div>
  );
};

// Mobile version of the step card
const MobileProcessStepCard: React.FC<{ step: ProcessStep; index: number }> = ({
  step,
  index,
}) => {
  const { ref, isInView } = useInView();

  return (
    <div
      ref={ref}
      className={cn(
        "relative w-full transition-all duration-700 ease-out",
        isInView
          ? "opacity-100 transform translate-y-0"
          : "opacity-0 transform translate-y-[20px]"
      )}
      style={{
        transitionDelay: isInView ? `${index * 200}ms` : "0ms",
      }}
    >
      <div className="w-full">
        {/* Step Circle with Content Card */}
        <div
          className={cn(
            "relative bg-[#E9FFD6] rounded-[40px] pl-[90px] pr-4 py-4 min-h-[78px] transition-all duration-600 ease-out",
            isInView
              ? "opacity-100 transform translate-x-0"
              : "opacity-0 transform translate-x-[30px]"
          )}
          style={{
            transitionDelay: isInView ? `${index * 200 + 200}ms` : "0ms",
          }}
        >
          {/* Step Circle Badge (Absolute positioned) */}
          <div
            className={cn(
              "absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/4 w-[87px] h-[87px] bg-white rounded-full border-[3px] border-[#00A842] z-10 transition-all duration-500 ease-out",
              isInView
                ? "opacity-100 transform scale-100"
                : "opacity-0 transform scale-75"
            )}
            style={{
              transitionDelay: isInView ? `${index * 200 + 100}ms` : "0ms",
            }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <div className="text-[#02662A] font-bold text-[10px] leading-none font-['Montserrat']">
                Step
              </div>
              <div className="text-black font-bold text-[18px] leading-none font-['Montserrat'] mt-[2px]">
                {step.stepNumber}
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div>
            <h3 className="text-[#02662A] font-bold text-[12px] leading-[1.2] mb-1.5 font-['Montserrat']">
              {step.title}
            </h3>
            <p className="text-black font-medium text-[10px] leading-[1.2] font-['Montserrat']">
              {step.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};


// Responsive wrapper component that chooses between mobile and desktop versions
const ProcessStepCard: React.FC<{ step: ProcessStep; index: number }> = (props) => {
  return (
    <>
      <div className="hidden md:block">
        <DesktopProcessStepCard {...props} />
      </div>
      <div className="block md:hidden">
        <MobileProcessStepCard {...props} />
      </div>
    </>
  );
};

const ProcessFlow: React.FC<ProcessFlowProps> = ({
  title = "とってもカンタン",
  subtitle = "不用品回収までの流れ",
  steps,
  className,
}) => {
  const { ref: headerRef, isInView: headerInView } = useInView();

  return (
    <div
      className={cn(
        "w-full max-w-[1440px] mx-auto md:px-[74px] px-8 md:py-[70px] py-8 ",
        className
      )}
    >
      {/* Header Section */}
      {/* Desktop Header */}
      <div className="hidden md:block">
        <div
          ref={headerRef}
          className={cn(
            "flex flex-col items-center mb-[50px] max-w-[999px] mx-auto transition-all duration-800 ease-out",
            headerInView
              ? "opacity-100 transform translate-y-0"
              : "opacity-0 transform translate-y-[-20px]"
          )}
        >
          <div className="flex flex-col items-center gap-5 w-full">
            <h2
              className={cn(
                "text-[#008144] font-bold text-[40px] leading-[1.2] text-center font-['Montserrat'] w-full transition-all duration-600 ease-out",
                headerInView
                  ? "opacity-100 transform translate-y-0"
                  : "opacity-0 transform translate-y-[-10px]"
              )}
              style={{
                transitionDelay: headerInView ? "200ms" : "0ms",
              }}
            >
              {title}
            </h2>
            <h1
              className={cn(
                "text-black font-bold text-[70px] leading-[1.2] font-['Montserrat'] transition-all duration-600 ease-out",
                headerInView
                  ? "opacity-100 transform translate-y-0"
                  : "opacity-0 transform translate-y-[-10px]"
              )}
              style={{
                transitionDelay: headerInView ? "400ms" : "0ms",
              }}
            >
              {subtitle}
            </h1>
          </div>
        </div>
      </div>
      
      {/* Mobile Header */}
      <div className="block md:hidden">
        <div
          ref={headerRef}
          className={cn(
            "flex flex-col items-center mb-8 mx-auto transition-all duration-800 ease-out",
            headerInView
              ? "opacity-100 transform translate-y-0"
              : "opacity-0 transform translate-y-[-20px]"
          )}
        >
          <div className="flex flex-col items-center gap-[5.5px] w-full">
            <h2
              className={cn(
                "text-[#02662A] font-bold text-[20px] leading-[1.2] text-center font-['Montserrat'] w-full transition-all duration-600 ease-out",
                headerInView
                  ? "opacity-100 transform translate-y-0"
                  : "opacity-0 transform translate-y-[-10px]"
              )}
              style={{
                transitionDelay: headerInView ? "200ms" : "0ms",
              }}
            >
              {title}
            </h2>
            <h1
              className={cn(
                "text-black font-bold text-[26px] leading-[1.2] font-['Montserrat'] transition-all duration-600 ease-out",
                headerInView
                  ? "opacity-100 transform translate-y-0"
                  : "opacity-0 transform translate-y-[-10px]"
              )}
              style={{
                transitionDelay: headerInView ? "400ms" : "0ms",
              }}
            >
              {subtitle}
            </h1>
          </div>
        </div>
      </div>

      {/* Steps Section */}
      <div className="flex flex-col md:gap-[80px] gap-4 max-w-[1181px] mx-auto">
        {steps.map((step, index) => (
          <ProcessStepCard key={index} step={step} index={index} />
        ))}
      </div>
    </div>
  );
};

export default ProcessFlow;
