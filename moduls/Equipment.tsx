import Breadcrumb from "./Breadcrumb";
import Equipmentlink from "./Equipmentlink";
import EshopNav from "./Eshop-nav";
import Fut from "./Fut";
import Headerone from "./Headerone";

export default function (){
    return (
        <div>
            <Headerone />
            <EshopNav />
            <img src="https://www.telecomarmenia.am/images/product_category/1/15839958567605.jpeg" alt="" className="w-[100%]" />
            <Equipmentlink />
            <Breadcrumb />
            <Fut />
        </div>
    )
}