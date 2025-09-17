import { FaFacebookF, FaTwitter } from "react-icons/fa";

export default function Marzmas() {
    return (
        <div className="max-w-[1230px] m-auto mt-[30px]">
            <h1 className="text-[40px] font-[900] font-team mb-[30px]">ՀՀ մարզերի կոդեր</h1>
            <div>
                <table className="table-fixed w-full border border-[#01415f] border-collapse">
                    <thead>
                        <tr className="text-white">
                            <th className="px-[4rem] py-[2rem] border border-[#01415f]">Մարզ/Շրջան</th>
                            <th className="px-[4rem] py-[2rem] border border-[#01415f]">Բնակավայր</th>
                            <th className="px-[4rem] py-[2rem] border border-[#01415f]">Կոդ</th>
                            <th className="px-[4rem] py-[2rem] border border-[#01415f]">Միջշրջանային կոդ</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-gray-100 font-semibold">
                            <td className="px-[4rem] py-[2rem] border border-[#01415f]" colSpan={4}>Արագածոտն</td>
                        </tr>

                        <tr>
                            <td className="px-[4rem] py-[2rem] border border-[#01415f]">Ապարան</td>
                            <td className="px-[4rem] py-[2rem] border border-[#01415f]">Ապարան</td>
                            <td className="px-[4rem] py-[2rem] border border-[#01415f]">252</td>
                            <td className="px-[4rem] py-[2rem] border border-[#01415f]">--</td>
                        </tr>
                        <tr>
                            <td className="px-[4rem] py-[2rem] border border-[#01415f]"></td>
                            <td className="px-[4rem] py-[2rem] border border-[#01415f]">Արտավան</td>
                            <td className="px-[4rem] py-[2rem] border border-[#01415f]">252</td>
                            <td className="px-[4rem] py-[2rem] border border-[#01415f]">95</td>
                        </tr>
                        <tr>
                            <td className="px-[4rem] py-[2rem] border border-[#01415f]"></td>
                            <td className="px-[4rem] py-[2rem] border border-[#01415f]">Քուչակ</td>
                            <td className="px-[4rem] py-[2rem] border border-[#01415f]">252</td>
                            <td className="px-[4rem] py-[2rem] border border-[#01415f]">91</td>
                        </tr>
                        <tr>
                            <td className="px-[4rem] py-[2rem] border border-[#01415f]"></td>
                            <td className="px-[4rem] py-[2rem]border border-[#01415f]">Ապարան CDMA</td>
                            <td className="px-[4rem] py-[2rem] border border-[#01415f]">252</td>
                            <td className="px-[4rem] py-[2rem]border border-[#01415f]"></td>
                        </tr>
                    </tbody>
                </table>

            </div>
            <h4 className="mb-[16px] mt-[30px] max-w-[1230px] border border-[#666e75] m-auto"></h4>
            <div className="mb-[50px] flex">
                <p className="text-[19px] font-[600] font-semibold mr-[10px]">Կիսվել</p>
                <div className="flex gap-[15px] items-center">
                    <a
                        href="https://www.facebook.com/sharer/sharer.php?u=https://yourwebsite.am"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#000000] hover:opacity-80 text-[25px]"
                    >
                        <FaFacebookF />
                    </a>
                    <a
                        href="https://twitter.com/intent/tweet?url=https://yourwebsite.am&text=Կիսվեք այս էջով"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ttext-[#000000] hover:opacity-80 text-[25px]"
                    >
                        <FaTwitter />
                    </a>
                </div>
            </div>
        </div>
    )
}