export default function Roamingmek() {
    return (
        <div
            className=" w-full h-[522px] bg-cover bg-center"
            style={{
                backgroundImage:
                    "url('https://www.telecomarmenia.am/images/sliders_block_slides/1/17506826314138.jpeg')",
            }}
        >
            <div className="max-w-[1260px] h-full mx-auto px-[20px] relative">
                <div className="top-auto w-auto absolute bottom-[135px] left-[20px] max-w-[520px] bg-[rgba(51,51,51,0.6)] rounded-[5px] p-[40px] text-white">
                    <h3 className="text-[#fff] text-[40px]  font-bold mb-[45px] font-[700]"
                        style={{ fontFamily: "'Team-Regular', 'Helvetica', 'Arial', 'sans-serif'" }}
                    >Բացաhայտենք աշխարհը</h3>
                    <p className="text-[20px] mb-[24px] mt-[30px] text-[#fff]"
                        style={{ fontFamily: "'Team-Regular', 'Helvetica', 'Arial', 'sans-serif'" }}
                    >
                        Ինտերնետ ռոումինգում սկսած 1.5 դր/ ՄԲ
                    </p>
                    <button  className="mx-auto w-[150px] h-[44px] cursor-pointer px-[15px] border-none bg-[#f04d4d] text-[#fff] rounded-[30px] shadow-[2px_2px_10px_0_rgba(0,0,0,0.1)]" >Քարտեզ</button>
                </div>
                <img src="https://www.telecomarmenia.am/images/sliders_block_slides/1/17506826314375.png" alt="" className="absolute h-[522px] left-[635px] right-auto" />
            </div>
        </div>

    )
}