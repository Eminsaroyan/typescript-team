import Biznesfootregistor from "./Biznesfootregistor";

export default function VirtualAHK() {
    return (
        <div>
            <Biznesfootregistor />
            <div className="text-white py-[60px]"
                style={{
                    background: `#143046 url(https://www.telecomarmenia.am/img/pattern-b2b.png) no-repeat center bottom`,
                }}>
                <div className="mx-auto max-w-[1260px] px-[20px] text-center text-[#fff] font-[Team-Regular,Helvetica,Arial,sans-serif] uppercase">
                    <h1 className="mb-[60px] text-[48px]">Վիրտուալ ԱՀԿ</h1>

                    <div className="flex justify-center mb-[65px] items-start">
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
                            <div key={i} className="max-w-[259px] flex flex-col items-center text-center mr-[36px]">
                                <img src={src} alt={alt} className="w-max-[258.944px] mb-[22px]" />
                                <p>{text}</p>
                            </div>
                        ))}
                    </div>

                    <button className="box-border h-[44px] leading-[44px] cursor-pointer min-w-[288px] px-[20px] text-center rounded-[30px] bg-white text-[#F04D4D]">
                        Մանրամասն
                    </button>
                </div>
            </div>
        </div>
    );
}
