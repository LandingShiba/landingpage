import BannerSection from "@/components/Banner/BannerSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "不用品回収「エコグローバル」の作業事例 | エコグローバル",
  description:
    "エコグローバルの実際の作業事例をご紹介します。遺品整理、引越し、不用品回収など、様々なケースに対応した実績をご覧いただけます。",
  keywords: "不用品回収, 作業事例, エコグローバル, 遺品整理, 引越し, 片付け",
  openGraph: {
    title: "不用品回収「エコグローバル」の作業事例",
    description:
      "エコグローバルの実際の作業事例をご紹介します。遺品整理、引越し、不用品回収など、様々なケースに対応した実績をご覧いただけます。",
    // url: "https://ecoglobal.jp/work",
    siteName: "不用品回収エコグローバル",
    locale: "ja_JP",
    type: "website",
  },
};

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
  {
    table: [
      {
        example: "部屋複数",
        workStaff: "3名",
        fee: "5時間",
      },
    ],
    content: `担当スタッフから\n
今回のお客様は、ご自身が長年住まわれたご自宅の建て替えに伴い、家全体の整理と不用品の片付けをご依頼いただきました。特に収納スペースや寝室、納戸には思い出の品や貴重品が多く保管されており、一つずつ確認しながら不要品を分別する作業を行いました。\n
住み慣れたご自宅から次の新たな生活への一歩をお手伝いする中で、心を込めて対応させていただきました。`,
  },
  {
    table: [
      {
        example: "倉庫",
        workStaff: "2名",
        fee: "2時間",
      },
    ],
    content: `担当スタッフから\n
お一人暮らしのお客様が転居の準備が間に合わず、急ぎでの片付けをご依頼いただきました。お仕事でお忙しく、なかなか整理の時間が取れなかったとのこと。限られた時間の中で、必要なものを確認しながら不用品を仕分けし、梱包や搬出も迅速に行いました。\n
引越しに伴う片付けは一度に作業量が多くなりがちですが、当社スタッフが2名体制で丁寧に対応し、お客様が安心して新生活に移行できるようサポートいたしました。「一人では間に合わなかったので助かりました」とのお言葉をいただき、私たちも大変嬉しく思います。`,
  },
];
const Work = () => {
  return (
    <div className="bg-white">
      <BannerSection title="不用品回収「エコグローバル」の作業事例" />

      <CaseStudiesSection isWorkPage={true} dataCaseStudies={dataCaseStudies} />
    </div>
  );
};

export default Work;
