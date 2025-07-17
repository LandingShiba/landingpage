import React from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl';

export default function BannerSection() {
    const t = useTranslations();
    return (
        <section className="relative bg-[#D6EEFF] h-[300px] overflow-hidden">
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
            <div className="flex justify-center relative z-10">
                <div>
                    <h1 className='font-bold text-[40px] mt-[100px]'>{t('privacy.title')}</h1>
                </div>

                <Image
                    src='/images/banner/banner-character-2.png'
                    alt='Banner Character'
                    width={180.39}
                    height={232}
                    className='absolute top-[126.61px] left-[189.8px]'
                />
            </div>

        </section>
    )
}