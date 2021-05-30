import React, { useState, useEffect } from "react";
import PhonePriceListView from "./PhonePriceListView";
import { getProductList } from "./PhoneServices";

export default function PhonePriceList() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getPrices();
    }, []);

    const getPrices = () => {
        getProductList()
            .then((response) => {
                setProducts(response.data);
            })
            .catch((error) => { });
    }

    return (
        <div>
            <PhonePriceListView products={products} />
        </div>
    );

}