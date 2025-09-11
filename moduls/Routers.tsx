import Breadcrumb from "./Breadcrumb";
import Equipmentlink from "./Equipmentlink";
import EshopNav from "./Eshop-nav";
import Fut from "./Fut";
import Headerone from "./Headerone";
import Routersfiltr from "./Routersfiltr"


export default function Routers() {
    return (
        <div>
            <Headerone />
            <EshopNav />
            <img src="https://www.telecomarmenia.am/images/product_category/1/15682702504088.jpeg" alt="" className="w-[100%]" />
            <Equipmentlink />
            <Breadcrumb />
            <Routersfiltr />
            <Fut />
        </div>
    )
}