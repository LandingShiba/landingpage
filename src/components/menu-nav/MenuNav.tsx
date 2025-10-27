'use client'

import Link from "next/link";

const menuItems = [
  { label: "料金", href: "#pricing", left: "109px" },
  { label: "お客様の声", href: "#testimonials", left: "73px" },
  { label: "事例", href: "/work", left: "109px" },
  { label: "よくある質問", href: "/#faq", left: "61px" },
  { label: "会社概要", href: "/company", left: "85px" },
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
                <div className="w-72 h-28 relative cursor-pointer hover:bg-gray-50 transition-colors">
                  <div className="w-72 h-20 left-0 top-[15px] absolute border-l border-r border-stone-300" />
                  <div
                    className={`absolute text-center text-2xl font-bold font-['Roboto'] transition-all duration-300 ${
                      item.href.startsWith('#') ? 'hover:text-[#00A842]' : 'text-black'
                    }`}
                    style={{
                      left: item.left,
                      top: "41px",
                    }}
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
