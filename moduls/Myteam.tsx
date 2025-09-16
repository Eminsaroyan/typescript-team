import Fut from "./Fut";
import AppListByCollection from "./Gnahatakan";
import Havelvacimasin from "./Hvelvacimasin";
import Teamlink from "./Teamlink";
import Urishhavelvacnermer from "./Urishhavelvacnermer";

export default function () {
    return (
        <>
            <Teamlink />
            <AppListByCollection collectionName='Myteam' documentId="vFmVEQpMm9k623mVIW1s"/>
            <Havelvacimasin collectionName="Myteam" documentId="HHXPA27zlykCLB3EHw2h" />
            <Urishhavelvacnermer />
            <Fut />
        </>
    )
}