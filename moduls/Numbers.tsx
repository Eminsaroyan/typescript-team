import Breadcrumb from "./Breadcrumb";
import EshopNav from "./Eshop-nav";
import Fut from "./Fut";
import Headerone from "./Headerone";
import Numbersmas from "./Numbersmas";


export default function () {
    return (
        <div>
            <Headerone />
            <EshopNav />
            <img src="https://www.telecomarmenia.am/images/product_category/1/17079960482229.png" alt="" className="w-full" />
            <Breadcrumb />
            <Numbersmas />
            <Fut />
        </div>
    )
}