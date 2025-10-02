import Biznesinternetsakagin from "./Bizneshetvcharayinsakagin";

interface AppItem {
    id: number;
    title: string;
    description: string;
}

interface PackageItem {
    id: number;
    name: string;
    description: string;
}

export default function Biznescarayutyunmobmas() {
    const kap: AppItem[] = [
        { id: 1, title: "Զրուցենք", description: "Անսահմանփակ զանգեր Team բջջային ցանցի ներսում" },
        { id: 2, title: "Համարի փոխարինում", description: "Ցանկացած պահին դուք կարող եք փոխել ձեր համարը Կանխավճարային և հետվճարային համակարգի իրավաբանական բաժանորդների… " },
    ];

    const cragir: PackageItem[] = [
        { id: 1, name: "Գեղեցիկ համար", description: "Ընտրեք գեղեցիկ հեռախոսահամար, որը համապատասխանում է Ձեզ" },
    ];

    const sma: PackageItem[] = [
        { id: 1, name: "SMS ծանուցում", description: "Ծառայությունը հնարավորություն է տալիս Գործընկերներին SMS ծանուցումներ ուղարկել։ Ծառայությունը հասանելի է Team բջջային կապի բոլոր… " },
    ];


    const Card = ({ name, description }: { name: string; description?: string }) => (
        <div className="group w-[300px] h-[260px] rounded-[16px] bg-white transition-transform duration-300 hover:scale-[1.05] hover:shadow-[0_6px_12px_-2px_rgba(0,0,0,0.25)] p-[20px] flex flex-col justify-between">

            {/* Վերնագիր */}
            <h2 className="text-[22px] font-[700] text-[#1F2937] mb-[10px] px-[10px] py-[6px] rounded-[8px] transition-colors duration-300 group-hover:bg-[#86d2da] group-hover:text-[#000]">
                {name}
            </h2>

            {/* Նկարագրություն */}
            <p className="text-[16px] text-[#374151] mb-[14px] flex-1 leading-[22px]">
                {description}
            </p>

            {/* Կոճակ */}
            <button className="w-full py-[12px] text-[#F04D4D] bg-white font-[600] border border-[#F04D4D] rounded-[12px] transition-colors duration-300 group-hover:bg-[#F04D4D] group-hover:text-[#fff]">
                Ավելին
            </button>
        </div>
    );


    return (
        <div>
            <Biznesinternetsakagin />

            <h1 className="text-[40px] mt-[20px] ml-[100px]">Սմարթֆոնի համար</h1>

            <div className="ml-[80px] p-[20px] mb-[20px] max-w-[1300px]">

                <h1 className="font-[700] mt-[20px] mb-[20px] border-b-[1px] text-[#424242] text-[28px]">
                    Միշտ կապի մեջ
                </h1>
                <div className="grid grid-cols-4 sm:grid-cols-2 lg:grid-cols-4 gap-[40px]">
                    {kap.map((app) => (
                        <Card key={app.id} name={app.title} description={app.description} />
                    ))}
                </div>

                <h1 className="font-[700] mt-[40px] mb-[20px] border-b-[1px] text-[#424242] text-[28px]">
                    Լոյալության ծրագիր
                </h1>
                <div className="grid grid-cols-4 sm:grid-cols-2 lg:grid-cols-4 gap-[40px]">
                    {cragir.map((pkg) => (
                        <Card key={pkg.id} name={pkg.name} description={pkg.description} />
                    ))}
                </div>

                <h1 className="font-[700] mt-[40px] mb-[20px] border-b-[1px] text-[#424242] text-[28px]">
                    SMS/MMS
                </h1>
                <div className="grid grid-cols-4 sm:grid-cols-2 lg:grid-cols-4 gap-[50px]">
                    {sma.map((pkg) => (
                        <Card key={pkg.id} name={pkg.name} description={pkg.description} />
                    ))}
                </div>



            </div>
        </div>
    );
}
