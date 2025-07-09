import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export interface ToTopButtonProps {
  className?: string;
  showOffset?: number;
}

const ToTopButton: React.FC<ToTopButtonProps> = ({
  className,
  showOffset = 400,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  // Show/hide button based on scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > showOffset) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, [showOffset]);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Button
      onClick={scrollToTop}
      size="icon"
      className={cn(
        "fixed bottom-8 right-8 z-50 w-12 h-12 bg-[#00A842] hover:bg-[#006E27] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out group",
        isVisible
          ? "opacity-100 transform translate-y-0 scale-100"
          : "opacity-0 transform translate-y-4 scale-95 pointer-events-none",
        className
      )}
      aria-label="Scroll to top"
    >
      {/* Arrow Up Icon */}
      <svg
        className="w-6 h-6 transform group-hover:scale-110 transition-transform duration-200"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </Button>
  );
};

export default ToTopButton;
