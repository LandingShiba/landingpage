import { useTranslations as useNextIntlTranslations } from "next-intl";

export function useTranslations(namespace?: string) {
  return useNextIntlTranslations(namespace);
}

// Convenience hooks for common namespaces
export function useNavigation() {
  return useNextIntlTranslations("navigation");
}

export function useHero() {
  return useNextIntlTranslations("hero");
}

export function useServices() {
  return useNextIntlTranslations("services");
}

export function useContact() {
  return useNextIntlTranslations("contact");
}

export function useCommon() {
  return useNextIntlTranslations("common");
}
