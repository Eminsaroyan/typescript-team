import Breadcrumb from "./Breadcrumb";
import Equipmentlink from "./Equipmentlink";
import EshopNav from "./Eshop-nav";
import Fut from "./Fut";
import Headerone from "./Headerone";
import Laptopsfil from "./Laptopsfil"

export default function Laptops() {
    return (
        <div>
            <Headerone />
            <EshopNav />
            <img src="https://www.telecomarmenia.am/images/product_category/1/15682702504088.jpeg" alt="" className="w-[100%]" />
            <Equipmentlink />
            <Breadcrumb />
            <Laptopsfil />
            <Fut />
        </div>
    )
}