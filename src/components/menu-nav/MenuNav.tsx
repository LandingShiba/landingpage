'use client'

import Link from "next/link";

const menuItems = [
  { label: "料金", href: "#pricing" },
  { label: "お客様の声", href: "/testimonial" },
  { label: "事例", href: "/case-study" },
  { label: "よくある質問", href: "#faq" },
  { label: "会社概要", href: "/company" },
];

export default function MenuNav() {
  // const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        // Add highlight effect class
        targetElement.classList.add('scroll-highlight');

        window.scrollTo({
          top: targetElement.offsetTop - 150, // Offset để không bị header che
          behavior: 'smooth'
        });

        // Remove highlight effect after animation completes
        setTimeout(() => {
          targetElement.classList.remove('scroll-highlight');
        }, 2000);
      }
    } else if (href.startsWith('/#')) {
      e.preventDefault();
      const targetId = href.substring(2);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        // Add highlight effect class
        targetElement.classList.add('scroll-highlight');

        window.scrollTo({
          top: targetElement.offsetTop - 150, // Offset để không bị header che
          behavior: 'smooth'
        });

        // Remove highlight effect after animation completes
        setTimeout(() => {
          targetElement.classList.remove('scroll-highlight');
        }, 2000);
      }
    }
  };
  return (
    <>
      <div className="w-full bg-white border-stone-300">
        <div className="max-w-7xl mx-auto flex justify-center">
          <div className="inline-flex">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="block"
                onClick={(e) => handleClick(e, item.href)}
              >
                <div className="w-[144px] md:w-[144px] lg:w-[230px] xl:w-72 h-[56px] md:h-[56px] lg:h-[90px] xl:h-28 relative cursor-pointer hover:bg-gray-50 transition-colors">
                  <div className="w-[144px] md:w-[144px] lg:w-[230px] xl:w-72 h-[40px] md:h-[40px] lg:h-[64px] xl:h-20 left-0 top-[7.5px] md:top-[7.5px] lg:top-[12px] xl:top-[15px] absolute border-l border-r border-stone-300" />
                  <div
                    className={`absolute text-center text-[12px] md:text-[12px] lg:text-[19px] xl:text-2xl font-bold font-['Roboto'] transition-all duration-300 top-[20.5px] md:top-[20.5px] lg:top-[33px] xl:top-[41px] left-1/2 -translate-x-1/2 ${
                      item.href.startsWith('#') ? 'hover:text-[#00A842]' : 'text-black'
                    }`}
                  >
                    {item.label}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Add CSS for scroll highlight effect */}
      <style jsx global>{`
        @keyframes scrollHighlight {
          0% {
            box-shadow: 0 0 0 0 rgba(0, 168, 66, 0);
          }
          25% {
            box-shadow: 0 0 0 15px rgba(0, 168, 66, 0.4);
          }
          50% {
            box-shadow: 0 0 0 10px rgba(0, 168, 66, 0.2);
          }
          75% {
            box-shadow: 0 0 0 15px rgba(0, 168, 66, 0.1);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(0, 168, 66, 0);
          }
        }
        
        .scroll-highlight {
          animation: scrollHighlight 2s ease-out;
          border-radius: 8px;
          position: relative;
          z-index: 1;
        }
      `}</style>
    </>
  );
}
