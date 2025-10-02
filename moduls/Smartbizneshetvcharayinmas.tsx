import { useState } from "react";
import Biznesinternetsakagin from "./Bizneshetvcharayinsakagin";

interface PackageItem {
    id: number;
    name: string;
    description: string;
}

export default function Biznessmartmas() {
    const [isGigaOpen, setIsGigaOpen] = useState<boolean>(true);

    const Giga: PackageItem[] = [
        { id: 1, name: "Giga 15 ԳԲ", description: "Գերարագ ինտերնետ փաթեթ սմարթֆոնի համար" },
        { id: 2, name: "Giga 10 ԳԲ", description: "Գերարագ ինտերնետ փաթեթ սմարթֆոնի համար" },
        { id: 3, name: "Giga 5 ԳԲ", description: "Գերարագ ինտերնետ փաթեթ սմարթֆոնի համար" },
        { id: 4, name: "Giga 2 ԳԲ", description: "Գերարագ ինտերնետ փաթեթ սմարթֆոնի համար" },
        { id: 5, name: "Giga 1 ԳԲ", description: "Գերարագ ինտերնետ փաթեթ սմարթֆոնի համար" },
    ];

    const Card = ({ name, description }: { name: string; description?: string }) => (
        <div className="shadow-md rounded-[12px] border bg-[#ffffff] transition-transform duration-200 hover:scale-[1.05] p-[24px] min-h-[200px] flex flex-col justify-between">
            <h2 className="text-[22px] font-[800] text-[#1F2937] mb-[12px] p-[10px] rounded-[8px] transition-colors group-hover:bg-[#2563EB] group-hover:text-[#ffffff]">
                {name}
            </h2>
            <p className="text-[16px] text-[#374151] mb-[16px] flex-1">{description}</p>
            <button className="w-full px-[20px] py-[10px] text-[#F04D4D] bg-[#ffffff] font-[600] border border-[#F04D4D] rounded-[10px] transition-colors hover:bg-[#F04D4D] hover:text-[#ffffff]">
                Մանրամասն
            </button>
        </div>
    );

    return (
        <div>
            <Biznesinternetsakagin />

            <h1 className="text-[40px] mt-[20px] ml-[100px]">Սմարթֆոնի համար</h1>

            <div className="ml-[80px] p-[20px] mb-[20px] max-w-[1300px]">

                <h1
                    onClick={() => setIsGigaOpen(!isGigaOpen)}
                    className="font-[700] mt-[40px] mb-[20px] border-b-[1px] text-[#424242] text-[28px] cursor-pointer select-none flex items-center justify-between"
                >
                    Giga
                    <span className="text-[20px]">{isGigaOpen ? "▲" : "▼"}</span>
                </h1>
                {isGigaOpen && (
                    <div className="grid grid-cols-4 sm:grid-cols-2 lg:grid-cols-4 gap-[40px]">
                        {Giga.map((pkg) => (
                            <Card key={pkg.id} name={pkg.name} description={pkg.description} />
                        ))}
                    </div>
                )}

            </div>
        </div>
    );
}
