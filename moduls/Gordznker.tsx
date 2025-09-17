import Breadcrumb from "./Breadcrumb";
import Fut from "./Fut";
import Navigation from "./Navbar";

export default function  Gordznker() {
    return (
        <>
            <img src="https://www.telecomarmenia.am/images/menu/1/15795290481421.jpeg" alt="" className="w-[100%] " />
            <Navigation />
            <Breadcrumb />
            <h1 className="max-w-[1230px] text-[45px] font-[600] font-team m-auto mt-[30px] mb-[90px]">Գործընկերներ</h1>
            <Fut />
        </>
    )
}