import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import Sakagner from "./Mobilesakaginmas";

export default function PackagesAccordion() {
  const [activePackage, setActivePackage] = useState<number | null>(null);

  const packages = [
    {
      id: 1,
      name: "Be Free Unlimit",
      details: [
        { id: 1, gb: "https://www.telecomarmenia.am/img/tariff-modal/icon.svg", gbText: "ԳԲ", minutes: "300 րոպե", channels: "30 ալիք", price: "3,500 դր. / ամիս." },
        { id: 2, gb: "https://www.telecomarmenia.am/img/tariff-modal/icon.svg", gbText: "ԳԲ", minutes: "3,000 րոպե", channels: "60 ալիք", price: "5,000 դր. / ամիս." },
        { id: 3, gb: "https://www.telecomarmenia.am/img/tariff-modal/icon.svg", gbText: "ԳԲ", minutes: "5,000 րոպե", channels: "110 ալիք", price: "8,000 դր. / ամիս." },
      ],
    },
    {
      id: 2,
      name: "Be Free",
      details: [
        { id: 1, gb: "https://www.telecomarmenia.am/img/tariff-modal/icon.svg", gbText: "ԳԲ", minutes: "200 րոպե", channels: "20 ալիք", price: "2,500 դր. / ամիս." },
        { id: 2, gb: "https://www.telecomarmenia.am/img/tariff-modal/icon.svg", gbText: "ԳԲ", minutes: "1,000 րոպե", channels: "50 ալիք", price: "4,000 դր. / ամիս." },
      ],
    },
    {
      id: 3,
      name: "ԿՈՍՄՈ/ԿՈՄԲՈ + Be Free",
      details: [
        { id: 1, gb: "https://www.telecomarmenia.am/img/tariff-modal/icon.svg", gbText: "ԳԲ", minutes: "150 րոպե", channels: "25 ալիք", price: "3,000 դր. / ամիս." },
      ],
    },
    {
      id: 4,
      name: "Սմարթ",
      details: [
        { id: 1, gb: "https://www.telecomarmenia.am/img/tariff-modal/icon.svg", gbText: "ԳԲ", minutes: "100 րոպե", channels: "10 ալիք", price: "2,000 դր. / ամիս." },
      ],
    },
  ];

  return (
    <div>
      <Sakagner />
      <div className="mx-auto p-[20px] mb-[20px] max-w-[1100px]">
        <div className="flex gap-[40px]">
          <div className="flex flex-col items-start w-[280px]">
            <p className="text-[22px] font-bold mb-[16px] text-[#424242]">Ընտրիր քո փաթեթը</p>
            <div className="w-full shadow-md rounded-[8px] overflow-hidden border-none">
              {packages.map((pkg) => {
                const isActive = activePackage === pkg.id;
                return (
                  <button
                    key={pkg.id}
                    onClick={() => setActivePackage(isActive ? null : pkg.id)}
                    className={`w-full flex justify-between items-center px-[20px] py-[14px] text-[16px] font-semibold transition-colors border-none border-b last:border-b-0
                      ${isActive ? "bg-[#2563EB] text-[#ffffff] font-[600]" : "bg-[#F7F8F9] text-[#1F2937] "}
                    `}
                  >
                    {pkg.name}
                    {isActive ? <FiChevronUp /> : <FiChevronDown />}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex-1 shadow-md rounded-[8px] p-[20px] bg-[#ffffff]">
            {packages.map((pkg) => {
              const isActive = activePackage === pkg.id;
              return (
                <div key={pkg.id} className="mb-[20px]">
                  <h2
                    onClick={() => setActivePackage(isActive ? null : pkg.id)}
                    className={`text-[30px] font-[900] mb-[8px] flex justify-between items-center cursor-pointer transition-colors ${isActive ? "text-[#000000]" : "text-[#1F2937]"}`}
                  >
                    {pkg.name}
                    {isActive ? <FiChevronUp /> : <FiChevronDown />}
                  </h2>

                  {isActive && (
                    <div className="flex flex-col gap-[12px] pl-[10px]">
                      {pkg.details.map((detail) => (
                        <div
                          key={detail.id}
                          className="flex justify-between items-center border-b border-[#E5E7EB] pb-[8px] text-[#374151] group transition-transform duration-200 hover:scale-[1.02]"
                        >
                          <div className="flex items-center gap-[8px]">
                            <img src={detail.gb} alt="" className="w-[20px] h-[20px] object-contain" />
                            <span className="flex items-center gap-[8px]">
                              {detail.gbText}
                            </span>
                          </div>

                          <span>{detail.minutes}</span>
                          <span>{detail.channels}</span>
                          <span className="font-semibold text-[#111827]">{detail.price}</span>
                              <button className="px-[20px] py-[8px] text-[#F04D4D] bg-[#ffffff] font-[600] border-[#F04D4D] rounded-[15px] transition-colors group-hover:bg-[#F04D4D] group-hover:text-[#ffffff]">
                                Մանրամասն
                              </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
