import BannerSection from "@/components/Banner/BannerSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import React from "react";

const Work = () => {
  return (
    <div className="bg-white">
      <BannerSection title="不用品回収「エコグローバル」の作業事例" />

      <CaseStudiesSection isWorkPage={true} listItem={3} />
    </div>
  );
};

export default Work;
