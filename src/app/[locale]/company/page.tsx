'use client'
import InnerHeader from "@/components/Header/InnerHeader"
import MenuNav from "@/components/menu-nav/MenuNav"
import BannerSection from "@/components/Banner/BannerSection"
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb"
import { useTranslations } from 'next-intl';
import Image from "next/image"
import { log } from "console"

export default function Company() {
    const t = useTranslations();

    const itemsBreadcrumb = [
        { label: t('navigation.home'), href: '/' },
        { label: t('navigation.about') }
    ]

    const companyDetailDatas = t.raw('company.companyDetails')

    return (
        <main className="bg-white mx-auto min-h-screen">
            <div className="h-[100px]">
                <InnerHeader />
            </div>

            <MenuNav />
            <BannerSection title={t('company.title')} />

            <div className="container max-w-[1440px] mx-auto py-[40px]">
                <div className="mx-[140px]">
                    <div className="mx-auto max-w-[1080px]">
                        <Breadcrumb items={itemsBreadcrumb} />
                    </div>

                    <div className="relative max-w-[1080px] h-[554px] mt-[60px] px-[40px] py-[53px] border-[8px] border-[#2B5D90] rounded-[30px]">
                        <div className="">
                            <p className="text-[30px] font-bold text-[#2B5D90] mb-[30px]">{t('company.about')}</p>
                            <p>{t('company.aboutSub1')}</p>
                            <p>{t('company.aboutSub2')}</p>
                            <p>{t('company.aboutSub3')}</p>
                            <p>{t('company.aboutSub4')}</p>
                        </div>

                        <div className="absolute left-[82px] bottom-[26.37px]">
                            <div className="flex justify-center gap-6 mb-8 pt-8">
                                {[...Array(5)].map((_, index) => (
                                    <div key={index} className="relative w-20 h-20">
                                        <Image
                                            src="/images/recycling/package.png"
                                            alt="Package decoration"
                                            fill
                                            className="object-contain drop-shadow-lg"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="absolute bottom-[-44px] right-0 w-[340px] h-[340px]">
                            <Image
                                src={'/images/mascot-thanks.png'}
                                alt="Eco Global Mascot"
                                fill
                                className="object-contain"
                            />
                        </div>


                    </div>


                    <div className="mt-[78px]">
                        <h2 className="text-[30px] font-bold text-center">{t('company.managementPhilosophy.title')}</h2>

                        <div className="border-l-4 border-[#2B5D90] pl-[33px] mt-[14px] mb-[22px]">
                            <h3 className="text-[20px] font-bold">{t('company.managementPhilosophy.label')}</h3>
                        </div>
                        <p className="">
                            {t('company.managementPhilosophy.content')}
                        </p>

                    </div>

                    {/* 事業内容 Section */}
                    <div className="border-2 border-[#2B5D90] pt-[37px] px-[21px] pb-[11px] mt-[85px]">
                        <h2 className="text-[30px] font-bold text-center">
                            事業内容
                        </h2>
                        {Object.entries(companyDetailDatas).map(([detailKey, detail]) => (
                            <div key={detailKey} className="mb-[50px]">
                                {/* 不用品回収事業 */}
                                <div className="border-l-4 border-[#2B5D90]  pl-[33px] mt-[14px] mb-[22px]">
                                    <h3 className="text-[20px] font-bold">{detail.label}</h3>
                                </div>
                                <p
                                    className=""
                                    dangerouslySetInnerHTML={{ __html: detail.content }}
                                />
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </main>
    )
}