import { useState, useEffect } from "react";
import { db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";
import Hamar from "./Eshophamarmas";

// Տիպավորում տվյալների համար
interface EshopHamar {
    vernagir: string;
    hamar: string;
    gin: string;
}

export default function Numbersmas() {
    const [isOpen, setIsOpen] = useState<boolean>(true);
    const [isBeautifulNumbersOpen, setIsBeautifulNumbersOpen] = useState<boolean>(true);
    const [eshophamarner, setEshopHamarner] = useState<EshopHamar[]>([]);

    useEffect(() => {
        async function fetchEshopHamarner() {
            try {
                const docRef = doc(db, "eshophamarner", "data");
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    const data = docSnap.data();
                    setEshopHamarner(data.items || []);
                } else {
                    console.error("❌ Փաստաթուղթը չի գտնվել");
                }
            } catch (error) {
                console.error("❌ Սխալ տվյալների ստացման ժամանակ:", error);
            }
        }

        fetchEshopHamarner();
    }, []);

    return (
        <div>
            <h1 className="w-[100] mt-[20px] border-t border-t-[#ebedef]"></h1>
            <div className="mt-[20px] max-w-[1230px] mx-auto flex bg-white py-6">
                {/* Filters Sidebar */}
                <div className="mr-[12px]">
                    <div className="w-[288px] border-none">
                        <div className="mb-[20px] bg-[#fff]">
                            <div className=" pt-[18px] border border-[#ebedef] bg-[#f8f9f9]  mb-[20px]">
                                <h2 className="pt-0 px-[20px] pb-[18px] mb-[10px] tracking-[1px] text-[18px] border-b border-b-[#ebedef]">Որոնել</h2>
                                <div className="flex flex-col  mb-[20px] px-[20px] py-0 ">
                                    <div className="flex mb-[20px]">
                                        <select
                                            defaultValue=""
                                            className="w-[72px] h-[46px] border border-[#E0E0E0] cursor-pointer rounded-l-[22px] "
                                        >
                                            <option value="" disabled>XX</option>
                                            <option value="33">33</option>
                                            <option value="43">43</option>
                                            <option value="91">91</option>
                                            <option value="96">96</option>
                                            <option value="99">99</option>
                                        </select>
                                        <input
                                            type="text"
                                            placeholder="Նվազագույնը 2 թիվ"
                                            className="w-[100%] h-[44px] pl-[10px] border border-[#E0E0E0] border-[#ebedef] rounded-r-[20px]"
                                        />
                                    </div>
                                    <button className="w-[100%] h-[44px] px-[18px] py-0 text-center leading-[44px] mb-[20px] text-[#ffffff] text-[20px] bg-[#f04d4d] border-none rounded-[30px]">Որոնել</button>
                                    <button className="w-[100%] h-[44px] px-[18px] py-0 text-center leading-[44px] bg-[#ffffff] border border-[#f04d4d] text-[#f04d4d]  rounded-[20px]">Պատահական համար</button>
                                </div>
                            </div>
                        </div>

                        <div className="mb-[20px] pt-[18px] bg-[##f8f9f9  border-[#ebedef]">
                            <div className=" pt-[18px] border border-[#ebedef] bg-[#f8f9f9]  mb-[20px]">
                                <h2 className="pt-0 px-[20px] pb-[18px] mb-[10px] tracking-[1px] text-[18px] border-b border-b-[#ebedef]">Ցուցադրել միայն</h2>

                                <div className="w-full max-w-[320px]   bg-white border-b  border-b-[#ebedef] ">
                                    <div className="w-[100%] py-[10px] pr-[30px] pl-0 ">
                                        <button
                                            onClick={() => setIsOpen(!isOpen)}
                                            className="w-full text-start py-[10px] pr-[30px] pl-[10px] text-[18px] font-semibold tracking-[1px] border-none bg-[#ffffff]"
                                        >
                                            Գին
                                        </button>
                                    </div>
                                    {isOpen && (
                                        <div className="px-[20px] py-[20px]">
                                            <div className="flex flex-wrap gap-[8%] mb-[22px]">
                                                <div className="w-[42%]">
                                                    <label className="block mb-[5px] text-[12px] font-medium text-[#2c3843]">Սկսած</label>
                                                    <input
                                                        type="number"
                                                        className="w-full no-spinner  h-[44px] leading-[44px] px-[12px] border border-[#ebedef] rounded-[22px] box-border"
                                                    />
                                                </div>
                                                <div className="w-[42%]">
                                                    <label className="block mb-[5px] text-[12px] font-medium text-[#2c3843]">Մինչև</label>
                                                    <input
                                                        type="number"
                                                        className="w-full no-spinner  h-[44px] leading-[44px] px-[12px] border border-[#ebedef] rounded-[22px] box-border"
                                                    />
                                                </div>
                                            </div>

                                            <div className="space-y-[12px]">
                                                {[
                                                    "1,000 ֏ - 50,000 ֏",
                                                    "50,000 ֏ - 100,000 ֏",
                                                    "100,000 ֏ - 150,000 ֏",
                                                    "200,000 ֏ - 250,000 ֏",
                                                    "300,000 ֏ - 350,000 ֏",
                                                ].map((range, idx) => (
                                                    <label
                                                        key={idx}
                                                        className="block cursor-pointer text-[19px] mb-[22px] text-[#2c3843] hover:text-blue-600"
                                                    >
                                                        <input
                                                            type="checkbox"
                                                            name="price"
                                                            className="mr-[8px] accent-blue-500"
                                                        />
                                                        {range}
                                                    </label>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <div className="px-[20px]   mt-[20px]  border-b  border-b-[#ebedef]">
                                    <label
                                        className="block cursor-pointer text-[19px] mb-[22px] text-[#2c3843] hover:text-blue-600"
                                    >
                                        <input
                                            type="checkbox"
                                            name="price"
                                            className="mr-[8px] accent-blue-500"
                                        />
                                        Բաժանորդագրություն
                                    </label>
                                </div>

                                <div className="px-[20px]  mt-[20px]  border-b  border-b-[#ebedef]">
                                    <label
                                        className="block cursor-pointer text-[19px] mb-[22px] text-[#2c3843] hover:text-blue-600"
                                    >
                                        <input
                                            type="checkbox"
                                            name="price"
                                            className="mr-[8px] accent-blue-500"
                                        />
                                        Պրոմո
                                    </label>
                                </div>

                                <div className="pt-[18px] border border-[#ebedef] bg-[#f8f9f9] max-w-[320px] w-full">
                                    <button
                                        onClick={() => setIsBeautifulNumbersOpen(!isBeautifulNumbersOpen)}
                                        className="w-full text-start py-[10px] pr-[30px] pl-[10px] text-[18px] font-semibold tracking-[1px] border-none bg-[#ffffff]"
                                        aria-expanded={isBeautifulNumbersOpen}
                                        aria-controls="beautifulNumbersContent"
                                    >
                                        Գեղեցիկ համարներ
                                    </button>

                                    {isBeautifulNumbersOpen && (
                                        <div
                                            id="beautifulNumbersContent"
                                            className="bg-white px-[20px] py-[15px] rounded-[12px] mt-[10px]"
                                        >
                                            {["Պլատին", "Ստանդարտ", "Նիկել", "Ոսկի", "Արծաթ", "Դասական"].map((opt, idx) => (
                                                <label
                                                    key={idx}
                                                    className="block cursor-pointer text-[19px] mb-[22px] text-[#2c3843] hover:text-blue-600"
                                                >
                                                    <input
                                                        type="checkbox"
                                                        name="beautifulNumbers"
                                                        value={opt}
                                                        className="mr-[10px] accent-blue-500"
                                                    />
                                                    {opt}
                                                </label>
                                            ))}
                                        </div>
                                    )}
                                </div>


                                <div className=" bg-[#f5f6f7] pt-[30px] px-[20px] pb-[20px]">
                                    <button
                                        className="w-[100%] h-[44px]  px-[18px] border-none text-[#ffffff] text-[18px] bg-[#f04d4d] rounded-[30px] hover:bg-[#e03a3a] transition-all duration-200 text-center whitespace-nowrap font-[Team-Bold] mb-[10px]"
                                    >
                                        Ցուցադրել արդյունքները
                                    </button>


                                    <button className="w-[100%] text-[#2c3843] underline w-full border-none bg-[#f5f6f7]">
                                        Մաքրեք ֆիլտրերը
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  

                {/* Main Numbers Content */}
                <div className="flex-1 w-[500px]">
                    <div className="flex bg-[url('https://www.telecomarmenia.am/eshop/img/banner-bg.png')] rounded-[10px] mb-[40px] pt-[46px] pr-[46px] pb-[46px] pl-[46px] gap-[20px]">
                        <img src="https://www.telecomarmenia.am/eshop/img/banner-icon.svg" alt="icon" />
                        <p className="w-[82%] text-[18px] leading-[28px] text-[#2c3843]">
                            Այժմ գեղեցիկ համարները հասանելի են <strong className="font-bold">բաժանորդագրության միջոցով</strong><br />
                            Բաժանորդագրությամբ ձեռք բերելու համար ընտրեք ցանկալի համարը և ակտիվացրեք բաժանորդագրությունը:<br />
                            Բոլոր համարները հասանելի են նաև <strong className="font-bold">eSIM</strong> ձևաչափով: Սա թվային SIM քարտ է, որը կարող է փոխարինվել կամ համակցվել պլաստիկ քարտի հետ, ինչպես նաև հնարավոր է մի քանի eSIM պրոֆիլներ պահել մեկ սարքի վրա:
                        </p>
                    </div>

                    <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-[20px]">
                        {eshophamarner.map((el, index) => (
                            <Hamar
                                key={index}
                                vernagir={el.vernagir}
                                hamar={el.hamar}
                                gin={el.gin}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
