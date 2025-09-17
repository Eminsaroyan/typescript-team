export default function Intertmas() {
    return (
        <div className="max-w-[1230px] m-auto">
            <p className="mt-[60px] text-[20px] font-[200] font-team w-[900px] mb-[40px]">Տվյալ հասցեում հասանելի Ինտերնետի արագությունը ճշտելու համար լրացրեք հետևյալ դիմումը և սեղմեք ուղարկել։ Սարքավորումների առաքումն և տեղադրումը անվճար է ՀՀ ամբողջ տարածքով։</p>
            <h1 className="text-[45px] font-[600] font-team mb-[50px]">Թողնել հայտ</h1>
            <div className="grid grid-cols-3 md:grid-cols-2  gap-y-[20px] mb-[50px] bg-white rounded-[12px] shadow-md max-w-[1230px] mx-auto">
                <div className="flex flex-col">
                    <label className="text-sm font-[300] font-team  text-gray-700 mb-[10px]">Անուն ազգանուն*</label>
                    <input type="text" className="border border-gray-300 rounded w-[300px] pt-[10px] pb-[10px] rounded-[12px]" />
                </div>

                <div className="flex flex-col">
                    <label className="text-sm font-[300] font-team  text-gray-700 mb-[10px]">Էլ.հասցե</label>
                    <input type="email" className="border border-gray-300 rounded w-[300px] pt-[10px] pb-[10px] rounded-[12px] "/>
                </div>

                <div className="flex flex-col">
                    <label className="text-sm font-[300] font-team  text-gray-700 mb-[10px]">Հեռախոսի համար*</label>
                    <input type="tel" className="border border-gray-300 rounded w-[300px] pt-[10px] pb-[10px] rounded-[12px]" />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="marz" className="text-sm font-[300] font-team  text-gray-700 mb-[10px]">Մարզ*</label>
                    <select name="marz" id="marz" className="border border-gray-300 rounded w-[300px] pt-[10px] pb-[10px] rounded-[12px]">
                        <option value="">Ընտրել մարզը</option>
                        <option value="yerevan">Երևան</option>
                        <option value="shirak">Շիրակ</option>
                        <option value="armavir">Արմավիր</option>
                    </select>
                </div>

                <div className="flex flex-col md:col-span-2">
                    <label className="text-sm font-[300] font-team  text-gray-700 mb-[10px]">Հասցե*</label>
                    <input type="text" className="border border-gray-300 rounded w-[300px] pt-[10px] pb-[10px] rounded-[12px] " />
                </div>

                <div className="">
                    <button className="bg-[#f04d4d] text-[#ffffff] border-none px-[40px] py-[10px] mt-[25px] rounded-[12px]  hover:bg-[#f04d4d] transition-all duration-300">
                        Ուղարկել
                    </button>
                </div>
            </div>
        </div>
    )
}