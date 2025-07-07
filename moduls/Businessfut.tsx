import Biznesfootregistor from "./Biznesfootregistor";

export default function VirtualAHK() {
    return (
        <div>
            <Biznesfootregistor />
            <div className="flex flex-col justify-center items-center bg-[#143046] pt-[110px] pb-[50px] text-[#ffffff]">
                <h1 className="mb-[100px] text-[60px]">Վիրտուալ ԱՀԿ</h1>

                <div className="flex mb-[100px] items-start">
                    {[
                        {
                            src: "https://www.telecomarmenia.am/img/virtual-icon-1.png",
                            alt: "Զանգերի բաշխում",
                            text: "Զանգերի բաշխում. ոչ մի բաց թողնված զանգ",
                        },
                        {
                            src: "https://www.telecomarmenia.am/img/virtual-icon-2.png",
                            alt: "Զանգերի ձայնագրություն",
                            text: "Հեռախոսազանգերի ձայնագրություն և զանգերի վիճակագրություն",
                        },
                        {
                            src: "https://www.telecomarmenia.am/img/virtual-icon-3.png",
                            alt: "Ձայնային օգնական",
                            text: "Ձայնային օգնական հաճախորդների համար",
                        },
                    ].map(({ src, alt, text }, i) => (
                        <div key={i} className="w-[250px] flex flex-col items-center text-center mr-[30px]">
                            <img src={src} alt={alt} className="w-full mb-[20px]" />
                            <p>{text}</p>
                        </div>
                    ))}
                </div>

                <button className="bg-[#FF0000] text-[#ffffff] pr-[120px] pl-[120px] pt-[15px] pb-[15px] border-none rounded-[10px]">
                    Մանրամասն
                </button>
            </div>
        </div>
    );
}
