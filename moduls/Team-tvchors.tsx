import { useState } from "react";
import { FaTv } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";

export default function Teamtvchors() {
    const [activeTab, setActiveTab] = useState<string | null>(null); // հիմնական կոճակ
    const [activeSubTab, setActiveSubTab] = useState<string | null>(null); // ենթակոճակ

    // toggle ենթակոճակների համար
    const toggleSubTab = (tab: string) => {
        setActiveSubTab(activeSubTab === tab ? null : tab);
    };

    return (
        <div>
            <div className="max-w-[1100px] mx-auto pt-[60px] pb-[60px]">
                <h2
                    className="text-center text-[3rem] font-[600] my-[30px] text-[#01425e]"
                    style={{
                        fontFamily:
                            "'Team-Regular', 'Helvetica', 'Arial', 'sans-serif'",
                    }}
                >
                    Սակագնային փաթեթներ
                </h2>


                <div className="max-w-[1075.99px] flex justify-center mb-[20px]">
                    <button
                        onClick={() => {
                            setActiveTab("mobile");
                            setActiveSubTab(null);
                        }}
                        className={`w-[50%] flex items-center justify-center gap-[20px] py-[10px] transition duration-300 text-[24px] rounded-md
    ${activeTab === "mobile"
                                ? "bg-[#01425e] text-[#fff] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.3)]"
                                : "bg-[#fff] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.3)]"
                            }`}
                    >
                        <FaTv className="w-[50px] h-[90px]" />
                        Բջջային
                    </button>

                    <button
                        onClick={() => {
                            setActiveTab("smart");
                            setActiveSubTab(null);
                        }}
                        className={`w-[50%] flex items-center gap-2 px-[110px] py-[20px] transition duration-300 text-[24px] rounded-md
    ${activeTab === "smart"
                                ? "bg-[#01425e] text-[#fff] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.3)]"
                                : "bg-[#fff] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.3)]"
                            }`}
                    >
                        <FaMobileAlt className="w-[50px] h-[60px]" />
                        Բջջային և Smart TV
                    </button>
                </div>

                <div className="text-center">
                    {activeTab === "mobile" && (
                        <div className="flex flex-col items-center justify-center max-w-[1075.99px]">
                            <p
                                onClick={() => toggleSubTab("start")}
                                className={`cursor-pointer  text-[25px] rounded-md mb-[30px] mt-[10px] hover:border-b-[1px]
                  ${activeSubTab === "start"
                                        ? "text-[#01425e]"
                                        : "bg-gray-100 text-[#01425e]"
                                    }`}
                            >
                                teamTV Ստարտ
                            </p>

                            {activeSubTab === "start" && (
                                <img
                                    src="https://www.telecomarmenia.am/file_manager/teamtv%20channels/formobile/40_aliq.png"
                                    alt="TeamTV Ստարտ"
                                    className="mx-auto max-w-[1036px] mb-[15px]"
                                />
                            )}
                        </div>
                    )}


                    {activeTab === "smart" && (
                        <div className="flex flex-col items-center justify-center max-w-[1075.99px]">
                            <p
                                onClick={() => toggleSubTab("public")}
                                className={`cursor-pointer  text-[25px] rounded-md mb-[30px] mt-[10px] hover:border-b-[1px]
                  ${activeSubTab === "public"
                                        ? "text-[#01425e]"
                                        : "bg-gray-100 text-[#01425e]"
                                    }`}
                            >
                                teamTV Հանրային
                            </p>
                            {activeSubTab === "public" && (
                                <img
                                    src="https://www.telecomarmenia.am/file_manager/teamtv%20channels/desktop/Public.png"
                                    alt="TeamTV Հանրային"
                                    className="mx-auto max-w-[1036px] mb-[15px]"
                                />
                            )}

                            <p
                                onClick={() => toggleSubTab("max")}
                                className={`cursor-pointer  text-[25px] rounded-md mb-6 hover:border-b-[1px]
                  ${activeSubTab === "max"
                                        ? "text-[#01425e]"
                                        : "bg-gray-100 text-[#01425e]"
                                    }`}
                            >
                                teamTV Մաքս
                            </p>
                            {activeSubTab === "max" && (
                                <img
                                    src="https://www.telecomarmenia.am/file_manager/teamtv/max%20(2).png"
                                    alt="TeamTV Մաքս"
                                    className="mx-auto max-w-[1036px] mt-6"
                                />
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
