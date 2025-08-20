"use client";
import BannerSection from "@/components/Banner/BannerSection";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import ListTittleTerm from "@/components/Table/ListTittleTerm";
import ListTerm from "@/components/Table/ListTerm";
import { ToTopButton } from "@/components/ToTopButton";
import { useTranslations } from "next-intl";
import { BreadcrumbItem } from "../company/page";

export default function PrivacyPage() {
  const t = useTranslations();
  const itemsBreadcrumb: BreadcrumbItem[] = [
    { label: t("navigation.home"), href: "/" },
    { label: t("navigation.privacy"), href: "" },
  ];

  const termsData = t.raw("privacy.terms");

  return (
    <main className="bg-white mx-auto min-h-screen leading-[1.3]">
      {/* <div className="h-[100px]">
                <InnerHeader />
            </div>
            <MenuNav /> */}
      <BannerSection title={t("privacy.title")} />

      <div className="container max-w-[1440px] mx-auto px-5 sm:px-6 lg:py-5 lg:px-0">
        <div className="lg:mx-auto lg:max-w-5xl">
          <div className="mx-auto">
            <Breadcrumb items={itemsBreadcrumb} />
          </div>

          {/* <div className="mb-[46px] mx-auto">
                        <h3 className="mt-[28px] text-[20px]">{t('privacy.titleSub')}</h3>
                    </div> */}

          <div className="mt-8 lg:mt-[60px]"></div>

          <ListTittleTerm termsData={termsData} />

          <div className="mt-5 lg:mt-[69px]"></div>

          <ListTerm termsData={termsData} />
        </div>
      </div>

      <ToTopButton />

      {/* <Footer /> */}
    </main>
  );
}
