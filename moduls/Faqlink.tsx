import { Link } from "react-router-dom";

interface Sakaginlink {
    to: string,
    img: string,
    label: string,
}

export default function Faqlink() {
    const equipmentList: Sakaginlink[] = [
        {
            to: "/faq",
            img: "https://www.telecomarmenia.am/files/icons/1/16510715800139/45x45.png",
            label: "Հաճախ տրվող հարցեր",
        },
        {
            to: "/sarqerikarg",
            img: "https://www.telecomarmenia.am/files/icons/1/16510715205036/45x45.png",
            label: "Սարքերի կարգավորումներ",
        },
        {
            to: "/combo",
            img: "https://www.telecomarmenia.am/files/icons/1/16510717960323/45x45.png",
            label: "Բաժանորդային սպասարկում",
        },
        {
            to: "/ogtakarhamar",
            img: "https://www.telecomarmenia.am/files/icons/1/16510713241559/45x45.png",
            label: "USSD հրահանգներ և օգտակար համարներ",
        },  
    ];

    return (
        <div className="w-full bg-[#ffffff] mb-[35px] mx-auto">
            <ul className="flex justify-center list-none w-full flex-wrap">
                {equipmentList.map(({ to, img, label }, index) => (
                    <li key={index} className="w-[320px]">
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
