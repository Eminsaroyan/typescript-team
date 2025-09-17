import Breadcrumb from "./Breadcrumb";
import Fut from "./Fut";
import Navigation from "./Navbar";

export default function Vacharner() {
    return (
        <>
            <img src="https://www.telecomarmenia.am/images/menu/1/15795290481421.jpeg" alt="" className="w-[100%] " />
            <Navigation />
            <Breadcrumb />
            <h1 className="max-w-[1230px] text-[45px] font-[600] font-team m-auto mt-[30px] mb-[90px]">Վաճառքներ</h1>
            <Fut />
        </>
    )
}