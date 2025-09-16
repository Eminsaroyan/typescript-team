import { Link } from "react-router-dom";

export default function Havel() {
    return (
        <div className="max-w-[1250px] m-auto">
            <h1>Team հավելվածներ</h1>
            <div className="grid grid-cols-2">
                <Link to="/myteam" className="block no-underline text-[#000000]">
                    <div className="flex h-[250px] mt-[25px] p-[20px] rounded-[12px] transition-all duration-300 hover:shadow-xl hover:scale-[1.01] bg-white cursor-pointer">
                        <img
                            src="https://www.telecomarmenia.am/images/team_apps/1/16510708696227.png"
                            alt="Team Energy"
                            className="w-[50%] mr-[25px] rounded-[10px]"
                        />
                        <div className="flex flex-col">
                            <h2 className="mb-[25px] text-[20px] font-semibold">My Team</h2>
                            <p className="w-[250px]">
                                My Team հավելվածի միջոցով Դուք կարող եք՝
                            </p>
                            <ul className="list-none mb-[20px]">
                                <li className="w-[210px]">
                                    Հաշվեկշռի և փաթեթների մնացորդների ստուգում
                                </li>
                                <li>Ավտոմատ վճարումների ակտիվացում</li>
                                <li>Սակագնային փաթեթների… </li>
                            </ul>
                            <button className="w-[150px] py-[10px] rounded-[10px] border-none bg-[#ff0000] text-[#ffffff] hover:bg-[#cc0000] transition">
                                Միանալ
                            </button>
                        </div>
                    </div>
                </Link>

                <Link to="/teamtv" className="block no-underline text-[#000000]">
                    <div className="flex h-[250px] mr-[100px] mt-[25px] p-[20px] rounded-[12px] transition-all duration-300 hover:shadow-xl hover:scale-[1.01] bg-white cursor-pointer ">
                        <img
                            src="https://www.telecomarmenia.am/images/team_apps/1/17249416402556.png"
                            alt="Team TV"
                            className="w-[50%] mr-[25px] rounded-[10px]"
                        />
                        <div className="flex flex-col">
                            <h2 className="mb-[25px] text-[20px] font-semibold no-underline">
                                TeamTV
                            </h2>
                            <p className="no-underline w-[250px] text-[16px] space-y-[8px]">
                                Ժամանակակից TV միշտ քեզ հետ
                            </p>
                            <ul className="mb-[20px] list-none">
                                <li>Ժամանակակից TV միշտ քեզ հետ</li>
                                <li>Մինչև 190 ալիք</li>
                                <li>Ավելի քան 5000 ֆիլմ տեսադարանում… </li>
                            </ul>
                            <button className="w-[150px] py-[10px] rounded-[10px] border-none bg-[#ff0000] text-[#ffffff] hover:bg-[#cc0000] transition">
                                Միանալ
                            </button>
                        </div>
                    </div>
                </Link>

                {/* Team Pay */}
                <Link to="/teampay" className="block no-underline text-[#000000]">
                    <div className="flex h-[250px] mr-[100px] mt-[25px] p-[20px] rounded-[12px] transition-all duration-300 hover:shadow-xl hover:scale-[1.01] bg-white cursor-pointer ">
                        <img
                            src="https://www.telecomarmenia.am/images/team_apps/1/16590919068437.png"
                            alt="Team Pay"
                            className="w-[50%] mr-[25px] rounded-[10px]"
                        />
                        <div className="flex flex-col">
                            <h2 className="mb-[25px] text-[20px] font-semibold no-underline">
                                Team Pay
                            </h2>
                            <p className="no-underline w-[230px] text-[16px] mb-[20px] space-y-[8px]">
                                Էլեկտրոնային դրամապանակ ավելի քան 50 տեսակի վճարումների համար
                                Հատուկ առաջարկներ և ակցիաներ
                            </p>
                            <button className="w-[150px] py-[10px] rounded-[10px] border-none bg-[#ff0000] text-[#ffffff] hover:bg-[#cc0000] transition">
                                Միանալ
                            </button>
                        </div>
                    </div>
                </Link>
                <Link to="/teamenergy" className="block no-underline text-[#000000]">
                    <div className="flex h-[250px] mt-[25px] p-[20px] rounded-[12px] transition-all duration-300 hover:shadow-xl hover:scale-[1.01] bg-white cursor-pointer">
                        <img
                            src="https://www.telecomarmenia.am/images/team_apps/1/17116228874075.png"
                            alt="Team Energy"
                            className="w-[50%] mr-[25px] rounded-[10px]"
                        />
                        <div className="flex flex-col">
                            <h2 className="mb-[25px] text-[20px] font-semibold">
                                Team Energy
                            </h2>
                            <p className="w-[250px] mb-[20px]">
                                Team Energy հավելվածի միջոցով կարող եք գտնել մոտակա էլեկտրական
                                լիցքավորման կայանը, հետևելով քայլերի հաջորդականությանը՝ հեշտությամբ
                                լիցքավորել…
                            </p>
                            <button className="w-[150px] py-[10px] rounded-[10px] border-none bg-[#ff0000] text-[#ffffff] hover:bg-[#cc0000] transition">
                                Միանալ
                            </button>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
}
