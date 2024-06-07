"use client";
import mapData from "@/data/mapData";
import {IranMap as IranMap2} from "react-iran-map";

export default function IranMap() {
    return <IranMap2
        data={mapData}
        colorRange='30, 70, 181'
        width={600}
        textColor='#000'
        defaultSelectedProvince='tehran'
        deactiveProvinceColor='#eee'
        selectedProvinceColor='#3bcc6d'
        tooltipTitle='تعداد:'
        // selectProvinceHandler={selectProvinceHandler}
    />;
}