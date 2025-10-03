export default function Roamingvec() {
    return (
        <div className="pb-[60px] border-b-[1px] border-[#ebedef]">
            <div className="mx-auto max-w-[1260px] px-[20px]">
                <h2 className="text-center text-[#2c3843] text-[60px] m-[10px]"
                    style={{ fontFamily: "'Team-Regular', 'Helvetica', 'Arial', 'sans-serif'" }}
                >Լավագույն սակագները</h2>
                <table className="border-collapse w-full mt-[30px]">
                    <tbody>
                        <tr className="h-[50px]">
                            <td className="border-b-2 text-center align-middle h-[62px]"
                                style={{ borderColor: "white #01415f #e6e7e8 white" }} colSpan={2}
                            >
                                <p className="mb-[10px]">
                                    <img
                                        src="https://www.telecomarmenia.am/file_manager/Roaming%20flags/italy.png"
                                        alt=""
                                        width={45}
                                        height={45}
                                    />
                                    <img
                                        src="https://www.telecomarmenia.am/file_manager/Roaming%20flags/russia.png"
                                        alt=""
                                        width={45}
                                        height={45}
                                    />
                                    <img
                                        src="https://www.telecomarmenia.am/file_manager/Roaming%20flags/georgia.png"
                                        alt=""
                                        width={45}
                                        height={45}
                                    />
                                    <img
                                        src="https://www.telecomarmenia.am/file_manager/Roaming%20flags/ukraine.png"
                                        alt=""
                                        width={45}
                                        height={45}
                                    />
                                </p>
                                <p
                                    style={{ fontFamily: "'Team-Regular', 'Helvetica', 'Arial', 'sans-serif'" }}
                                >Իտալիա (Wind), Ռուսաստան (Beeline), Վրաստան (Cellfie), Ուկրաինա (Kyivstar)</p>
                                <p className="mb-[20px]">Հասանելի ուղղությունների և սակագների ամբողջական <span className="underline"> ցանկ</span></p>
                            </td>
                        </tr>
                        <tr className="h-[29px]">
                            <td className="w-[302.454px] h-[99px] bg-white text-left align-middle border-b-2"
                                style={{ borderColor: "white #01415f #e6e7e8 white" }}
                            >Ինտերնետ</td>
                            <td className="w-[303.194px] h-[99px] bg-[#e6e7e8] text-center align-middle border-b-2"
                                style={{ borderColor: "#e6e7e8 #01415f white #e6e7e8" }}
                            ><strong className="text-[20px]">9</strong> դր/ՄԲ</td>
                        </tr>
                        <tr className="h-[68px]">
                            <td className="w-[302.454px] h-[99px] bg-white text-left align-middle border-b-2"
                                style={{ borderColor: "white #01415f #e6e7e8 white" }}
                            >Մուտքային և ելքային զանգեր դեպի Team* բջջային ցանց</td>
                            <td className="w-[303.194px] h-[99px] bg-[#e6e7e8] text-center align-middle border-b-2"
                                style={{ borderColor: "#e6e7e8 #01415f white #e6e7e8" }}
                            ><strong className="text-[20px]"> 29.99</strong> դր/ր</td>
                        </tr>
                        <tr className="h-[70px]">
                            <td className="w-[302.454px] h-[99px] bg-white text-left align-middle border-b-2"
                                style={{ borderColor: "white #01415f #e6e7e8 white" }}
                            >
                                Տեղական և միջազգային զանգեր ՝
                            </td>
                            <td className="w-[303.194px] h-[99px] bg-[#e6e7e8] text-center align-middle border-b-2"
                                style={{ borderColor: "#e6e7e8 #01415f white #e6e7e8" }}
                            ><strong className="text-[20px]"> 250</strong> դր/ր</td>
                        </tr>
                        <tr className="h-[70px]">
                            <td className="w-[302.454px] h-[99px] bg-white align-middle border-b-2"
                                style={{ borderColor: "white #01415f #01415f white" }} colSpan={2}>
                                <p className="font-[100] text-center"
                                    style={{ fontFamily: "'Team-Regular', 'Helvetica', 'Arial', 'sans-serif'" }}
                                >*29,99 դրամ սակագինը գործում է միայն +37443, +37499, +37496, +37491, +37433, +37497 կոդերով հեռախոսահամարներին զանգելիս, մյուս բոլոր դեպքերում ելքային զանգերը ՀՀ՝ 150 դրամ/րոպե </p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}