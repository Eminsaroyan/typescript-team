import Headerone from "./Headerone";
import Biznesnav from "./Business-nav";
import Biznessakaginlink from "./Biznessakaginlink";
import Breadcrumb from "./Breadcrumb";
import Bizneshetvcharyinmas from "./Bizneshetvcharyinmas";
import Fut from "./Fut";

export default function () {
    return (
        <>
            <Headerone />
            <Biznesnav />
            <img src="https://www.telecomarmenia.am/images/menu/1/15774519405911.png" alt="" className="w-[100%]" />
            <Biznessakaginlink />
            <Breadcrumb />
            <Bizneshetvcharyinmas />
            <Fut />
        </>
    )
}