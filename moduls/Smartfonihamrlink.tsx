import { Link } from "react-router-dom";

interface Smarhamarlink {
    to: string,
    img: string,
    label: string,
}

export default function Smartfonihamrlink() {
    const equipmentList: Smarhamarlink[] = [
        {
            to: "/mobile",
            img: "https://www.telecomarmenia.am/files/icons/1/1651070448779/45x45.png",
            label: "Սմարթֆոնի համար",
        },
        {
            to: "/tancommo",
            img: "https://www.telecomarmenia.am/files/icons/1/16511223989344/45x45.png",
            label: "Տան համար - ԿՈՍՄՈ",
        },
        {
            to: "/tancombo",
            img: "https://www.telecomarmenia.am/files/icons/1/16511223989344/45x45.png",
            label: "Տան համար - ԿՈՄԲՈ",
        },
        {
            to: "/plashethamr",
            img: "https://www.telecomarmenia.am/files/icons/1/16511223895748/45x45.png",
            label: "Համակարգչի/պլանշետի համար",
        },
        {
            to: "/hinhghamr",
            img: "https://www.telecomarmenia.am/files/icons/1/17569729574067/45x45.png",
            label: "Team 5G",
        },  
    ];

    return (
        <div className="w-full  bg-[#ffffff] mb-[35px] mx-auto">
            <ul className="flex justify-center list-none w-full flex-wrap">
                {equipmentList.map(({ to, img, label }, index) => (
                    <li key={index} className="w-[260px]">
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
