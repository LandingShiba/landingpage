"use client";

import { useEffect } from "react";

interface LocaleWrapperProps {
  locale: string;
  children: React.ReactNode;
}

export default function LocaleWrapper({
  locale,
  children,
}: LocaleWrapperProps) {
  useEffect(() => {
    // Set the lang attribute on the html element
    if (typeof document !== "undefined") {
      document.documentElement.lang = locale;
    }
  }, [locale]);

  return <>{children}</>;
}
