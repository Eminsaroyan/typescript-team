import Headerone from "./Headerone";
import Biznesnav from "./Business-nav";
import Smartbizneslink from "./Smartbizneslink";
import Breadcrumb from "./Breadcrumb";


export default function () {
    return (
        <>
            <Headerone />
            <Biznesnav />
            <img src="https://www.telecomarmenia.am/images/menu/1/15489419293961.png" alt="" className="w-[100%]" />
            <Smartbizneslink />
            <Breadcrumb />
        </>
    )
}