import React from "react";
import { ProcessFlow, ProcessStep } from "./";

const ProcessFlowExample: React.FC = () => {
  const steps: ProcessStep[] = [
    {
      stepNumber: 1,
      title: "まずはお気軽にお問い合わせください",
      description:
        "お電話（0477-234-143）かメール、もしくはLINEにてお問い合わせください。全ての受付窓口で24時間いつでも受付中です（通話料無料）",
    },
    {
      stepNumber: 2,
      title: "すぐにお見積りに伺います（無料)",
      description: "日本全国内どこへでも無料見積に伺います。",
    },
    {
      stepNumber: 3,
      title: "回収作業開始（日時指定可 / 最短即日）",
      description:
        "お客様のご自宅や指定された場所に到着後、お客様との最終確認を行い、作業に着手します。",
    },
    {
      stepNumber: 4,
      title: "作業終了、お支払い（追加費用の発生ナシ）",
      description:
        "作業が全て終了し、お客様に最終的な確認をしていただいた後、お支払いの手続きに移ります。",
    },
  ];

  return (
    <ProcessFlow
      title="とってもカンタン"
      subtitle="不用品回収までの流れ"
      steps={steps}
    />
  );
};

export default ProcessFlowExample;
