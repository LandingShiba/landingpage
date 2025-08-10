"use client";

import ComparisonTable from "@/components/ComparisonTable/ComparisonTable";
import InnerHeader from "@/components/Header/InnerHeader";
// Các import khác được giữ lại dưới dạng comment để dễ dàng khôi phục khi cần

import HeroSection from "@/components/Hero/HeroSection";
import ProblemsSection from "@/components/ProblemsSection/ProblemsSection";
import { ReasonsSection } from "@/components/ReasonsSection";
import Voucher from "@/components/Voucher/Voucher";
import MenuNav from "@/components/menu-nav/MenuNav";
import { ServiceCardSection } from "@/components/service-card";
// import MenuNav from "@/components/menu-nav/MenuNav";
// import ComparisonTable from "@/components/ComparisonTable/ComparisonTable";
// import RecoverableItems from "@/components/Recoverable/Recoverable";
// import FAQ from "@/components/FAQ";
// import { ProcessFlowExample } from "@/components/ProcessFlow";
// import { RecyclingSectionExample } from "@/components/RecyclingSection";
// import { ToTopButton } from "@/components/ToTopButton";
// import Footer from "@/components/Footer/Footer";
// import { ReasonsSection } from "@/components/ReasonsSection";
// import { ReviewsSection } from "@/components/ReviewsSection";
// import { CaseStudiesSection } from "@/components/CaseStudiesSection";
// import ProblemsSection from "@/components/ProblemsSection/ProblemsSection";

export default function Home() {
  return (
    <main className="bg-white min-h-screen">
      <div className="h-[48px] md:h-[100px]">
        <InnerHeader />
      </div>
      <div className="hidden md:block">
        <MenuNav />
      </div>
      <HeroSection />

      <div className="max-w-7xl mx-auto px-4 md:py-24 py-0">
        <Voucher className="mx-auto" />
      </div>

      <ServiceCardSection />

      {/* <ProblemsSection /> */}
      <ReasonsSection />

      <ComparisonTable />

      {/*<ComparisonTable />
      <ProcessFlowExample />
      <RecyclingSectionExample />

      <ReviewsSection />

      <RecoverableItems />

      <CaseStudiesSection />

      <FAQ />

      <ToTopButton />

      <Footer /> */}
    </main>
  );
}
