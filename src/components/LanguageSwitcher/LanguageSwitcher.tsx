"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import React from "react";

const languages = [
  { code: "vi", name: "Tiếng Việt", flag: "🇻🇳", country: "Vietnam" },
  { code: "ja", name: "日本語", flag: "🇯🇵", country: "Japan" },
  { code: "en", name: "English", flag: "🇺🇸", country: "International" },
];

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = React.useCallback(
    (newLocale: string) => {
      // Remove current locale from pathname
      const pathnameWithoutLocale = pathname.replace(`/${locale}`, "");
      // Navigate to new locale
      router.push(`/${newLocale}${pathnameWithoutLocale}`);

      // Save user preference to localStorage
      localStorage.setItem("preferred-locale", newLocale);
    },
    [pathname, locale, router]
  );

  // Auto-detect user's preferred language on first visit
  React.useEffect(() => {
    const savedLocale = localStorage.getItem("preferred-locale");
    if (!savedLocale) {
      // Get browser language
      const browserLang = navigator.language.split("-")[0];
      const supportedLang = languages.find((lang) => lang.code === browserLang);

      if (supportedLang && supportedLang.code !== locale) {
        // Auto-redirect if browser language is supported and different from current
        handleLanguageChange(supportedLang.code);
      }
    }
  }, [locale, handleLanguageChange]);

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-gray-600 hidden md:inline">Language:</span>
      {languages.map((language) => (
        <Button
          key={language.code}
          variant={locale === language.code ? "default" : "outline"}
          size="sm"
          onClick={() => handleLanguageChange(language.code)}
          className="flex items-center gap-2 min-w-[80px]"
          title={`Switch to ${language.name} (${language.country})`}
        >
          <span className="text-lg">{language.flag}</span>
          <span className="hidden sm:inline text-xs">
            {language.code.toUpperCase()}
          </span>
        </Button>
      ))}
    </div>
  );
}
