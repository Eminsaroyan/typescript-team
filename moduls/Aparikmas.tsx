import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import { FaFacebookF, FaTwitter } from "react-icons/fa"; 

interface Bank {
    name: string;
    rate: string;
    website: string;
    contact: string;
    note: string;
}

export default function Aparikmas() {
    const [banks, setBanks] = useState<Bank[]>([]);

    useEffect(() => {
        const fetchBanks = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "Bank"));
                const bankData: Bank[] = querySnapshot.docs.map(doc => doc.data() as Bank);
                setBanks(bankData);
            } catch (error) {
                console.error("❌ Սխալ տվյալների բեռնման ժամանակ:", error);
            }
        };

        fetchBanks();
    }, []);

    return (
        <div className="max-w-[1230px] m-auto">
            <h1 className="mt-[30px] mb-[30px] text-[45px] font-[600] font-team">
                Ապառիկ վաճառքի պայմաններ
            </h1>
            <p className="w-[950px] leading-[1.5] mb-[30px] text-[#2c3843] text-[20px]">
                30,000 դրամ և ավելի գնով սմարթֆոնի ձեռքբերելու դեպքում ֆիզիկական անձանց
                համար ապառիկ վաճառքն իրականացվում է «ԱԿԲԱ ԲԱՆԿ», «ՅՈՒՆԻԲԱՆԿ»,
                «ԻՆԵԿՈԲԱՆԿ» ինչպես նաև «ՎՏԲ-Հայաստան բանկ»(առցանց ապառիկ) -ի միջոցով:
            </p>
            <p className="text-[20px] mb-[30px]">
                Ստորև կարող եք ծանոթանալ ապառիկ վաճառքի պայմաններին:
            </p>

            <table className="min-w-full bg-white mb-[30px] shadow-lg border-collapse rounded-lg overflow-hidden">
                <thead>
                    <tr className="bg-[#01415f] text-[#ffffff]">
                        <th className="px-[6px] py-[4px] text-left">Բանկ</th>
                        <th className="px-[6px] py-[4px] text-left">Տարեկան տոկոսադրույք</th>
                        <th className="px-[6px] py-[4px] text-left">Կայք</th>
                        <th className="px-[6px] py-[4px] text-left">Կոնտակտ</th>
                        <th className="px-[6px] py-[4px] text-left">Նշում</th>
                    </tr>
                </thead>
                <tbody>
                    {banks.map((bank, idx) => (
                        <tr key={idx} className="border-t">
                            <td className="px-[6px] py-[4px] border border-[#01415f]">{bank.name}</td>
                            <td className="px-[6px] py-[4px] border border-[#01415f]">{bank.rate}</td>
                            <td className="px-[6px] py-[4px] border border-[#01415f]">
                                <a
                                    href={bank.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#01415f] hover:underline"
                                >
                                    {bank.website.replace("https://", "").replace("www.", "")}
                                </a>
                            </td>
                            <td className="px-[6px] py-[4px] border border-[#01415f]">{bank.contact}</td>
                            <td className="px-[6px] py-[4px] border border-[#01415f]">{bank.note}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <h4 className="mb-[16px] max-w-[1230px] border border-[#666e75] m-auto"></h4>

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
                        className="text-[#000000] hover:opacity-80 text-[25px]"
                    >
                        <FaTwitter />
                    </a>
                </div>
            </div>
        </div>
    );

}
