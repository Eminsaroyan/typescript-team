import { FaStar } from "react-icons/fa";

export default function TeamTVSection() {
    return (
        <div className="max-w-[1260px] mx-auto px-[20px] py-[60px]">

            <div className="flex flex-col items-center justify-between gap-[48px]">
                <h1 className="text-[#01425e] text-[74px] font-[200] mb-[48px] text-center"
                    style={{ fontFamily: "'Team-Regular', 'Helvetica', 'Arial', sans-serif" }} >
                    Դիտիր TV որտեղ ցանկանաս </h1>

                <div className="flex justify-around">
                    <div className="flex flex-col items-center  gap-[32px] w-[600px]">
                        <p className="text-[#666666] text-[20px] leading-[28px] mb-[20px] text-cente">
                            Ներբեռնի՛ր ու փորձի՛ր նոր{" "}
                            <span className="text-[#01425e] font-semibold">teamTV</span>
                        </p>

                        <div className="flex">
                            <div className="flex items-center  justify-center  bg-[#f9f9f9] px-[20px] py-[12px]">
                                <img
                                    src="https://www.telecomarmenia.am/file_manager/teamtv/teamTv_logo_512x512.jpg"
                                    alt="Դիտիր TV որտեղ ցանկանաս"
                                    className="w-[200px] rounded-[15px]"
                                />
                            </div>
                            <div className="flex flex-col">
                                <div className="flex flex-col items-center gap-[16px] bg-[#f9f9f9] px-[20px] py-[12px]">
                                    <img
                                        src="https://www.telecomarmenia.am/img/redesign/app_store.png"
                                        alt="App Store"
                                        className="h-[48px] cursor-pointer"
                                    />
                                    <div className="flex items-center gap-[8px]">
                                        <div className="flex text-[#FFD700] text-[20px]">
                                            <FaStar /><FaStar /><FaStar /><FaStar />
                                            <FaStar className="text-[#CCCCCC]" />
                                        </div>
                                        <span className="text-[#444444] text-[18px] font-medium">3.8</span>
                                    </div>
                                </div>

                                <div className="flex flex-col items-center gap-[16px] bg-[#f9f9f9] px-[20px] py-[12px]">
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                                        alt="Google Play"
                                        className="h-[48px] cursor-pointer"
                                    />
                                    <div className="flex items-center gap-[8px]">
                                        <div className="flex text-[#FFD700] text-[20px]">
                                            <FaStar /><FaStar /><FaStar /><FaStar />
                                            <FaStar className="text-[#CCCCCC]" />
                                        </div>
                                        <span className="text-[#444444] text-[18px] font-medium">3.7</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center w-[600px]">
                        <img
                            src="https://www.telecomarmenia.am/file_manager/TV_Screens.png"
                            alt="TeamTV Phones"
                            className="w-[650px]"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
