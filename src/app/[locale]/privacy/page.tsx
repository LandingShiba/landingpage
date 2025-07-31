'use client'
import BannerSection from "@/components/Banner/BannerSection";
import InnerHeader from "@/components/Header/InnerHeader";
import MenuNav from "@/components/menu-nav/MenuNav";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import ListTittleTerm from "@/components/Table/ListTittleTerm";
import ListTerm from "@/components/Table/ListTerm";
import { ToTopButton } from "@/components/ToTopButton";
import Footer from "@/components/Footer/Footer";
import { useTranslations } from 'next-intl';

export default function PrivacyPage() {
    const t = useTranslations();
    const itemsBreadcrumb = [
        { label: t('navigation.home'), href: '/' },
        { label: t('navigation.privacy') }
    ]

    const termsData = t.raw('privacy.terms')

    return (
        <main className="bg-white mx-auto min-h-screen">
            <div className="h-[100px]">
                <InnerHeader />
            </div>
            <MenuNav />
            <BannerSection title={t('privacy.tittle')}/>

            <div className="container max-w-[1440px] mx-auto py-[40px]">
                <div className="mx-[140px]">
                    <div className="mx-auto max-w-[1080px]">
                        <Breadcrumb items={itemsBreadcrumb} />
                    </div>

                    <div className="mb-[46px] mx-auto max-w-[1080px]">
                        <h3 className="mt-[28px] text-[20px]">{t('privacy.titleSub')}</h3>
                    </div>

                    <ListTittleTerm termsData={termsData} />

                    <div className="mt-[69px]"></div>

                    <ListTerm termsData={termsData} />

                </div>

            </div>

            <ToTopButton />

            <Footer />
        </main>
    )
}