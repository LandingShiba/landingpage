import React from 'react';

export interface TestimonialCardProps {
    avatar?: string;
    age: string;
    gender: string;
    priceRating: number;
    serviceRating: number;
    overallRating: number;
    title: string;
    testimonialText: string;
    highlightedWords?: string[];
}

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
    return (
        <div className="flex gap-[3px]">
            {[1, 2, 3, 4, 5].map((star) => (
                <svg
                    key={star}
                    className={`w-7 h-7 md:w-6 sm:w-[15px] sm:h-[15px] ${star <= rating ? 'text-[#fbbf24]' : 'text-[#d1d5db]'}`}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
            ))}
        </div>
    );
};

const TestimonialCardComponent: React.FC<TestimonialCardProps> = ({
    avatar,
    age,
    gender,
    priceRating,
    serviceRating,
    overallRating,
    title,
    testimonialText,
    highlightedWords = [],
}) => {
    const highlightText = (text: string) => {
        if (!highlightedWords.length) return text;

        let highlightedText = text;
        highlightedWords.forEach((word) => {
            const regex = new RegExp(`(${word})`, 'g');
            highlightedText = highlightedText.replace(
                regex,
                '<a class="text-[#3b82f6] underline cursor-pointer transition-colors duration-200 hover:text-[#2563eb]">$1</a>'
            );
        });

        return highlightedText;
    };

    return (
        <div className="bg-white rounded-3xl overflow-hidden mb-6 max-w-[1100px] w-full shadow-[0_4px_16px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-all duration-300">
            {/* Header */}
            <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between gap-5 md:gap-6 bg-[#f5f5f5] p-5 md:p-12 rounded-t-3xl">
                {/* Avatar Section */}
                <div className="flex flex-row items-center gap-3 md:gap-4">
                    {avatar ? (
                        <img
                            src={avatar}
                            alt="Customer avatar"
                            className="w-[70px] h-[70px] md:w-20 md:h-20 rounded-full object-cover flex-shrink-0 shadow-[0_2px_8px_rgba(0,0,0,0.1)]"
                        />
                    ) : (
                        <div className="w-[70px] h-[70px] md:w-20 md:h-20 rounded-full overflow-hidden flex-shrink-0 shadow-[0_2px_8px_rgba(0,0,0,0.1)]">
                            <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
                                <circle cx="50" cy="50" r="50" fill="#FDB913" />
                                <circle cx="50" cy="35" r="15" fill="#333" />
                                <path
                                    d="M25 75c0-13.807 11.193-25 25-25s25 11.193 25 25"
                                    fill="#333"
                                />
                            </svg>
                        </div>
                    )}
                    <div className="flex gap-2 items-center text-[13px] md:text-[15px] font-normal text-[#333]">
                        <span className="after:content-[''] after:inline-block after:w-px after:h-[14px] after:bg-[#999] after:ml-2">
                            {age}
                        </span>
                        <span>{gender}</span>
                    </div>
                </div>

                {/* Ratings Section */}
                <div className="flex flex-wrap gap-2 md:gap-3 w-full md:w-auto justify-center">
                    <div className="flex flex-col items-center gap-2 flex-1 max-w-[120px] md:max-w-none md:flex-initial">
                        <div className="py-2 px-4 md:py-3 md:px-6 bg-[#9ca3af] rounded-[20px] min-w-0 md:min-w-[170px] w-full flex justify-center items-center">
                            <span className="text-[11px] md:text-sm font-semibold text-white text-center">料金</span>
                        </div>
                        <StarRating rating={priceRating} />
                    </div>
                    <div className="flex flex-col items-center gap-2 flex-1 max-w-[120px] md:max-w-none md:flex-initial">
                        <div className="py-2 px-4 md:py-3 md:px-6 bg-[#9ca3af] rounded-[20px] min-w-0 md:min-w-[170px] w-full flex justify-center items-center">
                            <span className="text-[11px] md:text-sm font-semibold text-white text-center">サービス</span>
                        </div>
                        <StarRating rating={serviceRating} />
                    </div>
                    <div className="flex flex-col items-center gap-2 flex-1 max-w-[120px] md:max-w-none md:flex-initial">
                        <div className="py-2 px-4 md:py-3 md:px-6 bg-[#9ca3af] rounded-[20px] min-w-0 md:min-w-[170px] w-full flex justify-center items-center">
                            <span className="text-[11px] md:text-sm font-semibold text-white text-center">総合評価</span>
                        </div>
                        <StarRating rating={overallRating} />
                    </div>
                </div>
            </div>

            {/* Body */}
            <div className="p-5 md:p-12">
                <h3 className="text-[17px] md:text-xl font-semibold text-[#14b8a6] m-0 mb-4 md:mb-5 leading-[1.5] text-start">
                    {title}
                </h3>
                <p
                    className="text-sm md:text-[15px] leading-[1.8] md:leading-[1.9] text-[#333] m-0 text-left"
                    dangerouslySetInnerHTML={{ __html: highlightText(testimonialText) }}
                />
            </div>
        </div>
    );
};

export default TestimonialCardComponent;
