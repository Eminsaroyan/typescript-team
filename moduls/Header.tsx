import React from "react";
import { Link } from "react-router-dom";
import Headerone from "./Headerone";

type NavItem = {
  name: string;
  to: string;
};

const NavbarWithHeader: React.FC = () => {
  const menus: { title: string; items: NavItem[] }[] = [
    {
      title: "Սակագներ",
      items: [
        { name: "Բջջային կապ", to: "/mobile" },
        { name: "Ինտերնետ և TV - ԿՈՍՄՈ", to: "/cosmo" },
        { name: "Ինտերնետ և TV - ԿՈՄԲՈ", to: "/combo" },
        { name: "Ֆիքսված հեռախոսակապ", to: "/fixed-phone" },
      ],
    },
    {
      title: "Ինտերնետ",
      items: [
        { name: "Սմարթֆոնի համար", to: "/smartfonihamr" },
        { name: "Տան համար - ԿՈՍՄՈ", to: "/home-cosmo" },
        { name: "Տան համար - ԿՈՄԲՈ", to: "/home-combo" },
        { name: "Համակարգչի/պլանշետի համար", to: "/devices" },
        { name: "Team 4G", to: "/team-4g" },
      ],
    },
    {
      title: "Ծառայություններ",
      items: [
        { name: "TeamTV", to: "/team-tv" },
        { name: "Վճարում և համալրում", to: "/payments" },
        { name: "Զվարճանք", to: "/entertainment" },
        { name: "Զանգեր և անվտանգություն", to: "/calls-security" },
      ],
    },
    {
      title: "Ռոումինգ",
      items: [
        { name: "Ռոումինգ", to: "/roaming" },
        { name: "Միջազգային կապ", to: "/international-calls" },
        { name: "Օգտակար տեղեկատվություն", to: "/useful-info" },
        { name: "Ծառայություններ", to: "/services" },
      ],
    },
    {
      title: "Առցանց խանութ",
      items: [
        { name: "E-shop", to: "/eshop" },
        { name: "Առցանց ապառիկ", to: "/online-credit" },
        { name: "Բաժանորդագրություն", to: "/subscription" },
      ],
    },
    {
      title: "Առաջարկներ",
      items: [
        { name: "Շեյքի՛ր և Շահի՛ր", to: "/share-and-win" },
        { name: "Team Բոնուս", to: "/team-bonus" },
        { name: "Ակցիաներ", to: "/promotions" },
        { name: "MobiBattle", to: "/mobibattle" },
        { name: "GeForce Games", to: "/geforce-games" },
      ],
    },
    {
      title: "Օգնություն",
      items: [
        { name: "Հաճախ տրվող հարցեր", to: "/faq" },
        { name: "Սարքերի կարգավորումներ", to: "/device-settings" },
        { name: "Բաժանորդային սպասարկում", to: "/subscriber-service" },
        { name: "USSD հրահանգներ և օգտակար համարներ", to: "/ussd-instructions" },
      ],
    },
  ];

  return (
    <div>
      <Headerone />
      <nav className="flex justify-center mx-auto pr-[130px] pb-[5px] pt-[10px] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.3)] relative bg-white z-50">
        <img
          src="https://www.telecomarmenia.am/img/logo.svg?v=1"
          alt="Logo"
          className="cursor-pointer"
        />

        <ul className="list-none flex ml-[30px] gap-x-[35px] items-center">
          {menus.map(({ title, items }, menuIdx) => (
            <li key={menuIdx} className="relative group">
              <p className="cursor-pointer text-[#2c3843] font-medium text-[16px] px-[12px] py-[1px] transition-colors duration-200 hover:text-blue-600">
                {title}
              </p>
              <ul className="absolute top-full list-none left-0 w-[250px] bg-[#f8f9f9] rounded-b-[12px] shadow-xl z-50 hidden group-hover:block transition-all duration-300">
                {items.map(({ name, to }, idx) => (
                  <li
                    key={idx}
                    className="border-b border-[#ebedef] last:border-none transition-colors duration-200"
                  >
                    <Link
                      to={to}
                      className="block w-full px-[20px] py-[10px] text-[16px] text-[#2c3843] hover:text-blue-600 no-underline"
                    >
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default NavbarWithHeader;
