import { FaFacebookF, FaTwitter } from "react-icons/fa";

export default function Arakummas() {
    return (
        <div className="max-w-[1230px] m-auto mt-[30px]">
            <h1 className="mb-[30px] font-[800] font-team">Առաքման պայմաններ</h1>
            <table className="w-full max-w-[1320px] h-[524px] mb-[40px] mx-auto border-collapse border-spacing-0">
                <tbody>
                    <tr>
                        <td className="w-[120px] p-[15px] bg-[#01415f] border border-[#01415f] align-middle text-[#ffffff] text-center">
                            <h4 className="text-[30px] font-[800] font-team">Մարզ</h4>
                        </td>
                        <td className="w-[120px] p-[15px] bg-[#01415f] border border-[#01415f] align-middle text-[#ffffff] text-center">
                            <h4 className="text-[30px] font-[800] font-team">Բնակավայր/արժեք</h4>
                        </td>
                        <td className="w-[120px] p-[15px] bg-[#01415f] border border-[#01415f] align-middle text-[#ffffff] text-center">
                            <h4 className="text-[30px] font-[800] font-team">Ժամկետ</h4>
                        </td>
                    </tr>
                    <tr>
                        <td className="min-w-[100px] text-[20px] p-[15px] border border-[#C9C9C966] font-[800] font-team align-middle text-center">
                            <p>Երևան</p>
                        </td>
                        <td className="bg-[#f0f0f1] text-[20px] min-w-[100px] p-[15px] font-[800] font-team  border border-[#C9C9C966] align-middle text-center">
                            <p>բոլոր հասցեներ` <strong className="text-[#666e75]">անվճար</strong></p>
                        </td>
                        <td className="min-w-[100px] text-[20px] p-[15px] border border-[#C9C9C966] font-[800] font-team align-middle text-center">
                            <p>1 աշխատանքային օրվա ընթացքում</p>
                        </td>
                    </tr>
                    <tr>
                        <td className="min-w-[100px] text-[20px] p-[15px] border border-[#C9C9C966] font-[800] font-team align-middle text-center">
                            <p>Մարզեր</p>
                        </td>
                        <td className="bg-[#f0f0f1] text-[20px] min-w-[100px] p-[15px] font-[800] font-team  border border-[#C9C9C966] align-middle text-center">
                            <p>1500 դրամ</p>
                        </td>
                        <td className="min-w-[100px] text-[20px] p-[15px] border border-[#C9C9C966] font-[800] font-team align-middle text-center">
                            <p className="w-[300px] m-auto">3 աշխատանքային օրվա ընթացքում</p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className="mb-[50px] flex">
                <p className="text-[19px] font-[600] font-semibold mr-[10px]">Կիսվել</p>
                <div className="flex gap-[15px] items-center">
                    <a
                        href="https://www.facebook.com/sharer/sharer.php?u=https://yourwebsite.am"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#000000] hover:opacity-80 text-[25px]"
                    >
                        <FaFacebookF />
                    </a>
                    <a
                        href="https://twitter.com/intent/tweet?url=https://yourwebsite.am&text=Կիսվեք այս էջով"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ttext-[#000000] hover:opacity-80 text-[25px]"
                    >
                        <FaTwitter />
                    </a>
                </div>
            </div>
        </div>
    )
}