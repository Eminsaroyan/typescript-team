import { useState } from "react";

export default function SmsTabs() {
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
                Պայմաններ
            </h2>

            <div className="flex lg:flex-row gap-[20px]">
                {/* Ծառայության սահմանափակումներ */}
                <div className="flex-1">
                    <div
                        onClick={toggleLimitations}
                        className={`cursor-pointer flex justify-between items-center px-[20px] py-[12px] rounded-[8px] font-[600] transition-colors duration-300 ${
                            isLimitationsOpen ? "bg-[#86d2da] text-[#000000]" : "bg-[#fff] text-[#000000]"
                        }`}
                    >
                        <span>Ծառայության սահմանափակումներ</span>
                        <span
                            className={`transition-transform duration-300 ${isLimitationsOpen ? "rotate-180" : "rotate-0"}`}
                        >
                            ▼
                        </span>
                    </div>
                    {isLimitationsOpen && (
                        <div className="mt-[8px] bg-[#f5f5f5] p-[20px] rounded-[8px] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] text-[#333333] text-[16px] leading-[28px]">
                            <ul className="list-disc pl-[20px] space-y-[8px]">
                                <li>
                                    Հաճախորդը չպետք է իրականացնի չպահանջված SMS հաղորդագրությունների ուղարկում (SPAM):
                                </li>
                                <li>
                                    SMS հաղորդագրությունները չպետք է պարունակեն այնպիսի տեղեկատվություն, որի տարածումն արգելված է ՀՀ օրենսդրությամբ:
                                </li>
                                <li>
                                    Բաժանորդները հնարավորություն ունեն արգելափակել SMS-ները նշված տարբերակներով:
                                    <ul className="list-disc pl-[16px] space-y-[4px]">
                                        <li>զանգահարել <span className="text-[#4e789a] underline">0674454 համարին</span></li>
                                        <li>ուղարկել <span className="text-[#4e789a] underline">454 թիվը 0674 համարին</span></li>
                                        <li>USSD <span className="text-[#4e789a] underline">*454# հրահանգով</span></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>

                {/* Ընդհանուր պայմաններ */}
                <div className="flex-1">
                    <div
                        onClick={toggleGeneral}
                        className={`cursor-pointer flex justify-between items-center px-[20px] py-[12px] rounded-[8px] font-[600] transition-colors duration-300 ${
                            isGeneralOpen ? "bg-[#86d2da] text-[#000000]" : "bg-[#fff] text-[#000000]"
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
                            <ul className="list-disc pl-[20px] space-y-[8px]">
                                <li className="font-[600]">Բոլոր սակագները ներկայացված են ՀՀ դրամով՝ ԱԱՀ-ն ներառյալ:</li>
                                <li>Ամսավճարը գանձվում է հաշվետու ժամանակահատվածի ավարտից հետո:</li>
                                <li>Փաթեթով նախատեսված SMS-ները պետք է օգտագործվեն ամսվա ընթացքում. Չօգտագործված SMS-ները չեն փոխանցվում հաջորդ ամիս:</li>
                                <li>Եթե փաթեթով նախատեսված SMS-ները սպառվում են մինչև ամսվա վերջ, ապա հավելյալ SMS-ները տարիֆիկացվում են ըստ 1 SMS-ի արժեքի:</li>
                                <li>Փաթեթի միացումը գործող բաժանորդների համար հնարավոր է միայն ամսվա առաջին 3 աշխատանքային օրերին:</li>
                                <li>SMS-թիրախավորման սակագները գումարվում են «Բազային», «Գովազդային», «Ինֆո-ալիք» փաթեթների արժեքին:</li>
                                <li>SMS-թիրախավորումը գործում է միայն նրանց համար, ովքեր համաձայնություն են տվել:</li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
