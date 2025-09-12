import { Link } from "react-router-dom";

interface AccessoryItem {
    to: string;
    img: string;
    label: string;
}

export default function Accessorieslink() {
    const items: AccessoryItem[] = [
        {
            to: "/smart-watches",
            img: "https://www.telecomarmenia.am/files/icons/1/16510814326031/48x48.png",
            label: "Սմարթ ժամացույցներ",
        },
        {
            to: "/audio",
            img: "https://www.telecomarmenia.am/files/icons/1/16510815743173/48x48.png",
            label: "Աուդիո",
        },
        {
            to: "/storage",
            img: "https://www.telecomarmenia.am/files/icons/1/16510817374543/48x48.png",
            label: "Կրիչներ",
        },
        {
            to: "/connectivity",
            img: "https://www.telecomarmenia.am/files/icons/1/16510817749432/48x48.png",
            label: "Միացումներ",
        },
        {
            to: "/other",
            img: "https://www.telecomarmenia.am/files/icons/1/16962442422914/48x48.png",
            label: "Այլ",
        },
    ];

    return (
        <div className="w-[1230px] bg-[#ffffff] m-auto">
            <ul className="flex justify-center list-none w-full">
                {items.map(({ to, img, label }, index) => (
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
