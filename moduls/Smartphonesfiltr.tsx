import { useState, useEffect } from "react";
import Navbaj from "./Navbaj-apranqner";
import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";

export default function Smartphonesmas() {
    const [isOpen, setIsOpen] = useState(true);
    const [isBeautifulNumbersOpen, setIsBeautifulNumbersOpen] = useState(true);
    const [isRamOpen, setIsRamOpen] = useState(true);
    const [isStorageOpen, setIsStorageOpen] = useState(true);
    const [isWaterResistantOpen, setIsWaterResistantOpen] = useState(true);
    const [mat, matankhetq] = useState(true);
    const [isFaceIdOpen, setIsFaceIdOpen] = useState(true);
    const [isJackOpen, setIsJackOpen] = useState(true);
    const [isEsimOpen, setIsEsimOpen] = useState(false);

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchHeraxos = async () => {
            try {
                const docRef = doc(db, "eshopheraxos", "data");
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    setData(docSnap.data().items);
                } else {
                    console.log("Չկա նման փաստաթուղթ!");
                }
            } catch (error) {
                console.error("Սխալ տվյալ բեռնելիս:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchHeraxos();
    }, []);

    return (
        <div>
            <h1 className="w-[100] mt-[20px] border-t border-t-[#ebedef]"></h1>
            <div className="mt-[20px] max-w-[1230px] mx-auto flex bg-white py-6">
                <div className="mr-[10px]">
                    <div className="w-[288px] border-none">
                        <div className="mb-[20px] pt-[18px] bg-[#f8f9f9] border-[#ebedef]">
                            <div className="pt-[18px] border border-[#ebedef] bg-[#f8f9f9] mb-[20px]">
                                <h2 className="pt-0 px-[20px] pb-[18px] mb-[10px] tracking-[1px] text-[18px] border-b border-b-[#ebedef]">Ֆիլտրեր</h2>

                                <div className="w-full max-w-[320px] bg-white border-b border-b-[#ebedef]">
                                    <div className="w-full py-[10px] pr-[30px] pl-0">
                                        <button
                                            onClick={() => setIsOpen(!isOpen)}
                                            className="w-full text-start py-[10px] pr-[30px] pl-[10px] text-[18px] font-semibold tracking-[1px] border-none bg-[#ffffff]"
                                        >
                                            Գին
                                        </button>
                                    </div>
                                    {isOpen && (
                                        <div className="px-[20px] py-[20px]">
                                            <div className="space-y-[12px]">
                                                {["1,000 ֏ - 50,000 ֏", "50,000 ֏ - 100,000 ֏", "100,000 ֏ - 150,000 ֏", "150,000 ֏ - 200,000 ֏", "200,000 ֏ - 250,000 ֏"].map((range, idx) => (
                                                    <label key={idx} className="block cursor-pointer text-[19px] mb-[22px] text-[#2c3843] hover:text-blue-600">
                                                        <input type="checkbox" name="price" className="mr-[8px] accent-blue-500" />
                                                        {range}
                                                    </label>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <div className="px-[20px] mt-[20px] border-b border-b-[#ebedef]">
                                    <label className="block cursor-pointer text-[19px] mb-[22px] text-[#2c3843] hover:text-blue-600">
                                        <input type="checkbox" name="discount" className="mr-[8px] accent-blue-500" />
                                        Զեղչված
                                    </label>
                                </div>

                                <div className="px-[20px] mt-[20px] border-b border-b-[#ebedef]">
                                    <label className="block cursor-pointer text-[19px] mb-[22px] text-[#2c3843] hover:text-blue-600">
                                        <input type="checkbox" name="promo" className="mr-[8px] accent-blue-500" />
                                        Պրոմո
                                    </label>
                                </div>


                                <div className="pt-[18px] border border-[#ebedef] bg-[#f8f9f9] max-w-[320px] w-full">
                                    <button onClick={() => setIsBeautifulNumbersOpen(!isBeautifulNumbersOpen)} className="w-full text-start py-[10px] pr-[30px] pl-[10px] text-[18px] font-semibold tracking-[1px] border-none bg-[#ffffff]" aria-expanded={isBeautifulNumbersOpen} aria-controls="brandContent">
                                        Բրենդ
                                    </button>
                                    {isBeautifulNumbersOpen && (
                                        <div id="brandContent" className="bg-white px-[20px] py-[15px] rounded-[12px] mt-[10px]">
                                            {["Apple", "Tecno", "Xiaomi", "Honor", "Motorola"].map((opt, idx) => (
                                                <label key={idx} className="block cursor-pointer text-[19px] mb-[22px] text-[#2c3843] hover:text-blue-600">
                                                    <input type="checkbox" name="brand" value={opt} className="mr-[10px] accent-blue-500" />
                                                    {opt}
                                                </label>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                <div className="pt-[18px] border border-[#ebedef] bg-[#f8f9f9] max-w-[320px] w-full">
                                    <button onClick={() => setIsRamOpen(!isRamOpen)} className="w-full text-start py-[10px] pr-[30px] pl-[10px] text-[18px] font-semibold tracking-[1px] border-none bg-[#ffffff]" aria-expanded={isRamOpen} aria-controls="ramContent">
                                        Օպերատիվ հիշողություն
                                    </button>
                                    {isRamOpen && (
                                        <div id="ramContent" className="bg-white px-[20px] py-[15px] rounded-[12px] mt-[10px]">
                                            {["2 GB", "3 GB", "4 GB", "6 GB", "8 GB", "12 GB"].map((opt, idx) => (
                                                <label key={idx} className="block cursor-pointer text-[19px] mb-[22px] text-[#2c3843] hover:text-blue-600">
                                                    <input type="checkbox" name="ram" value={opt} className="mr-[10px] accent-blue-500" />
                                                    {opt}
                                                </label>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                <div className="pt-[18px] border border-[#ebedef] bg-[#f8f9f9] max-w-[320px] w-full">
                                    <button onClick={() => setIsStorageOpen(!isStorageOpen)} className="w-full text-start py-[10px] pr-[30px] pl-[10px] text-[18px] font-semibold tracking-[1px] border-none bg-[#ffffff]" aria-expanded={isStorageOpen} aria-controls="storageContent">
                                        Ներքին հիշողություն
                                    </button>
                                    {isStorageOpen && (
                                        <div id="storageContent" className="bg-white px-[20px] py-[15px] rounded-[12px] mt-[10px]">
                                            {["16 GB", "32 GB", "64 GB", "128 GB", "256 GB", "512 GB"].map((opt, idx) => (
                                                <label key={idx} className="block cursor-pointer text-[19px] mb-[22px] text-[#2c3843] hover:text-blue-600">
                                                    <input type="checkbox" name="storage" value={opt} className="mr-[10px] accent-blue-500" />
                                                    {opt}
                                                </label>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                <div className="pt-[18px] border border-[#ebedef] bg-[#f8f9f9] max-w-[320px] w-full">
                                    <button
                                        onClick={() => setIsWaterResistantOpen(!isWaterResistantOpen)}
                                        className="w-full text-start py-[10px] pr-[30px] pl-[10px] text-[18px] font-semibold tracking-[1px] border-none bg-[#ffffff]"
                                        aria-expanded={isWaterResistantOpen}
                                        aria-controls="waterResistantContent"
                                    >
                                        Փոշի / Անջրանցիկ
                                    </button>

                                    {isWaterResistantOpen && (
                                        <div
                                            id="waterResistantContent"
                                            className="bg-white px-[20px] py-[15px] rounded-[12px] mt-[10px]"
                                        >
                                            {["IP68", "IP53", "IP67", "IP54", "Ոչ"].map((opt, idx) => (
                                                <label
                                                    key={idx}
                                                    className="block cursor-pointer text-[19px] mb-[22px] text-[#2c3843] hover:text-blue-600"
                                                >
                                                    <input
                                                        type="checkbox"
                                                        name="waterResistance"
                                                        value={opt}
                                                        className="mr-[10px] accent-blue-500"
                                                    />
                                                    {opt}
                                                </label>
                                            ))}
                                        </div>
                                    )}
                                </div>
                                <div className="pt-[18px] border border-[#ebedef] bg-[#f8f9f9] max-w-[320px] w-full">
                                    <button
                                        onClick={() => matankhetq(!mat)}
                                        className="w-full text-start py-[10px] pr-[30px] pl-[10px] text-[18px] font-semibold tracking-[1px] border-none bg-[#ffffff]"
                                        aria-expanded={mat}
                                        aria-controls="mathetq"
                                    >
                                        Մատնահետք
                                    </button>
                                    {mat && (
                                        <div
                                            id="mathetq"
                                            className="bg-white px-[20px] py-[15px] rounded-[12px] mt-[10px]"
                                        >
                                            {["Այո", "Ոչ"].map((opt, idx) => (
                                                <label
                                                    key={idx}
                                                    className="block cursor-pointer text-[19px] mb-[22px] text-[#2c3843] hover:text-blue-600"
                                                >
                                                    <input
                                                        type="checkbox"
                                                        name="matnahetq"
                                                        value={opt}
                                                        className="mr-[10px] accent-blue-500"
                                                    />
                                                    {opt}
                                                </label>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                <div className="pt-[18px] border border-[#ebedef] bg-[#f8f9f9] max-w-[320px] w-full">
                                    <button
                                        onClick={() => setIsFaceIdOpen(!isFaceIdOpen)}
                                        className="w-full text-start py-[10px] pr-[30px] pl-[10px] text-[18px] font-semibold tracking-[1px] border-none bg-[#ffffff]"
                                        aria-expanded={isFaceIdOpen}
                                        aria-controls="faceIdContent"
                                    >
                                        Դեմքի ճանաչում
                                    </button>

                                    {isFaceIdOpen && (
                                        <div
                                            id="faceIdContent"
                                            className="bg-white px-[20px] py-[15px] rounded-[12px] mt-[10px]"
                                        >
                                            {["Այո", "Ոչ"].map((opt, idx) => (
                                                <label
                                                    key={idx}
                                                    className="block cursor-pointer text-[19px] mb-[22px] text-[#2c3843] hover:text-blue-600"
                                                >
                                                    <input
                                                        type="checkbox"
                                                        name="faceId"
                                                        value={opt}
                                                        className="mr-[10px] accent-blue-500"
                                                    />
                                                    {opt}
                                                </label>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                <div className="pt-[18px] border border-[#ebedef] bg-[#f8f9f9] max-w-[320px] w-full">
                                    <button
                                        onClick={() => setIsJackOpen(!isJackOpen)}
                                        className="w-full text-start py-[10px] pr-[30px] pl-[10px] text-[18px] font-semibold tracking-[1px] border-none bg-[#ffffff]"
                                        aria-expanded={isJackOpen}
                                        aria-controls="jackContent"
                                    >
                                        3.5մմ միացում
                                    </button>

                                    {isJackOpen && (
                                        <div
                                            id="jackContent"
                                            className="bg-white px-[20px] py-[15px] rounded-[12px] mt-[10px]"
                                        >
                                            {["Այո", "Ոչ"].map((opt, idx) => (
                                                <label
                                                    key={idx}
                                                    className="block cursor-pointer text-[19px] mb-[22px] text-[#2c3843] hover:text-blue-600"
                                                >
                                                    <input
                                                        type="checkbox"
                                                        name="jack"
                                                        value={opt}
                                                        className="mr-[10px] accent-blue-500"
                                                    />
                                                    {opt}
                                                </label>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                <div className="pt-[18px] border border-[#ebedef] bg-[#f8f9f9] max-w-[320px] w-full">
                                    <button
                                        onClick={() => setIsEsimOpen(!isEsimOpen)}
                                        className="w-full text-start py-[10px] pr-[30px] pl-[10px] text-[18px] font-semibold tracking-[1px] border-none bg-[#ffffff]"
                                        aria-expanded={isEsimOpen}
                                        aria-controls="esimContent"
                                    >
                                        eSIM
                                    </button>

                                    {isEsimOpen && (
                                        <div
                                            id="esimContent"
                                            className="bg-white px-[20px] py-[15px] rounded-[12px] mt-[10px]"
                                        >
                                            {["Այո", "Ոչ"].map((opt, idx) => (
                                                <label
                                                    key={idx}
                                                    className="block cursor-pointer text-[19px] mb-[22px] text-[#2c3843] hover:text-blue-600"
                                                >
                                                    <input
                                                        type="checkbox"
                                                        name="esim"
                                                        value={opt}
                                                        className="mr-[10px] accent-blue-500"
                                                    />
                                                    {opt}
                                                </label>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                <div className="bg-[#f5f6f7] pt-[30px] px-[20px] pb-[20px]">
                                    <button className="w-full h-[44px] px-[18px] font-[800] border-none text-[#ffffff] text-[18px] bg-[#f04d4d] rounded-[30px] hover:bg-[#e03a3a] transition-all duration-200 text-center whitespace-nowrap font-[Team-Bold] mb-[10px]">
                                        Ֆիլտրել
                                    </button>
                                    <button className="w-full text-[#2c3843] underline border-none bg-[#f5f6f7]">
                                        Մաքրեք ֆիլտրերը
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col flex-1">
                    <div className="flex justify-between mb-[20px] p-[40px] gap-[20px]">
                        <div className="w-[50%]">
                            <input
                                type="search"
                                placeholder="Որոնել"
                                className="w-full h-[44px] bg-white border border-[#ebedef] rounded-[22px] px-[20px] pl-[34px] py-[11px] box-border"
                            />
                        </div>
                        <div className="flex items-center gap-[10px]">
                            <p className="text-[#2c3843] text-[16px]">Դասավորել ըստ`</p>
                            <select className="h-[44px] border border-[#ebedef] rounded-[22px] cursor-pointer block box-border px-[12px] text-[16px] text-[#2c3843]">
                                <option value="">ընտրել</option>
                                <option value="low-high">Գին՝ ցածրից բարձր</option>
                                <option value="high-low">Գին՝ բարձրից ցածր</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-center mb-[200px] gap-[20px]">
                        {loading ? (
                            <p>Բեռնվում է...</p>
                        ) : (
                            data.map((el) => (
                                <Navbaj
                                    key={el.id}
                                    id={el.id}
                                    anun={el.anun}
                                    nkar={el.nkar}
                                    gin={el.gin}
                                    text={el.text}
                                    aparik={el.aparik}
                                    image={el.nkar}
                                />
                            ))
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
}
