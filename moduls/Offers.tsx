import Breadcrumb from "./Breadcrumb";
import EshopNav from "./Eshop-nav";
import Fut from "./Fut";
import Headerone from "./Headerone";
import Offersmas from "./Offersmas";

export default function () {
    return (
        <div>
            <Headerone />
            <EshopNav />
            <img src="https://www.telecomarmenia.am/images/product_category/1/17083691270186.png" alt="" className="w-[100%] ] object-top" />
            <Breadcrumb />
            <Offersmas />
            <Fut />
        </div>
    )
}