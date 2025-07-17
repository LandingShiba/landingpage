import BannerSection from "@/components/Banner/BannerSection";
import InnerHeader from "@/components/Header/InnerHeader";
import MenuNav from "@/components/menu-nav/MenuNav";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import ListTerm from "@/components/Table/ListTerm";
import { useTranslations } from 'next-intl';

export default function PrivacyPage() {
    const t = useTranslations();
    const itemsBreadcrumb = [
        { label: t('navigation.home'), href: '/' },
        { label: t('navigation.privacy') }
    ]
    return (
        <main className="bg-white mx-auto min-h-screen">
            <div className="h-[100px]">
                <InnerHeader />
            </div>
            <MenuNav />
            <BannerSection />

            <div className="max-w-[1440px] mx-auto px-[140px] py-[40px]">
                <Breadcrumb items={itemsBreadcrumb} />
                <div className="mb-[46px]">
                    <h3 className="mt-[28px]">{t('privacy.titleSub')}</h3>
                </div>

                <ListTerm />
            </div>
        </main>
    )
}