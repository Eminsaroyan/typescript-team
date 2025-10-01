import { useState } from "react";
import { FaTv } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";

export default function Teamtvvec() {
    const [activeTab, setActiveTab] = useState<string | null>(null);
    const [activeSubTab, setActiveSubTab] = useState<string | null>(null);

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
                    Հեռուստաալիքների փաթեթներ
                </h2>


                <div className="max-w-[1075.99px] flex justify-center mb-[20px]">
                    <button
                        onClick={() => {
                            setActiveTab("mobile");
                            setActiveSubTab(null);
                        }}
                        className={`w-[50%] flex items-center justify-center cursor-pointer border-none gap-[20px] py-[10px] transition duration-300 text-[24px] rounded-md
    ${activeTab === "mobile"
                                ? "bg-[#01425e] text-[#fff] shadow-[0_4px_6px_-1px_rgba(0.3,0.3,0.3,0.3)]"
                                : "bg-[#fff] text-[#01425e] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.3)]"
                            }`}
                    >
                        <FaTv className="w-[50px] h-[90px]" />
                        Տան համար
                    </button>

                    <button
                        onClick={() => {
                            setActiveTab("smart");
                            setActiveSubTab(null);
                        }}
                        className={`w-[50%] flex items-center gap-2 px-[110px] cursor-pointer border-none py-[20px] transition duration-300 text-[24px] rounded-md
    ${activeTab === "smart"
                                ? "bg-[#01425e] text-[#fff] shadow-[0_4px_6px_-1px_rgba(0.3,0.3,0.3,0.3)]"
                                : "bg-[#fff] text-[#01425e] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.3)]"
                            }`}
                    >
                        <FaMobileAlt className="w-[50px] h-[60px]" />
                        Բջջային
                    </button>
                </div>

                <div className="text-center">
                    {activeTab === "mobile" && (
                        <div className="flex flex-col items-center justify-center cursor-pointer max-w-[1075.99px]">
                            <p
                                onClick={() => toggleSubTab("start")}
                                className={`cursor-pointer  text-[25px]  rounded-md mb-[30px] mt-[10px] hover:border-b-[1px]
                  ${activeSubTab === "start"
                                        ? "text-[#01425e]"
                                        : "bg-gray-100 text-[#01425e]"
                                    }`}
                            >
                                80 ալիք
                            </p>

                            {activeSubTab === "start" && (
                                <img
                                    src="https://www.telecomarmenia.am/file_manager/teamtv%20channels/desktop/80_aliq.png"
                                    alt="TeamTV Ստարտ"
                                    className="mx-auto max-w-[1036px] mb-[15px]"
                                />
                            )}


                            <p
                                onClick={() => toggleSubTab("haruyr")}
                                className={`cursor-pointer  text-[25px]  rounded-md mb-[30px] mt-[10px] hover:border-b-[1px]
                  ${activeSubTab === "haruyr"
                                        ? "text-[#01425e]"
                                        : "bg-gray-100 text-[#01425e]"
                                    }`}
                            >
                                120 ալիք
                            </p>

                            {activeSubTab === "haruyr" && (
                                <img
                                    src="https://www.telecomarmenia.am/file_manager/teamtv%20channels/formobile/120_aliq.png"
                                    alt="TeamTV Ստարտ"
                                    className="mx-auto max-w-[1036px] mb-[15px]"
                                />
                            )}

                            <p
                                onClick={() => toggleSubTab("haruyrhisun")}
                                className={`cursor-pointer  text-[25px]  rounded-md mb-[30px] mt-[10px] hover:border-b-[1px]
                  ${activeSubTab === "haruyrhisun"
                                        ? "text-[#01425e]"
                                        : "bg-gray-100 text-[#01425e]"
                                    }`}
                            >
                                150 ալիք
                            </p>

                            {activeSubTab === "haruyrhisun" && (
                                <img
                                    src="https://www.telecomarmenia.am/file_manager/teamtv%20channels/desktop/150_aliq.png"
                                    alt="TeamTV Ստարտ"
                                    className="mx-auto max-w-[1036px] mb-[15px]"
                                />
                            )}

                            <p
                                onClick={() => toggleSubTab("erkuhar")}
                                className={`cursor-pointer  text-[25px]  rounded-md mb-[30px] mt-[10px] hover:border-b-[1px]
                  ${activeSubTab === "erkuhar"
                                        ? "text-[#01425e]"
                                        : "bg-gray-100 text-[#01425e]"
                                    }`}
                            >
                                200 ալիք
                            </p>

                            {activeSubTab === "erkuhar" && (
                                <img
                                    src="https://www.telecomarmenia.am/file_manager/teamtv%20channels/desktop/200_aliq.png"
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
                                20 ալիք
                            </p>
                            {activeSubTab === "public" && (
                                <img
                                    src="https://www.telecomarmenia.am/file_manager/teamtv%20channels/formobile/20_aliq.png"
                                    alt="TeamTV Հանրային"
                                    className="mx-auto max-w-[1036px] mb-[15px]"
                                />
                            )}

                            <p
                                onClick={() => toggleSubTab("max")}
                                className={`cursor-pointer  text-[25px] rounded-md mb-[30px] hover:border-b-[1px]
                  ${activeSubTab === "max"
                                        ? "text-[#01425e]"
                                        : "bg-gray-100 text-[#01425e]"
                                    }`}
                            >
                                30 ալիք
                            </p>
                            {activeSubTab === "max" && (
                                <img
                                    src="https://www.telecomarmenia.am/file_manager/teamtv%20channels/formobile/30_aliq.png"
                                    alt="TeamTV Մաքս"
                                    className="mx-auto max-w-[1036px] mt-6"
                                />
                            )}

                            <p
                                onClick={() => toggleSubTab("qarasun")}
                                className={`cursor-pointer  text-[25px] rounded-md mb-[30px] hover:border-b-[1px]
                  ${activeSubTab === "qarasun"
                                        ? "text-[#01425e]"
                                        : "bg-gray-100 text-[#01425e]"
                                    }`}
                            >
                                40 ալիք
                            </p>
                            {activeSubTab === "qarasun" && (
                                <img
                                    src="https://www.telecomarmenia.am/file_manager/teamtv%20channels/formobile/40_aliq.png"
                                    alt="TeamTV Մաքս"
                                    className="mx-auto max-w-[1036px] mt-6"
                                />
                            )}

                            <p
                                onClick={() => toggleSubTab("vatsun")}
                                className={`cursor-pointer  text-[25px] rounded-md mb-[30px] hover:border-b-[1px]
                  ${activeSubTab === "vatsun"
                                        ? "text-[#01425e]"
                                        : "bg-gray-100 text-[#01425e]"
                                    }`}
                            >
                                60 ալիք
                            </p>
                            {activeSubTab === "vatsun" && (
                                <img
                                    src="https://www.telecomarmenia.am/file_manager/teamtv%20channels/formobile/60_aliq.png"
                                    alt="TeamTV Մաքս"
                                    className="mx-auto max-w-[1036px] mt-6"
                                />
                            )}

                            <p
                                onClick={() => toggleSubTab("haryurtas")}
                                className={`cursor-pointer  text-[25px] rounded-md mb-[30px] hover:border-b-[1px]
                  ${activeSubTab === "haryurtas"
                                        ? "text-[#01425e]"
                                        : "bg-gray-100 text-[#01425e]"
                                    }`}
                            >
                                110 ալիք
                            </p>
                            {activeSubTab === "haryurtas" && (
                                <img
                                    src="https://www.telecomarmenia.am/file_manager/teamtv%20channels/desktop/110_aliq.png"
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
