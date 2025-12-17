import React from 'react';
import Image from 'next/image';

export interface CaseStudyCardProps {
    beforeImage: string;
    afterImage: string;
    staffCount: string;
    workTime: string;
    items: string;
    description: string | string[];
}

const CaseStudyCardComponent: React.FC<CaseStudyCardProps> = ({
    beforeImage,
    afterImage,
    staffCount,
    workTime,
    items,
    description
}) => {
    return (
        <div className="bg-[#F5F5F5] rounded-3xl overflow-hidden max-w-[900px] w-full mx-auto mb-8 border-[3px] border-white">
            {/* Before/After Images Section */}
            <div className="grid grid-cols-2 gap-2 md:gap-4 p-2 md:p-4 bg-white">
                {/* BEFORE Image */}
                <div className="relative aspect-[4/4] md:aspect-[4/3] overflow-hidden rounded-xl md:rounded-2xl bg-[#C8C8C8]">
                    <div className="absolute top-1 md:top-3 left-1/2 -translate-x-1/2 text-sm md:text-2xl font-bold text-white tracking-[0.1em] z-10">
                        BEFORE
                    </div>
                    <img
                        src={beforeImage}
                        alt="Before"
                        className="w-full h-full object-cover p-3 md:p-6 pt-8 md:pt-12"
                    />
                </div>

                {/* AFTER Image */}
                <div className="relative aspect-[4/4] md:aspect-[4/3] overflow-hidden rounded-xl md:rounded-2xl bg-[#14b8a6]">
                    <div className="absolute top-1 md:top-3 left-1/2 -translate-x-1/2 text-sm md:text-2xl font-bold text-white tracking-[0.1em] z-10">
                        AFTER
                    </div>
                    <img
                        src={afterImage}
                        alt="After"
                        className="w-full h-full object-cover p-3 md:p-6 pt-8 md:pt-12"
                    />
                </div>
            </div>

            {/* Details Table */}
            <div className="p-4 bg-white">
                <table className="w-full border-collapse bg-white">
                    <tbody>
                        <tr>
                            <td className="bg-[#E8F4FB] font-semibold text-[#333] w-[140px] md:w-[100px] text-sm md:text-[13px] p-4 md:p-3 border border-[#E0E0E0]">
                                作業スタッフ
                            </td>
                            <td className="bg-white text-[#333] text-sm md:text-[13px] p-4 md:p-3 border border-[#E0E0E0]">
                                {staffCount}
                            </td>
                            <td className="bg-[#E8F4FB] font-semibold text-[#333] w-[140px] md:w-[100px] text-sm md:text-[13px] p-4 md:p-3 border border-[#E0E0E0]">
                                作業時間
                            </td>
                            <td className="bg-white text-[#333] text-sm md:text-[13px] p-4 md:p-3 border border-[#E0E0E0]">
                                {workTime}
                            </td>
                        </tr>
                        <tr>
                            <td className="bg-[#E8F4FB] font-semibold text-[#333] w-[140px] md:w-[100px] text-sm md:text-[13px] p-4 md:p-3 border border-[#E0E0E0]">
                                回収品目
                            </td>
                            <td colSpan={3} className="bg-white text-[#333] text-sm md:text-[13px] p-4 md:p-3 border border-[#E0E0E0]">
                                {items}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Mascot Comment Section */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-4 p-6 md:p-4 bg-white items-start">
                <div className="flex-shrink-0 hidden md:block w-[166px] h-[166px]">
                    <Image
                        src="/images/caseStudies/case-study.png"
                        alt="担当スタッフ"
                        className="w-full h-full object-cover"
                        width={100}
                        height={100}
                    />
                </div>
                <div className="flex-1">
                    <div className="text-base md:text-[15px] font-semibold text-[#333] mb-3">
                        担当スタッフから
                    </div>
                    {Array.isArray(description) ? (
                        description.map((paragraph, index) => (
                            <p
                                key={index}
                                className="text-sm md:text-[13px] leading-[1.8] text-[#333] m-0"
                                style={{ marginBottom: index < description.length - 1 ? '12px' : '0' }}
                            >
                                {paragraph}
                            </p>
                        ))
                    ) : (
                        <p className="text-sm md:text-[13px] leading-[1.8] text-[#333] m-0">
                            {description}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CaseStudyCardComponent;
