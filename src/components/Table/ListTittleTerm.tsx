import React from "react";
import Image from "next/image";
export default function ListTittleTerm({ termsData }) {
    const scrollToElement = (id) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };
    return (
        <section className="bg-[#D6EEFF] mx-auto max-w-[1080px] rounded-[30px]">
            <div className="py-[48px] px-[54px]">
                <div className="relative flex items-center gap-[29px]">
                    <div className="w-[79px] h-[79px] mr-1">
                        <Image
                            src="/list-detail-icon.svg"
                            alt="List Detail Icon"
                            width={79}
                            height={79}
                            className="bg-[#539CD1] rounded-[20px] p-[8px] "
                        />
                    </div>
                    <h3 className="font-bold text-[40px]">目次</h3>
                    <div className="after:absolute after:bottom-0 after:left-[18px] after:right-0 after:h-[4px] after:bg-[#539CD1]"></div>
                </div>

                <ul className="mt-[40px] space-y-[14px] list-disc list-inside">
                    {Object.entries(termsData).map(([termKey, term]) => (
                        <li key={termKey} className="">
                            {/* Term Title */}
                            <h2 className="cursor-pointer text-[20px] font-medium text-gray-800 mb-0 inline">
                                <a
                                    onClick={() => scrollToElement(termKey)}
                                    className=" hover:underline">{term.label}</a>
                            </h2>
                        </li>
                    ))}
                </ul>
            </div>


        </section >
    )
}