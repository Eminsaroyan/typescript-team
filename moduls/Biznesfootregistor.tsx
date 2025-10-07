import { useState } from "react";
import type { FormEvent, ChangeEvent } from "react";

type FormData = {
    transferNumber: string;
    name: string;
    organization: string;
    phone: string;
};

export default function Biznesfootregistor() {
    const [formData, setFormData] = useState<FormData>({
        transferNumber: "",
        name: "",
        organization: "",
        phone: "",
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log(formData);
        alert("Դիմումը ուղարկվել է");
    };

    return (
        <div className="bg-[linear-gradient(180deg,#041d28_0%,#143046_100%)] text-[#fff]">
            <div className="mx-auto max-w-[1260px] px-[20px] ">
                <div className="pt-[72px] pr-[203px] pb-[60px] pl-[203px]">
                    <h1 className="mb-[10px] uppercase text-center text-[48px]"
                        style={{ fontFamily: "'Team-Regular', 'Helvetica', 'Arial', 'sans-serif'" }}
                    >Տեղափոխվե՛ք Team Ձեր համարով</h1>
                    <p className=" text-center text-[16px] tracking-[0.23px] leading-[24px] mb-[48px] font-[Team-Regular,Helvetica,Arial,sans-serif]"
                    >
                        Դարձե՛ք Team բաժանորդ, օգտվեք ցանցի առավելություններից` պահելով Ձեր բջջային <br /> հեռախոսի համարը:
                    </p>

                    <form onSubmit={handleSubmit} className="w-full max-w-[900px] mx-auto">
                        <div className="grid grid-cols-2 gap-x-[36px] gap-y-[20px]">
                            <div className="flex flex-col pt-[18px] pr-[18px] pb-[10px] pl-[18px]">
                                <label
                                    htmlFor="transferNumber"
                                    className="h-[15.6px] tracking-[0.15px] mb-[10px] pl-[10px] text-[0.75rem] text-left font-[Team-Regular,Helvetica,Arial,sans-serif]"
                                >
                                    Տեղափոխվող համար  (0XXYYYYYY ֆորմատով)*
                                </label>
                                <input
                                    type="tel"
                                    id="transferNumber"
                                    name="transferNumber"
                                    placeholder="0"
                                    pattern="0[0-9]{8}"
                                    required
                                    value={formData.transferNumber}
                                    onChange={handleChange}
                                    className="pl-[22px] border border-[#ebedef] rounded-[30px] h-[44px] px-[15px] w-full"
                                />
                            </div>

                            <div className="flex flex-col pt-[18px] pr-[18px] pb-[10px] pl-[18px]">
                                <label
                                    htmlFor="name"
                                    className="h-[15.6px] tracking-[0.15px] mb-[10px] pl-[10px] text-[0.75rem] text-left font-[Team-Regular,Helvetica,Arial,sans-serif]"
                                >
                                    Անուն Ազգանուն*
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Անուն Ազգանուն"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="pl-[22px] border border-[#ebedef] rounded-[30px] h-[44px] px-[15px] w-full"
                                />
                            </div>

                            <div className="flex flex-col pt-[18px] pr-[18px] pb-[10px] pl-[18px]">
                                <label
                                    htmlFor="organization"
                                    className="h-[15.6px] tracking-[0.15px] mb-[10px] pl-[10px] text-[0.75rem] text-left font-[Team-Regular,Helvetica,Arial,sans-serif]"
                                >
                                    Կազմակերպություն*
                                </label>
                                <input
                                    type="text"
                                    id="organization"
                                    name="organization"
                                    required
                                    value={formData.organization}
                                    onChange={handleChange}
                                    className="pl-[22px] border border-[#ebedef] rounded-[30px] h-[44px] px-[15px] w-full"
                                />
                            </div>

                            <div className="flex flex-col pt-[18px] pr-[18px] pb-[10px] pl-[18px]">
                                <label
                                    htmlFor="phone"
                                    className="h-[15.6px] tracking-[0.15px] mb-[10px] pl-[10px] text-[0.75rem] text-left font-[Team-Regular,Helvetica,Arial,sans-serif]"
                                >
                                    Հեռախոսահամար*
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    placeholder="0XXYYYYYY"
                                    pattern="0[0-9]{8}"
                                    required
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="pl-[22px] border border-[#ebedef] rounded-[30px] h-[44px] px-[15px] w-full"
                                />
                            </div>
                        </div>

                        <div className="flex justify-center mt-[30px]">
                            <button
                                type="submit"
                                className="h-[44px] leading-[44px] min-w-[288px] px-[20px] text-center bg-[#F04D4D] border-none rounded-[30px] text-[#fff]"
                            >
                                Միանալ
                            </button>
                        </div>
                    </form>

                </div>

            </div>
        </div>
    );
}

