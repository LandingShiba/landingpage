import React from "react";

export default function ComparisonTable() {
  return (
    <section className="w-full max-w-7xl mx-auto  py-16 font-[Montserrat]">
      <div className="max-w-6xl mx-auto p-6 bg-white">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl text-[40px] font-bold mb-2 text-black font-[Montserrat]">
            こんなに違う！
          </h1>
          <h2 className="text-3xl text-[70px] font-bold text-black font-[Montserrat]">
            ネコの手と他社のサービス比較
          </h2>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto">
          <div className="relative">
            {/* Elevated Header for ネコの手 */}
            <div className="absolute left-[260px] -top-4.5 w-[370px] z-10">
              <div className="bg-[#00a842] text-white font-bold text-3xl py-6 px-6 text-center border-2 border-[#00a842] font-[Montserrat]">
                ネコの手
              </div>
            </div>

            <table className="w-full mt-6 table-fixed">
              {/* <colgroup>
                <col className="w-[260px]" />
                <col className="w-[370px]" />
                <col className="w-[260px]" />
                <col className="w-[260px]" />
              </colgroup> */}

              {/* Header Row */}
              <thead>
                <tr>
                  <th className="bg-[#acabab] text-white text-3xl font-bold py-4 px-6 border border-gray-300 text-center font-[Montserrat] w-[260px]">
                    自治体
                  </th>
                  <th className="bg-[#00a842] text-white font-bold py-2 px-6 border border-gray-300 text-center font-[Montserrat] w-[370px]">
                    {/* Empty space since header is above */}
                  </th>
                  <th className="bg-[#acabab] text-white text-3xl font-bold py-4 px-6 text-center font-[Montserrat] w-[256px]">
                    A社
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Response Time Row */}
                <tr className="text-3xl">
                  <td className="bg-[#e9ffd6] font-medium text-3xl py-3  border-l-2 border-y-2 border-y-gray-300 text-center text-black font-[Montserrat] w-[260px]">
                    対応可能時間
                  </td>
                  <td className="bg-white py-3  border-x-[#00A842] border-2 text-center font-bold text-[#00a842] text-3xl font-[Montserrat] w-[370px]">
                    24時間365日対応
                  </td>
                  <td className="bg-white py-3  border-l-2 border-y-2 border-r-2 border-gray-300 text-center text-[#acacac] text-[20px] font-[Montserrat] w-[256px]">
                    9:00～17:00
                  </td>
                  <td className="bg-white py-3  border-l-2 border-y-2 border-r-2 border-gray-300 text-center text-[#acacac] text-[20px] font-[Montserrat] w-[256px]">
                    自治体指定
                  </td>
                </tr>

                {/* Pricing Row */}
                <tr className="text-3xl">
                  <td className="bg-[#e9ffd6] font-medium py-3  border-l-2 border-y-2 border-gray-300 text-center text-black font-[Montserrat] w-[260px]">
                    料金
                  </td>
                  <td className="bg-white py-3  border-x-[#00A842] border-2 text-center font-bold text-[#00a842] font-[Montserrat] w-[370px]">
                    5500円～
                  </td>
                  <td className="bg-white py-3  border-l-2 border-y-2 border-r-2 border-gray-300 text-center text-[#acacac] text-[20px] font-[Montserrat] w-[256px]">
                    1万5000円～
                  </td>
                  <td className="bg-white py-3  border-l-2 border-y-2 border-r-2 border-gray-300 text-center text-[#acacac] text-[20px] font-[Montserrat] w-[256px]">
                    粗大ごみ処理手数料納付券
                  </td>
                </tr>

                {/* Additional Fees Row */}
                <tr className="text-3xl">
                  <td className="bg-[#e9ffd6] font-medium py-3  border-l-2 border-y-2 border-gray-300 text-center text-black font-[Montserrat] w-[260px]">
                    追加費用の有無
                  </td>
                  <td className="bg-white py-3  border-x-[#00A842] border-2 text-center font-bold text-[#00a842] font-[Montserrat] w-[370px]">
                    なし
                  </td>
                  <td className="bg-white py-3  border-l-2 border-y-2 border-r-2 border-gray-300 text-center text-[#acacac] text-[20px] font-[Montserrat] w-[256px]">
                    要相談
                  </td>
                  <td className="bg-white py-3  border-l-2 border-y-2 border-r-2 border-gray-300 text-center text-[#acacac] text-[20px] font-[Montserrat] w-[256px]">
                    なし
                  </td>
                </tr>

                {/* Cancellation Fee Row */}
                <tr className="text-3xl">
                  <td className="bg-[#e9ffd6] font-medium py-3  border-l-2 border-y-2 border-gray-300 text-center text-black font-[Montserrat] w-[260px]">
                    キャンセル料
                  </td>
                  <td className="bg-white py-3  border-x-[#00A842] border-2 text-center font-bold text-[#00a842] font-[Montserrat] w-[370px]">
                    なし
                  </td>
                  <td className="bg-white py-3  border-l-2 border-y-2 border-r-2 border-gray-300 text-center text-[#acacac] text-[20px] font-[Montserrat] w-[256px]">
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
