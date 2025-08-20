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

const dataCaseStudies = [
  {
    table: [
      {
        example: "回収例",
        workStaff: "3名",
        fee: "55,000円",
      },
    ],
    content: `担当スタッフから\n
実家の遺品整理を依頼された案件がありました。お客様のお父様の部屋で、長年手を付けられていなかったため、物が溢れている状態でした。このような場合、私たちにとって最も大切なのは、故人の品々を丁寧に扱いながら、効率的に作業を進めることです。\n
作業を始める前に、部屋の状態をしっかりと確認し、どのように進めるか計画を立てました。故人の思い出が詰まった品々には特に注意を払い、お客様と相談しながら、どの品を保持し、どの品を処分するか決定しました。`,
  },
];
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

      <CaseStudiesSection dataCaseStudies={dataCaseStudies} />

      <FAQ />

      <ToTopButton />

      <Footer />
    </main>
  );
}
