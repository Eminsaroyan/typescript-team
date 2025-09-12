import Accessorieslink from "./Accessorieslink";
import Breadcrumb from "./Breadcrumb";
import EshopNav from "./Eshop-nav";
import Fut from "./Fut";
import Headerone from "./Headerone";
import Storagefil from "./Soragefil";

export default function Storage(){
    return (
        <div>
            <Headerone />
            <EshopNav />
            <img src="https://www.telecomarmenia.am/images/product_category/1/1583994419298.jpeg" alt="" className="w-[100%]" />
            <Accessorieslink />
            <Breadcrumb />
            <Storagefil />
            <Fut />
        </div>
    )
}