interface ServiceItem {
    id: number;
    name: string;
    description: string;
}

export default function Roamingyot() {
    const services: ServiceItem[] = [
        { id: 1, name: "Զրուցենք", description: "Անսահմանափակ զանգեր Team բջջային ցանցի ներսում" },
        { id: 2, name: "Համարի փոխարինում", description: "Ցանկացած պահին դուք կարող եք փոխել ձեր համարը Կանխավճարային և հետվճարային համակարգի իրավաբանական բաժանորդների…" },

    ];

    const Card = ({ name, description }: { name: string; description?: string }) => (
        <div className="group w-[300px] h-[260px] rounded-[16px] bg-white transition-transform duration-300 hover:scale-[1.05] hover:shadow-[0_6px_12px_-2px_rgba(0,0,0,0.25)] p-[20px] flex flex-col justify-between">
            <h2 className="text-[22px] font-[700] text-[#1F2937] mb-[10px] px-[10px] py-[6px] rounded-[8px] transition-colors duration-300 group-hover:bg-[#86d2da] group-hover:text-[#000]">
                {name}
            </h2>

            <p className="text-[16px] text-[#374151] mb-[14px] flex-1 leading-[22px]">
                {description}
            </p>

            <button className="w-full py-[12px] text-[#F04D4D] bg-white font-[600] border border-[#F04D4D] rounded-[12px] transition-colors duration-300 group-hover:bg-[#F04D4D] group-hover:text-[#fff]">
                Ավելին
            </button>
        </div>
    );

    return (
        <div className="mb-[30px] mt-[60px]">
            <div className="mx-auto max-w-[1260px] px-[20px]">
                <h2
                    className="mb-[60px] text-center text-[#2c3843] text-[60px]"
                    style={{ fontFamily: "'Team-Regular', 'Helvetica', 'Arial', 'sans-serif'" }}
                >
                    Օգտակար տեղեկատվություն
                </h2>


                <div className="grid grid-cols-4 sm:grid-cols-2 lg:grid-cols-4 gap-[300px] justify-center">
                    {services.map((srv) => (
                        <Card key={srv.id} name={srv.name} description={srv.description} />
                    ))}
                </div>
            </div>
        </div>
    );
}
