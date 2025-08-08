import React from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl';

export default function BannerSection({ title = '' }) {
    const t = useTranslations();
    const formatTitle = (title) => {
        if (title.includes('(/)')) {
            const parts = title.split('(/)');
            return (
                <>
                    {/* Mobile/Tablet*/}
                    <span className="lg:hidden">
                        {parts.map((part, index) => (
                            <div key={index}>{part.trim()}</div>
                        ))}
                    </span>

                    {/* PC */}
                    <span className="hidden lg:inline">
                        {parts.join(' ')}
                    </span>
                </>
            );
        }
        return title;
    };
    return (
        <section className="relative bg-[#7BAD4F4D]/30 h-[144px] sm:h-[282px] lg:h-[300px] w-screen overflow-hidden">
            <div className="absolute inset-0 z-1">
                <Image
                    src="/images/banner/banner-bg.png"
                    alt="Banner Background"
                    fill
                    className="object-cover "
                    priority
                />
            </div>


            {/* Main text content */}
            <div className="flex justify-center items-center relative z-10 h-full">
                <div className='text-center'>
                    <h1 className='font-bold text-[20px] sm:text-[36px] lg:text-[40px]'>{formatTitle(title)}</h1>
                </div>
                <div className="absolute top-15 left-4 sm:left-8 sm:top-29 lg:top-32 lg:left-40 w-21 h-21 size-22 sm:size-43 lg:size-[180px]">
                    <Image
                        src='/images/banner/banner-character-2.png'
                        alt='Banner Character'
                        fill
                        className='object-container'
                    />
                </div>

            </div>

        </section>
    )
}