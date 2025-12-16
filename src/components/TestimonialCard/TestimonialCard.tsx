"use client";
import React, { useState } from 'react';
import TestimonialCardComponent from './TestimonialCardComponent';


const TestimonialCard: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const ITEMS_PER_PAGE = 10;

    const baseTestimonials = [
        {
            age: "60代",
            gender: "女性",
            priceRating: 5,
            serviceRating: 5,
            overallRating: 5,
            title: "同居生活を安心して始められそうです",
            testimonialText: "青葉区の自宅で高齢の母と同居することになり、リビングを介護用に整えるため長年使っていたソファとマッサージチェアを処分しました。大きくて重い家具だったのでどうしようかと思っていましたが、エコ・グローバルさんが運び出しまでしてくださり安心しました。搬出の際は壁や床に傷がつかないようしっかり配慮もしてくれて、安心して見ていられました。運び出しが終わると母が使う予定の部屋がすっかり広くなり、介護用ベッドを無理なく置けるようになりました。本人もこれなら動きやすいと喜んでおり、これからの生活に向けて一歩踏み出せた気持ちです。おかげで同居生活を安心して始められそうです。",
            highlightedWords: ['青葉区', '安心', '介護用ベッド', '同居生活']
        },
        {
            age: "30代",
            gender: "女性",
            priceRating: 5,
            serviceRating: 5,
            overallRating: 5,
            title: "細やかな心配りがありがたかったです",
            testimonialText: "古いこたつやヒーターを買い替えたので、まとめて処分をお願いしました。冬物家電はとにかく大きく場所をとるので、片付いたときはほっとしました。本当は大崎市の粗大ゴミに出すことも考えましたが、収集日が平日しかなくタイミングが合わず、持ち込むにも車には乗らないため、依頼しました。当日は雪で足元が悪い中でしたが、玄関先も濡れないよう養生してくださり、細やかな心配りがありがたかったです。作業後に「寒い中ありがとうございました」と逆に声をかけられて、こちらが恐縮するほど。宮城の大変な冬場でも安心して頼めると感じました。",
            highlightedWords: ['大崎市', '細やかな心配り', '安心']
        },
        {
            age: "40代",
            gender: "男性",
            priceRating: 4,
            serviceRating: 5,
            overallRating: 5,
            title: "迅速な対応に感謝しています",
            testimonialText: "引っ越しに伴い、古い家電や家具をまとめて処分していただきました。見積もりから作業完了まで非常にスムーズで、スタッフの方々も丁寧で好感が持てました。",
            highlightedWords: ['迅速', '丁寧']
        }
    ];

    const testimonials = Array.from({ length: 33 }, (_, i) => ({
        ...baseTestimonials[i % baseTestimonials.length],
        id: i + 1
    }));

    const totalPages = Math.ceil(testimonials.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const currentTestimonials = testimonials.slice(startIndex, endIndex);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const getPageNumbers = () => {
        const pages: (number | string)[] = [];

        if (totalPages <= 7) {
            // Show all pages if 7 or fewer
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            // Always show first page
            pages.push(1);

            if (currentPage > 3) {
                pages.push('...');
            }

            // Show pages around current page
            const start = Math.max(2, currentPage - 1);
            const end = Math.min(totalPages - 1, currentPage + 1);

            for (let i = start; i <= end; i++) {
                if (!pages.includes(i)) {
                    pages.push(i);
                }
            }

            if (currentPage < totalPages - 2) {
                pages.push('...');
            }

            // Always show last page
            if (!pages.includes(totalPages)) {
                pages.push(totalPages);
            }
        }

        return pages;
    };

    return (
        <div style={{ padding: '40px 20px', background: '#f4f4f4', minHeight: '100vh' }}>
            <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 10px', textAlign: 'center' }}>
                <span style={{ color: 'black', display: 'block', marginBottom: '8px', fontSize: '1.7rem', fontWeight: '600', letterSpacing: '0.05em', textDecoration: 'underline', textUnderlineOffset: '8px' }}>
                    お客様から寄せられた
                </span>
                <h1 style={{ color: 'black', marginBottom: '48px', fontSize: '3rem', fontWeight: 'bold', letterSpacing: '0.05em', lineHeight: '1.4' }}>
                    喜びの声をご紹介
                </h1>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                    {currentTestimonials.map((testimonial, index) => (
                        <TestimonialCardComponent
                            key={`${currentPage}-${index}`}
                            age={testimonial.age}
                            gender={testimonial.gender}
                            priceRating={testimonial.priceRating}
                            serviceRating={testimonial.serviceRating}
                            overallRating={testimonial.overallRating}
                            title={testimonial.title}
                            testimonialText={testimonial.testimonialText}
                            highlightedWords={testimonial.highlightedWords}
                        />
                    ))}
                </div>

                <div style={{ marginTop: '48px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                    {currentPage > 1 && (
                        <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            style={{
                                padding: '8px 12px',
                                background: 'white',
                                border: '1px solid #ddd',
                                borderRadius: '50%',
                                cursor: 'pointer',
                                fontSize: '16px',
                                color: '#333',
                                transition: 'all 0.2s',
                                minWidth: '40px',
                                height: '40px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            ‹
                        </button>
                    )}

                    {getPageNumbers().map((page, index) => {
                        if (page === '...') {
                            return (
                                <span
                                    key={`ellipsis-${index}`}
                                    style={{
                                        padding: '8px 12px',
                                        fontSize: '16px',
                                        color: '#333',
                                        minWidth: '40px',
                                        textAlign: 'center'
                                    }}
                                >
                                    ...
                                </span>
                            );
                        }

                        return (
                            <button
                                key={page}
                                onClick={() => handlePageChange(page as number)}
                                style={{
                                    padding: '8px 12px',
                                    background: page === currentPage ? '#14b8a6' : 'white',
                                    border: page === currentPage ? 'none' : '1px solid #ddd',
                                    borderRadius: '50%',
                                    cursor: 'pointer',
                                    fontSize: '16px',
                                    color: page === currentPage ? 'white' : '#14b8a6',
                                    fontWeight: page === currentPage ? 'bold' : 'normal',
                                    minWidth: '40px',
                                    height: '40px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    transition: 'all 0.2s'
                                }}
                            >
                                {page}
                            </button>
                        );
                    })}

                    {currentPage < totalPages && (
                        <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            style={{
                                padding: '8px 12px',
                                background: 'white',
                                border: '1px solid #ddd',
                                borderRadius: '50%',
                                cursor: 'pointer',
                                fontSize: '16px',
                                color: '#333',
                                transition: 'all 0.2s',
                                minWidth: '40px',
                                height: '40px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            ›
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;
