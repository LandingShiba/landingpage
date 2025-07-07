"use client";

import InnerHeader from "@/components/Header/InnerHeader";
import MenuNav from "@/components/menu-nav/MenuNav";
import HeroSection from "@/components/Hero/HeroSection";
import Voucher from "@/components/Voucher/Voucher";
import { ServiceCardSection } from "@/components/service-card";
import ComparisonTable from "@/components/ComparisonTable/ComparisonTable";
import { ProcessFlowExample } from "@/components/ProcessFlow";
import { RecyclingSectionExample } from "@/components/RecyclingSection";

export default function Home() {
  return (
    <main className="bg-white min-h-screen">
      <div className="h-[100px]">
        <InnerHeader />
      </div>
      <MenuNav />
      <HeroSection />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <Voucher className="mx-auto" />
      </div>
      <ServiceCardSection />

      <ComparisonTable />
      <ProcessFlowExample />
      <RecyclingSectionExample />
    </main>
  );
}
