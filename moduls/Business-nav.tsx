import { Link } from "react-router-dom";

export default function Biznesnav() {
    return (
        <nav className="flex justify-center mx-auto pr-[130px] pb-[5px] pt-[10px] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.3)] relative bg-white z-50">
            <img
                src="https://www.telecomarmenia.am/img/logo.svg?v=1"
                alt="Logo"
                className="cursor-pointer"
            />

            <ul  className="list-none flex ml-[30px] gap-x-[45px]  items-center">

                <li className="relative group">
                    <p className="cursor-pointer text-[#2c3843] font-medium text-[16px] px-[12px] py-[8px] transition-colors duration-200 hover:text-blue-600">
                        Սակագներ
                    </p>
                    <ul className="absolute top-full list-none left-0 w-[250px] bg-[#f8f9f9] rounded-b-[12px] shadow-xl z-50 hidden group-hover:block transition-all duration-300">
                        {[
                            { name: "Բջջային կապ", to: "/mobilebiznes" },
                            { name: "Սմարթ Բիզնես", to: "/smartbiz" },
                            { name: "Ֆիքսված հեռախոսակապ", to: "/fixed-phonebiznes" },
                        ].map(({ name, to }, idx) => (
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
                <li className="relative group">
                    <p className="cursor-pointer text-[#2c3843] font-medium text-[16px]  transition-colors duration-200 hover:text-blue-600">
                        Ինտերնետ
                    </p>
                    <ul className="absolute top-full left-0 w-[280px] bg-[#f8f9f9] rounded-b-[12px] shadow-xl z-50 hidden group-hover:block transition-all duration-300">
                        {[
                            { name: "Սմարթֆոնի համար", to: "/smartfonihamrbiznes" },
                            { name: "Համակարգչի/պլանշետի համար", to: "/devicesbiznes" },
                            { name: "VDSL հատուկ առաջարկ", to: "/vdslbiznes" },
                            { name: "Next Generation Network Business", to: "/generationbixnes" }
                        ].map(({ name, to }, idx) => (
                            <li
                                key={idx}
                                className="border-b border-[#ebedef] list-none last:border-none transition-colors duration-200"
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
                <li className="relative group">
                    <p className="cursor-pointer text-[#2c3843] font-medium text-[16px] transition-colors duration-200 hover:text-blue-600">
                        Ծառայություններ
                    </p>
                    <ul className="absolute top-full left-0 w-[250px] list-none bg-[#f8f9f9] rounded-b-[12px] shadow-xl z-50 hidden group-hover:block transition-all duration-300">
                        {[
                            { name: "TeamTV", to: "/team-tv" },
                            { name: "Վճարում և համալրում", to: "/payments" },
                            { name: "Զվարճանք", to: "/entertainment" },
                            { name: "Զանգեր և անվտանգություն", to: "/calls-security" },
                        ].map(({ name, to }, idx) => (
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
                <li className="relative group">
                    <p className="cursor-pointer text-[#2c3843] font-medium text-[16px]  transition-colors duration-200 hover:text-blue-600">
                        Ռոումինգ և Միջազգային կապ
                    </p>
                    <ul className="absolute top-full left-0 w-[250px] list-none bg-[#f8f9f9] rounded-b-[12px] shadow-xl z-50 hidden group-hover:block transition-all duration-300">
                        {[
                            { name: "Ռոումինգ", to: "/roaming" },
                            { name: "Միջազգային կապ", to: "/international-calls" },
                            { name: "Օգտակար տեղեկատվություն", to: "/useful-info" },
                            { name: "Ծառայություններ", to: "/services" },
                        ].map(({ name, to }, idx) => (
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
                <li className="relative group">
                    <p className="cursor-pointer text-[#2c3843] font-medium text-[16px]   transition-colors duration-200 hover:text-blue-600">
                        Բիզնես լուծումներ
                    </p>
                    <ul className="absolute top-full left-0 w-[220px] list-none bg-[#f8f9f9] rounded-b-[12px] shadow-xl z-50 hidden group-hover:block transition-all duration-300">
                        {[
                            { name: "E-shop", to: "/eshop" },
                            { name: "Առցանց ապառիկ", to: "/online-credit" },
                            { name: "Բաժանորդագրություն", to: "/subscription" },
                        ].map(({ name, to }, idx) => (
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

                <li className="relative group">
                    <p className="cursor-pointer text-[#2c3843] font-medium text-[16px] transition-colors duration-200 hover:text-blue-600">
                        Օգնություն
                    </p>
                    <ul className="absolute top-full left-0 w-[300px] bg-[#f8f9f9] list-none rounded-b-[12px] shadow-xl z-50 hidden group-hover:block transition-all duration-300">
                        {[
                            { name: "Հաճախ տրվող հարցեր", to: "/faq" },
                            { name: "Սարքերի կարգավորումներ", to: "/device-settings" },
                            { name: "Բաժանորդային սպասարկում", to: "/subscriber-service" },
                            { name: "USSD հրահանգներ և օգտակար համարներ", to: "/ussd-instructions" },
                        ].map(({ name, to }, idx) => (
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
            </ul>
        </nav>
    );
}
