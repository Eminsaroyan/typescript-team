import { FaFacebookF, FaTwitter } from "react-icons/fa";

export default function Tackuytmas() {
    return (
        <div className="max-w-[1230px] mt-[30px] m-auto">
            <h1 className="text-[45px] mb-[30px] font-[900] font-team">Ծածկույթ</h1>
            <div className="mb-[30px] leading-[1.5]">
                <p className="w-[900px] text-[20px] mb-[20px] font-[300] font-team">Ամրակցված կապի ծառայություններով ապահովված բնակավայրերի ցանկի, կիրառվող տեխնոլոգիաների եւ մատուցվող ծառայությունների վերաբերյալ մանրամասն տեղեկատվությունը առ 01.01.2025թ. դրությամբ, հասանելի է այստեղ:</p>
                <p className="w-[950px] text-[20px] mb-[20px] font-[300] font-team"> Շարժական կապի ծածկույթով ապահովված բնակավայրերի ցանկի, կիրառվող տեխնոլոգիաների եւ մատուցվող ծառայությունների, ինչպես նաև ծակույթ չունեցող բնակավայրերի վերաբերյալ մանրամասն տեղեկատվությունը առ 01.01.2025թ. դրությամբ այստեղ:</p>
                <p className="w-[920px] text-[20px] mb-[20px] font-[300] font-team">Միջպետական նշանակության ավտոմոբիլային ճանապարհների (մայրուղիներ) հատվածներում կիրառվող շարժական բջջային կապի տեխնոլոգիաների (մատուցվող ծառայությունների) հասանելիության վերաբերյալ տեղեկատվությունը առ 01.01.2025թ. դրությամբ այստեղ:</p>
                <h4 className="mb-[16px] max-w-[1230px] border border-[#666e75] m-auto"></h4>
            </div>
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