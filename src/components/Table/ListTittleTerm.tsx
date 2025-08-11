import React from "react";
import Image from "next/image";

interface TermData {
  label: string;
  id: string;
}

export default function ListTittleTerm({
  termsData,
}: {
  termsData: TermData[];
}) {
  const scrollToElement = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <section className="bg-[#E9FFD6] mx-auto rounded-[20px] md:rounded-[30px]">
      <div className="p-5 md:px-[54px] md:py-[48px]">
        <div className="relative flex items-center gap-[20px] md:gap-[29px]">
          <div className="relative mr-1 size-12 md:size-20 flex-shrink-0">
            <Image
              src="/list-detail-icon.svg"
              alt="List Detail Icon"
              fill
              className="bg-[#00A842] rounded-[8px] md:rounded-[20px] p-[8px] object-contain"
            />
          </div>
          <h3 className="font-bold text-[20px] md:text-[40px]">目次</h3>
          <div className="after:absolute after:bottom-0 after:left-[18px] after:right-0 after:h-[4px] after:bg-[#00A842]"></div>
        </div>
        <ul className="mt-[40px] space-y-[14px] list-disc list-inside">
          {Object.entries(termsData).map(([termKey, term]) => (
            <li key={termKey} className="">
              {/* Term Title */}
              <h2 className="cursor-pointer md:text-[20px] font-medium text-gray-800 mb-0 inline">
                <a
                  onClick={() => scrollToElement(termKey)}
                  className=" hover:underline"
                >
                  {term.label}
                </a>
              </h2>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
