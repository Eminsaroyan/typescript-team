export default function Teamtvgrancum() {
    return (
        <div className="py-[60px] flex flex-col items-center justify-center">
            <h1
                className="text-[#01425e] mb-[40px] text-[3rem]"
                style={{ fontFamily: "'Team-Regular', 'Helvetica', 'Arial', 'sans-serif'" }}
            >
                Ինչպե՞ս գրանցվել հավելվածում
            </h1>

            <div className="flex gap-[40px] items-center justify-center">
                <div className="w-[25%] flex flex-col items-center text-center">
                    <img
                        src="https://www.telecomarmenia.am/file_manager/teamtv/teamTV_1000x500.png"
                        alt="Step 1"
                        className="w-[175px] mb-[10px]"
                    />
                    <h3
                        className="text-[#01425e] text-[1.5rem] mb-[15px]"
                        style={{ fontFamily: "'Team-Regular', 'Helvetica', 'Arial', 'sans-serif'" }}
                    >
                        1. Ներբեռնի՛ր <strong>TeamTV</strong> հավելվածը
                    </h3>
                </div>

                <div className="w-[25%] flex flex-col items-center text-center">
                    <img
                        src="https://www.telecomarmenia.am/file_manager/teamtv/profile.png"
                        alt="Step 2"
                        className="w-[85px] mb-[10px]"
                    />
                    <h3
                        className="text-[#01425e] text-[1.5rem] mb-[15px]"
                        style={{ fontFamily: "'Team-Regular', 'Helvetica', 'Arial', 'sans-serif'" }}
                    >
                        2. Գրանցվի՛ր հավելվածում՝ հավաքելով *818#
                    </h3>
                </div>

                <div className="w-[25%] flex flex-col items-center text-center">
                    <img
                        src="https://www.telecomarmenia.am/file_manager/teamtv/play.png"
                        alt="Step 3"
                        className="w-[85px] mb-[10px]"
                    />
                    <h3
                        className="text-[#01425e] text-[1.5rem] mb-[15px]"
                        style={{ fontFamily: "'Team-Regular', 'Helvetica', 'Arial', 'sans-serif'" }}
                    >
                        3. Դիտի՛ր բազմաթիվ ֆիլմեր և ալիքներ
                    </h3>
                </div>
            </div>
        </div>
    );
}
