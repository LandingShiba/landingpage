"use client";
import React, { useState } from 'react';
import CaseStudyCardComponent from './CaseStudyCardComponent';


const CaseStudyCard: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const ITEMS_PER_PAGE = 10;

    const baseCaseStudies = [
        {
            beforeImage: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&h=600&fit=crop",
            afterImage: "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?w=800&h=600&fit=crop",
            staffCount: "2名",
            workTime: "30分",
            items: "和タンス",
            description: [
                "引っ越し後に残った段ボールの回収を行いました。実家ごみに出すだけのように見えますが、実際には回収日が限られ、ご本人も忙しかったため依頼をいただきました。また、量が多く雨に濡れない場所がなかったため、玄関周りが片付かない状態が続いていたとのことでした。",
                "玄関先にほぼほどよき後がきなくなり、次の整理作業が進めやすい状態に至りました。静かな空間の中で、ゆっくりと片付けが前に進むお手伝いができたと思います。許しい春らしに向けて、気持ちを整えるー歩になったようでした。"
            ]
        },
        {
            beforeImage: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop",
            afterImage: "https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=800&h=600&fit=crop",
            staffCount: "3名",
            workTime: "45分",
            items: "ソファ、テーブル、椅子",
            description: "引っ越しに伴い、リビングの大型家具をまとめて処分させていただきました。ソファは3人掛けで重量もあり、階段での搬出には細心の注意を払いました。壁や床を傷つけないよう養生をしっかり行い、スムーズに作業を完了することができました。お客様からは「プロの仕事ですね」とお褒めの言葉をいただき、スタッフ一同励みになりました。"
        },
        {
            beforeImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
            afterImage: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&h=600&fit=crop",
            staffCount: "2名",
            workTime: "25分",
            items: "冷蔵庫、洗濯機",
            description: "買い替えに伴う家電の回収作業でした。冷蔵庫は大型で、玄関が狭かったため慎重に角度を調整しながら搬出しました。洗濯機も含め、リサイクル法に基づき適切に処理させていただきました。作業後はすっきりとしたスペースができ、新しい家電の設置準備が整いました。"
        }
    ];

    const caseStudies = Array.from({ length: 33 }, (_, i) => ({
        ...baseCaseStudies[i % baseCaseStudies.length],
        id: i + 1
    }));

    const totalPages = Math.ceil(caseStudies.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const currentCaseStudies = caseStudies.slice(startIndex, endIndex);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const getPageNumbers = () => {
        const pages: (number | string)[] = [];

        if (totalPages <= 7) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            pages.push(1);

            if (currentPage > 3) {
                pages.push('...');
            }

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

            if (!pages.includes(totalPages)) {
                pages.push(totalPages);
            }
        }

        return pages;
    };

    return (
        <div style={{ padding: '40px 20px', background: '#f4f4f4', minHeight: '100vh' }}>
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                <div className='text-center'>
                    <span style={{ color: '#333333', display: 'block', marginBottom: '8px', fontSize: '1.7rem', fontWeight: '600', letterSpacing: '0.05em', textDecoration: 'underline', textUnderlineOffset: '8px' }}>
                        お客様から寄せられた
                    </span>
                    <h1 style={{ color: '#333333', marginBottom: '48px', fontSize: '3rem', fontWeight: 'bold', letterSpacing: '0.05em', lineHeight: '1.4' }}>
                        喜びの声をご紹介
                    </h1>

                </div>

                {currentCaseStudies.map((caseStudy, index) => (
                    <CaseStudyCardComponent
                        key={`${currentPage}-${index}`}
                        beforeImage={caseStudy.beforeImage}
                        afterImage={caseStudy.afterImage}
                        staffCount={caseStudy.staffCount}
                        workTime={caseStudy.workTime}
                        items={caseStudy.items}
                        description={caseStudy.description}
                    />
                ))}

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

export default CaseStudyCard;
