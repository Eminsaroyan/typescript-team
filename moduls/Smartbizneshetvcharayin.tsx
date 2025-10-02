import Headerone from "./Headerone";
import Biznesnav from "./Business-nav";
import Smartbizneslink from "./Smartbizneslink";
import Breadcrumb from "./Breadcrumb";
import Biznessmartmas from "./Smartbizneshetvcharayinmas";
import Fut from "./Fut";


export default function () {
    return (
        <>
            <Headerone />
            <Biznesnav />
            <img src="https://www.telecomarmenia.am/images/menu/1/15489419293961.png" alt="" className="w-[100%]" />
            <Smartbizneslink />
            <Breadcrumb />
            <Biznessmartmas />
            <Fut />
        </>
    )
}