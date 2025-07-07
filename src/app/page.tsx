import { routing } from "@/i18n/routing";
import { redirect } from "next/navigation";

// This page only renders when the middleware doesn't match a locale
export default function RootPage() {
  redirect(`/${routing.defaultLocale}`);
}
