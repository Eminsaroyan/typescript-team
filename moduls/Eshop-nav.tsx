import { Link } from "react-router-dom";

export default function EshopNav() {
  return (
    <nav className="flex items-center max-w-[1400px] pl-[160px] pr-[160px] pb-[5px] pt-[10px] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.3)] relative bg-white z-50">
      <img
        src="https://www.telecomarmenia.am/img/logo.svg?v=1"
        alt="Logo"
        className="cursor-pointer"
      />
      <ul className="list-none flex">
        <li>
          <Link
            to="/smartphones"
            className="cursor-pointer px-[36px] py-0 no-underline text-[#000000]"
          >
            Սմարթֆոններ
          </Link>
        </li>
        <li>
          <Link
            to="/numbers"
            className="cursor-pointer px-[36px] py-0 no-underline text-[#000000]"
          >
            Համարներ
          </Link>
        </li>
        <li>
          <div className="relative group">
            <Link
              to="/equipment"
              className="text-[#2c3843] px-[36px] py-0 font-medium text-[16px] cursor-pointer no-underline block py-2 px-4 transition-colors duration-200"
            >
              Սարքավորումներ
            </Link>

            <ul className="absolute top-full left-0 w-[200px] list-none leading-[3] bg-[#f8f9f9] rounded-b-[12px] shadow-xl z-50 hidden group-hover:block transition-all duration-300">
              {[
                { name: "Խելացի տուն", to: "/smart-home" },
                { name: "Նոթբուքեր և Պլանշետներ", to: "/laptops-tablets" },
                { name: "Ռոուտերներ", to: "/routers" },
                { name: "GamePad", to: "/gamepads" },
                { name: "Էլ․ տրանսպորտ", to: "/e-transport" },
              ].map(({ name, to }, idx) => (
                <li
                  key={idx}
                  className="border-b border-[#ebedef] last:border-none transition-colors duration-200"
                >
                  <Link
                    to={to}
                    className="block w-full px-[10px] py-[1px] text-[16px] text-[#2c3843] no-underline"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </li>
        <li>
          <div className="relative group">
            <Link
              to="/accessories"
              className="cursor-pointer px-[36px] py-0 no-underline text-[#2c3843] font-medium text-[16px] block py-2 px-4 transition-colors duration-200"
            >
              Աքսեսուարներ
            </Link>

            <ul className="absolute top-full left-0 w-[200px] list-none leading-[3] bg-[#f8f9f9] rounded-b-[12px] shadow-xl z-50 hidden group-hover:block transition-all duration-300">
              {[
                { name: "Սմարթ ժամացույցներ", to: "/smart-watches" },
                { name: "Աուդիո", to: "/audio" },
                { name: "Կրիչներ", to: "/storage" },
                { name: "Միացումներ", to: "/connectivity" },
                { name: "Այլ", to: "/other" },
              ].map(({ name, to }, idx) => (
                <li
                  key={idx}
                  className="border-b border-[#ebedef] last:border-none transition-colors duration-200"
                >
                  <Link
                    to={to}
                    className="block w-full px-[20px] py-[1px] text-[16px] text-[#2c3843] no-underline"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </li>
        <li>
          <Link
            to="/numbers"
            target="_blank"
            className="cursor-pointer px-[36px] py-0 no-underline text-[#000000]"
          >
            Թոփ համարներ
          </Link>
        </li>
        <li>
          <Link
            to="/offers"
            className="cursor-pointer px-[36px] py-0 no-underline text-[#000000]"
          >
            Ակցիաներ
          </Link>
        </li>
      </ul>
    </nav>
  );
}
