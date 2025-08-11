"use client";

import { CaseStudiesSection } from "@/components/CaseStudiesSection";
import ComparisonTable from "@/components/ComparisonTable/ComparisonTable";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer/Footer";
// import { CaseStudiesSection } from "@/components/CaseStudiesSection";
// import ComparisonTable from "@/components/ComparisonTable/ComparisonTable";
// import FAQ from "@/components/FAQ";
// import Footer from "@/components/Footer/Footer";
import InnerHeader from "@/components/Header/InnerHeader";
import HeroSection from "@/components/Hero/HeroSection";
import ProblemsSection from "@/components/ProblemsSection/ProblemsSection";
import { ProcessFlowExample } from "@/components/ProcessFlow";
import { ReasonsSection } from "@/components/ReasonsSection";
import { RecoverableItems } from "@/components/Recoverable";
import { ReviewsSection } from "@/components/ReviewsSection";
import { ServiceCardSection } from "@/components/service-card";
import { ToTopButton } from "@/components/ToTopButton";
import Voucher from "@/components/Voucher/Voucher";
// Các import khác được giữ lại dưới dạng comment để dễ dàng khôi phục khi cần

// import HeroSection from "@/components/Hero/HeroSection";
// import ProblemsSection from "@/components/ProblemsSection/ProblemsSection";
// import { ProcessFlowExample } from "@/components/ProcessFlow";
// import { ReasonsSection } from "@/components/ReasonsSection";
// import { RecoverableItems } from "@/components/Recoverable";
// import { RecyclingSectionExample } from "@/components/RecyclingSection";
// import { ReviewsSection } from "@/components/ReviewsSection";
// import { ToTopButton } from "@/components/ToTopButton";
// import Voucher from "@/components/Voucher/Voucher";
// import MenuNav from "@/components/menu-nav/MenuNav";
// import { ServiceCardSection } from "@/components/service-card";

export default function Home() {
  return (
    <main className="bg-white min-h-screen">
      <div className="h-[48px] md:h-[100px]">
        <InnerHeader />
      </div>

      <HeroSection />

      <div className="max-w-7xl mx-auto px-4 md:py-24 py-0">
        <Voucher className="mx-auto" />
      </div>

      <ServiceCardSection />

      {/* <ProblemsSection /> */}

      <ReasonsSection />

      <ComparisonTable />

      <ProcessFlowExample />

      <ReviewsSection />

      <RecoverableItems />

      <CaseStudiesSection />

      <FAQ />

      <ToTopButton />

      <Footer />

      
    </main>
  );
}
