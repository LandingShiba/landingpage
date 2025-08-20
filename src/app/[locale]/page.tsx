"use client";

import CaseStudiesSection from "@/components/CaseStudiesSection/CaseStudiesSection";
import ComparisonTable from "@/components/ComparisonTable/ComparisonTable";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer/Footer";
// import { CaseStudiesSection } from "@/components/CaseStudiesSection";
// import ComparisonTable from "@/components/ComparisonTable/ComparisonTable";
// import FAQ from "@/components/FAQ";
// import Footer from "@/components/Footer/Footer";
import HeroSection from "@/components/Hero/HeroSection";
// import ProblemsSection from "@/components/ProblemsSection/ProblemsSection";
import { ProcessFlowExample } from "@/components/ProcessFlow";
import { ReasonsSection } from "@/components/ReasonsSection";
import { RecoverableItems } from "@/components/Recoverable";
import { ReviewsSection } from "@/components/ReviewsSection";
import { ServiceCardSection } from "@/components/service-card";
import { ToTopButton } from "@/components/ToTopButton";
import Voucher from "@/components/Voucher/Voucher";

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

      <CaseStudiesSection listItem={1} />

      <FAQ />

      <ToTopButton />

      <Footer />
    </main>
  );
}
