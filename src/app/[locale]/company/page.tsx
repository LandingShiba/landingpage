'use client'
import InnerHeader from "@/components/Header/InnerHeader"
import MenuNav from "@/components/menu-nav/MenuNav"
import BannerSection from "@/components/Banner/BannerSection"
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb"
import { useTranslations } from 'next-intl';
import Image from "next/image"
import CategorySection from "@/components/CategorySection"
import { CategoryItem } from "@/components/CategorySection"
import Footer from "@/components/Footer/Footer"
export default function Company() {
    const t = useTranslations();

    const itemsBreadcrumb = [
        { label: t('navigation.home'), href: '/' },
        { label: t('navigation.about') }
    ]

    const companyDetailDatas = t.raw('company.companyDetails')
    const companyOverviewCategoriesDatas = t.raw('company.companyOverview.categories')
    const companyOverviewDatas: CategoryItem[] = companyOverviewCategoriesDatas.map((category: any) => ({
        title: category.title,
        titleColor: "#000000",
        content: category.content,
    }));
    const companyLocationCategoriesDatas = t.raw('company.companyLocation.categories')
    const companyLocationDatas: CategoryItem[] = companyLocationCategoriesDatas.map((category: any) => ({
        title: category.title,
        titleColor: "#000000",
        content: category.content,
    }));



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

                    {/* Section About */}
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

                    {/* Section Company Management Philosophy */}
                    <div className="mt-[78px]">
                        <h2 className="text-[30px] font-bold text-center">{t('company.managementPhilosophy.title')}</h2>

                        <div className="border-l-4 border-[#2B5D90] pl-[33px] mt-[14px] mb-[22px]">
                            <h3 className="text-[20px] font-bold">{t('company.managementPhilosophy.label')}</h3>
                        </div>
                        <p className="">
                            {t('company.managementPhilosophy.content')}
                        </p>

                    </div>

                    {/*  Section Company Detail*/}
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


                    {/* Section Company Overview */}
                    <div className="mt-[30px]">
                        <CategorySection
                            headerTitle={t('company.companyOverview.title')}
                            backgroundColor="#FFFFFF"
                            headerTextColor="#000000"
                            backgroundLabelColor="#FFFFFF"
                            categories={companyOverviewDatas}
                        />
                    </div>

                    {/* Section Company Location */}
                    <div className="mt-[30px]">
                        <CategorySection
                            headerTitle={t('company.companyOverview.title')}
                            backgroundColor="#FFFFFF"
                            headerTextColor="#000000"
                            backgroundLabelColor="#FFFFFF"
                            categories={companyLocationDatas}
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    )
}