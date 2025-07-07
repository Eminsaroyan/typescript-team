import { Link } from "react-router-dom";
import Apranq from "./Apranq";

export default function () {
    return (
        <div>
            <div className="flex justify-evenly items-center mt-[120px] mb-[120px]">
                <Link to="/smartphones" className="flex justify-center items-center border border-[#c2c3c4] bg-[#f5f6f7] no-underline text-[#000000] pt-[15px] rounded-[5px] pb-[20px] pt-[20px] hover:shadow-[0_4px_25px_rgba(0,0,0,0.2)] transition-shadow cursor-pointer duration-300">
                    <img src="https://www.telecomarmenia.am/files/icons/1/16511434160671/220x220.png" alt="" className="w-[20%] mr-[10px]" />
                    <p>Սմարթֆոններ</p>
                </Link>

                <Link to="/numbers" className="flex justify-center items-center border border-[#c2c3c4] bg-[#f5f6f7] no-underline text-[#000000] pt-[15px] rounded-[5px] pb-[20px] pt-[20px] hover:shadow-[0_4px_25px_rgba(0,0,0,0.2)] transition-shadow cursor-pointer duration-300">
                    <img src="https://www.telecomarmenia.am/files/icons/1/16511436682774/220x220.png" alt="" className="w-[20%] mr-[10px]" />
                    <p>Համարներ</p>
                </Link>

                <Link to="/equipment" className="flex justify-center items-center border border-[#c2c3c4] bg-[#f5f6f7] no-underline text-[#000000] pt-[15px] rounded-[5px] pb-[20px] pt-[20px] hover:shadow-[0_4px_25px_rgba(0,0,0,0.2)] transition-shadow cursor-pointer duration-300">
                    <img src="https://www.telecomarmenia.am/files/icons/1/16511433995815/220x220.png" alt="" className="w-[20%] mr-[10px]" />
                    <p>Սարքավորումներ</p>
                </Link>

                <Link to="/accessories" className="flex justify-center items-center border border-[#c2c3c4] bg-[#f5f6f7] no-underline text-[#000000] pt-[15px] rounded-[5px] pb-[20px] pt-[20px] hover:shadow-[0_4px_25px_rgba(0,0,0,0.2)] transition-shadow cursor-pointer duration-300">
                    <img src="https://www.telecomarmenia.am/files/icons/1/16511434076021/220x220.png" alt="" className="w-[20%] mr-[10px]" />
                    <p>Աքսեսուարներ</p>
                </Link>

            </div>
            <Apranq />
        </div>
    )
}