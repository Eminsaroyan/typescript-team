import { Link } from "react-router-dom";

export default function Urishhavelvacneren() {
    return (
        <div className="flex flex-col max-w-[1230px] m-auto mb-[50px]">
            <h1>Այլ հավելվածներ</h1>
            <div className="flex">
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
                                <li className="w-[210px]">Հաշվեկշռի և փաթեթների մնացորդների ստուգում</li>
                                <li>Ավտոմատ վճարումների ակտիվացում</li>
                                <li>Սակագնային փաթեթների… </li>
                            </ul>

                            <button className="w-[150px] py-[10px] rounded-[10px] border-none bg-[#ff0000] text-[#ffffff] hover:bg-[#cc0000] transition">
                                Միանալ
                            </button>
                        </div>
                    </div>
                </Link>
                <Link to="/teampay" className="block no-underline text-[#000000]">
                    <div className="flex h-[250px] mr-[100px] mt-[25px] p-[20px] rounded-[12px] transition-all duration-300 hover:shadow-xl hover:scale-[1.01] bg-white cursor-pointer ">
                        <img
                            src="https://www.telecomarmenia.am/images/team_apps/1/16590919068437.png"
                            alt="Team Pay"
                            className="w-[50%] mr-[25px] rounded-[10px]"
                        />
                        <div className="flex flex-col">
                            <h2 className="mb-[25px] text-[20px] font-semibold no-underline">Team Pay</h2>

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
            </div>
        </div>
    )
}