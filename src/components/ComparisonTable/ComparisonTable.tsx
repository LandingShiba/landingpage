import React, { useState } from "react";

export default function ComparisonTable() {
  const [activeTab, setActiveTab] = useState<number | null>(0);

  const toggleTab = (index: number) => {
    setActiveTab(activeTab === index ? null : index);
  };

  const comparisonData = [
    {
      id: 1,
      title: "対応可能時間",
      neko: "24時間365日対応",
      companyA: "9:00～17:00",
      government: "自治体指定",
    },
    {
      id: 2,
      title: "料金",
      neko: "5500円～",
      companyA: "1万5000円～",
      government: "粗大ごみ処理手数料納付券",
    },
    {
      id: 3,
      title: "追加費用の有無",
      neko: "なし",
      companyA: "要相談",
      government: "なし",
    },
    {
      id: 4,
      title: "キャンセル料",
      neko: "なし",
      companyA: "前日100%",
      government: "なし",
    },
    {
      id: 5,
      title: "最短対応日",
      neko: "即日",
      companyA: "翌日以降",
      government: "指定された収集日",
    },
    {
      id: 6,
      title: "時間指定",
      neko: "可能",
      companyA: "不可",
      government: "不可",
    },
    {
      id: 7,
      title: "スタッフ",
      neko: "経験値の高い\n専任スタッフ",
      companyA: "派遣スタッフ",
      government: "自身で搬出・持ち込み",
    },
    {
      id: 8,
      title: "対応地域",
      neko: "千葉県全域",
      companyA: "地域限定",
      government: "各自治体地域",
    },
    {
      id: 9,
      title: "保険・補償制度",
      neko: "賠償責任保険\n対物5千万円、対人1億円",
      companyA: "賠償責任保険\n対物5千万円、対人1億円",
      government: "なし",
    },
  ];
  return (
    <section className="w-full max-w-7xl mx-auto py-4 md:py-4 lg:py-12 xl:py-16 font-[Montserrat]">
      <div className="max-w-6xl mx-auto p-1.5 md:p-1.5 lg:p-4 xl:p-1 bg-white">
        {/* Header */}
        <div className="text-center mb-2 md:mb-2 lg:mb-6 xl:mb-8">
          <h1 className="text-[10px] md:text-[10px] lg:text-[32px] xl:text-[40px] font-bold mb-0.5 md:mb-0.5 lg:mb-1.5 xl:mb-2 text-black font-[Montserrat]">
            こんなに違う！
          </h1>
          <h2 className="text-[13px] md:text-[13px] lg:text-[56px] xl:text-[70px] font-bold text-black font-[Montserrat]">
            エコ・グローバルと他社のサービス比較
          </h2>
        </div>

        {/* Mobile Accordion Table */}
        <div className="md:hidden">
          {/* <div className="flex justify-center mb-4 relative">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#00a842]"></div>
            <div className="bg-[#00a842] text-white font-bold text-base py-2 px-6 text-center border-2 border-[#00a842] font-[Montserrat] rounded-t-md w-[120px] z-10">
              エコ・グローバル
            </div>
          </div> */}

          <div className="rounded-md overflow-hidden shadow-sm">
            {comparisonData.map((item, index) => (
              <div
                key={item.id}
                className="mb-2 rounded-md overflow-hidden shadow-sm border border-gray-100"
              >
                <div
                  className={`flex items-center justify-between p-3 cursor-pointer ${
                    activeTab === index ? "bg-[#e9ffd6] font-bold" : "bg-white"
                  }`}
                  onClick={() => toggleTab(index)}
                >
                  <h3 className="font-medium text-sm">{item.title}</h3>
                  <div
                    className={`flex items-center justify-center w-6 h-6 rounded-full ${
                      activeTab === index
                        ? "bg-[#00a842] text-white"
                        : "border border-[#00a842] text-[#00a842]"
                    }`}
                  >
                    <span className="text-sm font-bold">
                      {activeTab === index ? "−" : "+"}
                    </span>
                  </div>
                </div>

                {activeTab === index && (
                  <div className="p-4 bg-white border-t border-gray-100">
                    <div className="grid grid-cols-3 gap-3">
                      <div className="col-span-1 flex flex-col">
                        <div className="bg-[#acabab] text-white py-2 px-1 text-xs font-bold text-center mb-2 rounded-sm">
                          自治体
                        </div>
                        <div className="bg-white border border-gray-200 rounded-sm p-2 flex-1 flex items-center justify-center">
                          <p className="text-[#acacac] text-xs text-center whitespace-pre-line">
                            {item.government}
                          </p>
                        </div>
                      </div>

                      <div className="col-span-1 flex flex-col">
                        <div className="bg-[#00a842] text-white py-2 px-1 text-xs font-bold text-center mb-2 rounded-sm">
                          エコ・グローバル
                        </div>
                        <div className="bg-white border border-[#00a842] rounded-sm p-2 flex-1 flex items-center justify-center">
                          <p className="text-[#00a842] text-xs font-bold text-center whitespace-pre-line">
                            {item.neko}
                          </p>
                        </div>
                      </div>

                      <div className="col-span-1 flex flex-col">
                        <div className="bg-[#acabab] text-white py-2 px-1 text-xs font-bold text-center mb-2 rounded-sm">
                          A社
                        </div>
                        <div className="bg-white border border-gray-200 rounded-sm p-2 flex-1 flex items-center justify-center">
                          <p className="text-[#acacac] text-xs text-center whitespace-pre-line">
                            {item.companyA}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Comparison Table */}
        <div className="hidden md:block overflow-x-auto">
          <div className="relative">
            {/* Elevated Header for エコ・グローバル - Desktop */}
            <div className="absolute left-[130px] md:left-[183px] lg:left-[208px] xl:left-[260px] -top-[9px] md:-top-[17px] lg:-top-[14px] xl:-top-4.5 w-[185px] md:w-[263px] lg:w-[296px] xl:w-[370px] z-10">
              <div className="bg-[#00a842] text-white font-bold text-[15px] md:text-[15px] lg:text-2xl xl:text-3xl py-3 md:py-3 lg:py-5 xl:py-6 px-3 md:px-3 lg:px-5 xl:px-6 text-center border md:border lg:border-2 xl:border-2 border-[#00a842] font-[Montserrat]">
                エコ・グローバル
              </div>
            </div>

            <table className="w-full mt-3 md:mt-3 lg:mt-5 xl:mt-6 table-fixed">
              <colgroup>
                <col className="w-[35px] md:w-[35px] lg:w-[208px] xl:w-[260px]" />
                <col className="w-[50px] md:w-[50px] lg:w-[296px] xl:w-[370px]" />
                <col className="w-[34.5px] md:w-[34.5px] lg:w-[205px] xl:w-[256px]" />
                <col className="w-[34.5px] md:w-[34.5px] lg:w-[205px] xl:w-[256px]" />
              </colgroup>

              {/* Header Row */}
              <thead>
                <tr>
                  <th className="bg-[#acabab] text-white text-[6px] md:text-[6px] lg:text-2xl xl:text-3xl font-bold py-0.5 md:py-3.5 lg:py-3 xl:py-4 px-1 md:px-1 lg:px-5 xl:px-6 border md:border lg:border-2 xl:border-2 border-gray-300 text-center font-[Montserrat]">
                    
                  </th>
                  <th className="bg-[#00a842] text-white font-bold py-0.5 md:py-0.5 lg:py-1.5 xl:py-2 px-1 md:px-1 lg:px-5 xl:px-6 border md:border lg:border-2 xl:border-2 border-gray-300 text-center font-[Montserrat]">
                    {/* Empty space since header is above */}
                  </th>
                  <th className="bg-[#acabab] text-white text-[6px] md:text-[6px] lg:text-2xl xl:text-3xl font-bold py-0.5 md:py-0.5 lg:py-3 xl:py-4 px-1 md:px-1 lg:px-5 xl:px-6 text-center font-[Montserrat]">
                    A社
                  </th>
                  <th className="bg-[#acabab] text-white text-[6px] md:text-[6px] lg:text-2xl xl:text-3xl font-bold py-0.5 md:py-0.5 lg:py-3 xl:py-4 px-1 md:px-1 lg:px-5 xl:px-6 border md:border lg:border-2 xl:border-2 border-gray-300 text-center font-[Montserrat]">
                    自治体
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Response Time Row */}
                <tr className="text-xs md:text-3xl">
                  <td className="bg-[#e9ffd6] font-medium py-0.5 md:py-0.5 lg:py-2 xl:py-3 px-0.5 md:px-0.5 lg:px-2 xl:px-3 border-l md:border-l lg:border-l-2 xl:border-l-2 border-y md:border-y lg:border-y-2 xl:border-y-2 border-y-gray-300 text-center text-black text-[6px] md:text-[6px] lg:text-2xl xl:text-3xl font-[Montserrat]">
                    対応可能時間
                  </td>
                  <td className="bg-white py-1 md:py-3 px-1 md:px-3 border-x-[#00A842] border-[0.5px] md:border-2 text-center font-bold text-[#00a842] text-xs md:text-3xl font-[Montserrat]">
                    24時間365日対応
                  </td>
                  <td className="bg-white py-1 md:py-3 px-1 md:px-3 border-l-[0.5px] md:border-l-2 border-y-[0.5px] md:border-y-2 border-r-[0.5px] md:border-r-2 border-gray-300 text-center text-[#acacac] text-[10px] md:text-[20px] font-[Montserrat]">
                    9:00～17:00
                  </td>
                  <td className="bg-white py-3  border-l-2 border-y-2 border-r-2 border-gray-300 text-center text-[#acacac] text-[20px] font-[Montserrat] w-[256px]">
                    自治体指定
                  </td>
                </tr>

                {/* Pricing Row */}
                <tr className="text-xs md:text-3xl">
                  <td className="bg-[#e9ffd6] font-medium py-1 md:py-3 px-1 md:px-3 border-l-[0.5px] md:border-l-2 border-y-[0.5px] md:border-y-2 border-gray-300 text-center text-black font-[Montserrat]">
                    料金
                  </td>
                  <td className="bg-white py-1 md:py-3 px-1 md:px-3 border-x-[#00A842] border-[0.5px] md:border-2 text-center font-bold text-[#00a842] text-xs md:text-3xl font-[Montserrat]">
                    5500円～
                  </td>
                  <td className="bg-white py-1 md:py-3 px-1 md:px-3 border-l-[0.5px] md:border-l-2 border-y-[0.5px] md:border-y-2 border-r-[0.5px] md:border-r-2 border-gray-300 text-center text-[#acacac] text-[10px] md:text-[20px] font-[Montserrat]">
                    1万5000円～
                  </td>
                  <td className="bg-white py-3  border-l-2 border-y-2 border-r-2 border-gray-300 text-center text-[#acacac] text-[20px] font-[Montserrat] w-[256px]">
                    指定された収集日
                  </td>
                </tr>

                {/* Additional Fees Row */}
                <tr className="text-xs md:text-3xl">
                  <td className="bg-[#e9ffd6] font-medium py-1 md:py-3 px-1 md:px-3 border-l-[0.5px] md:border-l-2 border-y-[0.5px] md:border-y-2 border-gray-300 text-center text-black font-[Montserrat]">
                    追加費用の有無
                  </td>
                  <td className="bg-white py-1 md:py-3 px-1 md:px-3 border-x-[#00A842] border-[0.5px] md:border-2 text-center font-bold text-[#00a842] text-xs md:text-3xl font-[Montserrat]">
                    なし
                  </td>
                  <td className="bg-white py-1 md:py-3 px-1 md:px-3 border-l-[0.5px] md:border-l-2 border-y-[0.5px] md:border-y-2 border-r-[0.5px] md:border-r-2 border-gray-300 text-center text-[#acacac] text-[10px] md:text-[20px] font-[Montserrat]">
                    要相談
                  </td>
                  <td className="bg-white py-3  border-l-2 border-y-2 border-r-2 border-gray-300 text-center text-[#acacac] text-[20px] font-[Montserrat] w-[256px]">
                    なし
                  </td>
                </tr>

                {/* Cancellation Fee Row */}
                <tr className="text-xs md:text-3xl">
                  <td className="bg-[#e9ffd6] font-medium py-1 md:py-3 px-1 md:px-3 border-l-[0.5px] md:border-l-2 border-y-[0.5px] md:border-y-2 border-gray-300 text-center text-black font-[Montserrat]">
                    キャンセル料
                  </td>
                  <td className="bg-white py-1 md:py-3 px-1 md:px-3 border-x-[#00A842] border-[0.5px] md:border-2 text-center font-bold text-[#00a842] text-xs md:text-3xl font-[Montserrat]">
                    なし
                  </td>
                  <td className="bg-white py-1 md:py-3 px-1 md:px-3 border-l-[0.5px] md:border-l-2 border-y-[0.5px] md:border-y-2 border-r-[0.5px] md:border-r-2 border-gray-300 text-center text-[#acacac] text-[10px] md:text-[20px] font-[Montserrat]">
                    前日100%
                  </td>
                  <td className="bg-white py-3  border-l-2 border-y-2 border-r-2 border-gray-300 text-center text-[#acacac] text-[20px] font-[Montserrat] w-[256px]">
                    なし
                  </td>
                </tr>

                {/* Shortest Response Row */}
                <tr className="text-3xl">
                  <td className="bg-[#e9ffd6] font-medium py-3  border-l-2 border-y-2 border-gray-300 text-center text-black font-[Montserrat] w-[260px]">
                    最短対応日
                  </td>
                  <td className="bg-white py-3  border-x-[#00A842] border-2 text-center font-bold text-[#00a842] font-[Montserrat] w-[370px]">
                    即日
                  </td>
                  <td className="bg-white py-3  border-l-2 border-y-2 border-r-2 border-gray-300 text-center text-[#acacac] text-[20px] font-[Montserrat] w-[256px]">
                    翌日以降
                  </td>
                  <td className="bg-white py-3  border-l-2 border-y-2 border-r-2 border-gray-300 text-center text-[#acacac] text-[20px] font-[Montserrat] w-[256px]">
                    指定された収集日
                  </td>
                </tr>

                {/* Time Specification Row */}
                <tr className="text-3xl">
                  <td className="bg-[#e9ffd6] font-medium py-3  border-l-2 border-y-2 border-gray-300 text-center text-black font-[Montserrat] w-[260px]">
                    時間指定
                  </td>
                  <td className="bg-white py-3  border-x-[#00A842] border-b-gray-300 border-2 text-center font-bold text-[#00a842] font-[Montserrat] w-[370px]">
                    可能
                  </td>
                  <td className="bg-white py-3  border-l-2 border-y-2 border-r-2 border-gray-300 text-center text-[#acacac] text-[20px] font-[Montserrat] w-[256px]">
                    不可
                  </td>
                  <td className="bg-white py-3  border-l-2 border-y-2 border-r-2 border-gray-300 text-center text-[#acacac] text-[20px] font-[Montserrat] w-[256px]">
                    不可
                  </td>
                </tr>

                {/* Staff Row */}
                <tr className="text-3xl">
                  <td className="bg-[#e9ffd6] font-medium py-3  border-l-2 border-y-2 border-gray-300 text-center text-black font-[Montserrat] w-[260px]">
                    スタッフ
                  </td>
                  <td className="bg-white py-3  border-x-[#00A842] border-2 text-center font-bold text-[#00a842] font-[Montserrat] w-[370px]">
                    経験値の高い
                    <br />
                    専任スタッフ
                  </td>
                  <td className="bg-white py-3  border-l-2 border-y-2 border-r-2 border-gray-300 text-center text-[#acacac] text-[20px] font-[Montserrat] w-[256px]">
                    派遣スタッフ
                  </td>
                  <td className="bg-white py-3  border-l-2 border-y-2 border-r-2 border-gray-300 text-center text-[#acacac] text-[20px] font-[Montserrat] w-[256px]">
                    自身で搬出・持ち込み
                  </td>
                </tr>

                {/* Service Area Row */}
                <tr className="text-3xl">
                  <td className="bg-[#e9ffd6] font-medium py-3  border-l-2 border-y-2 border-gray-300 text-center text-black font-[Montserrat] w-[260px]">
                    対応地域
                  </td>
                  <td className="bg-white py-3  border-x-[#00A842] border-2 text-center font-bold text-[#00a842] font-[Montserrat] w-[370px]">
                    千葉県全域
                  </td>
                  <td className="bg-white py-3  border-l-2 border-y-2 border-r-2 border-gray-300 text-center text-[#acacac] text-[20px] font-[Montserrat] w-[256px]">
                    地域限定
                  </td>
                  <td className="bg-white py-3  border-l-2 border-y-2 border-r-2 border-gray-300 text-center text-[#acacac] text-[20px] font-[Montserrat] w-[256px]">
                    各自治体地域
                  </td>
                </tr>

                {/* Insurance Row */}
                <tr className="text-3xl">
                  <td className="bg-[#e9ffd6] font-medium py-3  border-l-2 border-y-2 border-gray-300 text-center text-black font-[Montserrat] w-[260px]">
                    保険・補償制度
                  </td>
                  <td className="bg-white py-3  border-x-[#00A842] border-2 border-b-[#00A842] text-center font-bold text-[#00a842] font-[Montserrat] w-[370px]">
                    賠償責任保険
                    <br />
                    対物5千万円、対人1億円
                  </td>
                  <td className="bg-white py-3  border-l-2 border-y-2 border-r-2 border-gray-300 text-center text-[#acacac] text-[20px] font-[Montserrat] w-[256px]">
                    賠償責任保険
                    <br />
                    対物5千万円、対人1億円
                  </td>
                  <td className="bg-white py-3  border-l-2 border-y-2 border-r-2 border-gray-300 text-center text-[#acacac] text-[20px] font-[Montserrat] w-[256px]">
                    なし
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
