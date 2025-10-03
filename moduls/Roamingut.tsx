import { useState } from "react";

export default function Roamingut() {
    const [isLimitationsOpen, setIsLimitationsOpen] = useState(false);
    const [isGeneralOpen, setIsGeneralOpen] = useState(false);

    const toggleLimitations = () => setIsLimitationsOpen(!isLimitationsOpen);
    const toggleGeneral = () => setIsGeneralOpen(!isGeneralOpen);

    return (
        <div className="max-w-[1200px] mx-auto py-[40px] px-[20px] bg-[#ffffff]">
            <h2
                className="mb-[40px] text-center text-[#01425f] text-[48px] font-[400] leading-[1.2]"
                style={{ fontFamily: "'Team-Regular', 'Helvetica', 'Arial', 'sans-serif'" }}
            >
                Հաճախ տրվող հարցեր
            </h2>

            <div className="flex lg:flex-row gap-[20px]">
                <div className="flex-1">
                    <div
                        onClick={toggleLimitations}
                        className={`cursor-pointer flex justify-between items-center px-[20px] py-[12px] rounded-[8px] font-[600] transition-colors duration-300 ${isLimitationsOpen ? "bg-[#86d2da] text-[#000000]" : "bg-[#fff] text-[#000000]"
                            }`}
                    >
                        <span>Ռոումինգ Հյուրերին</span>
                        <span
                            className={`transition-transform duration-300 ${isLimitationsOpen ? "rotate-180" : "rotate-0"}`}
                        >
                            ▼
                        </span>
                    </div>
                    {isLimitationsOpen && (
                        <div className="mt-[8px] bg-[#f5f5f5] p-[20px] rounded-[8px] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] text-[#333333] text-[16px] leading-[28px]">
                            <p className="mb-[20px]">Team -ի միջոցով Հայաստանի տարածքում դուք կապի մեջ կլինեք ձեր հարազատների և մտերիմների հետ։</p>
                            <p className="mb-[20px]"><strong>Team ռոումինգը Հայաստանում</strong></p>
                            <p className="mb-[20px]">Ծանոթացեք Հայաստանում Team սպասարկման ծածկույթին: Ճամփորդության ընթացքում Team ցանցն ընտրելու համար ձեր հեռախոսի մենյուում փնտրեք և հասանելի ցանցերի ցուցակում ընտրեք Team ցանցը: Կախված հեռախոսի մոդելից` էկրանին Team ցանցը կարող է պատկերվել որպես` Team:</p>
                            <p className="mb-[20px]"><strong>Հասանելի ծառայություններ ռոումինգում</strong></p>
                            <p className="mb-[20px]">Team ցանցում մեր ռոումինգային հյուրերին հասանելի են հետևյալ ծառայությունները` Զանգի ստացում/կատարում SMS ընդունում/ուղարկում Զանգի արգելափակում Զանգի սպասում/պահում Զանգի վերահասցեավորում Ինտերնետ, Միջազգային կապ Team ցանցում ռոումինգի տրամադրման պայմաններն ու գները ճշտեք ձեր բջջային օպերատորի հետ:</p>
                            <p className="mb-[20px]"><strong>Արտակարգ ծառայությունների հեռախոսահամարները</strong></p>
                            <ul className="list-disc pl-[20px] space-y-[8px]">
                                <li className="pb-[15px] pl-[25px]">101 – Հրշեջ ծառայություն</li>
                                <li className="pb-[15px] pl-[25px]">102 – Ոստիկանություն</li>
                                <li className="pb-[15px] pl-[25px]">103 – Շտապ օգնություն</li>
                                <li className="pb-[15px] pl-[25px]">104 – Գազի վթարային ծառայություն</li>
                                <li className="pb-[15px] pl-[25px]">112 – Փրկարար ծառայություն Արտակարգ ծառայությունների հեռախոսահամարներին զանգերն անվճար են:</li>
                            </ul>
                        </div>
                    )}
                </div>

                <div className="flex-1">
                    <div
                        onClick={toggleGeneral}
                        className={`cursor-pointer flex justify-between items-center px-[20px] py-[12px] rounded-[8px] font-[600] transition-colors duration-300 ${isGeneralOpen ? "bg-[#86d2da] text-[#000000]" : "bg-[#fff] text-[#000000]"
                            }`}
                    >
                        <span>Ընդհանուր պայմաններ</span>
                        <span
                            className={`transition-transform duration-300 ${isGeneralOpen ? "rotate-180" : "rotate-0"}`}
                        >
                            ▼
                        </span>
                    </div>
                    {isGeneralOpen && (
                        <div className="mt-[8px] bg-[#f5f5f5] p-[20px] rounded-[8px] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] text-[#333333] text-[16px] leading-[28px]">
                            <p className="leading-[26px] pb-[20px]">Ռոումինգում Դուք կարող եք լիցքավորել Team բջջային հեռախոսահամարի հաշվեկշիռը,ինչպես նաև վճարել Ինտերնետի համար www.telecomarmenia.am կայքում կամ My Team հավելվածում օնլայն վճարման միջոցով:</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
