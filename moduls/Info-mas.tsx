
interface MasmasProps {
    vernagir: string;
    bovandakutyun: string;
    but: string;
    image: string;
    color: string;
    guyn: string;
    width?: string | number;
}

export default function Masmas({
    vernagir,
    bovandakutyun,
    but,
    image,
    color,
    guyn,
    width,
}: MasmasProps) {
    // Եթե width թիվ է, ավելացնում ենք px
    const formattedWidth = typeof width === "number" ? `${width}px` : width;

    return (
        <div
            className="flex justify-evenly items-center p-4 rounded-md shadow-md max-w-md mx-auto"
            style={{ backgroundColor: color }}
        >
            <div className="w-[30%]">
                <h1
                    className="text-[60px] mb-[30px] font-[700]"
                    style={{ color: guyn, width: formattedWidth }}
                >
                    {vernagir}
                </h1>
                <p className="text-[20px] mb-[30px]" style={{ color: guyn }}>
                    {bovandakutyun}
                </p>
                <button className="pt-[15px] pb-[15px] pl-[80px] pr-[80px] border-none rounded-[12px] bg-[#FF0000] text-[#ffffff]">
                    {but}
                </button>
            </div>
            <div>
                <img src={image} alt="Slide" />
            </div>
        </div>
    );
}
