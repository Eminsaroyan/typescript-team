interface SakagnerProps {
    text1: string;
    text2: string;
    text3: string;
    text4: string;
    text5: string;
    text6: string;
}

export default function Sakagner({
    text1,
    text2,
    text3,
    text4,
    text5,
    text6,
}: SakagnerProps) {
    return (
        <div className="w-[280px] h-[400px] flex flex-col items-center ml-[20px] justify-evenly bg-[#ebedef] p-4 rounded-[10px]">
            <span>
                <p>{text1}</p>
                <p>{text2}</p>
            </span>
            <span className="flex flex-col items-start">
                <span className="mb-[20px]">
                    <p className="flex items-center flex-row-reverse ">
                        {text3}
                        <img
                            src="https://www.telecomarmenia.am/files/icons/1/16509740618025/56x56.png"
                            alt=""
                            className="w-[25px] mr-[12px]"
                        />
                    </p>
                </span>
                <span className="mb-[20px]">
                    <p className="flex items-center flex-row-reverse ">
                        {text4}
                        <img
                            src="https://www.telecomarmenia.am/files/icons/1/16510708980018/56x56.png"
                            alt=""
                            className="w-[25px] mr-[12px]"
                        />
                    </p>
                </span>
                <span className="mb-[20px]">
                    <p className="flex items-center flex-row-reverse ">
                        {text5}
                        <img
                            src="https://www.telecomarmenia.am/files/icons/1/16510708352906/56x56.png"
                            alt=""
                            className="w-[25px] mr-[12px]"
                        />
                    </p>
                </span>
                <span className="mb-[20px]">
                    <p className="flex items-center flex-row-reverse ">
                        {text6}
                        <img
                            src="https://www.telecomarmenia.am/files/icons/1/16510702991504/56x56.png"
                            alt=""
                            className="w-[25px] mr-[12px]"
                        />
                    </p>
                </span>
            </span>
            <button className="pt-[10px] pb-[10px] pl-[35px] pr-[35px] font-bold border-[#f04d4d] rounded-[12px] text-[#f04d4d]">
                Մանրամասն
            </button>
        </div>
    );
}
