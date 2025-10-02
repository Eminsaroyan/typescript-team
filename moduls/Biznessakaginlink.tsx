import { Link } from "react-router-dom";

interface Sakaginlink {
    to: string,
    img: string,
    label: string,
}

export default function Biznessakagintlink() {
    const equipmentList: Sakaginlink[] = [
        {
            to: "/mobile",
            img: "https://www.telecomarmenia.am/files/icons/1/1651070448779/45x45.png",
            label: "Բջջային կապ",
        },
        {
            to: "/smartbiznes",
            img: "https://www.telecomarmenia.am/files/icons/1/1651070448779/45x45.png",
            label: "Սմարթ Բիզնես",
        },
        {
            to: "/fixed-phone",
            img: "https://www.telecomarmenia.am/files/icons/1/16510709622802/45x45.png",
            label: "Ֆիքսված հեռախոսակապ",
        },  
    ];

    return (
        <div className="w-full  bg-[#ffffff] mb-[35px] mx-auto">
            <ul className="flex justify-center list-none w-full flex-wrap">
                {equipmentList.map(({ to, img, label }, index) => (
                    <li key={index} className="w-[380px]">
                        <Link
                            to={to}
                            className="group flex flex-col items-center justify-center text-center h-[80px] px-[20px] pt-[20px] pb-[15px] bg-[#ffffff] text-[#2c3843] no-underline border-b-[5px] border-transparent shadow-[0_4px_6px_-1px_rgba(0,0,0,0.3)] transition-all duration-300"
                        >
                            <img
                                src={img}
                                alt={label}
                                className="w-[48px] h-[48px] mb-[8px] transition-transform duration-300 group-hover:scale-110"
                            />
                            <p className="text-[15px] font-medium leading-[20px] transition-transform duration-300 group-hover:scale-105">
                                {label}
                            </p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
