import { hasLocale, NextIntlClientProvider } from "next-intl";
import {
  getMessages,
  getTranslations,
  setRequestLocale,
} from "next-intl/server";
import { notFound } from "next/navigation";
import { type Metadata } from "next";
import { routing } from "@/i18n/routing";
import LocaleWrapper from "@/components/LocaleWrapper";
import InnerHeader from "@/components/Header/InnerHeader";
import Footer from "@/components/Footer/Footer";
import MenuNav from "@/components/menu-nav/MenuNav";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
    alternates: {
      canonical: "/",
      languages: {
        ja: "/ja",
        vi: "/vi",
        en: "/en",
      },
    },
  };
}

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  // Validate that the incoming `locale` parameter is valid
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <>
      <NextIntlClientProvider messages={messages}>
        <LocaleWrapper locale={locale}>
          <div className="h-[48px] md:h-[100px]">
            <InnerHeader />
          </div>
          <div className="md:block hidden">
            <MenuNav />
          </div>
          {children}
          <Footer />
        </LocaleWrapper>
      </NextIntlClientProvider>
    </>
  );
}
