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
        <main className="bg-white mx-auto min-h-screen leading-[1.3]">
            {/* <div className="h-[100px]">
                <InnerHeader />
            </div>

            <MenuNav />
            <BannerSection title={t('company.title')} /> */}

            <div className="container max-w-[1440px] mx-auto px-5 sm:py-5 sm:px-0">
                {/* <div className="sm:mx-35"> */}
                <div className="sm:mx-auto sm:max-w-5xl">
                    <div className="mx-0">
                        <Breadcrumb items={itemsBreadcrumb} />
                    </div>

                    {/* Section About */}
                    <div className="relative sm:h-[36rem] mt-8 px-4 pt-5 pb-30 sm:mt-[60px] sm:px-[40px] sm:py-13 border-[8px] border-[#02662A] rounded-[30px]">
                        <div className="">
                            <p className="text-[20px] sm:text-[30px] font-bold text-[#02662A] mb-[30px] leading-5">{t('company.about')}</p>
                            <p className="text-[12px] sm:text-[20px]">{t('company.aboutSub1')}</p>
                            <p className="text-[12px] sm:text-[20px]">{t('company.aboutSub2')}</p>
                            <p className="text-[12px] sm:text-[20px]">{t('company.aboutSub3')}</p>
                            <p className="text-[12px] sm:text-[20px]">{t('company.aboutSub4')}</p>
                        </div>

                        <div className="absolute left-5 bottom-13 sm:left-28 sm:bottom-20">
                            <div className="flex justify-center gap-6">
                                {[...Array(5)].map((_, index) => (
                                    <div key={index} className="relative sm:size-22 size-5">
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

                        <div className="absolute -bottom-6 right-0 sm:bottom-[-44px] sm:w-[340px] sm:h-[340px] size-38">
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
                        <h2 className="text-[20px] sm:text-[30px] font-bold text-center">{t('company.managementPhilosophy.title')}</h2>

                        <div className="border-l-4 border-[#2B5D90] pl-[33px] mt-[14px] mb-[22px]">
                            <h3 className="sm:text-[20px] font-bold">{t('company.managementPhilosophy.label')}</h3>
                        </div>
                        <p className="sm:text-[20px]">
                            {t('company.managementPhilosophy.content')}
                        </p>

                    </div>

                    {/*  Section Company Detail*/}
                    <div className="border-2 border-[#2B5D90] pt-[37px] px-[21px] pb-[11px] mt-[85px]">
                        <h2 className="text-[20px] sm:text-[30px] font-bold text-center">
                            事業内容
                        </h2>
                        {Object.entries(companyDetailDatas).map(([detailKey, detail]) => (
                            <div key={detailKey} className="mb-[50px]">
                                {/* 不用品回収事業 */}
                                <div className="border-l-4 border-[#2B5D90]  pl-[33px] mt-[14px] mb-[22px]">
                                    <h3 className="sm:text-[20px] font-bold">{detail.label}</h3>
                                </div>
                                <p
                                    className="sm:text-[20px]"
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

                    <div className="w-full mx-auto sm:h-screen h-[28rem] sm:overflow-hidden">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6471.313224325567!2d139.90473657535063!3d35.808362522980566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601884cfb93bef83%3A0x4285a00b3986c8b6!2s6-ch%C5%8Dme-473%20Sakaech%C5%8D%2C%20Matsudo%2C%20Chiba%20271-0062!5e0!3m2!1sen!2sjp!4v1754187385183!5m2!1sen!2sjp"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    )
}