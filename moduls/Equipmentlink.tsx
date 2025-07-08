import { Link } from "react-router-dom";

interface EquipmentItem {
    to: string;
    img: string;
    label: string;
}

export default function Equipmentlink() {
    const equipmentList: EquipmentItem[] = [
        {
            to: "/smart-home",
            img: "https://www.telecomarmenia.am/files/icons/1/16510714217828/48x48.png",
            label: "Խելացի տուն",
        },
        {
            to: "/laptops-tablets",
            img: "https://www.telecomarmenia.am/files/icons/1/16510717616978/48x48.png",
            label: "Նոթբուքեր և Պլանշետներ",
        },
        {
            to: "/routers",
            img: "https://www.telecomarmenia.am/files/icons/1/16510818834234/48x48.png",
            label: "Ռոուտերներ",
        },
        {
            to: "/gamepads",
            img: "https://www.telecomarmenia.am/files/icons/1/16958201982651/48x48.png",
            label: "GamePad",
        },
        {
            to: "/e-transport",
            img: "https://www.telecomarmenia.am/files/icons/1/16510714551495/48x48.png",
            label: "Էլ․ տրանսպորտ",
        },
    ];

    return (
        <div className="w-full  bg-[#ffffff] mx-auto">
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
