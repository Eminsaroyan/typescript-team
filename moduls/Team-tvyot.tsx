export default function Teamtvyot() {
    return (
        <div className="flex flex-col items-center pt-[30px] pb-[40px] bg-[#01415f] text-[#ffffff] ">
            <h1 className="text-[65px] mb-[12px] font-[900]"
                style={{
                    fontFamily:
                        "'Team-Regular', 'Helvetica', 'Arial', 'sans-serif'",
                }}
            >
                Թողնել հայտ
            </h1>
            <p className="mb-[23px] text-[20px] font-[900] font-serif"
                style={{
                    fontFamily:
                        "'Team-Regular', 'Helvetica', 'Arial', 'sans-serif'",
                }}>
                Ստուգի՛ր տան Ինտերնետի մաքսիմալ արագությունը քո հասցեում՝ թողնելով օնլայն հայտ:
            </p>
            <button className="pt-[10px] pb-[10px] pl-[100px] pr-[100px] bg-[#fff] font-[900] text-[15px] text-[#01415f] rounded-[12px] border-none cursor-pointer hover:bg-[#f04d4d]">
                Ուղարկել
            </button>
        </div>
    );
}
