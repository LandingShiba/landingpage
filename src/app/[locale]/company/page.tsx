// "use client";
import BannerSection from "@/components/Banner/BannerSection";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import { useTranslations } from "next-intl";
import Image from "next/image";
import CategorySection from "@/components/CategorySection";
import { CategoryItem } from "@/components/CategorySection";
// import Footer from "@/components/Footer/Footer";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "会社概要 | 不用品回収エコ・グローバル",
  description:
    "エコ・グローバル株式会社の会社概要、経営理念、事業内容、所在地などをご紹介します。不用品回収、リサイクル事業を通じて、環境に配慮したサービスを提供しています。",
  keywords:
    "エコ・グローバル, 会社概要, 不用品回収, リサイクル, 経営理念, 事業内容",
  openGraph: {
    title: "会社概要 | 不用品回収エコ・グローバル",
    description:
      "エコ・グローバル株式会社の会社概要、経営理念、事業内容、所在地などをご紹介します。",
    siteName: "不用品回収エコ・グローバル",
    locale: "ja_JP",
    type: "website",
  },
};

export type BreadcrumbItem = {
  label: string;
  href: string;
};

type CompanyDetailData = {
  [key: string]: {
    label: string;
    content: string;
  };
};

export default function Company(): React.ReactElement {
  const t = useTranslations();

  const itemsBreadcrumb: BreadcrumbItem[] = [
    { label: t("navigation.home"), href: "/" },
    { label: t("navigation.about"), href: "" },
  ];

  const companyDetailDatas = t.raw(
    "company.companyDetails"
  ) as CompanyDetailData;
  const companyOverviewCategoriesDatas = t.raw(
    "company.companyOverview.categories"
  ) as CategoryItem[];
  const companyOverviewDatas: CategoryItem[] =
    companyOverviewCategoriesDatas.map((category: CategoryItem) => ({
      title: category.title,
      titleColor: "#000000",
      content: category.content,
    }));
  const companyLocationCategoriesDatas = t.raw(
    "company.companyLocation.categories"
  ) as CategoryItem[];
  const companyLocationDatas: CategoryItem[] =
    companyLocationCategoriesDatas.map((category: CategoryItem) => ({
      title: category.title,
      titleColor: "#000000",
      content: category.content,
    }));

  const formatTitle = (title: string): React.ReactNode => {
    if (title.includes("(/)")) {
      const parts = title.split("(/)");
      return (
        <>
          {/* Mobile/Tablet*/}
          <span className="lg:hidden">
            {parts.map((part, index) => (
              <div key={index}>{part.trim()}</div>
            ))}
          </span>

          {/* PC */}
          <span className="hidden lg:inline">{parts.join(" ")}</span>
        </>
      );
    }
    return title;
  };

  return (
    <main className="bg-white mx-auto min-h-screen leading-[1.3]">
      {/* <div className="h-[100px]">
                <InnerHeader />
            </div>

            <MenuNav /> */}
      <BannerSection title={t("company.title")} />

      <div className="container max-w-[1440px] mx-auto px-5 sm:px-6 lg:py-5 lg:px-0">
        {/* <div className="lg:mx-35"> */}
        <div className="lg:mx-auto lg:max-w-[1080px]">
          <div className="mx-0 ">
            <Breadcrumb items={itemsBreadcrumb} />
          </div>

          {/* Section About */}
          <div
            className="relative sm:h-135 lg:h-[556px] mt-5 sm:mt-10 lg:mt-15 px-[18px] sm:px-5 lg:px-8 lg:py-13 pt-5 sm:pt-6 lg:pt-13 pb-30 
                                    border-[2px] sm:border-[4px] lg:border-[8px] border-[#02662A] rounded-[20px] sm:rounded-[39px] lg:rounded-[30px]"
          >
            <div className="h-full">
              <p className="text-[20px] sm:text-[26px] lg:text-[30px] text-center lg:text-justify font-bold text-[#02662A] mb-[30px]">
                {formatTitle(t("company.about"))}

                {/* <span>{t('company.about1')}</span>
                                <span className="lg:hidden inline"><br /></span>
                                <span>{t('company.about2')}</span> */}
              </p>
              <p className="text-[12px] sm:text-[16px] lg:text-[20px]">
                {t("company.aboutSub1")}
              </p>
              <p className="text-[12px] sm:text-[16px] lg:text-[20px]">
                {t("company.aboutSub2")}
              </p>
              <p className="text-[12px] sm:text-[16px] lg:text-[20px]">
                {t("company.aboutSub3")}
              </p>
              <p className="text-[12px] sm:text-[16px] lg:text-[20px]">
                {t("company.aboutSub4")}
              </p>
            </div>

            <div className="absolute left-5 bottom-10 sm:left-6 sm:bottom-25 lg:bottom-13 lg:left-28 lg:bottom-20">
              <div className="flex justify-center gap-2 sm:gap-[11px] lg:gap-6">
                {[...Array(5)].map((_, index) => (
                  <div
                    key={index}
                    className="relative size-6 sm:size-12 lg:size-18"
                  >
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

            <div className="absolute -bottom-6 right-4 sm:right-16 sm:-bottom-10 lg:-bottom-11 lg:right-4 size-38 sm:size-73 lg:size-[300px] ">
              <Image
                src={"/images/mascot-thanks.png"}
                alt="Eco Global Mascot"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Section Company Management Philosophy */}
          <div className="mt-[78px]">
            <h2 className="text-[20px] lg:text-[30px] font-bold text-center">
              {t("company.managementPhilosophy.title")}
            </h2>

            <div className="border-l-4 border-[#2B5D90] pl-[33px] mt-[14px] mb-[22px]">
              <h3 className="lg:text-[20px] font-bold">
                {t("company.managementPhilosophy.label")}
              </h3>
            </div>
            <p className="lg:text-[20px]">
              {t("company.managementPhilosophy.content")}
            </p>
          </div>

          {/*  Section Company Detail*/}
          <div className="border-2 border-[#2B5D90] pt-[37px] px-[21px] pb-[11px] mt-[85px]">
            <h2 className="text-[20px] lg:text-[30px] font-bold text-center">
              事業内容
            </h2>
            {Object.entries(companyDetailDatas).map(([detailKey, detail]) => (
              <div key={detailKey} className="mb-[50px]">
                {/* 不用品回収事業 */}
                <div className="border-l-4 border-[#2B5D90]  pl-[33px] mt-[14px] mb-[22px]">
                  <h3 className="lg:text-[20px] font-bold">{detail.label}</h3>
                </div>
                <p
                  className="lg:text-[20px]"
                  dangerouslySetInnerHTML={{ __html: detail.content }}
                />
              </div>
            ))}
          </div>

          {/* Section Company Overview */}
          <div className="mt-[30px]">
            <CategorySection
              headerTitle={t("company.companyOverview.title")}
              backgroundColor="#FFFFFF"
              headerTextColor="#000000"
              backgroundLabelColor="#FFFFFF"
              categories={companyOverviewDatas}
            />
          </div>

          {/* Section Company Location */}
          <div className="mt-[30px]">
            <CategorySection
              headerTitle={t("company.companyLocation.title")}
              backgroundColor="#FFFFFF"
              headerTextColor="#000000"
              backgroundLabelColor="#FFFFFF"
              categories={companyLocationDatas}
            />
          </div>

          <div className="w-full mx-auto lg:h-screen h-[28rem] lg:overflow-hidden">
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
      {/* <Footer /> */}
    </main>
  );
}
