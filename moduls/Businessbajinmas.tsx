
// Պրոպսների տիպերի սահմանում
interface BajinProps {
    vernagir: string;
    text1: string;
    text2: string;
    text3: string;
    but: string;
    image: string;
    bg: string;
}

export default function Bajin({
    vernagir,
    text1,
    text2,
    text3,
    but,
    image,
    bg,
}: BajinProps) {
    return (
        <div
            className="flex justify-evenly items-center p-4 rounded-md shadow-md max-w-md mx-auto"
            style={{ backgroundImage: `url(${bg})` }}
        >
            <div className="w-[30%]">
                <h1 className="text-[65px] font-[700] mb-[30px] text-[#ffffff]">
                    {vernagir}
                </h1>
                <p className="text-[26px] text-[#ffffff] mb-[30px]">
                    {text1}
                    <br />
                    {text2}
                    <br />
                    {text3}
                </p>
                <button className="pt-[15px] pb-[15px] font-bold pl-[80px] pr-[80px] border-none rounded-[12px] bg-[#ffffff] text-[#FF0000]">
                    {but}
                </button>
            </div>
            <div>
                <img src={image} alt="Biznes" />
            </div>
        </div>
    );
}
